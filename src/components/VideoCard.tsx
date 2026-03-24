import { Play, Calendar } from "lucide-react";

interface VideoCardProps {
  title: string;
  youtubeId: string;
  youtubeUrl: string;
  updatedOn: string;
}

const VideoCard = ({ title, youtubeId, youtubeUrl, updatedOn }: VideoCardProps) => {
  const thumbnail = youtubeId
    ? `https://img.youtube.com/vi/${youtubeId}/mqdefault.jpg`
    : "";

  return (
    <div className="group [perspective:1000px]">
      <a
        href={youtubeUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-xl border border-border bg-card overflow-hidden transition-all duration-500 ease-out shadow-md hover:shadow-2xl hover:shadow-primary/15 [transform-style:preserve-3d] group-hover:[transform:rotateY(-4deg)_rotateX(3deg)_scale(1.03)]"
      >
        {/* Thumbnail */}
        <div className="relative aspect-video bg-muted overflow-hidden">
          {thumbnail ? (
            <img
              src={thumbnail}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              loading="lazy"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-muted">
              <Play className="w-10 h-10 text-muted-foreground/40" />
            </div>
          )}

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Play overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-xl shadow-primary/30 opacity-80 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-500">
              <Play className="w-6 h-6 text-primary-foreground ml-0.5" fill="currentColor" />
            </div>
          </div>

          {/* YouTube badge */}
          <div className="absolute top-2 right-2 bg-destructive text-destructive-foreground text-[10px] font-bold px-1.5 py-0.5 rounded shadow-md">
            ▶ YouTube
          </div>

          {/* Shine effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        </div>

        {/* Info with 3D lifted footer */}
        <div className="p-4 bg-card relative">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <h4 className="text-sm font-semibold text-foreground line-clamp-2 mb-2 group-hover:text-primary transition-colors duration-300">
            {title}
          </h4>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <Calendar className="w-3 h-3" />
            {updatedOn}
          </div>
        </div>
      </a>
    </div>
  );
};

export default VideoCard;
