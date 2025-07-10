// Details Page: Guides user to share their Google Sheet and explains the process
"use client";

// Import UI components and hooks
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

// Main component for the Details page
export default function Details() {
  // Next.js router instance for navigation
  const router = useRouter();

  return (
    <main className="p-6 max-w-2xl mx-auto">
      {/* Main container for the instructions */}
      <section className="bg-gray-100 p-16 rounded-2xl shadow-md">
        {/* Centered Title */}
        <div className="flex justify-center mb-4">
          <h1 className="text-2xl font-bold">ClusterForm</h1>
        </div>

        {/* Instructions for sharing Google Sheet */}
        <p>
          Important: Before proceeding, please share your Google Sheet with our
          service account email:
        </p>
        <p className="bg-gray-200 p-2 rounded-md font-mono text-sm my-2">
          admin-cluster-form@cluster-form.iam.gserviceaccount.com
        </p>
        <p className="text-gray-700">This is required to analyze your data.</p>

        {/* Step-by-step instructions for the user */}
        <h2 className="text-lg font-semibold mt-4">Steps to share:</h2>
        <ul className="list-decimal list-inside text-gray-700 mt-2">
          <li>Open your Google Sheet.</li>
          <li>
            Click the <strong>'Share'</strong> button in the top right.
          </li>
          <li>Enter the service account email.</li>
          <li>
            Set permission to <strong>'Editor'</strong>.
          </li>
          <li>
            Click <strong>'Done'</strong>.
          </li>
        </ul>

        <p className="mt-4 text-gray-700">
          Once you've granted access, you can proceed to paste your Google Sheet
          link below.
        </p>

        {/* Navigation buttons: Cancel and Done */}
        <div className="mt-6 flex justify-between px-2 max-w-sm mx-auto">
          {/* Cancel button returns to home page */}
          <Button
            onClick={() => router.push("/")}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            Cancel
          </Button>
          {/* Done button proceeds to the cluster form page */}
          <Button
            onClick={() => router.push("/cluster")}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800"
          >
            Done
          </Button>
        </div>
      </section>
    </main>
  );
}
