import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Download, ExternalLink, FileText } from "lucide-react";
import { useDocumentCatalog, type DocCatalogEntry } from "@/hooks/use-content-catalog";
import { Button } from "@/components/ui/button";
import SupportCallCTA from "@/components/SupportCallCTA";

const DocumentViewer = () => {
  const { docId } = useParams();
  const navigate = useNavigate();
  const { documents, loading: catalogLoading } = useDocumentCatalog();
  const [pdfExists, setPdfExists] = useState<boolean | null>(null);

  const doc: DocCatalogEntry | undefined = documents.find((d) => d.id === docId);

  useEffect(() => {
    if (!doc) return;

    let cancelled = false;

    fetch(doc.pdfFile, { method: "GET" })
      .then((res) => {
        const contentType = (res.headers.get("content-type") || "").toLowerCase();
        const looksLikePdf = res.ok && (contentType.includes("pdf") || contentType.includes("octet-stream"));

        if (!cancelled) {
          setPdfExists(looksLikePdf);
        }
      })
      .catch(() => {
        if (!cancelled) {
          setPdfExists(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [doc]);

  if (catalogLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-sm text-muted-foreground animate-pulse">Loading…</div>
      </div>
    );
  }

  if (!doc) {
    return (
      <div className="flex items-center justify-center h-full py-20">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-foreground mb-2">Document Not Found</h2>
          <button onClick={() => navigate("/")} className="text-primary underline">Go back</button>
        </div>
      </div>
    );
  }

  const fallbackPages = doc.fallbackPages && doc.fallbackFolder
    ? Array.from({ length: doc.fallbackPages }, (_, i) => `${doc.fallbackFolder}/page-${i + 1}.jpg`)
    : [];

  return (
    <div>
      <div className="flex flex-col h-screen">
        {/* Top bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between gap-3 px-4 sm:px-6 py-3 border-b border-border bg-card"
        >
          <div className="flex items-center gap-3 min-w-0">
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Back</span>
            </button>
            <div className="w-px h-5 bg-border flex-shrink-0" />
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                <FileText className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0">
                <h1 className="text-sm font-semibold text-foreground truncate">{doc.title}</h1>
                <p className="text-[10px] text-muted-foreground truncate">{doc.category}</p>
              </div>
            </div>
          </div>
          {pdfExists && (
            <div className="flex items-center gap-2 flex-shrink-0">
              <Button variant="outline" size="sm" asChild className="text-xs">
                <a href={doc.pdfFile} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Open</span>
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild className="text-xs">
                <a href={doc.pdfFile} download>
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Download</span>
                </a>
              </Button>
            </div>
          )}
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="flex-1 bg-muted overflow-auto"
        >
          {pdfExists === null ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-sm text-muted-foreground animate-pulse">Loading document…</div>
            </div>
          ) : pdfExists ? (
            <iframe
              src={doc.pdfFile}
              title={doc.title}
              className="w-full h-full border-0"
            />
          ) : (
            <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-muted-foreground">{fallbackPages.length} pages</span>
              </div>
              {fallbackPages.map((page, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="rounded-xl overflow-hidden border border-border shadow-sm bg-card"
                >
                  <div className="bg-muted/50 px-4 py-2 border-b border-border">
                    <span className="text-xs font-medium text-muted-foreground">
                      Page {i + 1} of {fallbackPages.length}
                    </span>
                  </div>
                  <img
                    src={page}
                    alt={`${doc.title} — Page ${i + 1}`}
                    className="w-full h-auto"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Support CTA — outside the viewport-height container */}
      <SupportCallCTA />
    </div>
  );
};

export default DocumentViewer;
