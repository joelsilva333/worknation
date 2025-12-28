"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactUs() {
  return (
    <div className="flex w-full flex-col gap-16 items-center min-h-screen px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-7xl flex flex-col gap-4 mt-16">
        <h1 className="text-5xl font-bold font-syne">Contacte-nos</h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-xl text-white/50 font-rubik">
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

      <div className="max-w-7xl w-full py-8 flex gap-12">
        <h2 className="font-bold text-4xl font-syne w-full max-w-lg">
          Entre em contato connosco
        </h2>

        <form className="flex flex-col gap-12 w-full max-w-xl font-rubik">
          <label className="flex flex-col gap-2 text-3xl font-semibold">
            Nome
            <input
              type="text"
              placeholder="Escreva o seu nome aqui"
              className="border-b-2 pb-4 text-2xl font-normal outline-none"
            />
          </label>

          <label className="flex flex-col gap-2 text-3xl font-semibold">
            Assunto
            <input
              type="text"
              placeholder="Escreva o assunto aqui"
              className="border-b-2 pb-4 text-2xl font-normal outline-none"
            />
          </label>

          <label className="flex flex-col gap-2 text-3xl font-semibold">
            Mensagem
            <textarea
              placeholder="Escreva a sua mensagem aqui"
              className="border-b-2 text-2xl font-normal outline-none resize-none"></textarea>
          </label>

          <button className="btn-primary px-6 py-2 mt-4">
            ENVIAR MENSAGEM
          </button>
        </form>
      </div>

      <Image
        src={"/images/projects/motion-1.png"}
        alt={"Contact Images"}
        width={1920}
        height={1080}
        className="w-full max-w-7xl h-135 object-cover rounded-2xl mb-32"
      />
    </div>
  );
}
