"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
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

  const handleStartDrawing = (clientX: number, clientY: number) => {
    setStartPoint({ x: clientX, y: clientY });
    setEndPoint(null);
    setIsDrawing(true);
  };

  const handleMoveDrawing = (clientX: number, clientY: number) => {
    if (!isDrawing || !startPoint) return;
    setEndPoint({ x: clientX, y: clientY });
  };

  const handleEndDrawing = () => {
    setIsDrawing(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    handleStartDrawing(e.clientX, e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    e.preventDefault();
    handleMoveDrawing(e.clientX, e.clientY);
  };

  const handleMouseUp = () => {
    handleEndDrawing();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    handleStartDrawing(touch.clientX, touch.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault(); // Prevent scroll on touch devices
    const touch = e.touches[0];
    handleMoveDrawing(touch.clientX, touch.clientY);
  };

  const handleTouchEnd = () => {
    handleEndDrawing();
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
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleEndDrawing} // Handle touch cancel to end drawing
      style={{ touchAction: "none" }} // Disable default touch behavior
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
      {startPoint && endPoint && (
        <div className="absolute inset-0 flex items-end justify-center pb-6 z-10">
          <Link href={"summary"}>
            <Button
              onMouseDown={(e) => e.stopPropagation()}
              onTouchStart={(e) => e.stopPropagation()}
              className="bg-[#ac8337] text-white hover:bg-[#FFA500]"
            >
              Next
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}
