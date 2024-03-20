import Image from "next/image";
import { BsBuilding } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const iconStack = [
  {
    srcImage: "/html5icon.svg",
    altImage: "Icone Html5",
    title: "HTML5",
  },
  {
    srcImage: "/cssicon.svg",
    altImage: "Icone CSS3",
    title: "CSS3",
  },
  {
    srcImage: "/javascripticon.svg",
    altImage: "Icone JavaScript",
    title: "JavaScript",
  },
  {
    srcImage: "/typescript.svg",
    altImage: "Icone TypeScript",
    title: "TypeScript",
  },
  {
    srcImage: "/vscodeicon.svg",
    altImage: "Icone VsCode",
    title: "VS Code",
  },
  {
    srcImage: "/reacticon.svg",
    altImage: "Icone React",
    title: "React",
  },
  {
    srcImage: "/reacticon.svg",
    altImage: "Icone React Native",
    title: "React Native",
  },
  {
    srcImage: "/nextJs.svg",
    altImage: "Icone Next Js",
    title: "Next Js",
  },
  {
    srcImage: "/giticon.svg",
    altImage: "Icone Git",
    title: "Git",
  },

  {
    srcImage: "/githubicon.svg",
    altImage: "Icone Github",
    title: "Github",
  },
  {
    srcImage: "/tailwind.svg",
    altImage: "Icone Tailwind",
    title: "Tailwind",
  },
  {
    srcImage: "/chakraui.svg",
    altImage: "Icone Chakra",
    title: "Chaka UI",
  },
  {
    srcImage: "/styledcomponents.png",
    altImage: "Icone Styled Componentst",
    title: "Styled Componentst",
  },
  {
    srcImage: "/photoshop.png",
    altImage: "Icone Adobe Photoshop",
    title: "Adobe Photoshop",
  },
  {
    srcImage: "/figmalogo.png",
    altImage: "Icone Figma",
    title: "Figma",
  },
  {
    srcImage: "/mySql.svg",
    altImage: "Icone My Sql",
    title: "My SQL",
  },
  {
    srcImage: "/postman.svg",
    altImage: "Icone Postman",
    title: "Postman",
  },
  {
    srcImage: "/insominia.svg",
    altImage: "Icone Insomnia",
    title: "Insomnia",
  },
];

export default function TechStackPage() {
  return (
    <main className="flex h-[88vh] flex-col">
      <div className="pt-12 pl-14">
        <h1 className="text-4xl text-blue-900 pb-2 font-bold">
          My Tech Stacks
        </h1>
        <h3 className="text-base text-gray-500">
          Technologies I've been working on recently
        </h3>
      </div>
      <div className="px-4 py-12 grid grid-cols-6 grid-rows-3 place-content-center gap-16">
        {iconStack.map((icon) => {
          return (
            <div
              key={icon.srcImage}
              className="flex flex-col justify-center items-center gap-2"
            >
              <img
                src={icon.srcImage}
                alt={icon.altImage}
                className="size-20"
              />
              <p>{icon.title}</p>
            </div>
          );
        })}
      </div>
    </main>
  );
}
