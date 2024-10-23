"use client";
import { CardProjects } from "@/components/CardProjects";
import Image from "next/image";
import { BsBuilding } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useEffect } from "react";

export interface IProject {
  image: string;
  title: string;
  about: string;
  stacks: string[];
  link: string;
  linkGit: string;
  placeWork: string;
  siteWork: string;
  year: string;
}

const projects = [
  {
    image: "/Interas.png",
    title: "Interas Tecnologia Website",
    about:
      "The website was created together with Frabricio Dantas, I was responsible for the website's ease dev page and the footer.",
    stacks: ["React", "Typescript", "Tailwind", "CSS"],
    link: "https://interas.com.br/interas/rpa",
    linkGit: "",
    placeWork: "Interas",
    siteWork: "https://www.interas.com.br/",
    year: "2024",
  },
  ,
  {
    image: "/iconeTela.png",
    title: "Ícone Energia Website",
    about:
      "The website was created together with Frabricio Dantas, I was responsible for the website's about page and the footer.",
    stacks: ["React", "Typescript", "Chakra UI", "CSS"],
    link: "https://iconeenergia.com.br/sobre",
    linkGit: "",
    placeWork: "Interas",
    siteWork: "https://www.interas.com.br/",
    year: "2023",
  },
  {
    image: "/1679941023599.gif",
    title: "Donko app",
    about:
      "Donko was the winning application of the Rio Empreender Criativo Hackathon, a platform to help people find cultural events in the palm of their hand, using the map to show the event closest to the user.",
    stacks: ["React", "Typescript", "CSS"],
    link: "https://linktr.ee/sambia?utm_source=linktree_admin_share",
    linkGit: "https://github.com/SahBianchi/hackrio-front",
    placeWork: "Hackathon Rio Empreender Criativo",
    siteWork: "",
    year: "2023",
  },
  {
    image: "/labook.png",
    title: "Labook Backend Project",
    about:
      "Labook is a social network with the aim of promoting connection and interaction between people. Anyone who registers on the application will be able to create and like publications.",
    stacks: ["SQL", "SQLite", "TypeScript", "Express", "Knex", "Postman"],
    link: "",
    linkGit: "https://github.com/marinajaudy/projeto-labook-backend",
    placeWork: "Labenu",
    siteWork: "https://www.instagram.com/labenu_/",
    year: "2023",
  },
  {
    image: "/labecommerce.png",
    title: "Labecommerce Backend Project",
    about:
      "First back-end project, where I practice the entire basis of creating an API linked to a real database.",
    stacks: ["SQL", "SQLite", "TypeScript", "Express", "Knex", "Postman"],
    link: "",
    linkGit: "https://github.com/marinajaudy/labecommerce-backend",
    placeWork: "Labenu",
    siteWork: "https://www.instagram.com/labenu_/",
    year: "2023",
  },
  {
    image: "/1675254420010.gif",
    title: "React APIs Project",
    about:
      "The objective of this project is to create a website with three pages using PokeApi - API with the following tools: React, React Router, Styled-components, React Context and Axios.",
    stacks: ["HTML", "JavaScript", "React", "Styled-components"],
    link: "https://projeto-react-apis-chi.vercel.app/",
    linkGit: "https://github.com/marinajaudy/projeto-react-apis",
    placeWork: "Labenu",
    siteWork: "https://www.instagram.com/labenu_/",
    year: "2022",
  },
  {
    image: "/projetoReact.png",
    title: "FrontEnd React Project",
    about:
      "This project aims to introduce the fundamentals of React, through the construction of an E-Commerce.",
    stacks: ["React", "JavaScript", "HTML", "Style-Components"],
    link: "https://astro-tshirts.surge.sh/",
    linkGit: "https://github.com/marinajaudy/projeto-frontendreact",
    placeWork: "Lebenu",
    siteWork: "https://www.instagram.com/labenu_/",
    year: "2022",
  },
  {
    image: "/projectintroweb.png",
    title: "Intro Web Project",
    about:
      "The objective was to build a stylized page, with list and search using DOM manipulation. I used HTML, CSS, JavaScript and DOM to build my page functions.",
    stacks: ["HTML", "JavaScript", "CSS", "DOM"],
    link: "https://marinajaudy.github.io/projeto-intro-web/",
    linkGit: "https://github.com/marinajaudy/projeto-intro-web",
    placeWork: "Labenu",
    siteWork: "https://www.instagram.com/labenu_/",
    year: "2022",
  },
  {
    image: "/meuportifolio.png",
    title: "My Portfolio (Previous Version)",
    about:
      "The objective is to reproduce a portfolio website using a ready-made Figma template, where I used HTML and CSS to build the features of my page.",
    stacks: ["HTML", "CSS"],
    link: "https://projetoportifolio-topaz.vercel.app/",
    linkGit: "https://github.com/marinajaudy/projetoportifolio",
    placeWork: "Labenu",
    siteWork: "https://www.instagram.com/labenu_/",
    year: "2022",
  },
  {
    image: "/adoteumhorta.png",
    title: "Adopt a Garden",
    about:
      "Project carried out as a UI/UX designer at the Sustainable Cities Hackathon in June 2022, where I used Figma to create the design and prototype",
    stacks: ["Figma"],
    link: "https://www.figma.com/file/3mDm9mW4K6qPSUzuYx5czk/Adote-uma-Horta?type=design&node-id=0-1&mode=design&t=32yXP5gTuFENcWrC-0",
    linkGit: "",
    placeWork: "Hackthon Cidades Sustentáveis",
    siteWork: "",
    year: "2022",
  },
  {
    image: "/telasServicoFunerarios.png",
    title: "Funeral Services",
    about:
      "Project carried out as UI/UX designer at the Hackathon Experimenta Serviços Públicos de Guarulhos in May 2022, where I used Adobe Ux to create the design and prototype.",
    stacks: ["Adobe XD"],
    link: "https://youtu.be/iwkqwzvobQY",
    linkGit: "",
    placeWork: "Hackathon Experimenta",
    siteWork: "",
    year: "2022",
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

const stacks = [
  "React",
  "Typescript",
  "Tailwind",
  "CSS",
  "Chakra UI",
  "SQL",
  "SQLite",
  "TypeScript",
  "Express",
  "Knex",
  "Postman",
  "HTML",
  "JavaScript",
  "Styled-components",
  "Figma",
  "Adobe XD",
];

export default function ProjectsPage() {
  const [filterSelect, setFilterSelect] = React.useState<string>("");

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
              <SelectLabel>Frontend</SelectLabel>
              <SelectItem value="HTML">HTML</SelectItem>
              <SelectItem value="React">React</SelectItem>
              <SelectItem value="JavaScript">JavaScript</SelectItem>
              <SelectItem value="Typescript">Typescript</SelectItem>
              <SelectItem value="CSS">CSS</SelectItem>
              <SelectItem value="Styled-components">
                Styled-components
              </SelectItem>
              <SelectItem value="Tailwind">Tailwind</SelectItem>
              <SelectItem value="Chakra UI">Chakra UI</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>Backend</SelectLabel>
              <SelectItem value="SQL">SQL</SelectItem>
              <SelectItem value="SQLite">SQLite</SelectItem>
              <SelectItem value="Express">Express</SelectItem>
              <SelectItem value="Knex">Knex</SelectItem>
              <SelectItem value="Postman">Postman</SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel>UI Design</SelectLabel>
              <SelectItem value="Figma">Figma</SelectItem>
              <SelectItem value="Adobe XD">Adobe XD</SelectItem>
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
