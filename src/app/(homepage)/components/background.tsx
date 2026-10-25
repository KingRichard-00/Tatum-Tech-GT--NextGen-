"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/images/background/bg.jpg",
  "/images/background/bg-1.jpg",
  "/images/background/bg-2.jpg",
  "/images/background/bg-3.jpg",
  "/images/background/bg-4.jpg",
  "/images/background/bg-5.jpg",
];

const INTERVAL = 5000; // 5 seconds

const Background = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, INTERVAL);

    return () => clearInterval(timer); // cleanup on unmount
  }, []);

  return (
    <div className="fixed inset-0">
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt=""
          fill
          sizes="100vw"
          priority={index === 0}
          className={`object-right transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
};
export default Background;
