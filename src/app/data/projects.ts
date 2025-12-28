type Project = {
  id: number;
  slug: string;
  title: string;
  description: string;
  image: string;
  client: string;
  work: string;
  link: string;
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    slug: "motion-design-1",
    title: "Projecto Motion 1",
    description: "Vídeo institucional com motion design moderno.",
    image: "/images/projects/motion-1.png",
    client: "WorkNation",
    work: "Social Media Motion · Short Animations",
    link: "https://worknation.co/projects/motion-design-1",
  },
  {
    id: 2,
    slug: "documental-urbano",
    title: "Documental Urbano",
    description: "Produção audiovisual com foco social e narrativo.",
    image: "/images/projects/motion-2.png",
    client: "Instituição Cultural Urbana",
    work: "Documentário · Captação e Edição de Vídeo",
    link: "https://worknation.co/projects/documental-urbano",
  },
  {
    id: 3,
    slug: "campanha-publicitaria",
    title: "Campanha Publicitária",
    description: "Conteúdo criativo para campanhas de marca.",
    image: "/images/projects/motion-3.png",
    client: "Marca Comercial",
    work: "Publicidade · Direção Criativa · Motion Design",
    link: "https://worknation.co/projects/campanha-publicitaria",
  },
  {
    id: 4,
    slug: "evento-corporativo",
    title: "Evento Corporativo",
    description: "Cobertura audiovisual profissional de evento empresarial.",
    image: "/images/projects/motion-4.png",
    client: "Empresa Corporativa",
    work: "Cobertura de Evento · Vídeo Institucional",
    link: "https://worknation.co/projects/evento-corporativo",
  },
];
