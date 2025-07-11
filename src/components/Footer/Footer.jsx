import React from "react";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md"; // ✅ Correct source

const Footer = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#0c0c17] text-white py-10 px-[12vw] md:px-[7vw] lg:px-[20vw] border-t border-gray-800 font-sans">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold text-[#3b82f6] mb-2">Vishesh Dwivedi</h2>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-4 text-sm sm:text-base">
          {[
            { name: "About", id: "about" },
            { name: "Skills", id: "skills" },
            { name: "Experience", id: "experience" },
            { name: "Projects", id: "work" },
            { name: "Education", id: "education" },
            { name: "Contact", id: "contact" },
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleScroll(item.id)}
              className="hover:text-[#60a5fa] transition-colors"
            >
              {item.name}
            </button>
          ))}
        </nav>

        <div className="flex justify-center space-x-5 mt-6">
          {[
            { icon: <MdEmail />, link: "mailto:visheshd223@gmail.com" },
            { icon: <FaTwitter />, link: "#" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/vishesh-dwivedi-912562280" },
            { icon: <FaInstagram />, link: "https://www.instagram.com/_vishesh.v.s_?igsh=Y28xeWwyZHRmdzJn" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl hover:text-[#60a5fa] transition-transform transform hover:scale-110"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <p className="text-sm text-gray-400 mt-6">
          © 2025 Vishesh Dwivedi. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
