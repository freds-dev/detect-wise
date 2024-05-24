"use client";

import { RocketIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex flex-col">
        <header className="bg-[#FFA500] py-4 px-6">
          <div className="container mx-auto flex items-center justify-between">
            <Link className="flex items-center gap-2" href="#">
              <RocketIcon className="h-6 w-6 text-white" />
              <span className="text-white font-bold text-2xl">DetectWise</span>
            </Link>
            <div className="flex items-center gap-4">
              <Link
                className="inline-flex h-9 items-center justify-center rounded-md border border-white px-4 text-sm font-medium text-white shadow transition-colors hover:bg-white hover:text-[#FFA500] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#FFA500]"
                href="/selection"
              >
                Demo
              </Link>
            </div>
          </div>
        </header>
        <section className="w-full py-20 md:py-32 lg:py-40 bg-gradient-to-r from-[#FFA500] to-[#FF6B6B]">
          <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
              Unlock the Power of DetectWise
            </h1>
            <p className="max-w-[700px] text-lg md:text-xl text-gray-200">
              Explore object detection with our easy-to-use app. Learn by
              collecting data and testing models.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-6 text-sm font-medium text-[#FFA500] shadow transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#FFA500]"
                href="#"
              >
                Get Started with DetectWise
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-white px-6 text-sm font-medium text-white shadow transition-colors hover:bg-white hover:text-[#FFA500] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#FFA500]"
                href="#"
              >
                Intuitive Data Collection
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-20 md:py-32 lg:py-40 bg-white">
          <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FFA500]">
              Intuitive Data Collection
            </h2>
            <p className="max-w-[700px] text-lg md:text-xl text-gray-500">
              Our app makes gathering and labeling data simple and fun.
            </p>
            <img
              alt="Collect Stellar Data"
              className="rounded-lg shadow-lg"
              height="400"
              src="/stock/collect.jpg"
              style={{
                aspectRatio: "800/400",
                objectFit: "cover",
              }}
              width="800"
            />
          </div>
        </section>
        <section className="w-full py-20 md:py-32 lg:py-40 bg-[#FFE4B5]">
          <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FFA500]">
              Interactive Model Testing
            </h2>
            <p className="max-w-[700px] text-lg md:text-xl text-gray-500">
              Quickly test and improve your models with our user-friendly tools
            </p>
            <img
              alt="Test Your Rocket Designs"
              className="rounded-lg shadow-lg"
              height="400"
              src="/stock/testing.jpg"
              style={{
                aspectRatio: "800/400",
                objectFit: "cover",
              }}
              width="800"
            />
          </div>
        </section>
        <section className="w-full py-20 md:py-32 lg:py-40 bg-white">
          <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#FFA500]">
              Join the DetectWise Journey
            </h2>
            <p className="max-w-[700px] text-lg md:text-xl text-gray-500">
              Sign up today and start your machine learning adventure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-[#FFA500] px-6 text-sm font-medium text-white shadow transition-colors hover:bg-[#FF6B6B] focus:outline-none focus:ring-2 focus:ring-[#FFA500] focus:ring-offset-2"
                href="#"
              >
                Join
              </Link>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md border border-[#FFA500] px-6 text-sm font-medium text-[#FFA500] shadow transition-colors hover:bg-[#FFA500] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#FFA500] focus:ring-offset-2"
                href="#"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
