import { FileText, Eye } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface DocumentCardProps {
  id: string;
  title: string;
  titleHi: string;
  description: string;
  category: string;
  thumbnail: string;
  pdfFile: string;
}

const DocumentCard = ({ id, title, titleHi, description, category, thumbnail }: DocumentCardProps) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(`/doc/${id}`)}
      className="group text-left rounded-xl border border-border bg-card overflow-hidden hover:shadow-lg transition-all hover:scale-[1.01] w-full"
    >
      <div className="relative aspect-[4/3] bg-muted overflow-hidden">
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors flex items-center justify-center">
          <div className="w-10 h-10 rounded-full bg-card/90 flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-opacity">
            <Eye className="w-4 h-4 text-foreground" />
          </div>
        </div>
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-semibold px-2 py-1 rounded-md bg-card/90 text-foreground shadow-sm backdrop-blur-sm">
            {category}
          </span>
        </div>
        <div className="absolute bottom-3 right-3">
          <span className="flex items-center gap-1 text-[10px] font-medium px-2 py-1 rounded-md bg-card/90 text-muted-foreground shadow-sm backdrop-blur-sm">
            <FileText className="w-3 h-3" />
            PDF
          </span>
        </div>
      </div>
      <div className="p-4">
        <h4 className="text-sm font-semibold text-foreground line-clamp-2 mb-0.5 group-hover:text-primary transition-colors">
          {title}
        </h4>
        <p className="text-xs text-muted-foreground mb-2">{titleHi}</p>
        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">{description}</p>
      </div>
    </button>
  );
};

export default DocumentCard;
