import AiIsCoolItem from "./AiIsCoolItem";
import { aiFacts } from "./aiIsCoolData";

export default function AiIsCoolSection() {
  return (
    <section style={{ background: "var(--gradient-background1)" }} className=" py-24  relative overflow-hidden">
      <div className="absolute top-70 right-2 w-[800px] h-[800px]">
        <div className="relative">
          <img
            src="/Hero/fon2.svg"
            className="absolute inset-0 mix-blend-lighten  z-0 "
          />
          <img
            src="/AiIsCool/ai-artificial.png"
            className="relative z-10  mix-blend-lighten"
          />
        </div>
      </div>
      {/* Правый фон */}
      <img
        src="/Hero/fon1.svg"
        className="absolute right-0 top-0 h-full opacity-40 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <h2 className="text-4xl md:text-5xl font-bold text-cyan-300 mb-14">
          КАК Я УСИЛИВАЮ <br /> ВАШ ПРОЕКТ
        </h2>

        <ul className="space-y-4">
          {aiFacts.map((item, index) => (
            <AiIsCoolItem key={index} text={item.text} />
          ))}
        </ul>

        <div className="text-center mt-14">
          <button className="
            px-10 py-5 text-lg tracking-wide
            bg-cyan-500/80 hover:bg-cyan-400
            text-black font-semibold 
            rounded-xl shadow-[0_0_30px_rgba(0,255,255,0.4)]
            transition-all
          ">
            Посмотреть кейсы
          </button>
        </div>

      </div>

    </section>
  );
}
