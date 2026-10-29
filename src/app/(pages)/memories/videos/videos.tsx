"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const graduationVideos = [
  "/videos/Best-Graduating-Student.mp4",
  "/videos/Gees-on-the-Dance-Floor.mp4",
  "/videos/Kamal-the-Rubix-Master.mp4",
  "/videos/Mano-on-the-Podium.mp4",
  "/videos/Our-Ladies.mp4",
  "/videos/Sales-GT-on-the-Dance-Floor.mp4",
  "/videos/Speech-by-Naheemot.mp4",
  "/videos/Tech-GT-on-the-Dance-Floor.mp4",
  "/videos/Vicky-taunting-Richard.mp4",
];
const videoCaption = [
  "Best Graduating Student",
  "Gees on the Dance Floor",
  "Kamal the Rubik Master",
  "Mano on the Podium",
  "Our Ladies",
  "Sales GT on the Dance Floor",
  "Speech by Naheemot",
  "Tech GT on the Dance Floor",
  "Vicky taunting Richard",
];

const Videos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousVideo = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextVideo = () => {
    if (currentIndex < graduationVideos.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="flex items-center justify-center gap-4">
      {currentIndex > 0 && (
        <button
          type="button"
          onClick={previousVideo}
          aria-label="Previous video"
          className="rounded-full bg-[#002244] p-2 text-white hover:bg-[#FFCC33] hover:text-[#002244]"
        >
          <ChevronLeft />
        </button>
      )}

      <div className="flex flex-col border border-black rounded-lg items-center">
        <video
          key={graduationVideos[currentIndex]}
          src={graduationVideos[currentIndex]}
          controls
          playsInline
          preload="metadata"
          aria-label={`Graduation video ${currentIndex + 1} of ${graduationVideos.length}`}
          className="h-[350px] rounded-t-lg w-[500px] bg-black object-contain"
        />
        <div className="text-slate-800 font-bold text-lg">
          {videoCaption[currentIndex]}
        </div>
      </div>

      {currentIndex < graduationVideos.length - 1 && (
        <button
          type="button"
          onClick={nextVideo}
          aria-label="Next video"
          className="rounded-full bg-[#002244] p-2 text-white hover:bg-[#FFCC33] hover:text-[#002244]"
        >
          <ChevronRight />
        </button>
      )}
    </div>
  );
};

export default Videos;
