"use client";

import { useEffect, useState } from "react";

export default function Label() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const storedImage = localStorage.getItem("capturedImage");
    if (storedImage) {
      setImageSrc(storedImage);
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-black">
      {imageSrc && (
        <img
          src={imageSrc}
          alt="Full Screen Captured"
          className="w-full h-full object-contain"
        />
      )}
    </div>
  );
}
