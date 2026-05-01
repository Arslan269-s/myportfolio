import React from 'react'

const Navbar = () => {
    return (
        <div>

            <nav className="bg-navbar text-white px-6 lg:px-[100px] py-4 flex justify-between items-center shadow-md">

                {/* Logo */}
                <h1 className="text-2xl font-bold tracking-wide">
                    Arslan
                </h1>

                {/* Menu */}
                <div className=''>
                    <ul className="hidden md:flex gap-8 text-sm font-medium flex items-center">
                        <li className="hover:text-gray-400 cursor-pointer">Home</li>
                        <li className="hover:text-gray-400 cursor-pointer">About</li>
                        <li className="hover:text-gray-400 cursor-pointer">Skill</li>
                        <li className="hover:text-gray-400 cursor-pointer">Projects</li>
                        <li className="hover:text-gray-400 cursor-pointer">Contact</li>
                        <li>
                            <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition">
                                Download CV
                            </button>
                        </li>
                    </ul>


                </div>

            </nav>



        </div>
    )
}

export default Navbar
