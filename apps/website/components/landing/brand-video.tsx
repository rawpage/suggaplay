"use client";

import { useRef, useState } from "react";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

const DEFAULT_VIDEO_URL =
  "https://eisx5n3yfkuzimi3.public.blob.vercel-storage.com/SUGGAPLAY.mp4";

const VIDEO_URL =
  process.env.NEXT_PUBLIC_SUGGAPLAY_VIDEO_URL ?? DEFAULT_VIDEO_URL;

export function BrandVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !video.muted;
    video.muted = next;
    if (!next && video.paused) {
      void video.play();
    }
    setIsMuted(next);
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="group relative aspect-video w-full overflow-hidden bg-black">
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        src={VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

      <div className="absolute bottom-0 right-0 flex items-center gap-px p-4 sm:p-5">
        <ControlButton
          onClick={togglePlay}
          aria-label={isPlaying ? "Pause video" : "Play video"}
        >
          {isPlaying ? (
            <Pause className="h-4 w-4" strokeWidth={2} />
          ) : (
            <Play className="h-4 w-4" strokeWidth={2} />
          )}
        </ControlButton>
        <ControlButton
          onClick={toggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <VolumeX className="h-4 w-4" strokeWidth={2} />
          ) : (
            <Volume2 className="h-4 w-4" strokeWidth={2} />
          )}
        </ControlButton>
      </div>
    </div>
  );
}

function ControlButton({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={cn(
        "pointer-events-auto flex h-10 w-10 items-center justify-center rounded-none border border-white/20 bg-black/60 text-white backdrop-blur-sm transition-colors hover:bg-[#FF2747] hover:border-[#FF2747] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-0",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
