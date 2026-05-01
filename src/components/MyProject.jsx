
import React, { useState } from "react";

import { projectData } from "../data/project";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const MyProject = () => {
    return (
        <section className="px-6 lg:px-[100px] text-white py-16 bg-[#111b34]">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-[50px] text-center">
                    My <span className='text-[#6c5ce7]'> Project</span>
                </h2>

                <div className="py-10 bg-[#0a0f2c]">

                    <Swiper
                        modules={[Autoplay, Pagination, Navigation]}
                        spaceBetween={0}
                        slidesPerView={1}
                        autoplay={{ delay: 2500, disableOnInteraction: false }}
                        pagination={{ clickable: false }}
                        loop={true}
                        navigation={false}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >

                        {projectData.map((project, index) => (
                            <SwiperSlide key={index}>

                                <ProjectCard project={project} />

                            </SwiperSlide>
                        ))}

                    </Swiper>

                </div>
            </div>
        </section>
    );
};

export default MyProject;


/* 👇 SAME FILE ME SIMPLE CARD COMPONENT */
const ProjectCard = ({ project }) => {
    const [showMore, setShowMore] = useState(false);

    const shortText =
        project.description.length > 80
            ? project.description.slice(0, 80) + "..."
            : project.description;

    return (
        <div className="mx-4 bg-[#111b34] rounded-xl text-white">

            {/* IMAGE */}
            <div className="flex justify-center overflow-hidden">
                <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-64 object-cover hover:scale-105 transition duration-500 rounded-t-xl "
                />
            </div>
            <div className="p-6">

                {/* NAME */}
                <h1 className='mt-6 mb-3 font-bold text-2xl'>
                    {project.name}
                </h1>

                {/* DESCRIPTION */}
                <p>
                    {showMore ? project.description : shortText}
                </p>

                {project.description.length > 80 && (
                    <button
                        onClick={() => setShowMore(!showMore)}
                        className="text-blue-400 mt-2 hover:underline"
                    >
                        {showMore ? "Read Less" : "Read More"}
                    </button>
                )}



            </div>
            <div className="px-6 pb-6">

                <button className="btn font-bold text-2xl hover:text-white text-[#6c5ce7]">
                    <a href={project.link} alt={project.name} target="blank">
                    View Project
                   </a>
                    </button>
            </div>

        </div>
    );
};