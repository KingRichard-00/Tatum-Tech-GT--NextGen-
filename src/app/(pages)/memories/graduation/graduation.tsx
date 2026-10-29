"use client";

import Image from "next/image";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const graduationPics = [
  "/images/memories/graduation/graduation (1).jpg",
  "/images/memories/graduation/graduation (2).jpg",
  "/images/memories/graduation/graduation (3).jpg",
  "/images/memories/graduation/graduation (4).jpg",
  "/images/memories/graduation/graduation (5).jpg",
  "/images/memories/graduation/graduation (6).jpg",
  "/images/memories/graduation/graduation (7).jpg",
  "/images/memories/graduation/graduation (8).jpg",
  "/images/memories/graduation/graduation (9).jpg",
  "/images/memories/graduation/graduation (10).jpg",
  "/images/memories/graduation/graduation (11).jpg",
  "/images/memories/graduation/graduation (12).jpg",
  "/images/memories/graduation/graduation (13).jpg",
  "/images/memories/graduation/graduation (14).jpg",
  "/images/memories/graduation/graduation (15).jpg",
  "/images/memories/graduation/graduation (16).jpg",
  "/images/memories/graduation/graduation (17).jpg",
  "/images/memories/graduation/graduation (18).jpg",
  "/images/memories/graduation/graduation (19).jpg",
  "/images/memories/graduation/graduation (20).jpg",
  "/images/memories/graduation/graduation (21).jpg",
  "/images/memories/graduation/graduation (22).jpg",
  "/images/memories/graduation/graduation (23).jpg",
  "/images/memories/graduation/graduation (24).jpg",
  "/images/memories/graduation/graduation (25).jpg",
  "/images/memories/graduation/graduation (26).jpg",
  "/images/memories/graduation/graduation (27).jpg",
  "/images/memories/graduation/graduation (28).jpg",
  "/images/memories/graduation/graduation (29).jpg",
  "/images/memories/graduation/graduation (30).jpg",

  "/images/memories/graduation/graduation (31).jpg",
  "/images/memories/graduation/graduation (32).jpg",
  "/images/memories/graduation/graduation (33).jpg",
  "/images/memories/graduation/graduation (34).jpg",
  "/images/memories/graduation/graduation (35).jpg",
  "/images/memories/graduation/graduation (36).jpg",
  "/images/memories/graduation/graduation (37).jpg",
  "/images/memories/graduation/graduation (38).jpg",
  "/images/memories/graduation/graduation (39).jpg",
  "/images/memories/graduation/graduation (40).jpg",
  "/images/memories/graduation/graduation (41).jpg",
  "/images/memories/graduation/graduation (42).jpg",
  "/images/memories/graduation/graduation (43).jpg",
  "/images/memories/graduation/graduation (44).jpg",
  "/images/memories/graduation/graduation (45).jpg",
  "/images/memories/graduation/graduation (46).jpg",
  "/images/memories/graduation/graduation (47).jpg",
  "/images/memories/graduation/graduation (48).jpg",
  "/images/memories/graduation/graduation (49).jpg",
  "/images/memories/graduation/graduation (50).jpg",
  "/images/memories/graduation/graduation (51).jpg",
  "/images/memories/graduation/graduation (52).jpg",
  "/images/memories/graduation/graduation (53).jpg",
  "/images/memories/graduation/graduation (54).jpg",
  "/images/memories/graduation/graduation (55).jpg",
  "/images/memories/graduation/graduation (56).jpg",
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
        width={400}
        height={250}
        className="border border-gray-300 rounded-lg object-cover md:object-contain"
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
