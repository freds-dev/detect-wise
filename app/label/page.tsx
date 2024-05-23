"use client";

import { useEffect, useState } from "react";

export default function Label() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [startPoint, setStartPoint] = useState<{ x: number; y: number } | null>(
    null
  );
  const [endPoint, setEndPoint] = useState<{ x: number; y: number } | null>(
    null
  );

  useEffect(() => {
    const storedImage = localStorage.getItem("capturedImage");
    if (storedImage) {
      setImageSrc(storedImage);
    }
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setStartPoint({ x: e.clientX, y: e.clientY });
    setEndPoint(null);
    setIsDrawing(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDrawing || !startPoint) return;
    setEndPoint({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDrawing(false);
  };

  const getBoundingBoxStyles = () => {
    if (!startPoint || !endPoint) return {};
    const left = Math.min(startPoint.x, endPoint.x);
    const top = Math.min(startPoint.y, endPoint.y);
    const width = Math.abs(startPoint.x - endPoint.x);
    const height = Math.abs(startPoint.y - endPoint.y);
    return {
      left: `${left}px`,
      top: `${top}px`,
      width: `${width}px`,
      height: `${height}px`,
    };
  };

  return (
    <div
      className="flex items-center justify-center h-screen bg-black relative"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt="Full Screen Captured"
          className="w-full h-full object-contain"
        />
      )}
      {startPoint && endPoint && (
        <div
          className="absolute border-2 border-red-500"
          style={getBoundingBoxStyles()}
        />
      )}
    </div>
  );
}
