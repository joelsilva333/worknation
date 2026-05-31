"use client";

import Image from "next/image";
import { BookOpen, EditIcon, VideoIcon } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";

// --- DADOS ESTRUTURADOS (VARIÁVEIS) ---

const PARTNER_LOGOS = [
  "/logos/bg-w-b.png",
  "/logos/bg-w-b.png",
  "/logos/bg-w-b.png",
  "/logos/bg-w-b.png",
];

const FEATURED_PROJECTS = [
  {
    image: "/images/services/gsc.png",
    title: "Motion Graphics & Animação",
  },
  {
    image: "/images/services/motion.png",
    title: "Produção de Vídeo",
  },
  {
    image: "/images/services/producao.png",
    title: "Fotografia Profissional",
  },
  {
    image: "/images/services/viral.png",
    title: "Marketing Corporativo",
  },
  {
    image: "/images/services/gsc.png",
    title: "Branding & Conteúdo Digital",
  },
  {
    image: "/images/services/motion.png",
    title: "Cobertura de Eventos",
  },
  {
    image: "/images/services/producao.png",
    title: "Design Criativo & Comunicação Visual",
  },
];

const SERVICES_LIST = [
  {
    image: "/images/services/gsc.png",
    title: "Motion Graphics & Animação",
    text: "Transforme a imagem da sua empresa com criatividade.",
  },
  {
    image: "/images/services/motion.png",
    title: "Produção de Vídeo",
    text: "Transforme a imagem da sua empresa com criatividade.",
  },
  {
    image: "/images/services/producao.png",
    title: "Branding & Conteúdo Digital",
    text: "Transforme a imagem da sua empresa com criatividade.",
  },
  {
    image: "/images/services/viral.png",
    title: "Marketing Corporativo",
    text: "Transforme a imagem da sua empresa com criatividade.",
  },
  {
    image: "/images/services/gsc.png",
    title: "Branding & Conteúdo Digital",
    text: "Transforme a imagem da sua empresa com criatividade.",
  },
];

const PRODUCTION_STAGES = [
  {
    Icon: BookOpen,
    stage: "Pré-produção",
    title: "Planejamento inteligente para um processo ágil.",
    items: [
      "Briefing",
      "Roteiro",
      "Storyboard e Moodboard",
      "Plano de Produção",
      "Seleção da Trilha Sonora",
      "Seleção de Locutor e Locutora",
    ],
  },
  {
    Icon: VideoIcon,
    stage: "Produção",
    title: "Gravação profissional sem imprevistos.",
    items: [
      "Captação de Imagens",
      "Captação com Teleprompter",
      "Produção de Cenografia",
      "Captação em Estúdio Próprio",
      "Captação de Depoimentos",
      "Captação com Drone",
    ],
  },
  {
    Icon: EditIcon,
    stage: "Pós-produção",
    title: "Edição ágil com acompanhamento em tempo real.",
    items: [
      "Edição",
      "Pesquisa em Banco de Imagens",
      "Ilustração Personalizada",
      "Animação",
      "Tradução e Legendagem",
      "Finalização",
    ],
  },
];

const TESTIMONIALS = [
  {
    image: "/images/services/branco.png",
    name: "Vídeo Institucional para Empresa Corporativa",
    enterprise: "GSC Empresa",
    commentary:
      "A Worknation conseguiu transformar ideias complexas em uma comunicação visual moderna.",
    logo: "/logos/bg-w-b.png",
  },
  {
    image: "/images/services/chines.png",
    name: "Motion Graphics para Campanha Digital",
    enterprise: "GSC Empresa",
    commentary:
      "A Worknation conseguiu transformar ideias complexas em uma comunicação visual moderna.",
    logo: "/logos/bg-w-b.png",
  },
  {
    image: "/images/services/negro.png",
    name: "Animação Explicativa para Startup",
    enterprise: "GSC Empresa",
    commentary:
      "A Worknation conseguiu transformar ideias complexas em uma comunicação visual moderna.",
    logo: "/logos/bg-w-b.png",
  },
];

const BREAKPOINTS_FOUR_SLIDES = {
  0: { slidesPerView: 1.1 },
  640: { slidesPerView: 2 },
  1024: { slidesPerView: 4 },
};

const BREAKPOINTS_THREE_SLIDES = {
  0: { slidesPerView: 1.1 },
  768: { slidesPerView: 2 },
  1024: { slidesPerView: 3 },
};

// --- CONFIGURAÇÕES DE ANIMAÇÃO PADRÃO (VARIANTS) ---

const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const },
};

const staggerContainer = {
  initial: {},
  whileInView: {},
  viewport: { once: true, margin: "-100px" },
  transition: { staggerChildren: 0.15 },
};

const childFadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as const },
};

// --- COMPONENTE PRINCIPAL ---

export default function ServicesPage() {
  return (
    <div className="flex flex-col justify-center items-center overflow-hidden max-lg:gap-12">
      {/* Seção Hero 1 */}
      <motion.section
        className="flex items-center justify-center min-h-200 pt-24 max-w-7xl w-full gap-16 px-8 max-lg:flex-col-reverse max-lg:pt-36 max-lg:gap-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}>
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
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                scale: 0.9,
                x: i === 1 ? 0 : i === 2 ? 0 : 0,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: i === 0 ? 0 : i === 1 ? -48 : 116, // mantendo equivalência aos translates originais (-translate-x-12 e translate-x-29 [29*4=116px])
                y: i === 0 ? 0 : i === 1 ? -96 : -48, // mantendo equivalência aos -translate-y-24 e -translate-y-12
              }}
              transition={{
                delay: 0.2 + i * 0.15,
                duration: 0.6,
                ease: "easeOut",
              }}
              className={`absolute top-16 w-100 h-80 max-lg:w-72 max-lg:h-60 ${
                i === 0
                  ? "z-10"
                  : i === 1
                    ? "z-20 max-lg:-translate-x-4 max-lg:-translate-y-16"
                    : "z-30 max-lg:translate-x-6 max-lg:-translate-y-6"
              }`}>
              <Image
                src="/images/filmaker.png"
                alt=""
                width={300}
                height={200}
                className="rounded-lg object-cover shadow-lg shadow-primary/30 w-full h-full"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Seção Parceiros */}
      <motion.div
        className="flex flex-col items-center justify-center gap-8 py-5 px-8"
        {...fadeInUp}>
        <h2 className="text-4xl font-bold font-syne max-lg:text-3xl text-center">
          Parceiros Estratégicos
        </h2>
        <motion.ul
          className="max-w-2xl w-full flex gap-12 items-center justify-center"
          variants={staggerContainer}
          initial="initial"
          whileInView="gather"
          viewport={{ once: true }}>
          {PARTNER_LOGOS.map((logo, index) => (
            <motion.li
              key={index}
              className="text-xl text-white/80 font-rubik text-center"
              variants={childFadeIn}>
              <Image
                src={logo}
                alt=""
                width={200}
                height={100}
                className=""
              />
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>

      {/* Seção Hero 2 */}
      <motion.section
        className="flex flex-row-reverse items-center justify-center min-h-200 py-12 max-w-7xl w-full gap-24 px-8 max-lg:flex-col-reverse max-lg:gap-12"
        {...fadeInUp}>
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
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{
                opacity: 1,
                scale: 1,
                x: i === 0 ? 0 : i === 1 ? -48 : 80, // Equivalente a translate-x-20 (20*4=80px)
                y: i === 0 ? 0 : i === 1 ? -96 : -48,
              }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: "easeOut" }}
              className={`absolute top-16 w-100 h-80 max-lg:w-72 max-lg:h-60 ${
                i === 0
                  ? "z-10"
                  : i === 1
                    ? "z-20 max-lg:-translate-x-4 max-lg:-translate-y-16"
                    : "z-30 max-lg:translate-x-6 max-lg:-translate-y-6"
              }`}>
              <Image
                src="/images/filmaker.png"
                alt=""
                width={300}
                height={200}
                className="rounded-lg object-cover shadow-lg shadow-primary/30 w-full h-full"
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Seção Projetos em Destaque */}
      <motion.section
        className="w-full flex items-center justify-center py-24 px-8 max-lg:py-12"
        {...fadeInUp}>
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
              breakpoints={BREAKPOINTS_FOUR_SLIDES}
              className="w-full">
              {FEATURED_PROJECTS.map((project, index) => (
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
        </div>
      </motion.section>
      
      <motion.div
        className="flex flex-col items-center justify-center gap-4 py-12 max-w-7xl w-full px-8"
        {...fadeInUp}>
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
            breakpoints={BREAKPOINTS_THREE_SLIDES}
            className="w-full">
            {SERVICES_LIST.map((service, index) => (
              <SwiperSlide key={index}>
                <div className="relative w-full flex items-center justify-center flex-col gap-4">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={300}
                    height={200}
                    className="rounded-lg object-cover shadow-lg shadow-primary/30 w-full h-80"
                  />
                  <div className="text-white w-full">
                    <h1 className="text-2xl font-semibold">{service.title}</h1>
                    <p className="text-white/70">{service.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>

      {/* Seção Nosso Processo */}
      <motion.section
        className="flex flex-col items-start justify-center min-h-200 py-12 max-w-7xl w-full gap-8 px-8"
        {...fadeInUp}>
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

        <motion.ul
          className="flex items-top gap-12 justify-around w-full max-lg:flex-col"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}>
          {PRODUCTION_STAGES.map(({ Icon, stage, title, items }, index) => (
            <motion.li
              key={index}
              className="max-w-xl w-full p-10 bg-white/5 rounded-lg flex gap-4 max-lg:flex-col"
              variants={childFadeIn}>
              <Icon
                size={54}
                className="text-white shrink-0"
              />
              <div className="flex flex-col gap-1">
                <div className="mb-4">
                  <p>{stage}</p>
                  <h1 className="text-2xl font-semibold">{title}</h1>
                </div>
                {items.map((item, i) => (
                  <p key={i}>{item}</p>
                ))}
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>

      {/* Seção Depoimentos */}
      <motion.section
        className="w-full max-w-7xl py-24 max-lg:py-8 px-8 flex flex-col gap-16"
        {...fadeInUp}>
        <div className="flex flex-col gap-3 max-w-4xl">
          <p className="text-primary font-medium">O que nossos clients dizem</p>
          <h2 className="text-5xl font-bold font-syne leading-tight max-lg:text-4xl">
            Resultados reais. Parcerias construídas com criatividade, estratégia
            e confiança.
          </h2>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          className="w-full">
          {TESTIMONIALS.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="w-full bg-white/5 border border-white/10 rounded-3xl p-10 flex items-center gap-12 max-lg:flex-col max-lg:p-6">
                <div className="w-full max-w-xs">
                  <Image
                    src={testimonial.image}
                    alt="Cliente"
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
                      {testimonial.commentary}
                    </p>
                  </div>

                  <div className="flex items-end justify-between gap-8 max-lg:flex-col max-lg:items-start">
                    <div>
                      <h3 className="text-2xl font-semibold">
                        {testimonial.name}
                      </h3>
                      <p className="text-white/60 font-rubik">
                        {testimonial.enterprise}
                      </p>
                    </div>
                    <Image
                      src={testimonial.logo}
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
      </motion.section>

      {/* Seção FAQ */}
      <motion.section
        className="flex flex-col items-center justify-center py-24 max-lg:py-8 max-w-7xl w-full gap-8 px-8"
        {...fadeInUp}>
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

        <motion.div
          className="w-full flex flex-col gap-4"
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}>
          {Array.from({ length: 5 }).map((_, index) => (
            <motion.div
              key={index}
              variants={childFadeIn}
              whileHover={{
                scale: 1.01,
                backgroundColor: "rgba(255,255,255,0.08)",
              }}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 transition-colors duration-200 cursor-pointer">
              <h3 className="text-xl font-semibold mb-2">
                Quanto tempo leva para produzir um vídeo?
              </h3>
              <p className="text-white/70 font-rubik leading-relaxed">
                O prazo varia conforme a complexidade do projeto.
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
}
