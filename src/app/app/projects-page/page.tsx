import { CardProjects } from "@/components/CardProjects";
import Image from "next/image";
import { BsBuilding } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

export default function ProjectsPage() {
  return (
    <main className="flex h-[88vh] flex-col">
      <div className="pt-12 pl-14">
        <h1 className="text-4xl text-blue-900 pb-2 font-bold">My Projects</h1>
        <h3 className="text-base text-gray-500">Work and project done</h3>
      </div>
      <div className="px-14 py-8">
        <CardProjects />
      </div>
    </main>
  );
}
