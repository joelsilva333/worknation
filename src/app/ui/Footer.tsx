import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col gap-12 items-center py-24 px-8 font-syne bg-background/70 max-lg:py-16">
      <div className="flex w-full justify-between max-w-7xl text-2xl font-bold max-lg:flex-col max-lg:items-center max-lg:text-center max-lg:gap-8 max-lg:text-lg">
        <Image
          src={"/logos/bg-w-b.png"}
          alt={"Logotipo Worknation"}
          width={1920}
          height={1080}
          className="w-48 object-contain max-lg:w-36"
        />

        <ul>
          <li>Rua Exemplo, 123</li>
        </ul>

        <ul>
          <li>Telefone: (244) 937 612 823</li>
        </ul>
      </div>

      <hr className="w-full max-w-7xl border-t border-white/20" />

      <div className="max-w-7xl mx-auto px-4 text-center text-white max-lg:text-sm">
        &copy; {new Date().getFullYear()} WorkNation. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}