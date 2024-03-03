import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProjectCardProps {
  src: string;
  title: string;
  description: string;
  link?: string;
}

const ProjectCard = ({ src, title, description, link }: ProjectCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-[33%]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />
      <div className="relative p-4">
        <Link href={ link || '' }>
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;