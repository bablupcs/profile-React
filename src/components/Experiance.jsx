import React from "react";
import pics from "../../public/code.webp";
function Experiance() {
  return (
    <>
      <div name="Experiance">
        <h1 className="text-5xl font-extrabold mt-6 text-center">
          WORK <span className="text-red-700">EXPERIENCE</span>
        </h1>
      </div>

      <div className="max-w-screen-2xl mb-20 container mx-auto px-4 md:px-20 my-20 z-50 right-0 left-0 top-0">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <img src={pics} className=" mt-5" alt="" />
          </div>

          <div className="md:w-1/2 ml-10 md:mt-12">
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
              <li>
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-start mb-10 md:text-end justify-center">
                  <time className="font-semibold text-xl">Software Developer</time>
                  <div className="text-lg font-black">
                    Weblytic Lab
                  </div>
                   Contributed to the development 
                   and maintenance of complex web applications,
                   ensuring high performance and responsiveness.
                </div>
                <hr />
              </li>
              <li>
                
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="timeline-end mb-10">
                  <time className=" font-semibold text-xl ">Frontend Developer</time>
                  <div className="text-lg font-black">Adyan</div>
                  Developed and implemented interactive web interfaces using React and Redux.
                </div>
                <hr />
              </li>
            </ul>
          </div>
        </div>
      </div>    
      <hr />

    </>
  );
}

export default Experiance;
