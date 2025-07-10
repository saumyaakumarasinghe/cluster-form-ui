// ClusterForm Page: Allows users to submit a Google Sheet link and column for clustering analysis
"use client";

// Import UI components and libraries
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Spinner } from "@/components/ui/spinner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// React Hook Form for form state management
import { useForm } from "react-hook-form";
// Zod resolver for integrating Zod validation with React Hook Form
import { zodResolver } from "@hookform/resolvers/zod";
// Zod for schema validation
import { z } from "zod";
// Axios for HTTP requests
import axios from "axios";
import { useRouter } from "next/navigation";
// React useState for local state
import { useState } from "react";

// Define the schema for form validation using Zod
// - link: must be a non-empty string
// - column: must be 1-4 letters (A-Z, a-z) and non-empty
const formSchema = z.object({
  link: z.string().nonempty("Link is required"),
  column: z
    .string()
    .regex(/^[A-Za-z]{1,4}$/, "Column ID must below 4 letters")
    .nonempty("Column is required"),
});

// Main component for the Cluster Form page
export default function Home() {
  // Next.js router instance for navigation
  const router = useRouter();
  // Local state to track loading status during form submission
  const [isLoading, setIsLoading] = useState(false);

  // Initialize the form using React Hook Form and Zod schema
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema), // Integrate Zod validation
    defaultValues: {
      link: "",
      column: "",
    },
  });

  // Handler for form submission
  // - Sends the Google Sheet link and column to the backend API
  // - Shows a loading spinner while waiting
  // - Navigates to the results page with returned data
  async function onSubmit(values: z.infer<typeof formSchema>) {
    // Show an alert
    alert("Form submitted!");
    console.log(values);

    try {
      setIsLoading(true); // Set loading state to true

      // Send POST request to backend API with form data
      const data = await axios({
        method: "post",
        url: "http://127.0.0.1:5000/api/form/clustering",
        data: {
          link: values.link,
          column: values.column,
        },
      });

      console.log("returned data", data);

      // Navigate to the results page, passing the returned data as a query param
      router.push(
        `/results?data=${encodeURIComponent(
          JSON.stringify({ data: data.data }),
        )}`,
      );
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsLoading(false); // Reset loading state
    }
  }

  // Render the form UI
  return (
    <main className="p-6 max-w-2xl mx-auto flex flex-col justify-center min-h-screen">
      {/* Main container for the form */}
      <section className="bg-gray-100 p-16 rounded-2xl shadow-md">
        {/* Page title */}
        <div className="flex justify-center mb-6">
          <h1 className="text-2xl font-bold">ClusterForm</h1>
        </div>

        {/* Form for Google Sheet link and column input */}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="mt-6 max-w-sm mx-auto space-y-6">
              {/* Google Sheet Link input field */}
              <FormField
                control={form.control}
                name="link"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="w-full p-4 text-lg border border-gray-300 rounded-lg"
                        placeholder="Place your Google Sheet link here"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Column ID input field */}
              <FormField
                control={form.control}
                name="column"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        className="w-full p-4 text-lg border border-gray-300 rounded-lg"
                        placeholder="Enter column ID"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Submit button or loading spinner */}
              {!isLoading ? (
                // Show submit button when not loading
                <Button className="w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                  Submit
                </Button>
              ) : (
                // Show spinner while loading
                <Spinner size="large" />
              )}
            </div>
          </form>
        </Form>
      </section>
    </main>
  );
}
