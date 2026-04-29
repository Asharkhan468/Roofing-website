"use client";

import { useState } from "react";
import { ZoomIn } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Residential Roof Replacement",
    before: "/Portfolio/before-1.webp",
    after: "/Portfolio/after-1.png",
  },
  {
    id: 2,
    title: "Commercial Flat Roof",
    before: "/Portfolio/before-2.jpg",
    after: "/Portfolio/after-2.png",
  },
  {
    id: 3,
    title: "Storm Damage Repair",
    before: "/Portfolio/before-3.png",
    after: "/Portfolio/after-3.png",
  },
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  return (
    <section className="py-16 bg-gray-50" id="portfolio">
      <div className="container mx-auto px-6 md:px-8 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Recent Projects
          </h2>
          <p className="text-gray-600">
            See the transformation — quality work you can trust.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative group">
                <div className="grid grid-cols-2">
                  <div className="relative h-48">
                    <img
                      src={project.before}
                      alt={`${project.title} Before`}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      Before
                    </span>
                  </div>

                  <div className="relative h-48">
                    <img
                      src={project.after}
                      alt={`${project.title} After`}
                      className="w-full h-full object-cover"
                    />
                    <span className="absolute bottom-2 right-2 bg-green-600 text-white text-xs px-2 py-1 rounded">
                      After
                    </span>
                  </div>
                </div>

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white" />
                </div>
              </div>

              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedProject(null)}
        >
          <div className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div>
                <img
                  src={selectedProject.before}
                  alt="Before"
                  className="w-full h-full object-cover"
                />
                <p className="text-center p-2 bg-gray-100">Before</p>
              </div>

              <div>
                <img
                  src={selectedProject.after}
                  alt="After"
                  className="w-full h-full object-cover"
                />
                <p className="text-center p-2 bg-gray-100">After</p>
              </div>
            </div>

            <button
              className="absolute top-4 right-4 text-white bg-black/60 rounded-full w-10 h-10 hover:bg-black"
              onClick={() => setSelectedProject(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
