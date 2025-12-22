"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="flex w-full flex-col gap-16 items-center min-h-screen px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-7xl flex flex-col gap-4 mt-16">
        <h1 className="text-5xl font-bold font-syne">Nossos projectos</h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl text-white/40 font-rubik">
          Alguns dos nossos projectos mais recentes em produção audiovisual,
          motion design e comunicação visual.
        </motion.p>
      </motion.div>

      <motion.hr
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-7xl border-t border-white/40 origin-left"
      />

      <div className="max-w-7xl w-full mb-32 items-center flex flex-col gap-12">
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true }}
          className="flex items-center gap-24 text-white w-full">
          <li className="max-w-sm w-full hover:scale-105 transition-all duration-300 hover:bg-white/5 rounded-2xl hover:shadow-xl shadow-black/20">
            <Link
              href={"/projects/21"}
              className="w-full">
              <Image
                src={"/images/projects/motion-1.png"}
                alt={"Projects WorkNation"}
                width={1920}
                height={1080}
                className="w-full h-96 object-cover rounded-2xl hover:opacity-80 transition-opacity duration-300"
              />

              <div className="flex flex-col px-4 py-5">
                <h3 className="font-syne font-bold text-2xl">Projecto 1</h3>
                <p className="font-rubik text-white/60">
                  Descrição breve do projecto 1.
                </p>
              </div>
            </Link>
          </li>
        </motion.ul>

        <button className="btn-secondary px-6 py-2">
          CARREGAR MAIS PROJECTOS
        </button>
      </div>
    </div>
  );
}
