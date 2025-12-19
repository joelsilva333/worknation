"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-16 items-center justify-center min-h-screen px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-7xl flex flex-col gap-2">
        <h1 className="text-6xl font-bold font-syne">Sobre a WorkNation</h1>

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
          className="font-bold text-7xl font-syne w-full max-w-lg">
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
    </div>
  );
}
