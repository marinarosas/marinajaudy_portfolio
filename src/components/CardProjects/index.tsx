"use client";

import { IProject } from "@/app/app/projects-page/page";
import Link from "next/link";
import * as React from "react";
import { CiLink } from "react-icons/ci";
import { FaFigma, FaGithub } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";
import { SiCanva } from "react-icons/si";

interface Props {
  image: string;
  title: string;
  about: string;
  stacks: string[];
  link: string;
  linkGit: string;
  linkPresentation: string;
  linkFigma: string;
  placeWork: string;
  siteWork: string;
  year: string;
  types: string[];
}

export function CardProjects({
  image,
  title,
  about,
  stacks,
  link,
  linkGit,
  linkPresentation,
  linkFigma,
  placeWork,
  siteWork,
  year,
  types,
}: Props) {
  function handleOpenNewPage(urlLink: string | undefined) {
    const url = urlLink;
    window.open(url, "_blank");
  }

  return (
    <div
      key={title}
      className="flex flex-col justify-between bg-gray-100 w-96 rounded-2xl shadow-lg overflow-hidden border-2"
    >
      <div className="bg-white flex justify-center items-center rounded-t-2xl cover">
        <img
          src={image}
          width={384}
          height={587}
          alt="Imagem da Tela"
          className="w-fit rounded-t-xl h-64 object-cover"
        />
      </div>

      <div className="flex flex-col h-full justify-center items-center gap-2">
        <h1 className="font-bold w-full px-4 text-xl pt-2">
          {title}{" "}
          <span className="text-base">
            {" "}
            {"("}{" "}
            {types.map((type, index) => {
              return (
                <span key={index}>
                  {type} {index !== types.length - 1 && "|"}
                </span>
              );
            })}
            {")"}
          </span>
        </h1>
        <div className="flex flex-col w-full pr-4 text-md">
          <Link
            href=""
            onClick={() => handleOpenNewPage(siteWork)}
            passHref
            className={`flex gap-2 w-full px-4 font-semibold  hover:cursor-pointer items-center ${
              siteWork ? "underline underline-offset-1" : ""
            }`}
          >
            {placeWork}
          </Link>
          <span className="flex gap-2 w-full px-4 text-md">{year}</span>
        </div>
        <p className="flex flex-1 text-sm px-4 text-start">{about}</p>

        <div className="flex flex-col w-full items-center text-blue-800 px-4">
          <h4 className="min-w-fit text-sm font-semibold w-full">
            Tech stack:
          </h4>
          <span className="text-xs w-full ">
            {stacks.map((stack, index) => {
              return (
                <span key={index} className="pr-1">
                  {stack} {index !== stacks.length - 1 && "|"}
                </span>
              );
            })}
          </span>
        </div>

        <div className="flex w-full px-4 justify-between pt-2 pb-4">
          {link !== "" && (
            <Link
              href=""
              onClick={() => handleOpenNewPage(link)}
              passHref
              className="flex min-w-fit gap-2 text-sm hover:cursor-pointer items-center"
            >
              <CiLink />
              Project Link
            </Link>
          )}

          {linkGit !== "" && (
            <Link
              href=""
              onClick={() => handleOpenNewPage(linkGit)}
              passHref
              className="flex min-w-fit gap-2 text-sm hover:cursor-pointer items-center"
            >
              <FaGithub />
              Code Link
            </Link>
          )}
          {linkPresentation !== "" && (
            <Link
              href=""
              onClick={() => handleOpenNewPage(linkPresentation)}
              passHref
              className="flex min-w-fit gap-2 text-sm hover:cursor-pointer items-center"
            >
              <SiCanva />
              Canva Link
            </Link>
          )}
          {linkFigma !== "" && (
            <Link
              href=""
              onClick={() => handleOpenNewPage(linkFigma)}
              passHref
              className="flex min-w-fit gap-2 text-sm hover:cursor-pointer items-center"
            >
              <FaFigma />
              Figma Link
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
