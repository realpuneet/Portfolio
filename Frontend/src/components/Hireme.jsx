import React from "react";
import hireMe from "../assets/Hireme1.png";
const Hireme = () => {
  return (
    <section id="hireme" className="py-10 px-3 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          Hire <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg"> Do you have any work?</p>
      </div>
      <div
        className="bg-gray-700 relative px-8 rounded-2xl py-5 lg:max-w-4xl 
      mx-auto min-h-[24rem] mt-24 flex gap-6 lg:flex-row 
      flex-col-reverse items-center"
      >
        <div className="text-2xl font-semibold ">
          <h2>Do you want any work from me?</h2>
          <p className="lg:text-left text-justify max-w-lg text-sm mt-4 text-gray-200 leading-6">
          As a fresher MERN stack developer, I specialize in creating responsive web interfaces with React.js, building robust RESTful APIs using Node.js and Express.js, and managing MongoDB databases. I can handle end-to-end web application development, including deployment on cloud platforms like AWS, Heroku, or Vercel. My skill set also includes using modern CSS frameworks, implementing state management with Redux or Context API, integrating third-party APIs, and maintaining clean, well-documented code with version control through Git and GitHub. If you need any development work, I'd be happy to help.
          </p>
          <button className="btn-primary mt-10">
          <a href="https://wa.me/+919399336702" target="_blank" rel="noopener noreferrer"> Say Hello
          </a>
           
            <span role="img" aria-label="waving hand">
              &#x1F44B;
            </span>
          </button>
        </div>
        <img
          src={hireMe}
          alt=""
          className="md:h-[30rem]  md:absolute lg:h-[37rem] h-80 lg:absolute bottom-0 -right-10 object-cover"
        />
      </div>
    </section>
  );
};

export default Hireme;
