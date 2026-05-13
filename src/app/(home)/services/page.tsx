"use client";

import Image from "next/image";
import { BookOpen, EditIcon, VideoIcon } from "lucide-react";
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

        <div className="relative w-full max-w-xl h-100 flex items-center justify-center flex-col">
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

      <div className="flex flex-col items-center justify-center gap-8 py-5">
        <h2 className="text-4xl font-bold font-syne">Parceiros Estratégicos</h2>

        <ul className="max-w-2xl w-full flex gap-12 items-center">
          <li className="text-xl text-white/80 font-rubik  text-center">
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

      <section className="flex flex-row-reverse items-center justify-center min-h-200 py-12 max-w-7xl w-full gap-24">
        <div className="flex flex-col gap-4 max-w-xl w-full">
          <div className="flex flex-col gap-2">
            <div>
              <p>Produtor de Vídeos Animados</p>
              <h1 className="text-5xl font-bold font-syne">
                Soluções completas em animação. Do conceito à conclusão.
              </h1>
            </div>

            <p className="text-xl text-white/90 font-rubik">
              Na Worknation, personalizamos cada vídeo de animação em motion
              graphics para ressoar com a identidade da sua marca, garantindo
              que cada mensagem seja entregue com precisão.
            </p>

            <p className="text-xl text-white/90 font-rubik">
              Desde o brainstorm inicial até o último retoque na pós-produção,
              nossa equipe cuida de cada detalhe. Nosso compromisso é tirar seu
              projeto do papel e transformá-lo em uma realidade animada que
              economiza o tempo da sua equipe e maximiza seu impacto.
            </p>
          </div>

          <button className="btn-tertiary px-12 py-3 text-xl w-fit">
            Solicitar Orçamento
          </button>
        </div>

        <div className="relative w-full max-w-xl h-100 flex items-center justify-center flex-col">
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

      <section className="w-full flex items-center justify-center py-24 px-8">
        <div className="max-w-7xl w-full bg-white/5 rounded-3xl border border-white/10 px-12 py-20 flex flex-col gap-14">
          <div className="max-w-5xl flex flex-col gap-2">
            <p className="font-semibold">Projetos em destaque</p>

            <h2 className="text-5xl font-bold font-syne leading-tight">
              Mais de 500 vídeos entregues
              <br />
              em dezenas de projetos.
              <span className="text-white/80"> e contando.</span>
            </h2>

            <p className="text-xl text-white/80 font-rubik leading-relaxed max-w-4xl">
              Da estratégia ao roteiro, da captação à pós-produção, a Worknation
              desenvolve soluções audiovisuais modernas para marcas que querem
              comunicar com impacto, criatividade e profissionalismo.
            </p>
          </div>

          <div className="relative">
            <Swiper
              spaceBetween={24}
              slidesPerView={4}
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
            <button className="btn-tertiary px-10 py-4 text-lg">
              Conhecer o Portfólio Completo
            </button>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center justify-center gap-4 py-12 max-w-7xl w-full">
        <div className="flex flex-col justify-center gap-4 py-12">
          <p>Nossos serviços</p>
          <h2 className="text-4xl font-bold font-syne">
            Soluções completas em vídeo corporativo. Da gravação à animação.
          </h2>
        </div>

        <div className="w-full">
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="w-full">
            <SwiperSlide>
              <div className="relative w-full max-w-xl h-100 flex items-center justify-center flex-col">
                <Image
                  src={"/images/services.jpg"}
                  alt={""}
                  width={300}
                  height={200}
                  className={`rounded-lg object-cover shadow-lg shadow-primary/30 w-100 h-80`}
                />

                <div>
                  <h1>Vídeo Institucional</h1>
                  <p>Transforme a imagem da sua empresa com criatividade.</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative w-full max-w-xl h-100 flex items-center justify-center flex-col">
                <Image
                  src={"/images/services.jpg"}
                  alt={""}
                  width={300}
                  height={200}
                  className={`rounded-lg object-cover shadow-lg shadow-primary/30 w-100 h-80`}
                />

                <div className="text-white">
                  <h1>Vídeo Animado</h1>
                  <p>Transforme a imagem da sua empresa com criatividade.</p>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="relative w-full max-w-xl h-100 flex items-center justify-center flex-col">
                <Image
                  src={"/images/services.jpg"}
                  alt={""}
                  width={300}
                  height={200}
                  className={`rounded-lg object-cover shadow-lg shadow-primary/30 w-100 h-80`}
                />

                <div>
                  <h1>Vídeo para Redes Sociais</h1>
                  <p>Otimize a presença online com vídeos para redes sociais</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <section className="flex flex-col items-center justify-center min-h-200 py-12 max-w-7xl w-full gap-8">
        <div className="flex flex-col justify-center gap-4 py-12">
          <p>Nosso processo de produção</p>
          <h2 className="text-4xl font-bold font-syne">
            Produção audiovisual sem surpresas. Sempre no prazo e com qualidade.
          </h2>
          <p className="text-xl text-white/80 font-rubik">
            Chega de perder tempo e verba com processos desorganizados. A
            abordagem Worknation envolve comunicação eficiente, automação e
            dashboards garante visibilidade total do projeto e zero burocracia.
          </p>
        </div>

        <ul className="flex items-top gap-12 justify-around">
          <li className="max-w-xl w-full p-12 bg-white/5 rounded-lg flex gap-4">
            <BookOpen className="w-8 h-8 text-white" />
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

          <li className="max-w-xl w-full p-12 bg-white/5 rounded-lg flex gap-4">
            <VideoIcon className="w-8 h-8 text-white" />
            <div className="flex flex-col gap-1 ">
              <div className="mb-4">
                <p>Produção</p>
                <h1 className="text-2xl font-semibold">
                  gravação profissional sem imprevistos.
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

          <li className="max-w-xl w-full p-12 bg-white/5 rounded-lg flex gap-4">
            <EditIcon className="w-8 h-8 text-white" />
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

      <section className="w-full max-w-7xl py-24 px-8 flex flex-col gap-16">
        <div className="flex flex-col gap-3 max-w-4xl">
          <p className="text-primary font-medium">
            O que nossos clientes dizem
          </p>

          <h2 className="text-5xl font-bold font-syne leading-tight">
            Resultados reais. Parcerias construídas com criatividade, estratégia
            e confiança.
          </h2>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          className="w-full">
          {[
            {
              image: "/images/client.jpg",
              name: "Carlos Manuel",
              role: "Diretor de Marketing · Empresa XYZ",
              logo: "/images/logo-client.png",
              testimonial:
                "A Worknation conseguiu transformar ideias complexas em uma comunicação visual moderna, dinâmica e extremamente profissional. O processo foi organizado do início ao fim.",
            },
            {
              image: "/images/client2.jpg",
              name: "Ana Paula",
              role: "CEO · Startup Vision",
              logo: "/images/logo-client2.png",
              testimonial:
                "A qualidade da produção e o acompanhamento durante todas as etapas fizeram total diferença para o sucesso da campanha.",
            },
            {
              image: "/images/client3.jpg",
              name: "João Victor",
              role: "Coordenador de Comunicação · BrandCorp",
              logo: "/images/logo-client3.png",
              testimonial:
                "Além da criatividade, a equipe entregou tudo com agilidade e excelente comunicação. Superou nossas expectativas.",
            },
          ].map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-full bg-white/5 border border-white/10 rounded-3xl p-10 flex items-center gap-12">
                <div className="w-full max-w-xs">
                  <Image
                    src={item.image}
                    alt={item.name}
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

                    <p className="text-3xl leading-relaxed font-light text-white/90">
                      “{item.testimonial}”
                    </p>
                  </div>

                  <div className="flex items-end justify-between gap-8">
                    <div>
                      <h3 className="text-2xl font-semibold">{item.name}</h3>

                      <p className="text-white/60 font-rubik">{item.role}</p>
                    </div>

                    <Image
                      src={item.logo}
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

      <section className="flex flex-col items-center justify-center py-24 max-w-7xl w-full gap-8 px-8">
        <div className="flex flex-col items-center text-center gap-4">
          <p>Perguntas Frequentes</p>

          <h2 className="text-4xl font-bold font-syne">
            Tire suas dúvidas sobre nossa produção audiovisual.
          </h2>

          <p className="text-xl text-white/80 font-rubik max-w-3xl">
            Entenda como funciona nosso processo de criação, prazos, entregas e
            acompanhamento de projetos.
          </p>
        </div>

        <div className="w-full flex flex-col gap-4">
          {[
            {
              question: "Quanto tempo leva para produzir um vídeo?",
              answer:
                "O prazo varia conforme a complexidade do projeto. Vídeos mais simples podem levar poucos dias, enquanto produções completas com animação e gravação podem exigir algumas semanas.",
            },
            {
              question: "Vocês produzem apenas vídeos animados?",
              answer:
                "Não. Também desenvolvemos vídeos institucionais, conteúdos para redes sociais, gravações corporativas, entrevistas, cobertura de eventos e muito mais.",
            },
            {
              question: "Posso acompanhar o andamento do projeto?",
              answer:
                "Sim. Mantemos comunicação constante durante todas as etapas para garantir transparência, alinhamento criativo e aprovações rápidas.",
            },
            {
              question: "Vocês ajudam na criação do roteiro?",
              answer:
                "Sim. Nossa equipe auxilia desde o briefing inicial até a construção do roteiro, storyboard e definição da narrativa ideal para sua marca.",
            },
            {
              question: "Os vídeos podem ser adaptados para redes sociais?",
              answer:
                "Claro. Produzimos conteúdos otimizados para Instagram, TikTok, YouTube, LinkedIn e outras plataformas, incluindo formatos verticais.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-all hover:bg-white/8">
              <h3 className="text-xl font-semibold mb-2">{item.question}</h3>

              <p className="text-white/70 font-rubik leading-relaxed">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
