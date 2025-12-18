import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="min-h-96 flex flex-col gap-24 items-center overflow-hidden px-12 py-24">
      <h2 className="font-syne text-5xl font-bold">Projetos em Destaque</h2>

      <ul className="flex flex-wrap w-full gap-12">
        <li className="max-w-xl w-full h-125 rounded-2xl">
          <Image
            src={""}
            alt={""}
            width={1920}
            height={1080}
            className="h-full w-full rounded-2xl"
          />

          <div className="text-white">
            <span>
              <h1></h1> <hr />
            </span>

            <div>
              <p></p>
              <p></p>
            </div>
          </div>
        </li>

         <li className="max-w-xl w-full h-125 rounded-2xl">
          <Image
            src={""}
            alt={""}
            width={1920}
            height={1080}
            className="h-full w-full rounded-2xl"
          />

          <div className="text-white">
            <span>
              <h1></h1> <hr />
            </span>

            <div>
              <p></p>
              <p></p>
            </div>
          </div>
        </li>
      </ul>

      <Link
        href="#"
        className="btn-secondary px-8 py-2 w-fit ">
        {"Explorar mais".toUpperCase()} <ArrowRight />
      </Link>
    </section>
  );
}
