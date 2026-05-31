"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="flex w-full flex-col gap-16 items-center min-h-screen px-4 py-24 max-lg:gap-12 max-lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-7xl flex flex-col gap-4 mt-16 max-lg:mt-24">
        <h1 className="text-5xl font-bold font-syne max-lg:text-4xl">
          Contacte-nos
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl text-white/50 font-rubik max-lg:text-lg">
          Para qualquer questão ou colaboração, não hesite em entrar em
          contacto.
        </motion.p>
      </motion.div>

      <motion.hr
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-7xl border-t border-white/40 origin-left"
      />

      <div className="max-w-7xl w-full py-8 flex gap-12 max-lg:flex-col max-lg:gap-10">
        <h2 className="font-bold text-4xl font-syne w-full max-w-lg max-lg:text-3xl max-lg:max-w-full">
          Entre em contacto connosco
        </h2>

        <form className="flex flex-col gap-12 w-full max-w-xl font-rubik max-lg:max-w-full max-lg:gap-8">
          <label className="flex flex-col gap-2 text-3xl font-semibold max-lg:text-2xl">
            Nome

            <input
              type="text"
              placeholder="Escreva o seu nome aqui"
              className="border-b-2 pb-4 text-2xl font-normal outline-none max-lg:text-lg"
            />
          </label>

          <label className="flex flex-col gap-2 text-3xl font-semibold max-lg:text-2xl">
            Assunto

            <input
              type="text"
              placeholder="Escreva o assunto aqui"
              className="border-b-2 pb-4 text-2xl font-normal outline-none max-lg:text-lg"
            />
          </label>

          <label className="flex flex-col gap-2 text-3xl font-semibold max-lg:text-2xl">
            Mensagem

            <textarea
              placeholder="Escreva a sua mensagem aqui"
              rows={5}
              className="border-b-2 text-2xl font-normal outline-none resize-none max-lg:text-lg"
            />
          </label>

          <button className="btn-tertiary px-6 py-3 mt-4 max-lg:w-full">
            ENVIAR MENSAGEM
          </button>
        </form>
      </div>

      <Image
        src={"/images/projects/motion-1.png"}
        alt={"Contact Images"}
        width={1920}
        height={1080}
        className="w-full max-w-7xl h-135 object-cover rounded-2xl mb-32 max-lg:h-72 max-lg:mb-16"
      />
    </div>
  );
}