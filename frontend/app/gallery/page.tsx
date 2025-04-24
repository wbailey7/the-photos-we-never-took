'use client';

import { useState, useEffect } from 'react';
import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';
import Link from 'next/link';

const galleryItems = [
  {
    image: "/photos/brother_birthday.jpg",
    caption: "My brother's 17th birthday party, May 2018"
  },
  {
    image: "/photos/brother_graduation.jpg",
    caption: "My brother's high school graduation, June 2019"
  },
  {
    image: "/photos/brother_newborn.jpg",
    caption: "My brother holding my newborn son for the first time"
  },
  {
    image: "/photos/brother_fishing.jpg",
    caption: "My brother and I fishing at the lake, 2016"
  },
  {
    image: "/photos/brother_lake.jpg",
    caption: "Summer afternoon with my brother at the lake, 2017"
  }
];

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<{ image: string; caption: string } | null>(null);

  const openModal = (item: { image: string; caption: string }) => {
    setSelected(item);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelected(null);
  };


useEffect(() => {
  if (!open || !selected) return;

  const handleKeyDown = (e: KeyboardEvent) => {
    const currentIndex = galleryItems.findIndex(item => item.image === selected.image);

    if (e.key === 'ArrowRight') {
      const nextIndex = (currentIndex + 1) % galleryItems.length;
      setSelected(galleryItems[nextIndex]);
    }

    if (e.key === 'ArrowLeft') {
      const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
      setSelected(galleryItems[prevIndex]);
    }
  };

  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
}, [open, selected]);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-12">
      <div className="mb-8 text-center">
        <Link href="/" className="inline-block text-sm text-blue-400 hover:underline">
          ← Back to homepage
        </Link>
      </div>
      <Link href="/about" className="inline-block text-sm text-blue-400 hover:underline ml-4">
  About
</Link>

      

      <h1 className="text-4xl font-bold text-center mb-12">
        Gallery: The Photos We Never Took
      </h1>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700 flex flex-col h-full cursor-pointer"
            onClick={() => openModal(item)}
          >
            <img
              src={item.image}
              alt={item.caption}
              className="w-full object-cover h-64"
            />
            <div className="p-4 text-sm text-gray-300 italic h-20 flex items-center justify-center text-center">
              “{item.caption}”
            </div>
          </div>
        ))}
      </div>

      <Dialog open={open} onClose={closeModal} className="relative z-50">
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4">
          <Dialog.Panel className="max-w-3xl w-full bg-gray-900 rounded-lg overflow-hidden shadow-xl relative">
            <button onClick={closeModal} className="absolute top-3 right-3 text-gray-400 hover:text-white">
              <X size={24} />
            </button>
            {selected && (
              <>
                <img src={selected.image} alt={selected.caption} className="w-full max-h-[75vh] object-contain" />
                <div className="p-4 text-sm text-gray-300 italic text-center">“{selected.caption}”</div>
                <div className="flex justify-center pb-4">
                  <a
                    href={selected.image}
                    download
                    className="text-xs text-blue-400 underline hover:text-blue-300"
                  >
                    Download Image
                  </a>
                </div>
              </>
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
}
