import { useCallback } from "react";
import type { DocCatalogEntry } from "./use-content-catalog";

/**
 * Extracts all text from a PDF on-demand using pdf.js.
 */
async function extractPdfText(pdfUrl: string): Promise<string> {
  const pdfjsLib = await import("pdfjs-dist");

  pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
  ).toString();

  try {
    const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
    const pages: string[] = [];

    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const content = await page.getTextContent();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const text = content.items.map((item: any) => item.str).join(" ");
      pages.push(text);
    }

    return pages.join("\n").toLowerCase();
  } catch {
    return "";
  }
}

// Simple in-memory cache so repeated searches don't re-parse PDFs
const textCache = new Map<string, string>();

/**
 * On-demand PDF content search — no upfront indexing.
 * Extracts text from each document's PDF only when a search is performed,
 * caches results for subsequent searches.
 */
export function usePdfContentSearch(documents: DocCatalogEntry[]) {
  const searchContent = useCallback(
    async (query: string): Promise<Set<string>> => {
      if (!query.trim()) return new Set();

      const q = query.toLowerCase();
      const matches = new Set<string>();

      // Process all docs in parallel (batches of 4)
      const batchSize = 4;
      for (let i = 0; i < documents.length; i += batchSize) {
        const batch = documents.slice(i, i + batchSize);
        const results = await Promise.all(
          batch.map(async (doc) => {
            // Use cache if available
            let text = textCache.get(doc.id);
            if (text === undefined) {
              text = await extractPdfText(doc.pdfFile);
              textCache.set(doc.id, text);
            }
            return { id: doc.id, match: text.includes(q) };
          })
        );
        results.forEach((r) => {
          if (r.match) matches.add(r.id);
        });
      }

      return matches;
    },
    [documents]
  );

  return { searchContent };
}
