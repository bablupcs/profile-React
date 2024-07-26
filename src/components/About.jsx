import React from "react";
import pics from "../../public/about.gif";

function About() {
  return (
    <>
      <div name="About">
        <h1 className="text-5xl font-extrabold mt-6 text-center">
          All <span className="text-red-700">About </span>Me
        </h1>
      </div>

      <div className="max-w-screen-2xl mb-20 container mx-auto px-4 md:px-20 my-20 z-50 right-0 left-0 top-0">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-13 md:mt-12">
            <p className="text-xl mb-5 md:text-md text-justify">
              I am a skilled Frontend Developer with{" "}
              <span className="font-bold text-black">
                1 years of experience.{" "}
              </span>
              I have expertise in HTML5, CSS3, JavaScript, React, Redux,
              Node.js, and Core PHP.
            </p>
            <hr />
            <p className="text-xl mb-5 mt-5 md:text-md text-justify">
              My professional background includes: Intership at weblytic Lab
              Noida (Nov '23 — Feb '28) Frontend Developer at adyan (Mar'23 —
              Sep '24)
            </p>
            <hr />
            <p className="text-xl mb-5 mt-5 md:text-md text-justify">
              I excel in creating dynamic web interfaces and have experience
              with Tailwind CSS, BootStrap Git/GitHub, and Postman for API
              testing. I hold a MCA in Computer from VBSP University and
              completed Web Development training at weblytic Lab.
            </p>
            <hr />
          </div>

          <div className="md:w-1/2 md:order-2">
            <img src={pics} className=" mt-5" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
