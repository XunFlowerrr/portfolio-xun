"use client";
import { projects, projectDetails } from "@/data";
import { useRouter } from "next/navigation";
import React from "react";

// Define the type for projectDetails
interface ProjectDetailType {
  detailedDescription: string;
  images: string[];
}

const ProjectDetail = ({ params }: { params: { id: number } }) => {
  const router = useRouter();

  const projectId = Number(params.id);
  const project = projects.find((p) => p.id === projectId);
  const details = projectDetails.find((p) => p.id === projectId);

  if (!project || !details) return <div>Project not found</div>;

  return (
    <main className="relative bg-black-100 flex  flex-col overflow-hidden mx-auto sm:px-10 px-5 h-screen w-screen">
      <div className="max-w-7xl w-full">
        <div className="project-detail">
          <h1>{project.title}</h1>
          <p>{details.detailedDescription}</p>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;
