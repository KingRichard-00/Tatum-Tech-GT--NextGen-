"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const presentationPics = [
  "/images/memories/presentation/presentation (1).jpg",
  "/images/memories/presentation/presentation (2).jpg",
  "/images/memories/presentation/presentation (3).jpg",
  "/images/memories/presentation/presentation (4).jpg",
  "/images/memories/presentation/presentation (5).jpg",
  "/images/memories/presentation/presentation (6).jpg",
  "/images/memories/presentation/presentation (7).jpg",
  "/images/memories/presentation/presentation (8).jpg",
  "/images/memories/presentation/presentation (9).jpg",
  "/images/memories/presentation/presentation (10).jpg",
  "/images/memories/presentation/presentation (11).jpg",
  "/images/memories/presentation/presentation (12).jpg",
  "/images/memories/presentation/presentation (13).jpg",
  "/images/memories/presentation/presentation (14).jpg",
  "/images/memories/presentation/presentation (15).jpg",
  "/images/memories/presentation/presentation (16).jpg",
  "/images/memories/presentation/presentation (17).jpg",
  "/images/memories/presentation/presentation (18).jpg",
];

const Memories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousPicture = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextPicture = () => {
    if (currentIndex < presentationPics.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="flex items-center justify-center m-6 gap-2">
      {currentIndex > 0 && (
        <button
          type="button"
          onClick={previousPicture}
          aria-label="Previous picture"
          className="rounded-full bg-[#002244] p-2 text-white hover:bg-[#FFCC33] hover:text-[#002244]"
        >
          <ChevronLeft />
        </button>
      )}

      <Image
        src={presentationPics[currentIndex]}
        alt={`Presentation memory ${currentIndex + 1}`}
        width={500}
        height={350}
        className="h-[350px] w-[500px] rounded-lg object-cover"
      />

      {currentIndex < presentationPics.length - 1 && (
        <button
          type="button"
          onClick={nextPicture}
          aria-label="Next picture"
          className="rounded-full bg-[#002244] p-2 text-white hover:bg-[#FFCC33] hover:text-[#002244]"
        >
          <ChevronRight />
        </button>
      )}
    </div>
  );
};

export default Memories;
