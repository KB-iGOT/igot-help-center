import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SupportCallCTA from "@/components/SupportCallCTA";
import { useNavigate } from "react-router-dom";
import { categories } from "@/data/features";
import { useVideoCatalog, useDocumentCatalog } from "@/hooks/use-content-catalog";
import VideoCard from "@/components/VideoCard";
import DocumentCard from "@/components/DocumentCard";
import CategorySidebar from "@/components/CategorySidebar";

import { Building2, GraduationCap, Search, Video, BookOpen, FileText, Monitor, HelpCircle, ChevronDown, Loader2, X } from "lucide-react";
import { usePdfContentSearch } from "@/hooks/use-pdf-search-index";
import heroBg from "@/assets/hero-bg.jpg";
import { faqData, faqCategories } from "@/data/faqs";

type ContentType = "all" | "video" | "howto" | "faq";

const contentTypes = [
  { id: "all" as ContentType, label: "All Content", icon: BookOpen },
  { id: "video" as ContentType, label: "Video Tutorials", icon: Video },
  { id: "howto" as ContentType, label: "How-to Guides", icon: FileText },
  { id: "faq" as ContentType, label: "FAQs", icon: HelpCircle },
];

const Index = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"mdo" | "learner" | "cbp">("learner");
  const [contentType, setContentType] = useState<ContentType>("all");
  const [search, setSearch] = useState("");
  const [activeFaqCategory, setActiveFaqCategory] = useState<string | null>(null);
  const [activeVideoCategory, setActiveVideoCategory] = useState<string | null>(null);
  const [activeDocCategory, setActiveDocCategory] = useState<string | null>(null);
  const [sectionsOpen, setSectionsOpen] = useState<Record<string, boolean>>({
    videos: true,
    guides: true,
    faqs: true,
  });

  // Dynamic catalogs — driven by JSON files, no code changes needed to add content
  const { videos: videoTutorials, categories: videoCategories } = useVideoCatalog();
  const { documents: kbDocuments, categories: docCategories } = useDocumentCatalog();
  const { searchContent: searchPdfContent } = usePdfContentSearch(kbDocuments);
  const [pdfContentMatches, setPdfContentMatches] = useState<Set<string>>(new Set());
  const [pdfSearching, setPdfSearching] = useState(false);

  const toggleSection = (key: string) =>
    setSectionsOpen((prev) => ({ ...prev, [key]: !prev[key] }));

  const filteredCategories = useMemo(() => {
    let cats = search.trim()
      ? categories
      : categories.filter((c) => c.tab === activeTab);
    if (search.trim()) {
      const q = search.toLowerCase();
      cats = cats
        .map((cat) => ({
          ...cat,
          features: cat.features.filter(
            (f) =>
              f.title.toLowerCase().includes(q) ||
              f.titleHi.includes(q) ||
              f.description.toLowerCase().includes(q) ||
              cat.title.toLowerCase().includes(q),
          ),
        }))
        .filter((cat) => cat.features.length > 0);
    }
    if (contentType === "howto") {
      cats = cats
        .map((cat) => ({
          ...cat,
          features: cat.features.filter((f) => f.contentType === "howto"),
        }))
        .filter((cat) => cat.features.length > 0);
    }
    return cats;
  }, [activeTab, search, contentType]);

  const filteredVideos = useMemo(() => {
    let vids = search.trim() ? videoTutorials : videoTutorials.filter((v) => v.tab === activeTab);
    if (activeVideoCategory) {
      vids = vids.filter((v) => v.category === activeVideoCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      vids = vids.filter((v) => v.title.toLowerCase().includes(q) || v.category.toLowerCase().includes(q));
    }
    return vids;
  }, [activeTab, search, activeVideoCategory, videoTutorials]);

  const tabVideos = useMemo(() => videoTutorials.filter((v) => v.tab === activeTab), [activeTab, videoTutorials]);

  // Debounced on-demand PDF content search
  useEffect(() => {
    if (!search.trim()) {
      setPdfContentMatches(new Set());
      setPdfSearching(false);
      return;
    }
    setPdfSearching(true);
    const timeout = setTimeout(() => {
      searchPdfContent(search).then((matches) => {
        setPdfContentMatches(matches);
        setPdfSearching(false);
      });
    }, 500); // debounce 500ms
    return () => clearTimeout(timeout);
  }, [search, searchPdfContent]);

  const filteredDocs = useMemo(() => {
    let docs = search.trim() ? kbDocuments : kbDocuments.filter((d) => d.tab === activeTab);
    if (activeDocCategory) {
      docs = docs.filter((d) => d.category === activeDocCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      docs = docs.filter(
        (d) =>
          d.title.toLowerCase().includes(q) ||
          (d.titleHi && d.titleHi.includes(q)) ||
          d.description.toLowerCase().includes(q) ||
          d.category.toLowerCase().includes(q) ||
          d.tab.toLowerCase().includes(q) ||
          pdfContentMatches.has(d.id)
      );
    }
    return docs;
  }, [activeTab, search, activeDocCategory, kbDocuments, pdfContentMatches]);

  const tabDocs = useMemo(() => kbDocuments.filter((d) => d.tab === activeTab), [activeTab, kbDocuments]);

  const showVideos = contentType === "all" || contentType === "video";
  const showDocs = contentType === "all" || contentType === "howto";
  const showGuides = contentType === "all" || contentType === "howto";
  const showFaq = contentType === "all" || contentType === "faq";

  const filteredFaqs = useMemo(() => {
    let faqs = faqData;
    if (!search.trim()) {
      faqs = faqs.filter((f) => f.tab === activeTab);
    }
    if (activeFaqCategory) {
      faqs = faqs.filter((f) => f.faqCategory === activeFaqCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      faqs = faqs.filter((f) => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q) || f.faqCategory.toLowerCase().includes(q));
    }
    return faqs;
  }, [activeTab, activeFaqCategory, search]);

  return (
    <div className="min-h-screen">
      {/* Hero with search */}
      <section className="relative overflow-hidden h-[320px] flex items-end justify-center pb-10">
        <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-background" />
        <div className="relative z-10 text-center px-6 w-full max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
              Welcome to iGOT Help Center
            </h1>
            <p className="text-primary-foreground/80 text-sm md:text-base mb-6">
              Search guides, video tutorials, and documentation
            </p>
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search articles, videos, guides & document content..."
                className="w-full h-12 pl-12 pr-12 rounded-xl bg-card text-foreground text-sm placeholder:text-muted-foreground border border-border shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/40"
              />
              {search.trim() && !pdfSearching && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-0.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
              {pdfSearching && search.trim() && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2">
                  <Loader2 className="w-4 h-4 text-primary animate-spin" />
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tab bar */}
      <div className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-2 sm:px-6">
          <div className="flex items-center justify-start sm:justify-center gap-0 overflow-x-auto scrollbar-hide">
            {[
              { id: "learner" as const, label: "Learner", icon: GraduationCap },
              { id: "mdo" as const, label: "MDO Leader/Admin", icon: Building2 },
              { id: "cbp" as const, label: "Content Building Platform", icon: Monitor },
            ].map((t) => {
              const TIcon = t.icon;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-3.5 text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors ${
                    activeTab === t.id ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <TIcon className="w-4 h-4" />
                  {t.label}
                  {activeTab === t.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary rounded-t-full"
                    />
                  )}
                </button>
              );
            })}
          </div>
          <div className="flex items-center justify-center gap-2 py-3 flex-wrap">
            {contentTypes.filter((ct) => ct.id !== "faq" || faqData.some((f) => f.tab === activeTab)).map((ct) => {
              const CTIcon = ct.icon;
              const isActive = contentType === ct.id;
              return (
                <button
                  key={ct.id}
                  onClick={() => setContentType(ct.id)}
                  className={`relative flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full whitespace-nowrap transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                      : "bg-muted/60 text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <CTIcon className="w-3.5 h-3.5" />
                  {ct.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-3 sm:px-6 py-6 sm:py-10 space-y-8 sm:space-y-12">
        {/* Video Tutorials Section */}
        {showVideos && filteredVideos.length > 0 && (
          <section className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
            <button
              onClick={() => toggleSection("videos")}
              className="w-full flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10 transition-colors"
            >
              <Video className="w-5 h-5 text-primary" />
              <h2 className="font-display text-lg font-bold text-foreground flex-1 text-left">Video Tutorials</h2>
              <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium mr-2">
                {filteredVideos.length} videos
              </span>
              <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${sectionsOpen.videos ? "" : "-rotate-90"}`} />
            </button>
            <AnimatePresence initial={false}>
              {sectionsOpen.videos && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8 p-4 sm:p-6">
                    <CategorySidebar
                      categories={videoCategories}
                      activeCategory={activeVideoCategory}
                      onSelect={setActiveVideoCategory}
                      getCategoryCount={(id) => tabVideos.filter((v) => v.category === id).length}
                      title="Browse by Topic"
                    />
                    <div className="md:hidden w-full">
                      <select
                        value={activeVideoCategory || ""}
                        onChange={(e) => setActiveVideoCategory(e.target.value || null)}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-card text-foreground"
                      >
                        <option value="">All Categories</option>
                        {videoCategories.map((cat) => (
                          <option key={cat.id} value={cat.id}>{cat.label}</option>
                        ))}
                      </select>
                    </div>
                    <div className="flex-1">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                        {filteredVideos.map((v, i) => (
                          <motion.div
                            key={v.id}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.04 }}
                          >
                            <VideoCard
                              title={v.title}
                              youtubeId={v.youtubeId}
                              youtubeUrl={v.youtubeUrl}
                              updatedOn={v.updatedOn}
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        )}

        {/* How-to Guides */}
        {showGuides && filteredDocs.length > 0 && (
          <section className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
            <button
              onClick={() => toggleSection("guides")}
              className="w-full flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10 transition-colors"
            >
              <FileText className="w-5 h-5 text-primary" />
              <h2 className="font-display text-lg font-bold text-foreground flex-1 text-left">How-to Guides</h2>
              <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium mr-2">
                {filteredDocs.length} guides
              </span>
              <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${sectionsOpen.guides ? "" : "-rotate-90"}`} />
            </button>
            <AnimatePresence initial={false}>
              {sectionsOpen.guides && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8 p-4 sm:p-6">
                    <CategorySidebar
                      categories={docCategories}
                      activeCategory={activeDocCategory}
                      onSelect={setActiveDocCategory}
                      getCategoryCount={(id) => tabDocs.filter((d) => d.category === id).length}
                      title="Browse by Topic"
                    />
                    <div className="md:hidden w-full">
                      <select
                        value={activeDocCategory || ""}
                        onChange={(e) => setActiveDocCategory(e.target.value || null)}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-card text-foreground"
                      >
                        <option value="">All Categories</option>
                        {docCategories.map((cat) => (
                          <option key={cat.id} value={cat.id}>{cat.label}</option>
                        ))}
                      </select>
                    </div>
                    <div className="flex-1">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                        {filteredDocs.map((doc, i) => (
                          <motion.div
                            key={doc.id}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: i * 0.04 }}
                          >
                            <DocumentCard
                              id={doc.id}
                              title={doc.title}
                              titleHi={doc.titleHi}
                              description={doc.description}
                              category={doc.category}
                              thumbnail={doc.thumbnail}
                              pdfFile={doc.pdfFile}
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        )}

        {/* Empty states */}
        {showVideos && filteredVideos.length === 0 && !search.trim() && (
          <div className="text-center py-12 text-muted-foreground">
            <Video className="w-10 h-10 mx-auto mb-3 opacity-30" />
            <p className="text-base font-medium text-foreground/70">No video tutorials available yet</p>
            <p className="text-sm mt-1">
              We're working on adding video content for this section. Please check back soon!
            </p>
          </div>
        )}

        {showGuides && filteredDocs.length === 0 && !search.trim() && (
          <div className="text-center py-12 text-muted-foreground">
            <FileText className="w-10 h-10 mx-auto mb-3 opacity-30" />
            <p className="text-base font-medium text-foreground/70">No how-to guides available yet</p>
            <p className="text-sm mt-1">
              Step-by-step guides for this section will be added shortly. Thank you for your patience!
            </p>
          </div>
        )}

        {/* FAQs Section */}
        {showFaq && faqData.some((f) => f.tab === activeTab) && (
          <section className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
            <button
              onClick={() => toggleSection("faqs")}
              className="w-full flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10 transition-colors"
            >
              <HelpCircle className="w-5 h-5 text-primary" />
              <h2 className="font-display text-lg font-bold text-foreground flex-1 text-left">Frequently Asked Questions</h2>
              <span className="text-xs bg-primary/10 text-primary px-2.5 py-1 rounded-full font-medium mr-2">
                {filteredFaqs.length} FAQs
              </span>
              <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${sectionsOpen.faqs ? "" : "-rotate-90"}`} />
            </button>
            <AnimatePresence initial={false}>
              {sectionsOpen.faqs && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row gap-4 md:gap-8 p-4 sm:p-6">
                    <CategorySidebar
                      categories={faqCategories}
                      activeCategory={activeFaqCategory}
                      onSelect={setActiveFaqCategory}
                      getCategoryCount={(id) => faqData.filter((f) => f.tab === activeTab && f.faqCategory === id).length}
                      title="Browse by Topic"
                    />
                    <div className="md:hidden w-full">
                      <select
                        value={activeFaqCategory || ""}
                        onChange={(e) => setActiveFaqCategory(e.target.value || null)}
                        className="w-full px-3 py-2 text-sm rounded-lg border border-border bg-card text-foreground"
                      >
                        <option value="">All Categories</option>
                        {faqCategories.map((cat) => (
                          <option key={cat.id} value={cat.id}>{cat.label}</option>
                        ))}
                      </select>
                    </div>
                    <div className="flex-1 space-y-3">
                      {filteredFaqs.length === 0 && (
                        <div className="text-center py-8 text-muted-foreground">
                          <HelpCircle className="w-8 h-8 mx-auto mb-2 opacity-30" />
                          <p className="text-sm">No FAQs match your search.</p>
                        </div>
                      )}
                      {filteredFaqs.map((faq, i) => (
                        <motion.details
                          key={faq.id}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2, delay: i * 0.03 }}
                          className="group rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                        >
                          <summary className="flex items-start gap-3 px-5 py-4 cursor-pointer list-none hover:bg-muted/40 transition-colors">
                            <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-open:bg-primary/20 transition-colors">
                              <ChevronDown className="w-3.5 h-3.5 text-primary transition-transform duration-200 group-open:rotate-180" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="font-sans text-sm font-semibold text-foreground leading-snug">{faq.question}</p>
                              <span className="inline-block mt-1.5 text-[11px] font-medium text-primary/70 bg-primary/5 px-2 py-0.5 rounded-full">{faq.faqCategory}</span>
                            </div>
                          </summary>
                          <div className="px-5 pb-5 pl-[3.75rem] border-t border-border/50">
                            <p className="font-sans text-sm text-muted-foreground leading-relaxed whitespace-pre-line pt-3">{faq.answer}</p>
                          </div>
                        </motion.details>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </section>
        )}

        {/* Support CTA */}
        <SupportCallCTA />
      </main>
    </div>
  );
};

export default Index;
