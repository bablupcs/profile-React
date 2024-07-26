import React from "react";
import tiw from "../../public/tiw.png";
import Bootstrap from "../../public/Bootstrap.png";
import html from "../../public/html.png";
import css3 from "../../public/css3.png";
import javascript from "../../public/javascript.png";
import react from "../../public/react.png";
import node from "../../public/node.png";
function Skill() {
  const cardItems = [
    {
      id: 1,
      logo: javascript,
      name: "JAVASCRIPT",
      style: "hover:bg-[#e6c315]",
    },
    {
      id: 2,
      logo: node,
      name: "NODE JS",
      style: "hover:bg-[#6cc24a]",
    },
    {
      id: 3,
      logo: react,
      name: "REACT JS",
      style: "hover:bg-[#61dafb]",
    },
    {
      id: 4,
      logo: html,
      name: "HTML5",
      style: "hover:bg-[#e34f26]",
    },
    {
      id: 5,
      logo: css3,
      name: "CSS3",
      style: "hover:bg-[#1572b6]",
    },
    {
      id: 6,
      logo: tiw,
      name: "Tailwind",
      style: " hover:bg-[#38bdf8]",
    },
    {
      id: 7,
      logo: Bootstrap,
      name: "Bootstrap",
      style: "hover:bg-[#563d7c]",
    },
  ];

  return (
    <>
    <div name="Skill">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
        <div>
          <h1 className="text-5xl font-extrabold mt-6 text-center">
            My <span className="text-red-700">Technical </span>Skills
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mt-10">
          {cardItems.map(({ id, logo, name, style }) => (
            <div
              key={id}
              className={`md:w-[90%] md:h-[100%] border-[3px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 hover:bg-opacity-20 duration-200 ${style} space-x-3`}
            >
              <img src={logo} className="w-[100px] h-[100px] m-8" alt={name} />
              <div>
                <div className="text-center font-extrabold">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
      <hr className="mt-10"/>
      
    </>
  );
}

export default Skill;
