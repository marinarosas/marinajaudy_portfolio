"use client";

import { IProject } from "@/app/app/projects-page/page";
import Link from "next/link";
import * as React from "react";
import { CiLink } from "react-icons/ci";
import { FaFigma, FaGithub } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";
import { SiCanva } from "react-icons/si";

interface Props {
  // title: string;
  // description: string;
  // srcImage: string;
  // altImage: string;
  filterSelect: string;
  projects: IProject[] | undefined;
}

export function CardProjects({ filterSelect, projects }: Props) {
  function handleOpenNewPage(urlLink: string | undefined) {
    const url = urlLink;
    window.open(url, "_blank");
  }

  // const filteredStacks = projects?.map((project) => {
  //   return project.stacks.filter((stack) => {
  //     return stack.toLowerCase().includes(filterSelect?.toLowerCase());
  //   });
  // });

  return (
    <div className="flex flex-wrap gap-4 justify-start px-9">
      {projects?.map((project) => {
        return (
          project.stacks.includes(filterSelect) && (
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

                <p className="row-span-2 text-sm px-4 h-full">
                  {project?.about}
                </p>

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
                  <span className="pr-4 text-xs gap-2">{project?.stacks}</span>
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
          )
        );
      })}
      {filterSelect === "Clean" &&
        projects?.map((project) => {
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

              <div className="flex flex-col h-full justify-center items-center gap-2">
                <h1 className="font-bold w-full px-2 text-lg pt-2">
                  {project?.title}{" "}
                  <span className="text-sm">
                    {" "}
                    {"("}{" "}
                    {project?.types.map((type, index) => {
                      return (
                        <span key={index}>
                          {type} {index !== project.types.length - 1 && "|"}
                        </span>
                      );
                    })}{")"}
                  </span>
                </h1>
                <div className="flex flex-col w-full pr-4 text-xs">
                  <Link
                    href=""
                    onClick={() => handleOpenNewPage(project?.siteWork)}
                    passHref
                    className={`flex gap-2 w-full px-2 font-semibold  hover:cursor-pointer items-center ${
                      project?.siteWork
                        ? "underline underline-offset-1"
                        : ""
                    }`}
                  >
                    {project?.placeWork}
                  </Link>
                  <span className="flex gap-2 w-full px-2">
                    {project?.year}
                  </span>
                </div>
                <p className="h-2/5 min-h-36 text-xs px-2 text-start">
                  {project?.about}
                </p>

                <div className="row-span-2 flex w-full items-center text-blue-800">
                  <h4 className="min-w-fit px-4 text-sm font-semibold">
                    Tech stack:
                  </h4>
                  <span className="pr-4 text-xs gap-2">
                    {project?.stacks.map((stack, index) => {
                      return (
                        <span key={index} className="pr-1">
                          {stack} {index !== project.stacks.length - 1 && "|"}
                        </span>
                      );
                    })}
                  </span>
                </div>

                <div className="row-span-1 flex w-full justify-between pt-2">
                  {project?.link !== "" && (
                    <Link
                      href=""
                      onClick={() => handleOpenNewPage(project?.link)}
                      passHref
                      className="flex min-w-fit px-4 pb-4 gap-2 text-sm hover:cursor-pointer items-center"
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
                      className="flex min-w-fit px-4 pb-4 gap-2 text-sm hover:cursor-pointer items-center"
                    >
                      <FaGithub />
                      Code Link
                    </Link>
                  )}
                  {project?.linkPresentation !== "" && (
                    <Link
                      href=""
                      onClick={() =>
                        handleOpenNewPage(project?.linkPresentation)
                      }
                      passHref
                      className="flex min-w-fit px-4 pb-4 gap-2 text-sm hover:cursor-pointer items-center"
                    >
                      <SiCanva />
                      Canva Link
                    </Link>
                  )}
                   {project?.linkFigma !== "" && (
                    <Link
                      href=""
                      onClick={() =>
                        handleOpenNewPage(project?.linkFigma)
                      }
                      passHref
                      className="flex min-w-fit px-4 pb-4 gap-2 text-sm hover:cursor-pointer items-center"
                    >
                      <FaFigma />
                      Figma Link
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
