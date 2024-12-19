"use client";

import { FaLocationArrow } from "react-icons/fa6";
import { useState } from "react";

import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import Image from "next/image";

const RecentProjects = () => {
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
  };

  const filteredProjects =
    selectedTag === "All"
      ? projects
      : projects.filter((project) => project.tags.includes(selectedTag));

  const tags = [
    "All",
    ...Array.from(new Set(projects.flatMap((project) => project.tags))),
  ];

  return (
    <section id="projects">
      <div className="py-20">
        <h1 className="heading">
          A small selection of{" "}
          <span className="text-purple">recent projects</span>
        </h1>
        <div className="flex justify-center mb-8 pt-5 bg-transparent fill-transparent text-white border-white-100 border-opacity-5 borde-1">
          <select
            value={selectedTag}
            onChange={(e) => handleTagClick(e.target.value)}
            className="mx-2 px-4 py-2 rounded bg-transparent border border-white-100 text-white"
          >
            {tags.map((tag) => (
              <option
                key={tag}
                value={tag}
                style={{
                  backgroundColor: "#2D2D2D", // Desired background color
                  color: "#FFFFFF", // Desired text color
                }}
              >
                {tag}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-wrap items-center justify-center p-4 gap-32 mt-10">
          {filteredProjects.map((item) => (
            <div
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-80 w-[80vw]"
              key={item.id}
            >
              <PinContainer
                title={item.link}
                href={`/projects/${item.id}`} // Link remains the same
              >
                <div
                  className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10"
                  onClick={() => window.open(`${item.link}`, "_blank")}
                >
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  >
                    <Image src="/bg.png" alt="bgimg" layout="fill" />
                  </div>
                  <Image
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0 w-full h-full object-cover"
                    layout="fill"
                  />
                </div>
                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                  {item.title}
                </h1>
                <p
                  className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <Image
                          src={icon}
                          alt="icon5"
                          className="p-2"
                          layout="fill"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Github Repo
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;
