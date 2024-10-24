import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-[37rem]">
      <section className="flex items-center justify-center w-full px-12">
        <div className="section-home-item flex-grow flex justify-between font-poppins text-[26px] items-center text-[#42446e]">
          <div className="w-1/2">
          <h1 className="text-5xl font-bold leading-tight">
            Hi 👋, <br />
            I'm{" "}
            <span className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent">
              Marina Rosas
            </span>
            <br />
            {/* and I'm a web developer. */}
          </h1>
          <p className="text-xl">
            A passionate web developer specializing in crafting responsive,
            user-centric applications. I have experience across the full stack,
            from frontend design to backend systems, and have a keen eye for
            UI/UX design.
          </p>
          </div>
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
