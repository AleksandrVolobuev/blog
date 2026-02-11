import React from "react";

const benefitsData = [
  { icon: "/Benifits/conference.svg", text: "Ты станешь востребованным специалистом в области искусственного интеллекта" },
  { icon: "/Benifits/survey.svg", text: "Будешь создавать модели искусственного интеллекта на Python" },
  { icon: "/Benifits/diploma.svg", text: "Сумеешь создавать программы с компьютерным зрением и нейросетями" },
  { icon: "/Benifits/manager.svg", text: "Мы обучаем только тому, что пригодится в реальной работе" },
  { icon: "/Benifits/people.svg", text: "Ты найдёшь единомышленников для совместных проектов" },
  { icon: "/Benifits/conference.svg", text: "Мы создаём IT-сообщество профессионалов" },
  { icon: "/Benifits/skyscrapers.svg", text: "Поможем трудоустроиться после обучения" },
];

export default function Benefits() {
  return (
    <section style={{ background: "var(--gradient-background2)" }} className="py-16  text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          Почему выбирают наш курс
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

              <img src={item.icon} alt="" className="w-14 h-14 mb-6 z-10" />

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
