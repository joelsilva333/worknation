"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";

const navItems = [
  { label: "Início", href: "/" },
  { label: "Sobre", href: "/about" },
  { label: "Serviços", href: "/services" },
  { label: "Projectos", href: "/projects" },
  { label: "TV5", href: "#" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-4 z-50 left-1/2 -translate-x-1/2 w-[95%] flex max-w-7xl items-center justify-between rounded-full bg-primary/70 px-8 py-4 text-white backdrop-blur-sm max-lg:px-5 max-lg:py-3">
      <Link
        href="/"
        className="flex items-center gap-2 shrink-0">
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}>
          <Image
            src="/logos/bg-w-b.png"
            alt="Logo"
            width={1920}
            height={1040}
            className="w-40 object-contain max-lg:w-28"
            priority
          />
        </motion.div>
      </Link>

      <nav className="flex items-center gap-10 max-lg:gap-4">
        <ul className="flex items-center gap-8 max-lg:hidden">
          {navItems.map((item) => (
            <motion.li
              key={item.label}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className={`cursor-pointer text-sm font-medium font-rubik text-white/80 hover:text-white transition-colors ${
                pathname === item.href
                  ? "font-bold border-b-2 border-blue-700 text-white"
                  : ""
              }`}>
              <Link href={item.href}>{item.label.toUpperCase()}</Link>
            </motion.li>
          ))}
        </ul>

        <Link
          href={"/contact-us"}
          className="btn-tertiary px-6 py-2 text-sm max-lg:hidden">
          {"Entrar em contacto".toUpperCase()}
        </Link>

        <button className="hidden max-lg:flex items-center justify-center w-11 h-11 rounded-full bg-white/10 border border-white/10">
          <Menu size={22} />
        </button>
      </nav>
    </motion.header>
  );
}