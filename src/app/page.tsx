import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-[37rem]">
      <section className="flex items-center justify-center w-full px-12">
        <div className="section-home-item flex-grow flex justify-between font-poppins text-[26px] items-center text-[#42446e]">
          <h1 className="text-5xl font-bold leading-tight">
            Hi 👋, <br />
            My name is <br />
            <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
              Marina Jaudy
            </span>
            <br />and I'm a web developer.
          </h1>
          <div className="rounded-full bg-gradient-to-r from-pink-500 to-blue-500 text-transparent h-[22rem] w-[22rem]">
            <img
              src="/Marinasquare.png"
              alt="Imagem de Perfil"
              className="rounded-full p-4 filter h-[22rem] w-[22rem] grayscale-[100%]"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
