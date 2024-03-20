import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function ContactPage() {
  return (
    <>
      <main className="flex flex-col justify-center items-center h-screen -mt-12">
        <h1 className="text-5xl text-blue-900 pb-2 font-bold">
          To contact me, send an email to:
        </h1>
        <h3 className="text-5xl h-20 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
          marinarrjaudy@hotmail.com
        </h3>
      </main>
      <footer className="flex h-12 w-full justify-between items-center absolute bottom-0 px-12">
        <a href="#" className="text-3xl font-semibold">
          {"{MJ}"}
        </a>
        <div className="text-sm space-x-2">
          <a
            href="https://api.whatsapp.com/send/?phone=5584981249920&text&type=phone_number&app_absent=0"
            target="_blank"
          >
            <span className="telefone-contact">+55 84 98124 9920</span>
          </a>
          <span className="email-contact-bottom">
            marinarrjaudy@hotmail.com
          </span>
        </div>

        <div className="text-sm space-x-1 flex items-center">
          <span>Designed and developed by </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
            Marina Jaudy
          </span>
          <span>with</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-pink-500">
            Love & Coffee
          </span>

          <div className="flex pl-4 gap-1">
            <a href="https://github.com/marinajaudy" target="_blank">
              <FaGithub size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/marina-jaudy-599b11a9/"
              target="_blank"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
