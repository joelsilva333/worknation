"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center overflow-hidden">
      <div className="flex max-w-7xl w-full gap-24 items-center">
        <motion.div
          className="w-1/2 px-4 text-left"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          <h2 className="font-syne text-5xl font-bold mb-6">
            Saiba mais sobre a Worknation
          </h2>

          <p className="font-rubik text-lg leading-relaxed text-white/80">
            Na WorkNation, somos apaixonados por contar histórias através do
            poder do audiovisual. Com uma equipa dedicada de profissionais
            criativos, transformamos ideias em experiências visuais impactantes
            que elevam marcas e conectam-se com audiências. Desde vídeos
            corporativos a campanhas publicitárias, cada projeto é uma
            oportunidade para inovar e inspirar. Junte-se a nós nesta jornada de
            criatividade e excelência.
          </p>

          <motion.div
            className="mt-6 inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <Link href="#trabalhos">
              <span className="rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/30">
                VER MEUS TRABALHOS
              </span>
            </Link>
          </motion.div>
        </motion.div>

        <motion.video
          src="https://ik.imagekit.io/hbitsr4yk/worknation/WORK%20NATION%20LOGO%20-%203D%20cubo%202025.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-1/2 h-125 rounded-4xl object-cover shadow-lg shadow-black/30"
          initial={{ opacity: 0, x: 60, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
        />
      </div>
    </section>
  );
}
