"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Meus trabalhos", href: "#trabalhos" },
];

export default function Header() {
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-4 z-50 mx-auto w-full flex max-w-7xl items-center justify-between rounded-full bg-primary/20 px-8 py-4 text-white backdrop-blur-xs">
      <Link
        href="#"
        className="flex items-center gap-2">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}>
          <Image
            src="/logos/bg-w-b.png"
            alt="Logo"
            width={1920}
            height={1040}
            className="w-40 object-contain"
            priority
          />
        </motion.div>
      </Link>

      <nav className="flex items-center gap-10">
        <ul className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <motion.li
              key={item.label}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="cursor-pointer text-sm font-medium font-rubik text-white/80 hover:text-white">
              <Link href={item.href}>{item.label.toUpperCase()}</Link>
            </motion.li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="rounded-full bg-primary font-rubik px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/30 cursor-pointer">
          {"Entrar em contacto".toUpperCase()}
        </motion.button>
      </nav>
    </motion.header>
  );
}
