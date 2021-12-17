import { ProjectCardProps } from "../ProjectCard";

export const projects: ProjectCardProps[] = [
  {
    image: { src: "/images/mics.png", alt: "Mediarithmics" },
    description: {
      title: "Outils Data Marketing et analytics",
      subtitle: "Développeur Fullstack ─ Mediarithmics",
      text: "Développement de système de collecte de données et d'outils de prédiction pour e-commerce",
      tags: ["Typescript", "Node", "React", "Docker"],
    },
    visible: true,
  },
  {
    image: { src: "/images/dvlt.png", alt: "Devialet" },
    description: {
      title: "Application pour systèmes audio Devialet",
      subtitle: "Développeur d'Application ─ Devialet",
      text: "Développement de la couche intermédiaire entre les systèmes audio et l'application",
      tags: ["C/C++", "Android", "Apple", "Docker", "GitHub Actions", "Protobuf"],
    },
    visible: true,
  },
  {
    image: { src: "/images/mclaren.webp", alt: "Faurecia" },
    description: {
      title: "Systèmes d'infotainment pour Mc\u00a0Laren",
      subtitle: "Développeur d'Application ─ Faurecia",
      text: "Développement de systèmes d'infotainment pour Mc\u00a0Laren GT 2020, Speedtail, Artura",
      tags: ["C/C++", "Android", "Qt", "Qml", "OpenGL", "Protobuf", "Docker"],
    },
    visible: true,
  },
  {
    image: { src: "/images/sibelianthe.png", alt: "Sibelianthe" },
    description: {
      title: "Systèmes de correction d'image pour TGV autonomes",
      subtitle: "Développeur d'Application ─ Sibelianthe",
      text: "Développement d'un système biomimétique de correction chromatique pour TGV autonome",
      tags: ["C/C++", "python", "Qt", "OpenGL", "Github Actions"],
    },
    visible: true,
  },
];

export const shorts: [ProjectCardProps[], ProjectCardProps[]] = [
  [
    {
      image: {
        src: "/images/groupomania.png",
        alt: "groupomania",
      },
      description: {
        title: "Réseau social d'entreprise",
        subtitle: "OpenClassRooms",
        tags: ["Typescript", "React", "Node", "PostgreSQL", "Docker"],
      },
      visible: true,
    },
    {
      image: { src: "/images/ohmyfood.png", alt: "ohmyfood!" },
      description: {
        title: "Site de réservation en ligne",
        subtitle: "OpenClassRooms",
        tags: ["HTML/CSS", "Sass", "Node", "Gulp"],
      },
      visible: true,
    },
    {
      image: { src: "/images/oriteddy.png", alt: "oriteddy!" },
      description: {
        title: "Site de e-commerce",
        subtitle: "OpenClassRooms",
        tags: ["Javacript", "HTML/CSS", "Sass", "Node", "Gulp"],
      },
      visible: true,
    },
  ],
  [
    {
      image: {
        src: "/images/ezflex.png",
        alt: "groupomania",
      },
      description: {
        title: "Système Infotainment Renault EZ Flex",
        subtitle: "Continental",
        tags: ["C/C++", "Android", "OpenGL", "GoogleTest"],
      },
      visible: true,
    },
    {
      image: { src: "/images/reservia.png", alt: "Reservia!" },
      description: {
        title: "Site de réservation en ligne",
        subtitle: "OpenClassRooms",
        tags: ["HTML/CSS", "EJS", "Node", "Gulp"],
      },
      visible: true,
    },
    {
      image: { src: "/images/sapfc.png", alt: "SAP Financial Consolidation" },
      description: {
        title: "Application de consolidation financière",
        subtitle: "SAP",
        tags: ["Javacript", "HTML/CSS", "C/C++", "C#", "Sap UI5"],
      },
      visible: true,
    },
  ],
];
