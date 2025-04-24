'use client'

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function Home() {
  const [prompt, setPrompt] = useState<string>("");
  const [image, setImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const placeholderData = [
    {
      image: "/photos/brother_birthday.jpg",
      prompt: "My brother's 17th birthday party, May 2018"
    },
    {
      image: "/photos/brother_graduation.jpg",
      prompt: "My brother's high school graduation, June 2019"
    },
    {
      image: "/photos/brother_newborn.jpg",
      prompt: "My brother holding my newborn son for the first time"
    },
    {
      image: "/photos/brother_fishing.jpg",
      prompt: "My brother and I fishing at the lake, 2016"
    },
    {
      image: "/photos/brother_lake.jpg",
      prompt: "Summer afternoon with my brother at the lake, 2017"
    }
  ];
  
  
  const generateImage = async () => {
    setLoading(true);
    setImage(null);
  
    await new Promise((resolve) => setTimeout(resolve, 1500));
  
    const selected = placeholderData[Math.floor(Math.random() * placeholderData.length)];
  
    setImage(selected.image);
  
    // Only set the caption if nothing was entered
    if (!prompt.trim()) {
      setPrompt(selected.prompt);
    }
  
    setLoading(false);
  };
  
  

  return (
    <div className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white px-4 py-12">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          The Photos We Never Took
        </motion.h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          A generative tribute to my younger brother — portraits of moments that never happened, but should have.
        </p>

        <div className="max-w-xl mx-auto space-y-4">
          <Input
            placeholder="e.g., My brother holding my newborn son in 2021"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="bg-gray-800 text-white border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <Button onClick={generateImage} disabled={loading || !prompt}>
            {loading ? "Generating..." : "Generate Image"}
          </Button>
        </div>

        {image && (
          <Card className="mt-10 bg-gray-800 border border-gray-700">
            <CardContent className="p-4">
              <img
                src={image}
                alt="Generated AI"
                className="w-full rounded-xl shadow-xl"
              />
            </CardContent>
          </Card>
        )}
        <div className="mt-10 text-center">
          <a
            href="/gallery"
            className="inline-block px-4 py-2 text-sm text-white border border-gray-600 rounded hover:bg-gray-700 transition"
          >
            → View Full Gallery
          </a>
        </div>

        <div className="mt-10 text-center">
          <a
            href="/about"
            className="text-sm text-blue-400 hover:underline"
          >
            → About This Project
          </a>
        </div>

        <div className="mt-16 text-gray-400 text-sm max-w-2xl mx-auto">
          <p>
            My brother passed in 2018 at the age of 17. These images are generated with a custom AI model trained on photos of him. This project is a tribute to the moments we never captured — and the future he never got to live.
          </p>
        </div>
      </div>
    </div>
  );
}
