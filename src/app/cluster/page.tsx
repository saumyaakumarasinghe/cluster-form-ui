"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="p-6 max-w-2xl mx-auto flex flex-col justify-center min-h-screen">
      {/* Box around all content */}
      <section className="bg-gray-100 p-16 rounded-2xl shadow-md">
        {/* Centered Title */}
        <div className="flex justify-center mb-6">
          <h1 className="text-2xl font-bold">ClusterForm</h1>
        </div>

        {/* Form Content */}
        <div className="mt-6 max-w-sm mx-auto space-y-6">
          <Input
            placeholder="Paste your Google Sheet link here"
            className="w-full p-4 text-lg border border-gray-300 rounded-lg"
          />
          <Button className="w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
            Submit
          </Button>
        </div>
      </section>
    </main>
  );
}
