import { withBasePath } from "@/app/lib/paths";

export default function VacanciesSection() {
  const vacancies = [
    {
      id: 1,
      title: "Landing Page под запуск",
      image: withBasePath("/importantIMG/1.png"),
      experience: "1-2 недели",
      education: "Фикс-прайс",
      age: "Готовый лендинг + адаптив",
    },
    {
      id: 2,
      title: "Корпоративный сайт",
      image: withBasePath("/importantIMG/2.png"),
      experience: "3-5 недель",
      education: "Этапная оплата",
      age: "Сайт + CMS + SEO-база",
    },
    {
      id: 3,
      title: "Поддержка и развитие продукта",
      image: withBasePath("/importantIMG/3.png"),
      experience: "От 20 ч/мес",
      education: "Почасовой формат",
      age: "Регулярные улучшения",
    },
  ];

  return (
    <section
      style={{ background: "var(--gradient-background2)" }}
      className="w-full py-16 px-6 md:px-16 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Форматы сотрудничества</h2>
          <button className="px-5 py-2 rounded-lg bg-primary text-black font-semibold hover:brightness-110 transition-all">
            Обсудить формат →
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {vacancies.map((vac) => (
            <article
              key={vac.id}
              className="
                bg-[#062d37]
                border border-cyan-400/30
                rounded-2xl p-5
                shadow-[0_0_15px_rgba(0,255,255,0.15)]
                hover:shadow-[0_0_25px_rgba(0,255,255,0.45)]
                hover:border-cyan-300/50
                transition-all duration-300
                relative overflow-hidden
              "
            >
              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="
                    absolute top-0 left-1/2 -translate-x-1/2
                    w-[120%] h-[60%]
                    bg-gradient-to-b from-cyan-300/20 to-transparent
                    blur-2xl
                  "
                />
              </div>

              <img
                src={vac.image}
                alt={vac.title}
                className="w-full h-48 object-cover rounded-lg mb-4 relative z-10"
              />

              <p className="font-semibold text-lg mb-4 relative z-10">{vac.title}</p>

              <ul className="text-sm text-neutral-200 space-y-2 mb-5 relative z-10">
                <li className="flex justify-between gap-4">
                  <span className="opacity-80">Срок</span>
                  <span className="font-medium text-white">{vac.experience}</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span className="opacity-80">Оплата</span>
                  <span className="font-medium text-white">{vac.education}</span>
                </li>
                <li className="flex justify-between gap-4">
                  <span className="opacity-80">Результат</span>
                  <span className="font-medium text-white">{vac.age}</span>
                </li>
              </ul>

              <button className="text-cyan-300 font-medium hover:text-cyan-200 transition-colors relative z-10">
                Подробнее →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
