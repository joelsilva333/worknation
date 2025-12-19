"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { easeOut } from "framer-motion";

const PROJECT_LIMIT = 4;

const projects = [
  {
    id: 1,
    title: "Brand Motion System",
    client: "WorkNation",
    work: "Motion Design · Brand Animation",
    description:
      "Criação de um sistema de motion para reforço da identidade visual da marca em plataformas digitais.",
    image: "/images/projects/motion-1.png",
    link: "#",
  },
  {
    id: 2,
    title: "Animated Visual Identity",
    client: "WorkNation",
    work: "Logo Animation · Motion Branding",
    description:
      "Animações dinâmicas aplicadas ao logotipo e elementos gráficos para campanhas institucionais.",
    image: "/images/projects/motion-2.png",
    link: "#",
  },
  {
    id: 3,
    title: "UI Motion for Web Experience",
    client: "WorkNation",
    work: "UI Motion · Microinteractions",
    description:
      "Desenvolvimento de microinterações e transições animadas para melhorar a experiência do utilizador.",
    image: "/images/projects/motion-3.png",
    link: "#",
  },
  {
    id: 4,
    title: "Social Media Motion Pack",
    client: "WorkNation",
    work: "Social Media Motion · Short Animations",
    description:
      "Pacote de animações curtas otimizadas para redes sociais e campanhas digitais.",
    image: "/images/projects/motion-4.png",
    link: "#",
  },
  {
    id: 5,
    title: "Explainer Motion Video",
    client: "WorkNation",
    work: "Explainer Video · Motion Graphics",
    description:
      "Vídeo animado explicativo com foco em storytelling visual e comunicação clara da mensagem.",
    image: "/images/projects/motion-5.png",
    link: "#",
  },
];

export default function Projects() {
  const hasMoreProjects = projects.length > PROJECT_LIMIT;
  const visibleProjects = projects.slice(0, PROJECT_LIMIT);

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
    <section className="flex flex-col gap-16 items-center py-24 min-h-screen">
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
            <Link href={project.link}></Link>
            <motion.div variants={imageVariants}>
              <Image
                src={project.image}
                alt={project.title}
                width={1920}
                height={1080}
                className="h-125 w-full rounded-t-2xl object-cover"
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
            className="btn-primary px-8 py-2 flex gap-2">
            EXPLORAR MAIS PROJECTOS <ArrowRight />
          </Link>
        </motion.div>
      )}
    </section>
  );
}
