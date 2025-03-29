"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  link: z.string().nonempty("Link is required"),
});

export default function Home() {
  const router = useRouter();

  // Defined form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      link: "",
      //
    },
  });

  // Submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    alert("Form submitted!");
    console.log(values);

    try {
      const data = await axios({
        method: "post",
        // url: 'http://127.0.0.1:5000/api/health',
        url: "http://127.0.0.1:5000/api/spreadsheet/clustering",
        data: {
          link: values.link,
          //
        },
      });

      console.log("returned data----", data);

      router.push(
        `/results?data=${encodeURIComponent(
          JSON.stringify({ data: data.data }),
        )}`,
      );
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  return (
    <main className="p-6 max-w-2xl mx-auto flex flex-col justify-center min-h-screen">
      {/* Box around all content */}
      <section className="bg-gray-100 p-16 rounded-2xl shadow-md">
        {/* Centered Title */}
        <div className="flex justify-center mb-6">
          <h1 className="text-2xl font-bold">ClusterForm</h1>
        </div>

        <Form {...form}>
          {/* Form Content */}
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <div className="mt-6 max-w-sm mx-auto space-y-6">
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
              <Button className="w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800">
                Submit
              </Button>
            </div>
          </form>
        </Form>
      </section>
    </main>
  );
}
