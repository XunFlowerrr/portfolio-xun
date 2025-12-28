import { projects, navItems } from "@/data";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "@/components/MagicButton";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }));
}

const ProjectDetails = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="flex justify-center items-center h-screen text-white">
        Project not found
      </div>
    );
  }

  // Fallback images if project.images is missing or empty
  const displayImages =
    project.images && project.images.length > 0
      ? project.images
      : [project.img, project.img]; // Use main image twice as fallback

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 py-20 min-h-screen">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full mt-20">
          {/* LEFT COLUMN: Text Content */}
          <div className="flex flex-col justify-center gap-8">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {project.title}
            </h1>

            <p className="text-white-100 leading-relaxed text-lg">
              {project.longDescription || project.des}
            </p>

            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold text-purple">Tech Stack</h3>
              <div className="flex flex-wrap gap-4">
                {project.iconLists.map((icon, index) => (
                  <div
                    key={index}
                    className="border border-white/[.2] rounded-full bg-black lg:w-14 lg:h-14 w-12 h-12 flex justify-center items-center"
                  >
                    <Image
                      src={icon}
                      alt="icon"
                      width={35}
                      height={35}
                      className="p-2"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <a href={project.link} target="_blank" rel="noreferrer">
                <MagicButton
                  title="View on GitHub"
                  icon={<FaLocationArrow />}
                  position="right"
                />
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Vertical Carousel */}
          <div className="flex items-center justify-center h-full w-full">
            <Carousel
              opts={{
                align: "start",
              }}
              orientation="vertical"
              className="w-full max-w-md h-[600px]"
            >
              <CarouselContent className="-mt-1 h-[600px]">
                {displayImages.map((img, index) => (
                  <CarouselItem key={index} className="pt-1 md:basis-1/2">
                    <div className="p-1 h-full">
                      <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/[0.1] bg-[#13162D] aspect-[9/16] lg:aspect-auto min-h-[300px]">
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
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
