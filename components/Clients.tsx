"use client";

import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/data";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 15,
    },
  },
};

const Clients = () => {
  return (
    <section id="Tech-Stack" className="py-20 w-full overflow-hidden">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="heading"
      >
        My tech stack and{" "}
        <span className="text-purple">Programming Languages</span>
      </motion.h1>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-wrap items-stretch justify-center gap-6 mt-12 w-full"
      >
        {testimonials.map((item, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{
              y: -8,
              borderColor: "rgba(203, 172, 249, 0.4)",
              boxShadow: "0px 10px 30px -10px rgba(203, 172, 249, 0.15)",
            }}
            className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] relative rounded-2xl border border-slate-800 p-6 md:p-8 flex flex-col justify-between transition-all duration-300"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
            }}
          >
            <div>
              <h2 className="text-center text-lg md:text-xl font-bold text-white mb-6 border-b border-white-100/10 pb-3">
                {item.quote}
              </h2>
              <div className="flex flex-col gap-3 justify-center">
                {item.icons.length > 4 ? (
                  <>
                    <div className="flex flex-row flex-wrap items-center justify-center gap-x-3 gap-y-2">
                      {item.icons.slice(0, Math.ceil(item.icons.length / 2)).map((icon, iconIdx) => (
                        <motion.div
                          key={iconIdx}
                          whileHover={{
                            scale: 1.05,
                            y: -2,
                            backgroundColor: "rgba(203, 172, 249, 0.15)",
                            borderColor: "rgba(203, 172, 249, 0.3)",
                          }}
                          transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          className="flex items-center space-x-2 shrink-0 bg-white-100/5 px-3 py-1.5 rounded-lg border border-white-100/10 cursor-pointer transition-colors duration-200"
                        >
                          <img
                            src={icon}
                            alt={`icon-${iconIdx}`}
                            className="w-5 h-5 object-contain"
                          />
                          <span className="text-xs md:text-sm text-white font-medium">
                            {item.iconsName[iconIdx]}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                    <div className="flex flex-row flex-wrap items-center justify-center gap-x-3 gap-y-2">
                      {item.icons.slice(Math.ceil(item.icons.length / 2)).map((icon, iconIdx) => {
                        const originalIdx = Math.ceil(item.icons.length / 2) + iconIdx;
                        return (
                          <motion.div
                            key={originalIdx}
                            whileHover={{
                              scale: 1.05,
                              y: -2,
                              backgroundColor: "rgba(203, 172, 249, 0.15)",
                              borderColor: "rgba(203, 172, 249, 0.3)",
                            }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            className="flex items-center space-x-2 shrink-0 bg-white-100/5 px-3 py-1.5 rounded-lg border border-white-100/10 cursor-pointer transition-colors duration-200"
                          >
                            <img
                              src={icon}
                              alt={`icon-${originalIdx}`}
                              className="w-5 h-5 object-contain"
                            />
                            <span className="text-xs md:text-sm text-white font-medium">
                              {item.iconsName[originalIdx]}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </>
                ) : (
                  <div className="flex flex-row flex-wrap items-center justify-center gap-x-3 gap-y-2">
                    {item.icons.map((icon, iconIdx) => (
                      <motion.div
                        key={iconIdx}
                        whileHover={{
                          scale: 1.05,
                          y: -2,
                          backgroundColor: "rgba(203, 172, 249, 0.15)",
                          borderColor: "rgba(203, 172, 249, 0.3)",
                        }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="flex items-center space-x-2 shrink-0 bg-white-100/5 px-3 py-1.5 rounded-lg border border-white-100/10 cursor-pointer transition-colors duration-200"
                      >
                        <img
                          src={icon}
                          alt={`icon-${iconIdx}`}
                          className="w-5 h-5 object-contain"
                        />
                        <span className="text-xs md:text-sm text-white font-medium">
                          {item.iconsName[iconIdx]}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Clients;
