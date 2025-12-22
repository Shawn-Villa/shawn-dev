'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X } from 'lucide-react';

export type ProjectModalData = {
  title: string;
  description: string;
  images: string[];
  stack?: string[];
};

type Props = {
  open: boolean;
  onClose: () => void;
  project: ProjectModalData | null;
};

export default function ProjectModal({ open, onClose, project }: Props) {
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [fromGallery, setFromGallery] = useState(false); // new state

  if (!project) return null;

  const previewImages = project.images.slice(0, 4);
  const remaining = project.images.length - 4;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/80 backdrop-blur"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="relative z-50 w-full max-w-6xl mx-4 bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden max-h-[90vh]"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
          >
            {/* CLOSE */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/60 border border-zinc-700 hover:bg-white hover:text-black transition"
            >
              <X size={18} />
            </button>

            <div className="grid md:grid-cols-2">
              {/* LEFT — PREVIEW */}
              <div className="bg-black p-3 min-h-[400px] md:min-h-[500px] flex items-center justify-center">
                <div
                  className={`grid gap-2 w-full h-full ${
                    previewImages.length === 1
                      ? 'grid-cols-1'
                      : previewImages.length === 2
                      ? 'grid-cols-2'
                      : 'grid-cols-2 md:grid-rows-2'
                  }`}
                >
                  {previewImages.map((img, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        setActiveIndex(i);
                        if (i === 3 && remaining > 0) {
                          // open gallery if there are remaining images
                          setGalleryOpen(true);
                        } else {
                          setViewerOpen(true);
                          setFromGallery(false); // not from gallery
                        }
                      }}
                      className={`relative rounded-xl overflow-hidden ${
                        previewImages.length === 1
                          ? 'h-full'  // When one image, fill the full height of the container
                          : previewImages.length === 2
                          ? 'h-full'  // When two images, also fill the full height of the container
                          : i === 0 && previewImages.length === 3
                          ? 'row-span-2'
                          : 'h-full' // Ensure all images fill their container
                      }`}
                    >
                      <Image
                        src={img}
                        alt="preview"
                        fill
                        className="object-cover w-full h-full" // Ensure the image covers the entire button area
                      />
                      {i === 3 && remaining > 0 && (
                        <div className="absolute inset-0 bg-black/70 flex items-center justify-center text-white text-2xl font-bold">
                          +{remaining}
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>


              {/* RIGHT — DESCRIPTION */}
              <div className="p-6 md:p-8 flex flex-col gap-4 max-h-[85vh] overflow-y-auto">
                <h3 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h3>
                <p className="text-zinc-400 leading-relaxed whitespace-pre-line">{project.description}</p>
                {project.stack && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full border border-zinc-700 bg-zinc-800 text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* GALLERY MODAL */}
            <AnimatePresence>
              {galleryOpen && (
                <motion.div
                  className="absolute inset-0 z-[60] bg-black/95 flex flex-col items-center justify-center p-6 overflow-y-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <button
                    onClick={() => setGalleryOpen(false)}
                    className="absolute top-4 right-4 z-[70] p-2 rounded-full bg-black/70 border border-zinc-700 hover:bg-white hover:text-black transition"
                  >
                    <X size={18} />
                  </button>

                  {/* Image Gallery Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 w-full max-w-5xl justify-center">
                    {project.images.map((img, i) => (
                      <button
                        key={i}
                        onClick={() => {
                          setActiveIndex(i);
                          setGalleryOpen(false);
                          setViewerOpen(true);
                          setFromGallery(true);
                        }}
                        className="relative rounded-xl overflow-hidden"
                      >
                        <Image
                          src={img}
                          alt={`gallery image ${i}`}
                          layout="intrinsic"
                          width={300}  // Set fixed width
                          height={300}  // Set fixed height
                          className="object-cover rounded-md" // Ensure uniformity
                        />

                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>


            {/* FULLSCREEN IMAGE VIEWER */}
            <AnimatePresence>
              {viewerOpen && (
                <motion.div
                  className="absolute inset-0 z-[70] bg-black flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <button
                    onClick={() => {
                      if (fromGallery) {
                        setViewerOpen(false);
                        setGalleryOpen(true);
                        setFromGallery(false);
                      } else {
                        setViewerOpen(false);
                      }
                    }}
                    className="absolute top-4 right-4 z-[80] p-2 rounded-full bg-black/70 border border-zinc-700 hover:bg-white hover:text-black transition"
                  >
                    <X size={18} />
                  </button>

                  <div className="relative w-full h-full max-w-[95vw] max-h-[95vh] flex items-center justify-center p-6">
                    <Image
                      src={project.images[activeIndex]}
                      alt="full view"
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
