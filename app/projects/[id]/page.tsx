import { projects, navItems } from "@/data";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "@/components/MagicButton";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import ProjectCarousel from "@/components/ProjectCarousel";
import ReactMarkdown from "react-markdown";

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
          {/* RIGHT COLUMN (Mobile: Top, Desktop: Right) - Carousel */}
          <div className="flex items-center justify-center h-full w-full order-1 lg:order-2">
            <ProjectCarousel images={displayImages} />
          </div>

          {/* LEFT COLUMN (Mobile: Bottom, Desktop: Left) - Text Content */}
          <div className="flex flex-col justify-center gap-8 order-2 lg:order-1">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              {project.title}
            </h1>

            <div className="text-white-100 leading-relaxed text-lg prose prose-invert prose-headings:text-white prose-p:text-white-100 prose-strong:text-white prose-li:text-white-100 max-w-none">
              <ReactMarkdown>
                {project.longDescription || project.des}
              </ReactMarkdown>
            </div>

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
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;
