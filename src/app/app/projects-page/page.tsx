"use client";
import { CardProjects } from "@/components/CardProjects";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useEffect } from "react";

export interface IProject {
  image: string;
  title: string;
  subtitle: string;
  about: string;
  stacks: string[];
  link: string;
  linkGit: string;
  linkPresentation: string;
  linkFigma: string
  placeWork: string;
  siteWork: string;
  year: string;
  types: string[];
}

const projects = [
  {
    image: "/leroapp.gif",
    title: "Lero",
    about:
      "For this ebook platform aimed at children, I began by conducting market research on competitors and similar platforms. After analyzing the company’s branding materials (colors, logos, characters), I designed the interface with a focus on child-friendly usability. The project included prototyping for various devices (tablet, mobile) to ensure a consistent and intuitive experience across formats. My role covered both visual design and UX, with special attention to making the platform engaging for young users.",
    stacks: ["React", "Typescript", "Tailwind", "CSS"],
    link: "https://play.google.com/store/apps/details?id=com.lerolivros&hl=pt_BR",
    linkGit: "",
    linkPresentation: "",
    linkFigma: "https://www.figma.com/design/LMbzIN5mr5wK4Ho8apdcgs/AppDesignLero?node-id=0-1&node-type=canvas&t=f9i9ubDGLnELndGL-0",
    placeWork: "Interas Tecnologia",
    siteWork: "https://www.interas.com.br/",
    year: "2024",
    types: ["UI Design"],
  },
  // {
  //   image: "/Interas.png",
  //   title: "Interas Tecnologia Website",
  //   about:
  //     "The website was created together with Frabricio Dantas, I was responsible for the website's ease dev page and the footer.",
  //   stacks: ["React", "Typescript", "Tailwind", "CSS"],
  //   link: "https://www.interas.com.br/dev",
  //   linkGit: "",
  //   linkPresentation: "",
  //   linkFigma: "",
  //   placeWork: "Interas Tecnologia",
  //   siteWork: "https://www.interas.com.br/",
  //   year: "2024",
  //   types: ["Frontend"],
  // },
  {
    image: "/1679941023599.gif",
    title: "Donko App",
    about:
      "Donko was the winning app of the Rio Empreender Criativo Hackathon, designed to help users discover nearby cultural events using a map-based interface. It was my first experience working with a full team, including sales, frontend, backend, and UI/UX. As a full-stack student, I contributed to both UI design and frontend development. The experience taught me valuable lessons in team collaboration, version control, and self-management, leading to a fully functional MVP by the end of the weekend.",
    stacks: ["React", "Typescript", "CSS"],
    link: "https://linktr.ee/sambia?utm_source=linktree_admin_share",
    linkGit: "https://github.com/SahBianchi/hackrio-front",
    linkPresentation: "",
    linkFigma: "",
    placeWork: "Hackathon Rio Empreender Criativo",
    siteWork: "",
    year: "2023",
    types: ["Frontend", "UI Design"],
  },
  {
    image: "/labook.png",
    title: "Labook Backend Project",
    about:
      "Labook is a social network with the aim of promoting connection and interaction between people. Anyone who registers on the application will be able to create and like publications.",
    stacks: ["SQL", "SQLite", "TypeScript", "Express", "Knex", "Postman"],
    link: "",
    linkGit: "https://github.com/marinajaudy/projeto-labook-backend",
    linkPresentation: "",
    linkFigma: "",
    placeWork: "Labenu",
    siteWork: "https://www.instagram.com/labenu_/",
    year: "2023",
    types: ["Backend"],
  },
  {
    image: "/labecommerce.png",
    title: "Labecommerce Backend Project",
    about:
      "First back-end project, where I practice the entire basis of creating an API linked to a real database.",
    stacks: ["SQL", "SQLite", "TypeScript", "Express", "Knex", "Postman"],
    link: "",
    linkGit: "https://github.com/marinajaudy/labecommerce-backend",
    linkPresentation: "",
    linkFigma: "",
    placeWork: "Labenu",
    siteWork: "https://www.instagram.com/labenu_/",
    year: "2023",
    types: ["Backend"],
  },
  {
    image: "/1675254420010.gif",
    title: "React APIs Project",
    about:
      "The objective of this project is to create a website with three pages using PokeApi - API with the following tools: React, React Router, Styled-components, React Context and Axios.",
    stacks: ["HTML", "JavaScript", "React", "Styled-components"],
    link: "https://projeto-react-apis-chi.vercel.app/",
    linkGit: "https://github.com/marinajaudy/projeto-react-apis",
    linkPresentation: "",
    linkFigma: "",
    placeWork: "Labenu",
    siteWork: "https://www.instagram.com/labenu_/",
    year: "2022",
    types: ["Frontend"],
  },
  {
    image: "/projetoReact.png",
    title: "FrontEnd React Project",
    about:
      "This project aims to introduce the fundamentals of React, through the construction of an E-Commerce.",
    stacks: ["React", "JavaScript", "HTML", "Style-Components"],
    link: "https://astro-tshirts.surge.sh/",
    linkGit: "https://github.com/marinajaudy/projeto-frontendreact",
    linkPresentation: "",
    linkFigma: "",
    placeWork: "Lebenu",
    siteWork: "https://www.instagram.com/labenu_/",
    year: "2022",
    types: ["Frontend"],
  },
  {
    image: "/projectintroweb.png",
    title: "Intro Web Project",
    about:
      "The objective was to build a stylized page, with list and search using DOM manipulation. I used HTML, CSS, JavaScript and DOM to build my page functions.",
    stacks: ["HTML", "JavaScript", "CSS", "DOM"],
    link: "https://marinajaudy.github.io/projeto-intro-web/",
    linkGit: "https://github.com/marinajaudy/projeto-intro-web",
    linkPresentation: "",
    linkFigma: "",
    placeWork: "Labenu",
    siteWork: "https://www.instagram.com/labenu_/",
    year: "2022",
    types: ["Frontend"],
  },
  {
    image: "/meuportifolio.png",
    title: "My Portfolio (First Version)",
    subtitle:
      "Frontend",
    about:
      "The objective is to reproduce a portfolio website using a ready-made Figma template, where I used HTML and CSS to build the features of my page.",
    stacks: ["HTML", "CSS"],
    link: "https://projetoportifolio-topaz.vercel.app/",
    linkGit: "https://github.com/marinajaudy/projetoportifolio",
    linkPresentation: "",
    linkFigma: "",
    placeWork: "Labenu",
    siteWork: "https://www.instagram.com/labenu_/",
    year: "2022",
    types: ["Frontend"],
  },
  {
    image: "/adoteumhorta.png",
    title: "Adopt a Garden",
    about:
      "In this nationwide collaboration during the Sustainable Cities Hackathon, we developed an app to manage community vegetable gardens in Santa Catarina, encouraging healthier eating habits and fostering neighborhood connections. I focused on designing the Figma prototype and delivering the final pitch. Despite time constraints, I learned to present ideas concisely and clearly, and gained experience creating complex app flows. This project sharpened my skills in both UI design and effective communication.",
    stacks: ["Figma"],
    link: "https://www.figma.com/file/3mDm9mW4K6qPSUzuYx5czk/Adote-uma-Horta?type=design&node-id=0-1&mode=design&t=32yXP5gTuFENcWrC-0",
    linkGit: "",
    linkPresentation:
      "https://www.canva.com/design/DAFDUE6kJz0/lfxF5qhx4GUTgYTkoaVtqw/edit?utm_content=DAFDUE6kJz0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    linkFigma: "",
    placeWork: "Hackthon Cidades Sustentáveis",
    siteWork: "https://cfa.org.br/hackathon-cidades-sustentaveis-promete-tres-dias-de-muita-inovacaoa/",
    year: "Jun 2022",
    types: ["UI Design"],
  },
  {
    image: "/telasServicoFunerarios.png",
    title: "Funeral Services",
    about:
      "I worked as a UI/UX designer in the Hackathon Experimenta, where I collaborated with a professional designer to create an intuitive and accessible funeral services platform. Using Adobe XD, we crafted wireframes and a high-fidelity prototype. This was my second hackathon and my first experience working closely with a seasoned UI/UX expert, which made it an intense weekend of learning and innovation.",
    stacks: ["Adobe XD"],
    link: "https://youtu.be/iwkqwzvobQY",
    linkGit: "",
    linkPresentation:
      "https://www.canva.com/design/DAFAsz_DxU0/ZEMqqZyfmlXQmyL8_l61Vg/edit?utm_content=DAFAsz_DxU0&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton",
    linkFigma: "",
    placeWork: "Hackathon Experimenta Serviços Públicos de Guarulhos",
    siteWork: "https://experimenta.guarulhos.sp.gov.br/",
    year: "May 2022",
    types: ["UI Design"],
  },
  // {
  //   image: "/minasabordo.png",
  //   title: "Minas Abordo",
  //   about:
  //     "Project carried out as a UI/UX designer at the Ade Sampa Hackathon in January 2022, where I used Figma to create the design and prototype.",
  //   stacks: ["Figma"],
  //   link: "https://www.figma.com/file/nPINxd2hMGjlHqflSzTjHZ/App-Hacka?t=Kxh8WEYiTOTkGgqz-0",
  //   linkGit: "",
  //   placeWork: "Hackathon Ade Samp",
  //   siteWork: "",
  //   year: "2022",
  // },
];

// const stacks = [
//   "React",
//   "Typescript",
//   "Tailwind",
//   "CSS",
//   "Chakra UI",
//   "SQL",
//   "SQLite",
//   "TypeScript",
//   "Express",
//   "Knex",
//   "Postman",
//   "HTML",
//   "JavaScript",
//   "Styled-components",
//   "Figma",
//   "Adobe XD",
// ];

export default function ProjectsPage() {
  const [filterSelect, setFilterSelect] = React.useState<string>("Clean");

  // const filteredStacks = projects?.map((project) => {
  //   return project?.stacks.map((stack) => {
  //     return stack;
  //   });
  // });

  // const filteredStacks = stacks.map((stack)=>{
  //   return stack
  // })

  useEffect(() => {
    console.log(filterSelect);
  }, [filterSelect]);

  return (
    <main className="flex h-[88vh] flex-col">
      <div className="pt-12 pl-14">
        <h1 className="text-4xl text-blue-900 pb-2 font-bold">My Projects</h1>
        <Select
          onValueChange={(value) => {
            setFilterSelect(value);
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a stack" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="Fullstack">Fullstack</SelectItem>
              <SelectItem value="Frontend">Frontend</SelectItem>
              <SelectItem value="Backend">Backend</SelectItem>
              <SelectItem value="UI Design">UI Design</SelectItem>
              <SelectItem className="font-bold" value="Clean">
                Clean filter
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="px-14 py-8">
        <CardProjects filterSelect={filterSelect} projects={projects} />
      </div>
    </main>
  );
}
