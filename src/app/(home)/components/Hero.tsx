"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section>
      <div className="flex w-full max-w-7xl flex-col items-center gap-8 min-h-screen justify-center px-4 text-center">
        <motion.p
          className="font-syne text-5xl font-bold leading-tight md:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}>
          Elevamos marcas através do audiovisual.
        </motion.p>

        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 1.8,
            ease: "easeInOut",
            repeat: Infinity,
          }}>
          <Link
            href="#trabalhos"
            className="flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30">
            EXPLORAR TRABALHOS
            <motion.span
              animate={{ x: [0, 6, 0] }}
              transition={{
                duration: 1.2,
                ease: "easeInOut",
                repeat: Infinity,
              }}>
              <ArrowRight />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
