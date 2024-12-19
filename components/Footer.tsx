import { FaLocationArrow } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/portfolio-xun/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
          layout="fill"
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">Contact me</h1>
        {/* <p className="text-white-200 md:mt-10 my-5 text-center">
          Reach out to me today
        </p> */}
        <div className="flex flex-col md:flex-row gap-5 mt-10">
          <MagicButton
            icon={<FaPhone />}
            title="096-832-6896"
            position="right"
          />

          <a href="mailto:tanityodsirawong@gmail.com">
            <MagicButton
              title="tanityodsirawong@gmail.com"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>

          <a href="https://github.com/XunFlowerrr">
            <MagicButton
              title="GitHub"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light"></p>

        <div className="flex items-center md:gap-3 gap-6">
          {/* {socialMedia.map((info) => (
            <div
              onClick={() => window.open(info.link, "_blank")}
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))} */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
