
import React, { useState } from "react";
import { projectData } from "../data/project";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import { motion } from "framer-motion";

const MyProject = () => {
  return (
    <section id="project" className="px-6 lg:px-[100px] text-white py-16 bg-[#111b34]">

      {/* HEADING */}
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        My <span className="text-[#6c5ce7]">Project</span>
      </h2>

      {/* SWIPER */}
      <div className="py-10 bg-[#0a0f2c] rounded-xl">

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projectData.map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectCard project={project} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default MyProject;



/* ✅ CARD COMPONENT */
const ProjectCard = ({ project, index }) => {
  const [showMore, setShowMore] = useState(false);

  const shortText =
    project.description.length > 80
      ? project.description.slice(0, 80) + "..."
      : project.description;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.6,
        delay: index * 0.3, // 🔥 1 by 1 animation
      }}
      viewport={{ once: false }}
      className="mx-2 bg-[#111b34] rounded-xl text-white overflow-hidden shadow-lg"
    >
      {/* IMAGE */}
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-56 object-cover hover:scale-110 transition duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <h1 className="mb-3 font-bold text-xl">
          {project.name}
        </h1>

        <p className="text-sm text-gray-300">
          {showMore ? project.description : shortText}
        </p>

        {project.description.length > 80 && (
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-[#6c5ce7] mt-2 text-sm hover:underline"
          >
            {showMore ? "Read Less" : "Read More"}
          </button>
        )}
      </div>

      {/* BUTTON */}
      <div className="px-5 pb-5">
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="inline-block font-semibold text-[#6c5ce7] hover:text-white transition"
        >
          View Project →
        </a>
      </div>
    </motion.div>
  );
};