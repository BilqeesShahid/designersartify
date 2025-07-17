"use client"
import React from 'react';

const projectData = [
  { id: 1, image: "/images/ali1.png" },
  { id: 2, image: "/images/haroon.png" },
  { id: 3, image: "/images/khizar1.png" },
  { id: 4, image: "/images/horse.png" },
  { id: 5, image: "/images/shayan2.png" },
  { id: 6, image: "/images/baki.png" },
];

const ProjectsSection = () => {
  return (
    <div id="projects" className="bg-gray-400 pt-32 pb-10">
      <div
        data-aos="zoom-in-up"
        className="text-center text-2xl lg:text-5xl font-bold text-black mb-10"
      >
        Our Projects
      </div>
      <div className="container mx-auto px-4 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projectData.map((project) => (
          <img
            key={project.id}
            src={project.image}
            alt={`Project ${project.id}`}
            className="w-full h-auto rounded-lg shadow-md object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
