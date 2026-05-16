import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "./SocialIcons";
import type { Project } from "../data/portfolio";

type MediaItem = { src: string; type: "image" | "video" };

function isVideo(src: string) {
  return /\.(mp4|webm|ogg|mov)(\?|$)/i.test(src);
}

function MediaElement({
  item,
  title,
  index,
  active,
}: {
  item: MediaItem;
  title: string;
  index: number;
  active: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (item.type !== "video") return;
    if (!active) {
      videoRef.current?.pause();
    }
  }, [active, item.type]);

  const style: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "contain",   // ← was "cover"; contain prevents portrait crop
    transition: "opacity 0.7s",
    opacity: active ? 1 : 0,
  };

  if (item.type === "video") {
    return (
      <video
        ref={videoRef}
        src={item.src}
        style={style}
        muted
        playsInline
        preload="metadata"
        controls
        aria-label={`${title} video preview ${index + 1}`}
      />
    );
  }

  return (
    <img
      src={item.src}
      alt={`${title} preview ${index + 1}`}
      loading="lazy"
      style={style}
    />
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].screenX;

    const diff = touchStartX.current - touchEndX.current;

    // Swipe left
    if (diff > 50) {
      setIdx((prev) => (prev + 1) % mediaItems.length);
    }

    // Swipe right
    if (diff < -50) {
      setIdx((prev) =>
        prev === 0 ? mediaItems.length - 1 : prev - 1
      );
    }
  };

  // Normalise the media array → typed items
  const mediaItems: MediaItem[] = project.media.map((src) => ({
    src,
    type: isVideo(src) ? "video" : "image",
  }));

  // Detect portrait screenshots so the container grows tall enough
  const hasPortrait = mediaItems.some((m) => {
    // if (m.type !== "image") return false;
    // Heuristic: filenames containing common portrait patterns
    return /portrait|mobile|phone|screen|screenshot/i.test(m.src);
  });
  // Or pass an explicit flag from your data: project.hasPortraitMedia

  const isPhone = window.innerWidth < 768;

  const containerClass = hasPortrait
    ? `aspect-[9/16] ${isPhone ? "max-h-full" : "max-h-106"}`
    : "aspect-video";
  useEffect(() => {
    if (paused || mediaItems.length < 2) return;

    const currentItem = mediaItems[idx];

    // Don't auto-slide videos
    if (currentItem.type === "video") return;

    const t = setInterval(() => {
      setIdx((i) => (i + 1) % mediaItems.length);
    }, 3500);

    return () => clearInterval(t);
  }, [paused, mediaItems.length, idx]);

  const handleClick = () => {
    if (project.liveUrl)
      window.open(project.liveUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-card shadow-card neon-border transition-all duration-500 hover:-translate-y-1 hover:shadow-neon"
    >
      <div className="relative p-1 ">
        {project.inProgress && (
          <span className="absolute top-3 left-3 z-20 rounded-full border border-yellow-500/30 bg-yellow-500/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-yellow-300 backdrop-blur">
            Work in Progress
          </span>
        )}
        <button
          type="button"
          // onClick={handleClick}
          className={`relative ${containerClass} w-full overflow-hidden block bg-black/5`}
          aria-label={project.liveUrl ? `Open ${project.title}` : project.title}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {mediaItems.length > 0 ? (
            mediaItems.map((item, i) => (
              <MediaElement
                key={item.src}
                item={item}
                title={project.title}
                index={i}
                active={i === idx}
              />
            ))
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-secondary/30 text-sm font-medium text-muted-foreground">
              No Preview Available
            </div>
          )}
        </button>


        {/* Dot indicators */}
        {mediaItems.length > 1 && (
          <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
            {mediaItems.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setIdx(i);
                }}
                aria-label={`Show item ${i + 1}`}
                className={`h-2 rounded-full transition-all cursor-pointer ${i === idx
                  ? "w-5 h-1 bg-neon shadow-[0_0_10px_rgba(255,255,255,0.9)]"
                  : "w-2 h-1 bg-white/60 hover:bg-white shadow-[0_0_5px_rgba(0,0,0,0.7)]"}`}
              />
            ))}
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div>
          <h3 className="font-display text-xl font-bold tracking-tight">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {project.skills.map((s) => (
            <span
              key={s}
              className="rounded-full border border-border bg-secondary/60 px-2.5 py-0.5 text-[11px] font-medium text-secondary-foreground"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-auto flex items-center gap-2 pt-2">
          {project.codeUrl && (
            <a
              href={project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-secondary px-3 py-1.5 text-xs font-medium text-secondary-foreground transition-colors hover:bg-accent"
            >
              <GithubIcon className="h-3.5 w-3.5" /> Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground transition-colors hover:opacity-90"
            >
              <ExternalLink className="h-3.5 w-3.5" /> Live
            </a>
          )}
        </div>
      </div>


    </div>
  );
}