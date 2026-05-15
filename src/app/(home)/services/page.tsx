"use client";

import Image from "next/image";
import { BookOpen, EditIcon, VideoIcon } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function ServicesPage() {
  return (
    <div className="flex flex-col justify-center items-center overflow-hidden max-lg:gap-12">
      <section className="flex items-center justify-center min-h-200 pt-24 max-w-7xl w-full gap-16 px-8 max-lg:flex-col-reverse max-lg:pt-36 max-lg:gap-8">
        <div className="flex flex-col gap-4 max-w-xl w-full max-lg:items-center max-lg:text-center">
          <div className="flex flex-col gap-2">
            <div>
              <p>Produtor de Vídeos Animados</p>

              <h1 className="text-5xl font-bold font-syne max-lg:text-4xl max-lg:leading-tight">
                Simplifique o complexo com vídeo motion design.
              </h1>
            </div>

            <p className="text-xl text-white/80 font-rubik max-lg:text-lg">
              Com a Worknation, complexidade vira simplicidade. Nossos vídeos em
              motion design transformam ideias complexas com um processo de
              produção descomplicado, do começo ao fim.
            </p>
          </div>

          <button className="btn-tertiary px-12 py-3 text-xl w-fit">
            Solicitar Orçamento
          </button>
        </div>

        <div className="relative w-full max-w-xl h-100 flex items-center justify-center flex-col max-lg:h-80">
          {Array.from({ length: 3 }).map((_, i) => (
            <Image
              key={i}
              src={"/images/filmaker.png"}
              alt={""}
              width={300}
              height={200}
              className={`rounded-lg object-cover shadow-lg shadow-primary/30 w-100 h-80 absolute top-16 max-lg:w-72 max-lg:h-60 ${
                i === 0
                  ? "z-10"
                  : i === 1
                    ? "z-20 -translate-x-12 -translate-y-24 max-lg:-translate-x-4 max-lg:-translate-y-16"
                    : "z-30 translate-x-29 -translate-y-12 max-lg:translate-x-6 max-lg:-translate-y-6"
              }`}
            />
          ))}
        </div>
      </section>

      <div className="flex flex-col items-center justify-center gap-8 py-5 px-8">
        <h2 className="text-4xl font-bold font-syne max-lg:text-3xl text-center">
          Parceiros Estratégicos
        </h2>

        <ul className="max-w-2xl w-full flex gap-12 items-center justify-center">
          <li className="text-xl text-white/80 font-rubik text-center">
            <Image
              src={"/"}
              alt=""
              width={200}
              height={100}
              className=""
            />
          </li>
        </ul>
      </div>

      <section className="flex flex-row-reverse items-center justify-center min-h-200 py-12 max-w-7xl w-full gap-24  px-8 max-lg:flex-col-reverse max-lg:gap-12">
        <div className="flex flex-col gap-4 max-w-xl w-full max-lg:items-center max-lg:text-center">
          <div className="flex flex-col gap-2">
            <div>
              <p>Produtor de Vídeos Animados</p>

              <h1 className="text-5xl font-bold font-syne max-lg:text-4xl max-lg:leading-tight">
                Soluções completas em animação. Do conceito à conclusão.
              </h1>
            </div>

            <p className="text-xl text-white/90 font-rubik max-lg:text-lg">
              Na Worknation, personalizamos cada vídeo de animação em motion
              graphics para ressoar com a identidade da sua marca, garantindo
              que cada mensagem seja entregue com precisão.
            </p>

            <p className="text-xl text-white/90 font-rubik max-lg:text-lg">
              Nosso compromisso é tirar seu projeto do papel e transformá-lo em
              uma realidade animada que economiza o tempo da sua equipe e
              maximiza seu impacto.
            </p>
          </div>

          <button className="btn-tertiary px-12 py-3 text-xl w-fit">
            Solicitar Orçamento
          </button>
        </div>

        <div className="relative w-full max-w-xl h-100 flex items-center justify-center flex-col max-lg:h-80">
          {Array.from({ length: 3 }).map((_, i) => (
            <Image
              key={i}
              src={"/images/filmaker.png"}
              alt={""}
              width={300}
              height={200}
              className={`rounded-lg object-cover shadow-lg shadow-primary/30 w-100 h-80 absolute top-16 max-lg:w-72 max-lg:h-60 ${
                i === 0
                  ? "z-10"
                  : i === 1
                    ? "z-20 -translate-x-12 -translate-y-24 max-lg:-translate-x-4 max-lg:-translate-y-16"
                    : "z-30 translate-x-20 -translate-y-12 max-lg:translate-x-6 max-lg:-translate-y-6"
              }`}
            />
          ))}
        </div>
      </section>

      <section className="w-full flex items-center justify-center py-24 px-8 max-lg:py-12">
        <div className="max-w-7xl w-full bg-white/5 rounded-3xl border border-white/10 px-12 py-20 flex flex-col gap-14 max-lg:px-6 max-lg:py-14">
          <div className="max-w-5xl flex flex-col gap-2">
            <p className="font-semibold">Projetos em destaque</p>

            <h2 className="text-5xl font-bold font-syne leading-tight max-lg:text-4xl">
              Mais de 500 vídeos entregues
              <br />
              em dezenas de projetos.
              <span className="text-white/80"> e contando.</span>
            </h2>

            <p className="text-xl text-white/80 font-rubik leading-relaxed max-w-4xl max-lg:text-lg">
              Da estratégia ao roteiro, da captação à pós-produção, a Worknation
              desenvolve soluções audiovisuais modernas para marcas que querem
              comunicar com impacto, criatividade e profissionalismo.
            </p>
          </div>

          <div className="relative">
            <Swiper
              spaceBetween={24}
              slidesPerView={4}
              breakpoints={{
                0: {
                  slidesPerView: 1.1,
                },
                640: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 4,
                },
              }}
              className="w-full">
              {[
                {
                  image: "/images/project-1.jpg",
                  title: "Vídeo Institucional para Empresa Corporativa",
                },
                {
                  image: "/images/project-2.jpg",
                  title: "Motion Graphics para Campanha Digital",
                },
                {
                  image: "/images/project-3.jpg",
                  title: "Produção Audiovisual para Evento Empresarial",
                },
                {
                  image: "/images/project-4.jpg",
                  title: "Conteúdo Promocional para Redes Sociais",
                },
                {
                  image: "/images/project-5.jpg",
                  title: "Animação Explicativa para Startup",
                },
              ].map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col gap-4 group cursor-pointer">
                    <div className="overflow-hidden rounded-2xl">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={500}
                        height={320}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>

                    <h3 className="text-lg font-semibold leading-snug text-white/90">
                      {project.title}
                    </h3>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="flex justify-center">
            <button className="btn-tertiary px-10 py-4 text-lg max-lg:w-full">
              Conhecer o Portfólio Completo
            </button>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center justify-center gap-4 py-12 max-w-7xl w-full px-8">
        <div className="flex flex-col justify-center gap-4 py-12 text-center">
          <p>Nossos serviços</p>

          <h2 className="text-4xl font-bold font-syne max-lg:text-3xl">
            Soluções completas em vídeo corporativo. Da gravação à animação.
          </h2>
        </div>

        <div className="w-full">
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              0: {
                slidesPerView: 1.1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="w-full">
            {[1, 2, 3].map((_, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full flex items-center justify-center flex-col gap-4">
                  <Image
                    src={"/images/services.jpg"}
                    alt={""}
                    width={300}
                    height={200}
                    className="rounded-lg object-cover shadow-lg shadow-primary/30 w-full h-80"
                  />

                  <div className="text-white">
                    <h1 className="text-2xl font-semibold">
                      Vídeo Institucional
                    </h1>

                    <p className="text-white/70">
                      Transforme a imagem da sua empresa com criatividade.
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <section className="flex flex-col items-start justify-center min-h-200 py-12 max-w-7xl w-full gap-8 px-8">
        <div className="flex flex-col justify-center gap-4 py-12 max-w-5xl">
          <p>Nosso processo de produção</p>

          <h2 className="text-4xl font-bold font-syne max-lg:text-3xl">
            Produção audiovisual sem surpresas. Sempre no prazo e com qualidade.
          </h2>

          <p className="text-xl text-white/80 font-rubik max-lg:text-lg">
            Chega de perder tempo e verba com processos desorganizados. A
            abordagem Worknation envolve comunicação eficiente, automação e
            dashboards garante visibilidade total do projeto e zero burocracia.
          </p>
        </div>

        <ul className="flex items-top gap-12 justify-around max-lg:flex-col">
          <li className="max-w-xl w-full p-10 bg-white/5 rounded-lg flex gap-4 max-lg:flex-col">
            <BookOpen
              size={54}
              className="text-white shrink-0"
            />

            <div className="flex flex-col gap-1 ">
              <div className="mb-4">
                <p>Pré-produção</p>

                <h1 className="text-2xl font-semibold">
                  Planejamento inteligente para um processo ágil.
                </h1>
              </div>

              <p>Briefing</p>
              <p>Roteiro</p>
              <p>Storyboard e Moodboard</p>
              <p>Plano de Produção</p>
              <p>Seleção da Trilha Sonora</p>
              <p>Seleção de Locutor e Locutora</p>
            </div>
          </li>

          <li className="max-w-xl w-full p-10 bg-white/5 rounded-lg flex gap-4 max-lg:flex-col">
            <VideoIcon
              size={54}
              className="text-white shrink-0"
            />

            <div className="flex flex-col gap-1 ">
              <div className="mb-4">
                <p>Produção</p>

                <h1 className="text-2xl font-semibold">
                  Gravação profissional sem imprevistos.
                </h1>
              </div>

              <p>Captação de Imagens</p>
              <p>Captação com Teleprompter</p>
              <p>Produção de Cenografia</p>
              <p>Captação em Estúdio Próprio</p>
              <p>Captação de Depoimentos</p>
              <p>Captação com Drone</p>
            </div>
          </li>

          <li className="max-w-xl w-full p-10 bg-white/5 rounded-lg flex gap-4 max-lg:flex-col">
            <EditIcon
              size={54}
              className="text-white shrink-0"
            />

            <div className="flex flex-col gap-1 ">
              <div className="mb-4">
                <p>Pós-produção</p>

                <h1 className="text-2xl font-semibold">
                  Edição ágil com acompanhamento em tempo real.
                </h1>
              </div>

              <p>Edição</p>
              <p>Pesquisa em Banco de Imagens</p>
              <p>Ilustração Personalizada</p>
              <p>Animação</p>
              <p>Tradução e Legendagem</p>
              <p>Finalização</p>
            </div>
          </li>
        </ul>
      </section>

      <section className="w-full max-w-7xl py-24 max-lg:py-8 px-8 flex flex-col gap-16">
        <div className="flex flex-col gap-3 max-w-4xl">
          <p className="text-primary font-medium">
            O que nossos clientes dizem
          </p>

          <h2 className="text-5xl font-bold font-syne leading-tight max-lg:text-4xl">
            Resultados reais. Parcerias construídas com criatividade, estratégia
            e confiança.
          </h2>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          className="w-full">
          {[1, 2, 3].map((_, index) => (
            <SwiperSlide key={index}>
              <div className="w-full bg-white/5 border border-white/10 rounded-3xl p-10 flex items-center gap-12 max-lg:flex-col max-lg:p-6">
                <div className="w-full max-w-xs">
                  <Image
                    src={"/images/client.jpg"}
                    alt={"Cliente"}
                    width={400}
                    height={500}
                    className="rounded-2xl object-cover w-full h-105"
                  />
                </div>

                <div className="flex flex-col justify-between gap-8 flex-1">
                  <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-2 text-white">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span
                          key={i}
                          className="text-2xl">
                          ★
                        </span>
                      ))}
                    </div>

                    <p className="text-3xl leading-relaxed font-light text-white/90 max-lg:text-xl">
                      “A Worknation conseguiu transformar ideias complexas em uma
                      comunicação visual moderna.”
                    </p>
                  </div>

                  <div className="flex items-end justify-between gap-8 max-lg:flex-col max-lg:items-start">
                    <div>
                      <h3 className="text-2xl font-semibold">
                        Carlos Manuel
                      </h3>

                      <p className="text-white/60 font-rubik">
                        Diretor de Marketing · Empresa XYZ
                      </p>
                    </div>

                    <Image
                      src={"/images/logo-client.png"}
                      alt="Logo empresa"
                      width={140}
                      height={80}
                      className="object-contain opacity-70"
                    />
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="flex flex-col items-center justify-center py-24 max-lg:py-8 max-w-7xl w-full gap-8 px-8">
        <div className="flex flex-col items-center text-center gap-4">
          <p>Perguntas Frequentes</p>

          <h2 className="text-4xl font-bold font-syne max-lg:text-3xl">
            Tire suas dúvidas sobre nossa produção audiovisual.
          </h2>

          <p className="text-xl text-white/80 font-rubik max-w-3xl max-lg:text-lg">
            Entenda como funciona nosso processo de criação, prazos, entregas e
            acompanhamento de projetos.
          </p>
        </div>

        <div className="w-full flex flex-col gap-4">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all hover:bg-white/8">
              <h3 className="text-xl font-semibold mb-2">
                Quanto tempo leva para produzir um vídeo?
              </h3>

              <p className="text-white/70 font-rubik leading-relaxed">
                O prazo varia conforme a complexidade do projeto.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}