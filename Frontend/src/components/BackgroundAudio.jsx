import { useEffect, useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import audio from "../assets/kujira-shima-yori-101soundboards.mp3";

export default function BackgroundAudio() {
  const [isMuted, setIsMuted] = useState(true);
  const [showPrompt, setShowPrompt] = useState(true);
  const audioRef = useRef(null);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  useEffect(() => {
    const audio = audioRef.current;
    if(audio){
        audio.muted = isMuted;
    }
  }, [isMuted]);
  useEffect(() => {
    // Automatically hide the prompt after 15 seconds
    const timer = setTimeout(() => setShowPrompt(false), 15000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    audio.volume = 0.75;
    audio.play().catch((error) => {
      console.error("Audio playback failed:", error);
    });
  }, [toggleMute]);

  return (
    <div>
        {showPrompt && (
        <div
          style={{
            position: "fixed",
            padding: "10px 15px",
            bottom: "5.25rem",
            right: "0.8%",
            background: "#222",
            color: "#fff",
            borderRadius: "8px",
            boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.2)",
            cursor: "pointer",
            animation: "fadeInOut 5s",
            zIndex: 1000,
          }}
        >
            <div
            style={{
              position: 'absolute',
              bottom: '-21px',
              right: '6.8%',
              transform: 'translateX(-50%)',
              width: 20,
              height: 20,
              borderLeft: '8px solid transparent',
              borderRight: '8px solid transparent',
              borderTop: '10px solid #222',
            }}
          />
          <span style={{ fontSize: "14px", fontWeight: "bold",fontFamily: "system-ui" }}>
            🎵🎧 Tap here to try our music!
          </span>
        </div>
      )}

      <button
        onClick={toggleMute}
        className='fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition'
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>
      
      <audio ref={audioRef} src={audio} loop />
    </div>
  );
}
