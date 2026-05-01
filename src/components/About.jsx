import React from 'react'
import image2 from "../assets/about.png"
import { MdOutlineMail } from "react-icons/md";
import { IoIosContact } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";




const About = () => {
  return (
    <section className="bg-about text-white py-100 px-6 lg:px-[100px]">
      <div className="flex flex-col md:flex-row items-center gap-10">

        {/* Left Image */}
        <div className="flex-1 items-center justify-center">
          <img
            src={image2}
            alt="Arslan"
            className="w-96 h-96 rounded-xl shadow-lg object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className='text-[#6c5ce7]'> Me</span>
          </h2>

          <p className=" mb-6">
            Hi, I’m Arslan 👋  
           I'm a passionate Frontend Developer with a love for creating beautiful and functional websites. I enjoy turning ideas into reality using code.
          </p>

         

          {/* icon */}
      <div className='flex flex-col gap-2'>
        <div className='flex gap-6 items-center '>
            <IoIosContact className='text-[#6c5ce7] hover:scale-125 transition w-10 h-10' />
            <div className='flex gap-4 items-center'>
              <h1 className='text-xl text-[#E5E7EB] w-[90px]'>Name :</h1>
              <p className='text-[#FFFFFF] text-xl'>Muhammad Arslan</p>
            </div>
        </div>
         <div className='flex gap-6 items-center '>
             <MdOutlineMail className='text-[#6c5ce7] hover:scale-125 transition w-10 h-10' />
            <div className='flex gap-4 items-center'>
              <h1 className='text-xl text-[#E5E7EB] w-[90px]'>Email :</h1>
              <p className='text-[#FFFFFF] text-xl'>arslanhanif269@gmail.com</p>
            </div>
        </div>
         <div className='flex gap-6 items-center '>
            <FaLocationDot className='text-[#6c5ce7] hover:scale-125 transition w-10 h-10' />
            <div className='flex gap-4 items-center'>
              <h1 className='text-xl text-[#E5E7EB] w-[90px]'>Location :</h1>
              <p className='text-[#FFFFFF] text-xl'>Gulberg  Lahore</p>
            </div>
        </div>
</div>

         
          
        </div>

      </div>
    </section>
  )
}

export default About
