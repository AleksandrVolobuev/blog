import { withBasePath } from "@/app/lib/paths";

export default function AuthorSection() {
  return (
    <section className="relative w-full bg-[#042835] text-white py-20 px-6 md:px-20 overflow-hidden">
          <div className="absolute inset-0 opacity-40 pointer-events-none">
            <img
              src={withBasePath("/AuthorSection/fon3.png")}
              alt="background"
              className="w-full h-full object-cover"
            />
          </div>
      {/* Фоновая сетка/линии */}
        <div className="absolute top-70 -right-56 w-[1000px] h-[1000px]">
        <div className="relative">
          <img
            src={withBasePath("/BenefitsSection/div3.svg")}
            className="absolute inset-0 mix-blend-lighten  z-0 "
          />
     
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Текстовая часть */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide">
            ОБО МНЕ
          </h2>

          <div className="space-y-5 text-lg leading-relaxed text-[#bcecff]">
            <p>
              Я Александр Волобуев, fullstack-разработчик. Создаю веб-продукты,
              которые помогают бизнесу быстрее запускать идеи и получать
              измеримый результат.
            </p>

            <p>
              Работаю с современным стеком: React, Next.js, TypeScript и
              Tailwind CSS. Беру задачи от прототипа до production-релиза.
            </p>

            <p>
              Умею быстро погружаться в доменную область, выстраивать
              архитектуру и находить баланс между скоростью разработки и
              качеством кода.
            </p>

            <p>
              В работе ценю прозрачную коммуникацию: фиксирую этапы, сроки и
              риски, чтобы у заказчика всегда была ясная картина.
            </p>

            <p>
              Если вам нужен разработчик, который думает не только про код, но и
              про итоговую ценность продукта, буду рад сотрудничеству.
            </p>
          </div>
        </div>

        {/* Фото */}
        <div className="flex justify-center md:justify-end relative">
          <img
            src={withBasePath("/AuthorSection/foto.png")}
            alt="author"
            className="w-[340px] md:w-[420px] object-contain relative z-10"
          />

          {/* Подпись */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-center z-20">
            <p className="text-xl font-semibold text-[#5fd3ff]">
              Александр Волобуев
            </p>
            <p className="text-sm text-gray-300">Fullstack Developer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
