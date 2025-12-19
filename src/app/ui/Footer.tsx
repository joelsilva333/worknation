import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col gap-12 items-center text-2xl font-bold py-8 font-syne">
      <div className="flex w-full justify-between max-w-7xl">
        <Image
          src={"/logos/bg-w-b.png"}
          alt={"Logotipo Worknation"}
          width={1920}
          height={1080}
          className="w-48 object-contain"
        />

        <ul>
          <li>Rua Exemplo, 123</li>
        </ul>
        <ul>
          <li>Telefone: (244) 946 124 567</li>
        </ul>
      </div>

      <hr className="w-full max-w-7xl border-t border-white/20" />

      <div className="max-w-7xl mx-auto px-4 text-center  text-white">
        &copy; {new Date().getFullYear()} WorkNation. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
