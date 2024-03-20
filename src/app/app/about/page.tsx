import Image from "next/image";
import { BsBuilding } from "react-icons/bs";
import { FaRegCalendarAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const formations = [
  {
    title: "Fullstack Developer",
    time: "Full time",
    place: "Labenu",
    location: "Online",
    date: "Aug 2022 - Mar 2023",
  },
  {
    title: "Graduate in Gastronomy",
    time: "Full time",
    place: "Potiguar University",
    location: "RN",
    date: "Aug 2016 - Aug 2018",
  },
  {
    title: "Postgraduate in Cinema, Radio and TV",
    time: "Part time",
    place: "Belas Artes University",
    location: "SP",
    date: "Aug 2012 - Jan 2015",
  },
  {
    title: "Technical Photography Course",
    time: "Part time",
    place: "Senac",
    location: "SP",
    date: "Jul 2012 - Aug 2014",
  },
  {
    title: "Degree in Cinema",
    time: "Part time",
    place: "Anhembi Morumbi University",
    location: "SP",
    date: "Feb 2008 - Jul 2012",
  },
];

const jobs = [
  {
    title: "FullStack Developer",
    time: "Full time",
    place: "Interas Gestão em Tecnologia",
    location: "RN",
    date: "Apr 2023 - Current",
  },
  {
    title: "Video editor",
    time: "Full time",
    place: "Vicente Piserni Filmes",
    location: "SP",
    date: "Mar 2014 - Oct 2016",
  },
  {
    title: "Photography Assistant",
    time: "Full time",
    place: "Estúdio Gastronômico",
    location: "SP",
    date: "Jan 2014 - Oct 2016",
  },
];

const languages = [
  {
    type: "Portuguese",
    level: "Native",
  },
  {
    type: "English",
    level: "Intermediate",
  },
  {
    type: "Spanish",
    level: "Advanced",
  },
];

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center gap-8 pt-12 px-12">
      {/* Quem eu sou */}
      <div className="flex flex-col pb-4 text-base font-medium leading-6 text-gray-600">
        <h1 className="text-4xl font-bold text-blue-900 mb-8">About me</h1>
        <p className="mb-4 leading-8">
          I'm a full-stack developer with over one year of experience in the
          field. I graduated from the Full Stack Web course at Labenu.
          Throughout my career, I have gained valuable experience through both
          individual and group projects, utilizing technologies such as HTML,
          CSS, JavaScript, React, SQL, Node.js, Next.js, TypeScript, and others.
          I have a postgraduate degree in Cinema, Radio and TV, also worked as a
          photographer and video editor for 7 years. I've always liked design,
          using Photoshop, Figma or Canva, and studying UI/UX I came across
          frontend development and I was sure that from now on I wanted to
          become a Dev.
        </p>
      </div>

      {/* Experiências Profissionais */}
      <div className="flex flex-col w-full pb-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
        Experience
        </h1>
        <div>
          {/* Itens */}
          {jobs.map((job) => {
            return (
              <>
                <div
                  className="flex justify-between items-center pb-4 text-base font-medium w-2/3 mt-4"
                  key={job.title}
                >
                  <h2 className="text-xl font-bold text-gray-500">
                    {job.title}
                  </h2>
                  <span className="py-2 px-4 bg-green-200 flex items-center justify-center text-green-600 rounded-full shadow-md">
                    {job.time}
                  </span>
                </div>
                <div className="flex w-2/3 justify-between text-gray-500">
                  <div className="flex gap-2">
                    <span className="flex justify-center items-center gap-2">
                      <BsBuilding />
                      <a href="#">{job.place}</a>
                    </span>
                    <span className="flex justify-center items-center gap-1">
                      {"/"}
                      <IoLocationOutline />
                      <a href="#">{job.location}</a>
                    </span>
                  </div>
                  <span className="flex justify-center items-center gap-2">
                    <FaRegCalendarAlt />
                    <p>{job.date}</p>
                  </span>
                </div>
                <div className="border-b border-gray-300 w-2/3 pt-4"></div>
              </>
            );
          })}
        </div>

        {/* <!-- Repita a estrutura acima para as demais formações --> */}
      </div>

      {/* Formações */}
      <div className="flex flex-col w-full pb-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Education</h1>
        <div>
          {/* Itens */}
          {formations.map((formation) => {
            return (
              <>
                <div
                  className="flex justify-between items-center pb-4 text-base font-medium w-2/3 mt-4"
                  key={formation.title}
                >
                  <h2 className="text-xl font-bold text-gray-500">
                    {formation.title}
                  </h2>
                  <span className="py-2 px-4 bg-green-200 flex items-center justify-center text-green-600 rounded-full shadow-md">
                    {formation.time}
                  </span>
                </div>
                <div className="flex w-2/3 justify-between text-gray-500">
                  <div className="flex gap-2">
                    <span className="flex justify-center items-center gap-2">
                      <BsBuilding />
                      <a href="#">{formation.place}</a>
                    </span>
                    <span className="flex justify-center items-center gap-1">
                      {"/"}
                      <IoLocationOutline />
                      <a href="#">{formation.location}</a>
                    </span>
                  </div>
                  <span className="flex justify-center items-center gap-2">
                    <FaRegCalendarAlt />
                    <p>{formation.date}</p>
                  </span>
                </div>
                <div className="border-b border-gray-300 w-2/3 pt-4"></div>
              </>
            );
          })}
        </div>

        {/* <!-- Repita a estrutura acima para as demais formações --> */}
      </div>

      {/* Idiomas */}
      <div className="flex flex-col w-full pb-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Idiomas</h1>
        <div>
          {/* Itens */}
          {languages.map((language) => {
            return (
              <>
                <div
                  className="flex justify-between items-center pb-4 text-base font-medium w-2/3 mt-4"
                  key={language.type}
                >
                  <h2 className="text-xl font-bold text-gray-500">
                    {language.type}
                  </h2>
                  <span className="py-2 px-4 bg-green-200 flex items-center justify-center text-green-600 rounded-full shadow-md">
                    {language.level}
                  </span>
                </div>
                <div className="border-b border-gray-300 w-2/3 pt-4"></div>
              </>
            );
          })}
        </div>
      </div>
    </main>
  );
}
