"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

// const token = "dungtringuyen2303";
const HeroSection = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/Blog/7245C136-A8AC-49EA-98E5-36D23B3F99C3`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            // Authorization nếu có token:
            // Authorization: `Bearer ${token}`
          },
        });
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const json = await res.json();
        setData(json);
        console.log("haha", json);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="h-screen"></div>
      <section className="fixed inset-0 z-0 pointer-events-none">
        <video
          src="/radial-glass_4.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-10 gap-9">
          <h1 className="text-4xl font-bold font-coda">Where Tech Meets Creativity</h1>
          <p className="text-sm">We design intelligent digital platforms...</p>
          <div className="bg-[#2468FF] rounded-2xl  flex items-center gap-8 p-2">
            <p className="ml-6">EXPLORE NOW</p>
            <div className="p-3 rounded-lg bg-[#1A4CD8]">
              <Image
                src="/starts.svg"
                alt="starts"
                width={26}
                height={26}
                className="block hover:hidden"
              />
              <Image
                src="/right.svg"
                alt="logo"
                width={8}
                height={16}
                className="hidden hover:block"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeroSection;