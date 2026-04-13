import { useState, useRef, useEffect, ChangeEvent } from "react";
import { motion } from "motion/react";
import { Music, Pause, Upload } from "lucide-react";

export function MusicPlayer({ autoPlayTrigger }: { autoPlayTrigger?: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioSrc, setAudioSrc] = useState<string | null>("https://dl.dropboxusercontent.com/scl/fi/06y4yznp9geeta3z7tdos/14-Casper-Bon-Nghi-m-m-t-i-Solo-Violin-320-Kbps.mp3?rlkey=10ol9vcqq7g3okkzefoenblp3&st=koemiwmk");
  const mediaRef = useRef<HTMLVideoElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (autoPlayTrigger && mediaRef.current && !isPlaying) {
      mediaRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(e => {
        console.error("Auto-play failed:", e);
      });
    }
  }, [autoPlayTrigger]);

  const togglePlay = () => {
    if (mediaRef.current) {
      if (isPlaying) {
        mediaRef.current.pause();
      } else {
        mediaRef.current.play().catch(e => {
          console.error("Audio play failed:", e);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      // Create a local URL for the selected file
      const url = URL.createObjectURL(file);
      setAudioSrc(url);
      setIsPlaying(true);
      
      // Auto play after setting source
      setTimeout(() => {
        if (mediaRef.current) {
          mediaRef.current.play().catch(console.error);
        }
      }, 100);
    }
  };

  return (
    <>
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileChange} 
        accept="audio/*,video/mp4" 
        className="hidden" 
      />
      
      {audioSrc && (
        <video 
          ref={mediaRef}
          src={audioSrc}
          loop
          className="hidden"
          playsInline
          onEnded={() => setIsPlaying(false)}
        />
      )}
      
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 2, type: "spring" }}
        onClick={togglePlay}
        onDoubleClick={() => fileInputRef.current?.click()}
        title={isPlaying ? "Tạm dừng nhạc" : "Phát nhạc (Nhấn đúp để chọn file khác)"}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl border-2 transition-all duration-300 ${
          isPlaying 
            ? 'bg-wedding-primary border-wedding-primary text-white' 
            : 'bg-white border-wedding-secondary text-wedding-primary'
        }`}
      >
        {isPlaying ? (
          <Pause size={24} className="animate-pulse" />
        ) : (
          <Music size={24} />
        )}
        
        {/* Ripple effect when playing */}
        {isPlaying && (
          <>
            <span className="absolute inset-0 rounded-full border-2 border-wedding-primary animate-ping opacity-75" />
            <span className="absolute inset-0 rounded-full border-2 border-wedding-primary animate-ping opacity-50" style={{ animationDelay: '0.2s' }} />
          </>
        )}
      </motion.button>
    </>
  );
}
