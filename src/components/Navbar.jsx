import { useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <div>

            <nav className="navbar px-6 lg:px-[100px] py-4 w-full bg-navbar">

                {/* Logo */}
                <div className=''>
                    <h1 className="text-2xl font-bold tracking-wide">
                        <a href='/'> Arslan</a>
                    </h1>
                </div>
                <div className="menu-btn"
                onClick={() => setOpen(!open)}
                >
                    {open ? "✖" : "☰"}
                </div>

                {/* Menu */}
                <div className={`nav-links ${open ? "active" : ""}`}>
                        <a href="#hero" onClick={() => setOpen(false)} >Home</a>
                        <a href="#about" onClick={() => setOpen(false)}>About</a>
                        <a href="#skill" onClick={() => setOpen(false)}>Skill</a>
                        <a href="#project" onClick={() => setOpen(false)}>Projects</a>
                        <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
                        <a href='/'>
                            <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300 transition">
                                <a href="/MuhammadArslan.pdf" download>
                                    Download CV
                                </a>
                            </button>
                        </a>
                    
                </div>

            </nav>



        </div>
    )
}

export default Navbar
