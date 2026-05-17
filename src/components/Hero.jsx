import React, { useState } from 'react'
import myImage from "../assets/arslan3.png"
import facebook from "../assets/facebook.jpg"
import linkdin from "../assets/linkdin.png"
import twiter from "../assets/twitter.png"
import github from "../assets/github.png"

import { motion } from "framer-motion";


const Hero = () => {

    const [activeBtn, setActiveBtn] = useState("");

    return (


        <motion.div initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            id="hero"
            className='px-6 lg:px-[100px] py-100 my-6 grid lg:grid-cols-2 pt-16'>

            <section className=" flex flex-col justify-center items-start text-white my-6 lg:my-0">

                <h1 className="text-5xl font-bold">Hi, I'm
                    <h1 className='text-[#6c5ce7]'>
                        Muhammad Arslan 👋 </h1></h1>
                <h2 className="my-4 text-lg">
                    Frontend Developer | React | Tailwind
                </h2>

                <p className="text-gray-400">I build responsive and user-freiendly website using
                    <br />
                    HTML, CSS, Javascript and modran framworks.
                </p>


                <div className='flex gap-5 mt-5'>
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.5 }} className={`px-4 py-2 rounded border transition 
                            ${activeBtn === "live"
                            ? "bg-blue-500 text-white"
                            : "border-[#6c5ce7] text-white hover:bg-[#5a4bd6]"
                        }`}
                        onClick={() => setActiveBtn("live")}>
                        <a
                            href="https://www.xecutivedirect.com/"
                            target="_blank"
                            rel="noreferrer">

                            Live Demo

                        </a>
                    </motion.button>
                    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.5 }} className={`px-4 py-2 rounded border transition
                                ${activeBtn === "github"
                            ? "bg-blue-500 text-white"
                            : "border-[#6c5ce7] hover:bg-[#6c5ce7] hover:text-white"
                        }`}
                        onClick={() => setActiveBtn("github")}>
                        <a
                            href="https://github.com/Arslan269-s"
                            target="_blank"
                            rel="noreferrer">
                            Github
                        </a>
                    </motion.button>
                </div>
                <div className='flex justify-between gap-6 my-5'>
                    <div className='w-12 h-12 flex items-center justify-center '>
                        <a href='https://www.facebook.com/arslanmhrr/' target='blank'> <img src={facebook} alt='facebook' className='w-6 h-6 transition-transform duration-300 hover:scale-125' /></a>
                    </div>
                    <div className='w-12 h-12 flex items-center justify-center '>
                        <a href='https://www.linkedin.com/in/arslanhanif/' target='blank'> <img src={linkdin} alt='linkdin' className='w-6 h-6 transition-transform duration-300 hover:scale-125' />
                        </a>
                    </div>
                    <div className='w-12 h-12 flex items-center justify-center '>
                        <a href=''> <img src={twiter} alt='twiter' className='w-6 h-6 transition-transform duration-300 hover:scale-125' />
                        </a>
                    </div>
                    <div className='w-12 h-12 flex items-center justify-center '>
                        <a href='https://github.com/Arslan269-s' target='blank'>  <img src={github} alt='github' className='w-6 h-6 transition-transform duration-300 hover:scale-125' />
                        </a>
                    </div>
                </div>
            </section>


            <div className="relative flex justify-center items-end">

                {/* Gradient Glow */}
                <div className="absolute w-[400px] h-[400px] bg-[#6c5ce7]/20 rounded-full blur-3xl"></div>

                {/* Dots */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff22_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                {/* Image */}

                <div className='flex items-center justify-center'>
                    <img src={myImage} className="w-96 h-96 rounded-xl shadow-lg object-cover z-10" alt="image section" />
                </div>

            </div>

            {/* </div> */}
        </motion.div>


    )
}

export default Hero
