import { Button } from "@/components/ui/button";

export default function Details() {
  return (
    <main className="p-6 max-w-2xl mx-auto flex flex-col justify-center min-h-screen">
      {/* Box around all content */}
      <section className="bg-gray-100 p-16 rounded-2xl shadow-md">
        {/* Centered Title */}
        <div className="flex justify-center mb-4">
          <h1 className="text-2xl font-bold">ClusterForm</h1>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-between px-2 max-w-sm mx-auto">
          <Button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
            Download
          </Button>
          <Button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
            Open with Google
          </Button>
        </div>
      </section>
    </main>
  );
}