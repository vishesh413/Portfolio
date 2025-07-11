import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profileImage from '../../assets/profile-pic.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-32 py-20 font-sans bg-gradient-to-b from-[#030712] via-[#060f23] to-[#000b1e]"
    >
      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-12">
        {/* Left Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Hi, I am
          </h1>
          <h2 className="text-5xl md:text-6xl font-extrabold text-[#3b82f6] mb-6 drop-shadow-[0_0_25px_#3b82f6] whitespace-nowrap">
            Vishesh Dwivedi
          </h2>

          {/* Typing Effect */}
          <div className="inline-block px-4 py-2 mb-6 rounded-lg border border-[#3b82f6] bg-[#0a1d2d]/40 backdrop-blur-sm shadow-[0_0_30px_#3b82f6]">
            <h3 className="text-white text-lg md:text-xl font-semibold">
              I am a{' '}
              <ReactTypingEffect
                text={[
                  'Fullstack Developer',
                  'UI/UX Designer',
                  'Coder',
                ]}
                speed={100}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={1500}
                cursorRenderer={(cursor) => (
                  <span className="text-[#60a5fa]">{cursor}</span>
                )}
              />
            </h3>
          </div>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8">
           I'm a full-stack web developer focused on creating responsive and user-friendly websites. I've built three projects using various technologies, including the MERN stack, and continue to sharpen my skills through hands-on learning.
          </p>

         <a
  href="https://drive.google.com/file/d/1_pLl2wjYVCU-wnqXIhjhYr0YC0SJXvwv/view?usp=sharing"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block py-3 px-8 rounded-full text-lg font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-300"
>
  Download CV
</a>


        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="w-64 h-64 md:w-96 md:h-96 rounded-full border-4 border-[#3b82f6] overflow-hidden relative">
            <img
              src={profileImage}
              alt="Vishesh Dwivedi"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
