import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="flex max-w-7xl w-full gap-12 text-left">
        <div className="w-1/2 px-4">
          <h2 className="font-syne text-4xl font-bold mb-6">Sobre Nós</h2>
          <p className="font-rubik text-lg leading-relaxed text-white/80">
            Na WorkNation, somos apaixonados por contar histórias através do
            poder do audiovisual. Com uma equipa dedicada de profissionais
            criativos, transformamos ideias em experiências visuais impactantes
            que elevam marcas e conectam-se com audiências. Desde vídeos
            corporativos a campanhas publicitárias, cada projeto é uma
            oportunidade para inovar e inspirar. Junte-se a nós nesta jornada de
            criatividade e excelência.
          </p>

          <Link
            href="#trabalhos"
            className="mt-6 inline-block">
            <span className="rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white shadow-lg shadow-primary/30">
              VER MEUS TRABALHOS
            </span>
          </Link>
        </div>

        <Image
          src={"/images/about-decorative.png"}
          alt={"About Decorative"}
          width={1920}
          height={1040}
          className="w-1/2 object-contain"
        />
      </div>
    </section>
  );
}
