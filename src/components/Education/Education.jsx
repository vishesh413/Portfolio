import React from "react";
import mitsLogo from "../../assets/education_logo/MITS.jpg";

const Education = () => {
  return (
    <section
      id="education"
      className="relative z-[1] py-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-gradient-to-b from-[#030712] via-[#050f1d] to-[#0a1d2d] clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-[#3b82f6] mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here's
          where I currently study.
        </p>
      </div>

      {/* Education Card */}
      <div className="relative">
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-transparent h-full opacity-20"></div>

        <div className="flex justify-center mb-16">
          <div className="w-full sm:max-w-md p-6 sm:p-8 border border-white bg-[#0f172a]/60 backdrop-blur-md rounded-xl shadow-xl overflow-hidden cursor-pointer hover:shadow-[#3b82f6]/50 hover:-translate-y-2 transition-transform duration-300">
            <div className="flex items-center space-x-6">
              <div className="w-24 h-16 bg-white rounded-md overflow-hidden">
                <img
                  src={mitsLogo}
                  alt="MITS Gwalior"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-xl font-semibold text-white">
                    B.Tech (ET) – 5th Sem
                  </h3>
                  <h4 className="text-md sm:text-sm text-gray-300">
                    MITS Gwalior
                  </h4>
                </div>
                <p className="text-sm text-gray-500 mt-2">2025 - Present</p>
              </div>
            </div>

            <p className="mt-4 text-[#c1d7ff] font-bold">CGPA: 8.0</p>
            <p className="mt-2 text-gray-300">
              I’m currently pursuing Electronic & Telecommunication at MITS Gwalior,
              exploring full-stack development, DSA, and building projects.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
