"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { easeOut } from "framer-motion";
import { PROJECTS } from "../../data/projects";

const PROJECT_LIMIT = 4;

export default function Projects() {
  const hasMoreProjects = PROJECTS.length > PROJECT_LIMIT;
  const visibleProjects = PROJECTS.slice(0, PROJECT_LIMIT);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: easeOut,
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.05, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.9, ease: easeOut },
    },
  };

  return (
    <section className="flex flex-col gap-16 items-center py-24 min-h-screen  bg-linear-to-b from-background/70 via-primary/0 to-background/70">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="font-syne text-5xl font-bold">
        Projetos em Destaque
      </motion.h2>

      <motion.ul
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap w-full gap-24 justify-center max-w-7xl">
        {visibleProjects.map((project) => (
          <motion.li
            key={project.id}
            variants={itemVariants}
            className="max-w-xl w-full rounded-2xl hover:scale-105 transition-all duration-300 hover:bg-gray-200/5 cursor-pointer">
            <Link href={`/projects/${project.id}`}>
              <motion.div variants={imageVariants}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1920}
                  height={1080}
                  className="h-100 w-full rounded-t-2xl object-cover"
                />
              </motion.div>

              <motion.div
                className="text-white flex flex-col gap-4 py-8 px-5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                viewport={{ once: true }}>
                <div className="flex items-center gap-4">
                  <h3 className="text-2xl font-syne font-bold">
                    {project.title}
                  </h3>
                  <motion.hr
                    initial={{ width: 0 }}
                    whileInView={{ width: 96 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-2 border-blue-500"
                  />
                </div>

                <div className="flex flex-col gap-2 font-rubik items-start">
                  <p className="text-sm text-gray-300">
                    Client: <span className="text-white">{project.client}</span>
                  </p>
                  <p className="text-sm text-gray-300">
                    Work: <span className="text-white">{project.work}</span>
                  </p>
                </div>
              </motion.div>
            </Link>
          </motion.li>
        ))}
      </motion.ul>

      {hasMoreProjects && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          <Link
            href="/projects"
            className="btn-tertiary px-8 py-2 flex gap-2">
            EXPLORAR MAIS PROJECTOS <ArrowRight />
          </Link>
        </motion.div>
      )}
    </section>
  );
}
