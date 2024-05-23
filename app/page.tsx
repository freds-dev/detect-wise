"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MenuIcon, MountainIcon } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, useRef, useState } from "react";

export default function Home() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const router = useRouter();

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleCapture = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const reader = new FileReader();

      reader.onloadend = () => {
        const imageData = reader.result as string;
        setImageSrc(imageData);
        localStorage.setItem("capturedImage", imageData);
        router.push("/label");
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <header className="flex h-16 items-center justify-between px-4 md:px-6">
        <Link className="flex items-center" href="#">
          <MountainIcon className="h-6 w-6" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-4 p-6">
              <Link className="font-medium hover:underline" href="#">
                Home
              </Link>
              <Link className="font-medium hover:underline" href="#">
                About
              </Link>
              <Link className="font-medium hover:underline" href="#">
                Services
              </Link>
              <Link className="font-medium hover:underline" href="#">
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex flex-col items-center justify-center h-screen px-4 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-md w-full space-y-6 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Unlock the Power of DetectWise
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Effortlessly collect data and test your machine learning models with
            our intuitive app.
          </p>
          <div className="flex flex-col gap-4 w-full">
            <div
              onClick={handleButtonClick}
              className="inline-flex cursor-pointer items-center justify-center h-12 px-6 rounded-md bg-gray-900 text-gray-100 font-medium transition-colors hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus-visible:ring-gray-300"
            >
              Collect Data
            </div>
            <input
              type="file"
              accept="image/*"
              capture="environment"
              ref={fileInputRef}
              onChange={handleCapture}
              style={{ display: "none" }}
            />
          </div>
        </div>
      </main>
    </>
  );
}
