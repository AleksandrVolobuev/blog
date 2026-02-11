export default function BenefitsSection() {
  const items = [
    "Объясняем сложные вещи простым и доходчивым языком.",
    "Обучаем не просто языку программирования или одной дисциплине — мы обучаем полностью всей специальности.",
    "Ознакомляем с содержанием урока только в режиме реального времени. Ты сможешь сразу задать вопрос и тут же получить ответ.",
    "Обучение ведёт ведущий и действующий специалист в области искусственного интеллекта в Южной Корее.",
    "Обучение проходит в группе по 15 человек, которая делится на команды и выполняет собственный проект. Студенты погружаются в реальную атмосферу разработки.",
  ];

  return (
    <section className="relative w-full py-20 px-6 md:px-16 bg-[#04253E] text-white overflow-hidden">
      <div className="absolute top-70 -right-56 w-[1000px] h-[1000px]">
        <div className="relative">
          <img
            src="/BenefitsSection/div3.svg"
            className="absolute inset-0 mix-blend-lighten  z-0 "
          />
          <img
            src="/BenefitsSection/mac1.png"
            className="relative z-10  mix-blend-lighten"
          />
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT TEXT BLOCK */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            ПОЧЕМУ ИМЕННО НАШ КУРС?
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-cyan-400 mt-2">
            ВСЕ ПРОСТО!
          </h3>

          <ul className="mt-10 space-y-6">
            {items.map((item, index) => (
              <li key={index} className="flex items-start gap-4">
                <img src="/BenefitsSection/v1.svg" alt="v1" />
                <p className="text-lg">{item}</p>
              </li>
            ))}
          </ul>

          <button className="mt-10 px-8 py-4 rounded-lg bg-cyan-500 text-white font-semibold hover:bg-cyan-400 transition shadow-lg">
            ЗАПИСАТЬСЯ НА ОЗНАКОМИТЕЛЬНЫЙ ВЕБИНАР
          </button>
        </div>

      </div>
    </section>
  );
}
