// import React from 'react'

import { skillsData } from '../data/skillsdata'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const MySkills = () => {
  return (
    <section className="px-6 lg:px-[100px] text-white py-16">
      <div className="">
        <h2 className="text-3xl md:text-4xl font-bold mb-[20px] text-center">
          My <span className='text-[#6c5ce7]'> Skills</span>
        </h2>

        <div className="py-10">

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={40}
            slidesPerView={1}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: false }}
            loop={true}
            navigation={false}
            breakpoints={{
              640: {
                slidesPerView: 2, // tablet
              },
              1024: {
                slidesPerView: 4, // desktop
              },
            }}
          >

            {skillsData.map((skill, index) => (
              <SwiperSlide key={index}>

                <div className="bg-[#111b34] p-6 rounded-xl text-white">

                  {/* IMAGE */}
                  <div className="flex justify-center">
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="w-20 h-20 hover:scale-110 transition duration-500"
                    />
                  </div>

                  {/* NAME */}
                  <h2 className="text-center my-3">{skill.name}</h2>

                  {/* PERCENT */}
                  <div className="flex justify-end mb-1">
                    <span>{skill.percent}%</span>
                  </div>

                  {/* BAR */}
                  <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-3 bg-[#6c5ce7]"
                      style={{ width: `${skill.percent}%` }}
                    ></div>
                  </div>

                </div>

              </SwiperSlide>
            ))}

          </Swiper>

        </div>






      </div>
    </section>
  )
}

export default MySkills
