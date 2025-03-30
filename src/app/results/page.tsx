"use client";

import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Details() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const data = searchParams.get("data");
  const parsedData = data ? JSON.parse(data) : null;
  console.log("Data:", data);

  return (
    <main className="p-4 max-w-2xl mx-auto flex flex-col justify-center min-h-screen">
      {/* Box around all content */}
      <section className="bg-gray-100 p-16 rounded-2xl shadow-md">
        {/* Centered Title */}
        <div className="flex justify-center mb-6">
          <h1 className="text-2xl font-bold">ClusterForm</h1>
        </div>

        <div className="flex justify-center mb-6">
          <Image
            src={parsedData?.data.data.visualization}
            alt="Red Dot"
            width={800}
            height={800}
            unoptimized
          />
        </div>

        {/* Buttons */}
        <div className="mt-10 flex justify-between px-2 max-w-sm mx-auto">
          <Button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
            <Link
              href={parsedData?.data.data.link || "#"}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open with Google
            </Link>
          </Button>

          <Button
            onClick={() => router.push("/")}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            Home
          </Button>
        </div>
      </section>
    </main>
  );
}
