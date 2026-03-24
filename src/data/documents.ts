/**
 * @deprecated — Documents are now loaded dynamically from /content/documents/catalog.json
 * This file is kept only for backward compatibility with features.ts references.
 * To add/edit documents, update public/content/documents/catalog.json instead.
 */
export interface DocCategory {
  id: string;
  label: string;
  icon: string;
}

export const docCategories: DocCategory[] = [];

export interface KBDocument {
  id: string;
  title: string;
  titleHi: string;
  description: string;
  icon: any;
  category: string;
  tab: "mdo" | "learner" | "cbp";
  thumbnail: string;
  pdfFile: string;
  pages: string[];
}

export const kbDocuments: KBDocument[] = [];
