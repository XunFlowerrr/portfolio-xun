import React from "react";
import Image from "next/image";

import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <section id="experience" className="py-20 w-full">
      <h1 className="heading">
        My <span className="text-purple">work experience</span>
      </h1>

      <div className="w-full mt-12 items-center justify-center flex flex-col gap-5">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            //   random duration will be fun , I think , may be not
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              //   add these two
              //   you can generate the color from here https://cssgradient.io/
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              // add this border radius to make it more rounded so that the moving border is more realistic
              borderRadius: `calc(1.75rem* 0.96)`,
            }}
            // remove bg-white dark:bg-slate-900
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-start p-3 py-6 md:p-5 lg:p-10 gap-5 text-start w-full">
              <div className="flex-shrink-0 flex items-center justify-center">
                <Image
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className="lg:w-32 md:w-20 w-16 rounded-lg object-cover"
                  width={500}
                  height={500}
                />
              </div>
              <div className="lg:ms-5 flex-1 w-full">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                  <h1 className="text-start text-xl md:text-2xl font-bold text-white">
                    {card.title} <span className="text-purple">@ {card.company}</span>
                  </h1>
                  <span className="text-sm font-semibold text-purple bg-purple/10 px-3 py-1 rounded-full">
                    {card.duration}
                  </span>
                </div>
                <div className="text-sm text-gray-400 mt-1 font-medium">
                  {card.location}
                </div>
                <p className="text-white-100 mt-3 font-semibold text-sm italic">
                  {card.companyDesc}
                </p>
                <ul className="list-disc list-outside ml-5 mt-4 space-y-2 text-white-100/80 text-sm font-normal">
                  {card.desc.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Experience;
