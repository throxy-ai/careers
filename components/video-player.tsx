import { useState, useRef, type ReactNode } from "react";

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: ReactNode;
  subtitle?: string;
}

export function VideoPlayer({ src, poster, title, subtitle }: VideoPlayerProps) {
  const [is_playing, set_is_playing] = useState(false);
  const video_ref = useRef<HTMLVideoElement>(null);

  function handle_play() {
    if (!video_ref.current) return;
    if (is_playing) {
      video_ref.current.pause();
    } else {
      video_ref.current.play();
    }
    set_is_playing(!is_playing);
  }

  function handle_ended() {
    set_is_playing(false);
  }

  return (
    <div
      className="relative w-full rounded-lg overflow-hidden bg-gray-900 aspect-video flex items-center justify-center group cursor-pointer"
      onClick={handle_play}
      onKeyDown={(e) => e.key === "Enter" && handle_play()}
      role="button"
      tabIndex={0}
      aria-label={is_playing ? "Pause video" : "Play video"}
    >
      <video
        ref={video_ref}
        src={src}
        poster={poster}
        className="absolute inset-0 w-full h-full object-cover"
        playsInline
        preload="metadata"
        onEnded={handle_ended}
        onPlay={() => set_is_playing(true)}
        onPause={() => set_is_playing(false)}
        controls={is_playing}
      />

      {/* Overlay — hidden when playing */}
      {!is_playing && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-gradient-to-br from-gray-800/90 to-gray-950/90">
          <div className="text-center text-white">
            <p className="text-[11px] uppercase tracking-[0.15em] text-white/50 mb-3">
              {subtitle}
            </p>
            <h2 className="text-[22px] font-semibold tracking-[-0.02em] leading-snug mb-6">
              {title}
            </h2>
            <button
              type="button"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 transition-colors border border-white/20 text-white text-[13px] font-medium py-2 px-5 rounded-full backdrop-blur-sm pointer-events-none"
              aria-hidden
            >
              <span className="text-[10px]">▶</span>
              Play video
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
