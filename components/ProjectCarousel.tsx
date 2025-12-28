"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

interface ProjectCarouselProps {
  images: string[];
}

const ProjectCarousel = ({ images }: ProjectCarouselProps) => {
  const [isMobile, setIsMobile] = useState(false);
  const [api, setApi] = useState<CarouselApi>();
  const autoplayRef = useRef(
    Autoplay({
      delay: 3000,
      stopOnInteraction: false,
    })
  );

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // lg breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      const plugin = autoplayRef.current;
      plugin.stop();

      // Resume autoplay after 5 seconds cooldown
      setTimeout(() => {
        plugin.play();
      }, 5000);
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  const orientation = isMobile ? "horizontal" : "vertical";
  const showArrows = images.length > 1;

  return (
    <Carousel
      setApi={setApi}
      plugins={[autoplayRef.current]}
      opts={{
        align: "start",
        loop: true,
      }}
      orientation={orientation}
      className="w-full max-w-4xl"
    >
      <CarouselContent className={isMobile ? "" : "h-[500px]"}>
        {images.map((img, index) => (
          <CarouselItem key={index} className={isMobile ? "" : "h-full"}>
            <div className="p-1">
              <div className="relative w-full rounded-3xl overflow-hidden border border-white/[0.1] bg-[#13162D] aspect-video">
                <Image
                  src={img}
                  alt={`image-${index}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-3xl hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {showArrows && (
        <>
          <CarouselPrevious
            className={cn("hidden md:flex", !isMobile && "-top-12")}
          />
          <CarouselNext
            className={cn("hidden md:flex", !isMobile && "bottom-2")}
          />
        </>
      )}
    </Carousel>
  );
};

export default ProjectCarousel;
