"use client";

import { motion } from "framer-motion";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex w-full flex-col gap-16 items-center justify-center min-h-screen px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-7xl flex flex-col gap-2 mt-16">
        <h1 className="text-5xl font-bold font-syne">Sobre a WorkNation</h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl text-white/40 font-rubik">
          A WorkNation é um estúdio criativo focado em produção audiovisual,
          motion design e comunicação visual para marcas, empresas e produtos
          digitais.
        </motion.p>
      </motion.div>

      <motion.hr
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-7xl border-t border-white/40 origin-left"
      />

      <div className="flex gap-12 w-full max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="font-bold text-5xl font-syne w-full max-w-lg">
          Criamos impacto visual em movimento.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl text-white/40 w-full max-w-xl font-rubik">
          Desenvolvemos conteúdos audiovisuais que unem animação, motion
          graphics, som e narrativa visual para comunicar mensagens de forma
          clara, envolvente e memorável. Cada projeto é pensado para gerar
          impacto e fortalecer a identidade de quem confia no nosso trabalho.
        </motion.p>
      </div>

      <div className="w-full flex gap-8 items-center max-w-7xl h-125">
        <Image
          src={"/images/projects/motion-1.png"}
          alt={"Imagem 1"}
          width={1920}
          height={1080}
          className="w-1/3 object-cover rounded-2xl h-full"
        />

        <Image
          src={"/images/projects/motion-2.png"}
          alt={"Imagem 2"}
          width={1920}
          height={1080}
          className="w-2/3 object-cover rounded-2xl h-full"
        />
      </div>

      <div className="max-w-7xl w-full mb-32 mt-8">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="font-syne font-bold text-5xl">
          Sigam-nos em:
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="flex items-center gap-24 text-white/50">
          <li className="mt-6 ">
            <Link
              href={"#"}
              target="_blank"
              className="text-4xl font-rubik hover:text-white flex items-center gap-2 hover:scale-105 transition-all duration-300">
              <InstagramIcon
                size={44}
                className={""}
              />{" "}
              Instagram
            </Link>
          </li>

          <li className="mt-4">
            <Link
              href={"#"}
              target="_blank"
              className="text-4xl font-rubik hover:text-white flex items-center gap-2 hover:scale-105 transition-all duration-300">
              <LinkedinIcon
                size={44}
                className={""}
              />{" "}
              LinkedIn
            </Link>
          </li>

          <li className="mt-4">
            <Link
              href={"#"}
              target="_blank"
              className="text-4xl font-rubik hover:text-white flex items-center gap-2 hover:scale-105 transition-all duration-300">
              <FacebookIcon
                size={44}
                className={""}
              />{" "}
              Facebook
            </Link>
          </li>
        </motion.ul>
      </div>
    </div>
  );
}
