import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center justify-between text-white max-w-7xl w-full">
      <Link href="#">
        <Image
          src={"/logos/full-w-bg.jpg"}
          alt={""}
          width={1920}
          height={1040}
          className="w-44 object-contain"
        />
      </Link>

      <nav className="flex gap-8 items-center">
        <ul className="flex gap-4">
          <li>Início</li>
          <li>Sobre mim</li>
          <li>Meus trabalhos</li>
        </ul>

        <button className="bg-primary px-4 py-2 rounded-full">
          Contact Us
        </button>
      </nav>
    </header>
  );
}
