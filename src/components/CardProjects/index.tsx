"use client";

import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import { CiLink } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";

interface Props {
  title: string;
  description: string;
  srcImage: string;
  altImage: string;
}

export function CardProjects() {
  function handleOpenNewPage(urlLink: string | undefined) {
    const url = urlLink;
    window.open(url, "_blank");
  }

  const projects = [
    {
      image: "/Interas.png",
      title: "Interas Tecnologia Website",
      about:
        "The website was created together with Frabricio Dantas, I was responsible for the website's ease dev page and the footer.",
      stacks: "React, Typescript, Tailwind, Shadcn, SplideJs and CSS.",
      link: "https://interas.com.br/interas/rpa",
      linkGit: "",
      placeWork: "Interas",
      siteWork: "https://www.interas.com.br/",
      year: "2024",
    },,
    {
      image: "/iconeTela.png",
      title: "Ícone Energia Website",
      about:
        "The website was created together with Frabricio Dantas, I was responsible for the website's about page and the footer.",
      stacks: "React, Typescript, Chakra UI, Swipper and CSS.",
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
      stacks: "React, Typescript and CSS.",
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
      stacks:
        "SQL, SQLite, TypeScript, POO, <br /> Express, Knex, Layered Architecture, UUID, Hashes, Routing e Postman",
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
      stacks: "SQL, SQLite, TypeScript, POO, Express, Knex and Postman",
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
      stacks:
        "HTML, JavaScript, React, React Router, Styled-components, React Context and Axios",
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
      stacks: "React, JavaScript, HTML and Style-Components",
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
      stacks: "HTML, JavaScript, CSS, and DOM",
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
      stacks: "HTML and CSS",
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
      stacks: "Figma",
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
      stacks: "Adobe XD",
      link: "https://youtu.be/iwkqwzvobQY",
      linkGit: "",
      placeWork: "Hackathon Experimenta",
      siteWork: "",
      year: "2022",
    },
    {
      image: "/minasabordo.png",
      title: "Minas Abordo",
      about:
        "Project carried out as a UI/UX designer at the Ade Sampa Hackathon in January 2022, where I used Figma to create the design and prototype.",
      stacks: "Figma",
      link: "https://www.figma.com/file/nPINxd2hMGjlHqflSzTjHZ/App-Hacka?t=Kxh8WEYiTOTkGgqz-0",
      linkGit: "",
      placeWork: "Hackathon Ade Samp",
      siteWork: "",
      year: "2022",
    },
  ];
  return (
    <div className="flex flex-wrap gap-4 justify-start px-9">
      {projects.map((project) => {
        return (
          <div
            key={project?.title}
            className="flex flex-col justify-between bg-gray-100 w-96 rounded-2xl shadow-lg overflow-hidden border-2"
          >
            <div className="bg-white flex justify-center items-center rounded-t-2xl cover">
              <img
                src={project?.image}
                width={384}
                height={587}
                alt="Imagem da Tela"
                className="w-fit rounded-t-xl h-64 object-cover"
              />
            </div>

            <div className="grid grid-rows-5 h-full pt-4 justify-center items-center gap-1">
              <h1 className="row-span-1 font-bold w-full px-4 text-lg">
                {project?.title}
              </h1>

              <p className="row-span-2 text-sm px-4 h-full">{project?.about}</p>

              <div className="row-span-1 flex pr-4 text-sm">
                <Link
                  href=""
                  onClick={() => handleOpenNewPage(project?.siteWork)}
                  passHref
                  className="flex gap-2 w-full px-4  text-sm hover:cursor-pointer items-center"
                >
                  <FaRegBuilding />
                  {project?.placeWork}
                </Link>
                <span>{project?.year}</span>
              </div>

              <div className="row-span-2 flex w-full h-full items-center text-blue-800">
                <h4 className="min-w-fit px-4 text-sm font-semibold">
                  Tech stack:
                </h4>
                <span className="pr-4 text-xs">{project?.stacks}</span>
              </div>

              <div className="row-span-1 flex w-full justify-between pt-4">
                {project?.link !== "" && (
                  <Link
                    href=""
                    onClick={() => handleOpenNewPage(project?.link)}
                    passHref
                    className="flex min-w-fit px-4 pb-4 gap-2 text-sm hover:cursor-pointer"
                  >
                    <CiLink />
                    Project Link
                  </Link>
                )}

                {project?.linkGit !== "" && (
                  <Link
                    href=""
                    onClick={() => handleOpenNewPage(project?.linkGit)}
                    passHref
                    className="flex min-w-fit px-4 pb-4 gap-2 text-sm hover:cursor-pointer"
                  >
                    <FaGithub />
                    Code Link
                  </Link>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
