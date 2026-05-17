const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">

        {/* Name */}
        <div>
          <h2 className="text-xl font-bold">Muhammad Arslan</h2>
          <p className="text-gray-400">Frontend Developer | React Developer</p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1 text-gray-400">
            <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#project">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="font-semibold mb-2">Follow Me</h3>
          <div className="flex gap-4 justify-center md:justify-start text-gray-400">
            <span><a href="https://github.com/Arslan269-s" target="blank">GitHub</a></span>
            <span><a href="https://www.linkedin.com/in/arslanhanif/" target="blank">LinkedIn</a></span>
            <span><a href="/youtube.com">YouTube</a></span>
          </div>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-8 border-t border-gray-700 pt-4">
        © 2026 Mian Arslan. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;