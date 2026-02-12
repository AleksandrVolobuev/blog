export default function BenefitsSection() {
  const items = [
    "Говорю на языке бизнеса и перевожу сложные технические решения в понятные шаги.",
    "Проектирую решения под вашу задачу, а не под шаблон или «модную» технологию.",
    "Работаю итерациями: быстро показываю результат и корректирую направление по обратной связи.",
    "Уделяю внимание производительности, стабильности и удобству интерфейса с первого этапа.",
    "Документирую ключевые решения, чтобы проект было легко передать и масштабировать.",
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
            ПОЧЕМУ ВЫБИРАЮТ
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-cyan-400 mt-2">
            МЕНЯ КАК РАЗРАБОТЧИКА
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
            Обсудить сотрудничество
          </button>
        </div>

      </div>
    </section>
  );
}
