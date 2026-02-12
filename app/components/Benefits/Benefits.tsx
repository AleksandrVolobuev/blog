import React from "react";
import { withBasePath } from "@/app/lib/paths";

const benefitsData = [
  { icon: "/Benifits/conference.svg", text: "Погружаюсь в задачу бизнеса, а не просто закрываю тикеты по шаблону." },
  { icon: "/Benifits/survey.svg", text: "Проектирую понятную архитектуру, чтобы продукт было легко развивать." },
  { icon: "/Benifits/diploma.svg", text: "Пишу чистый и поддерживаемый код с акцентом на качество и скорость." },
  { icon: "/Benifits/manager.svg", text: "Прозрачно веду процесс: сроки, риски и статус видны на каждом этапе." },
  { icon: "/Benifits/people.svg", text: "Быстро вхожу в legacy-проекты и аккуратно улучшаю их без регрессий." },
  { icon: "/Benifits/conference.svg", text: "Держу фокус на UX, SEO и Core Web Vitals, чтобы продукт реально работал лучше." },
  { icon: "/Benifits/skyscrapers.svg", text: "Остаюсь на связи после релиза и помогаю с дальнейшим развитием." },
];

export default function Benefits() {
  return (
    <section style={{ background: "var(--gradient-background2)" }} className="py-16  text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Почему со мной работают
        </h2>

        {/* === GRID 12 COLS === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8">

          {benefitsData.map((item, index) => (
            <div
              key={index}
              className={`
                bg-[#062d37]
                border border-cyan-400/30
                rounded-2xl p-8 shadow-[0_0_15px_rgba(0,255,255,0.15)]
                hover:shadow-[0_0_25px_rgba(0,255,255,0.45)]
                hover:border-cyan-300/50
                transition-all duration-300
                relative overflow-hidden
                ${index < 4 ? "lg:col-span-3" : "lg:col-span-4"}
              `}
            >

              {/* Световой блик сверху */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="
                  absolute top-0 left-1/2 -translate-x-1/2
                  w-[120%] h-[60%]
                  bg-gradient-to-b from-cyan-300/20 to-transparent
                  blur-2xl
                "></div>
              </div>

              <img src={withBasePath(item.icon)} alt="" className="w-14 h-14 mb-6 z-10" />

              <p className="text-neutral-200 text-lg leading-relaxed z-10">
                {item.text}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
