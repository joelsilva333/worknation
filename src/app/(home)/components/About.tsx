"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="min-h-96 flex items-center justify-center overflow-hidden px-12 py-24 bg-linear-to-b from-background/70 via-primary/0 to-background/70 max-lg:px-6 max-lg:py-16">
      <div className="flex max-w-7xl w-full gap-24 items-center max-lg:flex-col max-lg:gap-12">
        <motion.div
          className="w-1/2 px-4 text-left max-lg:w-full max-lg:px-0 max-lg:text-center"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          <h2 className="font-syne text-5xl font-bold mb-6 max-lg:text-4xl max-lg:leading-tight">
            Saiba mais sobre a Worknation
          </h2>

          <p className="font-rubik text-lg leading-relaxed text-white/80 max-lg:text-base">
            Somos uma agência criativa especializada em Motion Graphics 2D e 3D,
            Produção Audiovisual, Fotografia Profissional e Marketing
            Corporativo. Transformamos ideias em experiências visuais
            impactantes, ajudando marcas, empresas e projetos a comunicarem com
            mais força, modernidade e identidade. Unimos criatividade,
            estratégia e inovação para desenvolver conteúdos que inspiram,
            conectam e geram resultados. Cada projeto é criado com foco na
            qualidade, originalidade e valorização da imagem dos nossos
            clientes. Da produção de vídeos institucionais e campanhas
            publicitárias ao desenvolvimento de conteúdos digitais e cobertura
            fotográfica profissional, trabalhamos para elevar a presença visual
            da sua marca no mercado.
          </p>

          <motion.div
            className="mt-6 inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}>
            <Link href="/about">
              <span className="btn-tertiary px-6 py-2">
                VER MAIS SOBRE
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
          className="w-1/2 h-125 rounded-4xl object-cover shadow-lg shadow-black/30 max-lg:w-full max-lg:h-80"
          initial={{ opacity: 0, x: 60, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
        />
      </div>
    </section>
  );
}