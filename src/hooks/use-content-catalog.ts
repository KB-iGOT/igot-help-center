import { useState, useEffect } from "react";

/**
 * Types for the document catalog (public/content/documents/catalog.json)
 */
export interface DocCategoryCatalog {
  id: string;
  label: string;
  icon: string;
}

export interface DocCatalogEntry {
  id: string;
  title: string;
  titleHi: string;
  description: string;
  icon: string;
  category: string;
  tab: "mdo" | "learner" | "cbp";
  thumbnail: string;
  pdfFile: string;
  fallbackPages?: number;
  fallbackFolder?: string;
}

interface DocCatalog {
  categories: DocCategoryCatalog[];
  documents: DocCatalogEntry[];
}

/**
 * Types for the video catalog (public/content/videos/catalog.json)
 */
export interface VideoCategoryCatalog {
  id: string;
  label: string;
  icon: string;
}

export interface VideoCatalogEntry {
  id: string;
  title: string;
  youtubeUrl: string;
  youtubeId: string;
  updatedOn: string;
  tab: "mdo" | "learner" | "cbp";
  category: string;
}

interface VideoCatalog {
  categories: VideoCategoryCatalog[];
  videos: VideoCatalogEntry[];
}

function extractYouTubeId(url: string): string {
  const match = url.match(/(?:youtu\.be\/|youtube\.com\/watch\?v=)([^?&]+)/);
  return match ? match[1] : "";
}

/**
 * Fetches document catalog from /content/documents/catalog.json
 * No code changes needed to add new documents — just edit catalog.json
 */
export function useDocumentCatalog() {
  const [documents, setDocuments] = useState<DocCatalogEntry[]>([]);
  const [categories, setCategories] = useState<DocCategoryCatalog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/content/documents/catalog.json")
      .then((res) => res.json())
      .then((data: DocCatalog) => {
        setCategories(data.categories || []);
        setDocuments(data.documents || []);
      })
      .catch((err) => console.error("Failed to load document catalog:", err))
      .finally(() => setLoading(false));
  }, []);

  return { documents, categories, loading };
}

/**
 * Fetches video catalog from /content/videos/catalog.json
 * No code changes needed to add new videos — just edit catalog.json
 */
export function useVideoCatalog() {
  const [videos, setVideos] = useState<VideoCatalogEntry[]>([]);
  const [categories, setCategories] = useState<VideoCategoryCatalog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/content/videos/catalog.json")
      .then((res) => res.json())
      .then((data: VideoCatalog) => {
        setCategories(data.categories || []);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const parsed = (data.videos || []).map((v: any, i: number) => ({
          id: `video-${i}`,
          title: v.title,
          youtubeUrl: v.url || "",
          youtubeId: extractYouTubeId(v.url || ""),
          updatedOn: v.date || "",
          tab: v.tab,
          category: v.category,
        }));
        setVideos(parsed);
      })
      .catch((err) => console.error("Failed to load video catalog:", err))
      .finally(() => setLoading(false));
  }, []);

  return { videos, categories, loading };
}
