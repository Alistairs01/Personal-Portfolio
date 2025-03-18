import React, { useEffect } from "react";

const About = () => {
  // Log when the page renders successfully
  useEffect(() => {
    console.log("About page rendered successfully!");
  }, []);

  // Function to log when the resume downloads
  const handleDownload = () => {
    console.log("Resume downloaded successfully!");
  };

  return (
    <section className="p-10 flex flex-col md:flex-row items-center justify-between gap-10">
      {/* Left Section - Text */}
      <div className="md:w-2/3 text-center md:text-left flex flex-col gap-4">
        <h2 className="text-4xl font-bold">About Me</h2>
        <p className="about-me mt-4 text-lg text-gray-700">
          I'm Alexander Smith, a dedicated web developer with a degree in Computer Science.  
          Over the past five years, I have worked at two companies, refining my skills in both front-end and back-end development.  
          Before that, I completed an internship at Unified Mentor, gaining hands-on experience in real-world projects.  
          I specialize in crafting responsive and efficient web applications, ensuring seamless user experiences and performance-driven solutions.
        </p>
        <a
          href="/assets/Alistairs_Munene_Resume.pdf"
          download
          className="download-btn mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition self-start"
          onClick={handleDownload}
        >
          Download CV
        </a>
      </div>

      {/* Right Section - Image */}
      <div className="md:w-1/3 flex justify-center">
        <img
          src="/assets/profile2.jfif"
          alt="Alexander Smith"
          className="profile-img rounded-lg shadow-lg w-64 h-64 object-cover"
          onLoad={() => console.log("Profile picture rendered successfully!")}
          onError={() => console.error("Failed to load profile picture!")}
        />
      </div>
    </section>
  );
};

export default About;
