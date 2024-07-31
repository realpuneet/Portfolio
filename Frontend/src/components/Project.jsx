import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

import project1 from "../assets/project1.png";
import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project_3.png";
import project4 from "../assets/portfolio.png";

const Project = () => {

  const projects = [
    {logo: project1, name:'My App', github: 'http://github.com/realpuneet/IMDB-CLONE'},
    {logo: project2, name:'Job Search', github: 'http://github.com/realpuneet/IMDB-Clone'},
    {logo: project3, name:'Space Tourism', github: 'http://github.com/realpuneet/IMDB-Clone'},
    {logo: project4, name:'Portfolio', github: 'http://github.com/realpuneet/IMDB-Clone'},
  ]

  return (
    <section id="projects" className="py-20 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-2xl px-1 mx-auto items-center relative">
        <div className="lg:w-full w-full">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={25}
            breakpoints={{
              768: {
                slidesPerView: 3,
              },
            }}
            loop={true}
            autoplay={{
              delay: 3000,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
          >
           {
            projects?.map((proj, i)=>(
              <SwiperSlide>
              <div key={i} className="h-fit w-full p-2 bg-slate-700 rounded-xl">
                <img src={proj.logo} alt="Project 1" className="rounded-lg" />
                <h3 className="text-xl my-4">{proj.name}</h3>
                <div className="flex gap-3">
                  <a
                    href={proj.github}
                    className="text-cyan-600 bg-gray-800 hover:underline px-2 py-1 inline-block"
                  >
                    Github
                  </a>
                </div>
              </div>
            </SwiperSlide>
            ))
           }
           
          </Swiper>
        </div>
        
      </div>
    </section>
  );
};

export default Project;
