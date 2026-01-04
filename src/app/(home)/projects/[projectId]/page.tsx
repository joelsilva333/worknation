"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { use } from "react";
import { useRouter } from "next/navigation";
import { PROJECTS } from "../../../data/projects";

export default function ProjectIdPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = use(params);
  const router = useRouter();

  const currentIndex = PROJECTS.findIndex(
    (project) => project.id === Number(projectId)
  );

  const currentProject = PROJECTS[currentIndex];
  const prevProject = PROJECTS[currentIndex - 1];
  const nextProject = PROJECTS[currentIndex + 1];

  if (!currentProject) {
    return <div>Projecto não encontrado</div>;
  }

  return (
    <div className="flex w-full flex-col gap-16 items-center min-h-screen py-24 px-4 bg-linear-to-b from-background/70 via-primary/0 to-background/70">
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-7xl flex flex-col gap-2 mt-16">
        <h1 className="text-5xl font-bold font-syne">{currentProject.title}</h1>
      </motion.div>

      <motion.hr className="w-full max-w-7xl border-t border-white/40" />

      <div className="w-full max-w-7xl flex flex-col gap-8 items-center">
        <motion.div className="overflow-hidden rounded-2xl w-full">
          <Image
            src={currentProject.image}
            alt={currentProject.title}
            width={1920}
            height={1080}
            className="w-full h-125 object-cover"
          />
        </motion.div>

        <div className="w-full flex flex-col gap-4 py-12">
          <h2 className="text-3xl font-syne font-bold text-white">
          Cliente: {currentProject.client}
          </h2>
          <p className="text-lg font-rubik text-white/60 ">
            {currentProject.description}
          </p>
        </div>

        <div className="flex justify-between w-full gap-4 mt-8">
          <motion.button
            disabled={!prevProject}
            onClick={() =>
              prevProject && router.push(`/projects/${prevProject.id}`)
            }
            whileHover={prevProject ? { x: -4 } : undefined}
            whileTap={prevProject ? { scale: 0.96 } : undefined}
            className={`btn-tertiary px-6 py-2 flex items-center gap-2 ${
              !prevProject && "opacity-40 cursor-not-allowed"
            }`}>
            <ArrowLeft className="h-4 w-4" />
            Anterior
          </motion.button>

          <motion.button
            disabled={!nextProject}
            onClick={() =>
              nextProject && router.push(`/projects/${nextProject.id}`)
            }
            whileHover={nextProject ? { x: 4 } : undefined}
            whileTap={nextProject ? { scale: 0.96 } : undefined}
            className={`btn-tertiary px-6 py-2 flex items-center gap-2 ${
              !nextProject && "opacity-40 cursor-not-allowed"
            }`}>
            Próximo
            <ArrowRight className="h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </div>
  );
}
