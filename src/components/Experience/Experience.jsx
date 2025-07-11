
const experiences = [
  {
    id: 1,
    role: "Frontend developement",
    company: "Learned through Projects & Practice",
    date: "2025 - Present",
    desc: "Focused on frontend development using React, HTML, CSS, and JavaScript. Built responsive and clean user interfaces with attention to detail and a passion for creating smooth UI and interactive web experiences",
    img: "/src/assets/experience_logo/full.stack.webp",
    skills: ["React", "Node.js", "MongoDB", "Express", "REST APIs", "Tailwind CSS"],
  },
  {
    id: 2,
    role: "MERN Stack (Backend)",
    company: "Self Learned",
    date: "2025 - Present",
    desc: "Explored backend development in the MERN stack. Worked on building APIs, adding authentication, and connecting with MongoDB to understand how backend systems work",
    img: "/src/assets/experience_logo/backend-logo.jpg",
    skills: ["Node.js", "Express", "JWT", "MongoDB", "Mongoose", "Postman"],
  },
];


const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-gradient-to-b from-[#030712] via-[#050f1d] to-[#0a1d2d] clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-[#3b82f6] mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my learning experience and skills I’ve acquired through hands-on practice
        </p>
      </div>

      {/* Experience Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-white h-full"></div>

        {/* Experience Entries */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`flex flex-col sm:flex-row items-center mb-16 ${
              index % 2 === 0 ? "sm:justify-end" : "sm:justify-start"
            }`}
          >
            {/* Experience Card */}
            <div
              className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl border border-white bg-gray-900 backdrop-blur-md shadow-[0_0_20px_1px_rgba(59,130,246,0.3)] ${
                index % 2 === 0 ? "sm:ml-0" : "sm:mr-0"
              } sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}
            >
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-white rounded-md overflow-hidden">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <h4 className="text-md sm:text-sm text-gray-300">
                      {experience.company}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">{experience.date}</p>
                </div>
              </div>

              <p className="mt-4 text-gray-400">{experience.desc}</p>
              <div className="mt-4">
                <h5 className="font-medium text-white">Skills:</h5>
                <ul className="flex flex-wrap mt-2">
                  {experience.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="bg-[#3b82f6] text-gray-100 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
