"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex items-center justify-center min-h-screen bg-gray-100 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        {/* Blue Cross Decorative Elements */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-blue-400 opacity-30 rounded-full"
            style={{
              width: "10px",
              height: "10px",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              transform: "rotate(45deg)",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl w-full mx-auto px-4 flex items-center justify-between relative z-10">
        {/* Text Content Section */}
        <div className="w-1/2 pr-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            Welcome to ClusterForm
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Your intelligent feedback analysis tool. Transform scattered
            responses into meaningful insights instantly. Simply upload your
            Google Sheet containing feedback, and our advanced clustering
            algorithm will automatically organize similar responses into groups,
            helping you identify patterns and key themes. Perfect for analyzing
            customer feedback, survey responses, or any text-based data. Save
            hours of manual categorization and get actionable insights with just
            a few clicks.
          </p>

          <Button onClick={() => router.push('/details')}
 className="bg-black text-white px-20 py-1 rounded-lg text-lg hover:bg-gray-800 transition-colors duration-300">
            Try it out
          </Button>
        </div>

        {/* Network Visualization Section */}
        <div className="w-1/2 flex justify-center items-center">
          <Image
              src='/images/landing-page.png'
              alt='Network visualization'
              width={500}
              height={500}
              className='max-w-full h-auto object-contain'
            />
        </div>
      </div>
    </main>
  );
}
