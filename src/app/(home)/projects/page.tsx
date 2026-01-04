"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { PROJECTS } from "../../data/projects";

const ITEMS_PER_PAGE = 6;

export default function Projects() {
  const [visible, setVisible] = useState(ITEMS_PER_PAGE);

  const visibleProjects = PROJECTS.slice(0, visible);
  const hasMore = visible < PROJECTS.length;

  return (
    <div className="flex w-full flex-col gap-16 items-center min-h-screen py-24 px-4 bg-linear-to-b from-background/70 via-primary/0 to-background/70">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-7xl flex flex-col gap-4 mt-16">
        <h1 className="text-5xl font-bold font-syne">Nossos projectos</h1>
        <p className="text-xl text-white/50 font-rubik">
          Alguns dos nossos projectos mais recentes em produção audiovisual,
          motion design e comunicação visual.
        </p>
      </motion.div>

      <motion.hr
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-7xl border-t border-white/40 origin-left"
      />

      <div className="max-w-7xl w-full mb-32 flex flex-col gap-12">
        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
          {visibleProjects.map((project) => (
            <motion.li
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="hover:scale-105 transition-all duration-300 hover:bg-white/5 rounded-2xl hover:shadow-xl shadow-black/20">
              <Link href={`/projects/${project.id}`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1920}
                  height={1080}
                  className="w-full h-72 object-cover rounded-2xl"
                />

                <div className="flex flex-col px-4 py-5 gap-1">
                  <h3 className="font-syne font-bold text-2xl">
                    {project.title}
                  </h3>
                  <p className="font-rubik text-white/60">
                    {project.description}
                  </p>
                </div>
              </Link>
            </motion.li>
          ))}
        </motion.ul>

        {hasMore && (
          <button
            onClick={() => setVisible((prev) => prev + ITEMS_PER_PAGE)}
            className="btn-secondary px-6 py-2 self-center">
            CARREGAR MAIS PROJECTOS
          </button>
        )}
      </div>
    </div>
  );
}
