export default function AuthorSection() {
  return (
    <section className="relative w-full bg-[#042835] text-white py-20 px-6 md:px-20 overflow-hidden">
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <img
              src="/AuthorSection/fon3.png"
              alt="background"
              className="w-full h-full object-cover"
            />
          </div>
      {/* Фоновая сетка/линии */}
        <div className="absolute top-70 -right-56 w-[1000px] h-1000px]">
        <div className="relative">
          <img
            src="/BenefitsSection/div3.svg"
            className="absolute inset-0 mix-blend-lighten  z-0 "
          />
     
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Текстовая часть */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide">
            АВТОР КУРСА
          </h2>

          <div className="space-y-5 text-lg leading-relaxed text-[#bcecff]">
            <p>
              Основателем курса является Александр Волобуев, действующий и ведущий
              специалист в области искусственного интеллекта в Южной Корее,
              который разрабатывал системы искусственного интеллекта для
              компаний Samsung SDS, LG science park и LG digital park.
            </p>

            <p>
              На данный момент Александр занимается разработкой виртуальных
              сенсоров на основе нейронных сетей.
            </p>

            <p>
              Является одним из авторов диссертации об обработке больших данных
              для Южнокорейского института по развитию Интернета.
            </p>

            <p>
              Действующий член ассоциации разработчиков программного обеспечения
              в Украине.
            </p>

            <p>
              Активно участвует в R&D проектах по внедрению искусственного
              интеллекта для государственных предприятий Украине.
            </p>
          </div>
        </div>

        {/* Фото */}
        <div className="flex justify-center md:justify-end relative">
          <img
            src="/AuthorSection/foto.png"
            alt="author"
            className="w-[340px] md:w-[420px] object-contain relative z-10"
          />

          {/* Подпись */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-center z-20">
            <p className="text-xl font-semibold text-[#5fd3ff]">
              Александр Волобуев
            </p>
            <p className="text-sm text-gray-300">Ведущий специалист</p>
          </div>
        </div>
      </div>
    </section>
  );
}
