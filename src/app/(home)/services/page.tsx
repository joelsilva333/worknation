"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


export default function ServicesPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <section className="flex items-center justify-center min-h-200 pt-24 max-w-7xl w-full gap-16 px-8">
        <div className="flex flex-col gap-4 max-w-xl w-full">
          <div className="flex flex-col gap-2">
            <div>
              <p>Produtor de Vídeos Animados</p>
              <h1 className="text-5xl font-bold font-syne">
                Simplifique o complexo com vídeo motion design.
              </h1>
            </div>

            <p className="text-xl text-white/80 font-rubik">
              Com a Worknation, complexidade vira simplicidade. Nossos vídeos em
              motion design transformam ideias complexas com um processo de
              produção descomplicado, do começo ao fim.
            </p>
          </div>

          <button className="btn-tertiary px-12 py-3 text-xl w-fit">
            Solicitar Orçamento
          </button>
        </div>

        <div className="relative w-full max-w-xl h-100 flex items-center justify-center">
          {Array.from({ length: 3 }).map((_, i) => (
            <Image
              key={i}
              src={"/images/services.jpg"}
              alt={""}
              width={300}
              height={200}
              className={`rounded-lg object-cover shadow-lg shadow-primary/30 w-100 h-80 absolute top-16 ${i === 0 ? "z-10" : i === 1 ? "z-20 -translate-x-12  -translate-y-24" : "z-30 translate-x-29 -translate-y-12"}`}
            />
          ))}
        </div>
      </section>

      <section className="flex flex-row-reverse items-center justify-center min-h-200 py-12 max-w-7xl w-full gap-24">
        <div className="flex flex-col gap-4 max-w-xl w-full">
          <div className="flex flex-col gap-2">
            <div>
              <p>Produtor de Vídeos Animados</p>
              <h1 className="text-5xl font-bold font-syne">
                Simplifique o complexo com vídeo motion design.
              </h1>
            </div>

            <p className="text-xl text-white/80 font-rubik">
              Com a Worknation, complexidade vira simplicidade. Nossos vídeos em
              motion design transformam ideias complexas com um processo de
              produção descomplicado, do começo ao fim.
            </p>
          </div>

          <button className="btn-tertiary px-12 py-3 text-xl w-fit">
            Solicitar Orçamento
          </button>
        </div>

        <div className="relative w-full max-w-xl h-100 flex items-center justify-center">
          {Array.from({ length: 3 }).map((_, i) => (
            <Image
              key={i}
              src={"/images/services.jpg"}
              alt={""}
              width={300}
              height={200}
              className={`rounded-lg object-cover shadow-lg shadow-primary/30 w-100 h-80 absolute top-16 ${i === 0 ? "z-10" : i === 1 ? "z-20 -translate-x-12  -translate-y-24" : "z-30 translate-x-20 -translate-y-12"}`}
            />
          ))}
        </div>
      </section>

      <div className="flex flex-col items-center justify-center gap-4 py-12">
        <h2 className="text-4xl font-bold font-syne">Outros Serviços</h2>
        <p className="text-xl text-white/80 font-rubik max-w-2xl text-center">
          Além de vídeos animados, oferecemos uma gama de serviços criativos para
            atender às suas necessidades de comunicação visual.
        </p>

        <div>
            <Swiper>
                <SwiperSlide>
                    <div className="relative w-full max-w-xl h-100 flex items-center justify-center">
                        <Image
                            src={"/images/services.jpg"}
                            alt={""}
                            width={300}
                            height={200}
                            className={`rounded-lg object-cover shadow-lg shadow-primary/30 w-100 h-80`}
                        />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
      </div>
    </div>
  );
}
