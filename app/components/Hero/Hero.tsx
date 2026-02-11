
export default function Hero() {


  return (
    <section
      style={{ background: "var(--gradient-background1)" }}
      className="relative text-white  min-h-screen flex flex-col justify-center items-center  px-6 md:px-20  "
    >
      <h1 className="relative z-20 text-5xl md:text-7xl font-bold mb-4 leading-tight bg-gradient-to-b from-white via-cyan-100 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)]">
        Привет, я Александр
      </h1>


      <p className="relative z-20 text-lg md:text-2xl mb-8 bg-gradient-to-b from-white to-cyan-200 bg-clip-text text-transparent max-w-xl text-center drop-shadow-[0_1px_8px_rgba(0,0,0,0.8)]">
        Я создаю современные веб-приложения с использованием React, Next.js и Tailwind CSS
      </p>
      {/* Блок картинок с абсолютным позиционированием */}
      <div className="absolute inset-0 w-full h-full pointer-events-none opacity-70">
        <div className="relative w-full h-full">
          <img
            src="/Hero/fon2.svg"
            className="absolute inset-0 w-full h-full object-cover mix-blend-lighten z-0"
          />
          <img
            src="/Hero/neuron.png"
            className="absolute inset-0 w-full h-full object-cover mix-blend-lighten z-10"
          />
        </div>
      </div>

      <button className="px-8 py-4 bg-primary text-black font-semibold rounded-lg shadow-neon hover:brightness-110 transition-all z-20">
        Связаться со мной
      </button>
    </section>





  )
}
