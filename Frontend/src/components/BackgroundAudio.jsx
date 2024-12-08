import { useEffect, useState, useRef } from "react";
import {Volume2, VolumeX} from 'lucide-react';
import audio from "../assets/kujira-shima-yori-101soundboards.mp3";

export default function BackgroundAudio() {
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef(null);
    
    const toggleMute = () => {
       setIsMuted(!isMuted);
    }
    useEffect(() => {
        const audio = audioRef.current;
        if(audio){
            audio.muted = isMuted;
        }
        // console.log("Audio muted:", isMuted);
    }, [isMuted]);

    useEffect(() => {
        const audio = audioRef.current;
        audio.volume = 0.75;
        audio.play().catch(error => {
            console.error('Audio playback failed:', error);
        });
    }, []);

    return(
        <span>
            <audio ref={audioRef} src={audio} loop />
            <button 
            onClick={toggleMute}
            className="fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
            >
                {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
            </button>
        </span>
    );
}