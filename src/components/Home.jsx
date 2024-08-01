import React from "react";
import pics from "../../public/bablu.png";
import {
  IoLogoGithub,
  IoLogoJavascript,
  IoLogoLinkedin,
  IoLogoNodejs,
  IoLogoWhatsapp,
  IoMdMail,
} from "react-icons/io";
import { SiExpress, SiMongodb } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 z-50 right-0 left-0 top-0 order-1">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img src={pics} className="mt-5 rounded-3xl px-1" alt="" />
          </div>
          <div className="md:w-1/2 mt-28 md:mt-12">
            <h1 className="text-4xl font-bold">Hi There, I'm</h1>
            <h1 className="text-7xl font-extrabold mt-6">Bablu Singh</h1>
            <div className="flex space-x-1 text-2xl md:text-3xl">
              <h1 className="text-3xl font-bold mt-5">I'm a </h1>
              {/* <span className='text-red-700 text-4xl font-bold mt-4'>Developer</span> */}
              <ReactTyped
                className="text-red-700 text-4xl font-bold mt-4"
                strings={["Developer", "Programmer", " Coder"]}
                typeSpeed={50}
                backSpeed={60}
                loop={true}
              />
            </div>
            <p className="mt-5 text-xl md:text-md text-justify">
              Experienced Software Engineer specializing in frontend web
              development with over a year of hands-on experience. Seeking
              full-time React developer roles to drive innovation and create
              captivating user experiences.
            </p>

            <div className="flex justify-between">
              <div className="space-y-3">
                <h1 className="mt-3 font-semibold text-xl mb-3 text-blue-400">
                  Available on
                </h1>
                <ul className="flex space-x-3 ">
                  <li>
                    <a href="mailto:bablupcs123@gmail.com" target="_blank">
                    <IoMdMail className="text-4xl cursor-pointer hover:scale-110 duration-200 " />
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/+919120337096" target="_blank" >
                    <IoLogoWhatsapp className="text-4xl cursor-pointer hover:scale-110 duration-200 " />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/bablu-singh-518589195/" target="_blank">
                    <IoLogoLinkedin className="text-4xl cursor-pointer hover:scale-110 duration-200 " />{" "}
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/bablupcs" target="_blank">
                    <IoLogoGithub className="text-4xl cursor-pointer hover:scale-110 duration-200 " />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h1 className="mt-3 font-semibold text-xl mb-3 text-blue-400">
                  Working on
                </h1>
                <ul className="flex space-x-3 ">
                  <li>
                    <SiMongodb className="text-4xl cursor-pointer hover:scale-110 duration-200 " />
                  </li>
                  <li>
                    <SiExpress className="text-4xl cursor-pointer hover:scale-110 duration-200 " />
                  </li>
                  <li>
                    <IoLogoReact className="text-4xl cursor-pointer hover:scale-110 duration-200 " />{" "}
                  </li>
                  <li>
                    <IoLogoNodejs className="text-4xl cursor-pointer hover:scale-110 duration-200 " />
                  </li>
                </ul>
              </div>
            </div>
            <a className="btn btn-outline btn-secondary cursor-pointer mt-5" href="https://drive.google.com/file/d/1UlkHSdsFvowyMcHi3fsjyulGiZUjwb_-/view?usp=sharing" >Download Resume</a>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
export default Home;
