import React from "react";
import {
  Globe, LogIn, UserCircle, Award, ClipboardCheck, Link2,
  Smartphone, ShieldCheck, Pencil, LifeBuoy, Wrench, BookOpen,
  HelpCircle, ChevronRight,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  globe: Globe, login: LogIn, user: UserCircle, award: Award,
  clipboard: ClipboardCheck, link: Link2, smartphone: Smartphone,
  shield: ShieldCheck, pencil: Pencil, lifebuoy: LifeBuoy, wrench: Wrench,
};

interface CategoryItem {
  id: string;
  label: string;
  icon: string;
}

interface CategorySidebarProps {
  categories: CategoryItem[];
  activeCategory: string | null;
  onSelect: (id: string | null) => void;
  getCategoryCount: (id: string) => number;
  title?: string;
}

const CategorySidebar: React.FC<CategorySidebarProps> = ({
  categories,
  activeCategory,
  onSelect,
  getCategoryCount,
  title = "Browse by Topic",
}) => {
  return (
    <aside className="w-72 shrink-0 hidden md:block">
      <nav>
        <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-sm">
          <div className="px-4 py-3 bg-gradient-to-r from-primary/10 to-accent/10 border-b border-border">
            <p className="text-xs font-bold text-foreground uppercase tracking-wider">{title}</p>
          </div>
          <div className="p-2 space-y-0.5 max-h-[60vh] overflow-y-auto">
            <button
              onClick={() => onSelect(null)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all group ${
                activeCategory === null
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "text-muted-foreground hover:bg-muted/80 hover:text-foreground"
              }`}
            >
              <span className={`flex items-center justify-center w-7 h-7 rounded-lg text-xs font-bold shrink-0 ${
                activeCategory === null ? "bg-primary-foreground/20" : "bg-muted"
              }`}>
                <BookOpen className="w-3.5 h-3.5" />
              </span>
              <span className="text-sm font-semibold flex-1">All Categories</span>
              <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${activeCategory === null ? "opacity-100" : "opacity-0 group-hover:opacity-50"}`} />
            </button>
            {categories.map((cat) => {
              const CatIcon = iconMap[cat.icon] || HelpCircle;
              const isActive = activeCategory === cat.id;
              const count = getCategoryCount(cat.id);
              if (count === 0) return null;
              return (
                <button
                  key={cat.id}
                  onClick={() => onSelect(cat.id)}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-left transition-all group ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                      : "text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                  }`}
                >
                  <span className={`flex items-center justify-center w-7 h-7 rounded-lg shrink-0 ${
                    isActive ? "bg-primary-foreground/20" : "bg-muted"
                  }`}>
                    <CatIcon className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-sm font-medium flex-1 leading-tight">{cat.label}</span>
                  <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full shrink-0 ${
                    isActive ? "bg-primary-foreground/20" : "bg-muted text-muted-foreground"
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </nav>
    </aside>
  );
};

export default CategorySidebar;
