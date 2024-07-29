import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

import project1 from "../assets/project1.png";
import projectimg from "../assets/hireMe.png"

const Project = () => {
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-2xl px-5 mx-auto items-center relative">
        <div className="lg:w-50 w-full">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={20}
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
            <SwiperSlide>
              <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                <img src={project1} alt="Project 1" className="rounded-lg" />
                <h3 className="text-xl my-4">Movie App</h3>
                <div className="flex gap-3">
                  <a
                    href=""
                    className="text-cyan-600 bg-gray-800 hover:underline px-2 py-1 inline-block"
                  >
                    Github
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                <img src={project1} alt="Project 1" className="rounded-lg" />
                <h3 className="text-xl my-4">Movie App</h3>
                <div className="flex gap-3">
                  <a
                    href=""
                    className="text-cyan-600 bg-gray-800 hover:underline px-2 py-1 inline-block"
                  >
                    Github
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                <img src={project1} alt="Project 1" className="rounded-lg" />
                <h3 className="text-xl my-4">Movie App</h3>
                <div className="flex gap-3">
                  <a
                    href=""
                    className="text-cyan-600 bg-gray-800 hover:underline px-2 py-1 inline-block"
                  >
                    Github
                  </a>
                </div>
              </div>
            </SwiperSlide><SwiperSlide>
              <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                <img src={project1} alt="Project 1" className="rounded-lg" />
                <h3 className="text-xl my-4">Movie App</h3>
                <div className="flex gap-3">
                  <a
                    href=""
                    className="text-cyan-600 bg-gray-800 hover:underline px-2 py-1 inline-block"
                  >
                    Github
                  </a>
                </div>
              </div>
            </SwiperSlide><SwiperSlide>
              <div className="h-fit w-full p-4 bg-slate-700 rounded-xl">
                <img src={project1} alt="Project 1" className="rounded-lg" />
                <h3 className="text-xl my-4">Movie App</h3>
                <div className="flex gap-3">
                  <a
                    href=""
                    className="text-cyan-600 bg-gray-800 hover:underline px-2 py-1 inline-block"
                  >
                    Github
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        
      </div>
    </section>
  );
};

export default Project;
