"use client";
/**
 * v0 by Vercel.
 * @see https://v0.dev/t/3Bwio1HM05e
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { useRouter } from "next/navigation";
import { ChangeEvent, useRef, useState } from "react";

export default function SelectionCard(vars: { title: string, fileUrl: string }) {
    const [imageSrc, setImageSrc] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const router = useRouter();

    const handleButtonClick = () => {
        console.log("Button clicked");
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
        <div
            className="block w-full max-w-sm rounded-lg overflow-hidden shadow-lg transition-all hover:scale-[1.02] hover:shadow-xl mb-4" onClick={handleButtonClick}
        >
            <img
                alt={vars.title}
                className="w-full h-48 object-cover"
                height="200"
                src={vars.fileUrl}
                style={{
                    aspectRatio: "400/200",
                    objectFit: "cover",
                }}
                width="400"
            />
            <div className="px-6 py-4 bg-gray-900 text-white">
                <h2 className="font-bold text-xl mb-2">{vars.title}</h2>
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
    )
}