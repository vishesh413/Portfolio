import React, { useState, useEffect } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  // Disable scroll when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <section
      id="work"
      className={`py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative ${
        selectedProject ? "" : "clip-path-custom-3"
      } bg-gradient-to-b from-[#030712] via-[#050f1d] to-[#0a1d2d]`}
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-[#3b82f6] mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="w-full max-w-[330px] mx-auto border border-white bg-[#0f172a]/60 backdrop-blur-md rounded-xl shadow-xl overflow-hidden cursor-pointer hover:shadow-[#3b82f6]/50 hover:-translate-y-2 transition-transform duration-300"
          >
            <div className="p-3">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-36 object-cover rounded-lg"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-bold text-white mb-1">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-3 text-sm line-clamp-3">
                {project.description}
              </p>
              <div className="mb-3">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#1a1a2b] text-[10px] font-semibold text-[#3b82f6] rounded-full px-2 py-0.5 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedProject && (
        <>
          {/* Background Overlay */}
          <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"></div>

          {/* Modal Box */}
          <div className="fixed inset-0 z-[101] overflow-y-auto flex items-center justify-center p-6">
            <div className="bg-[#0f172a] rounded-xl shadow-2xl w-full max-w-3xl overflow-hidden relative">
              <div className="flex justify-end p-4">
                <button
                  onClick={handleCloseModal}
                  className="text-white text-3xl font-bold hover:text-[#3b82f6]"
                >
                  &times;
                </button>
              </div>

              <div className="flex flex-col">
                <div className="w-full flex justify-center bg-[#0f172a] px-4">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
                  />
                </div>
                <div className="lg:p-8 p-6">
                  <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
                    {selectedProject.title}
                  </h3>
                  <p className="text-gray-300 mb-6 lg:text-base text-xs">
                    {selectedProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-[#1a1a2b] text-xs font-semibold text-[#3b82f6] rounded-full px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1/2 bg-[#1e293b] hover:bg-[#1e40af] text-gray-300 px-4 py-2 rounded-xl text-sm font-semibold text-center"
                    >
                      View Code
                    </a>
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-1/2 bg-[#3b82f6] hover:bg-[#2563eb] text-white px-4 py-2 rounded-xl text-sm font-semibold text-center"
                    >
                      View Live
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Work;
