"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const graduationPics = [
  "/images/memories/behind-the-scenes/behind-the-scenes (1).jpg",
  "/images/memories/behind-the-scenes/behind-the-scenes (2).jpg",
  "/images/memories/behind-the-scenes/behind-the-scenes (4).jpg",
  "/images/memories/behind-the-scenes/behind-the-scenes (5).jpg",
  "/images/memories/behind-the-scenes/behind-the-scenes (6).jpg",
  "/images/memories/behind-the-scenes/behind-the-scenes (7).jpg",
  "/images/memories/behind-the-scenes/behind-the-scenes (8).jpg",
  "/images/memories/behind-the-scenes/behind-the-scenes (9).jpg",
  "/images/memories/behind-the-scenes/behind-the-scenes (10).jpg",
  "/images/memories/behind-the-scenes/behind-the-scenes (12).jpg",
  "/images/memories/behind-the-scenes/behind-the-scenes (13).jpg",
  "/images/memories/behind-the-scenes/behind-the-scenes (14).jpg",
  "/images/memories/behind-the-scenes/behind-the-scenes (15).jpg",
  "/images/memories/behind-the-scenes/behind-the-scenes (18).jpg",
  "/images/memories/behind-the-scenes/behind-the-scenes (19).jpg",
  "/images/memories/behind-the-scenes/behind-the-scenes (20).jpg",
  "/images/memories/behind-the-scenes/behind-the-scenes (21).jpg",
  "/images/memories/behind-the-scenes/behind-the-scenes (22).jpg",
  "/images/memories/behind-the-scenes/behind-the-scenes (23).jpg",
  "/images/memories/behind-the-scenes/behind-the-scenes (24).jpg",
  "/images/memories/behind-the-scenes/behind-the-scenes (25).jpg",
];

const Memories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const previousPicture = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const nextPicture = () => {
    if (currentIndex < graduationPics.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="flex items-center justify-center gap-4">
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
        src={graduationPics[currentIndex]}
        alt={`Graduation memory ${currentIndex + 1}`}
        width={1000}
        height={700}
        className="h-[500px] w-[800px] rounded-lg object-scale-down"
      />

      {currentIndex < graduationPics.length - 1 && (
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
