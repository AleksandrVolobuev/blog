"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function CarouselAnnouncements() {
  // --- Слайды карусели ---
  const slides = [
    "/Carousel/5.png",
    "/Carousel/6.png",
    "/Carousel/7.png",
    "/Carousel/8.png",
  ];

  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    startAuto();
    return stopAuto;
  }, []);

  const startAuto = () => {
    stopAuto();
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);
  };

  const stopAuto = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () =>
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  // -------------------------------------------------------------------

  const announcements = [
    {
      id: 1,
      img: "/Carousel/5.png",
      title: "Заголовок объявления из нескольких слов",
      text:
        "Искусственный интеллект — это не одна дисциплина, как думают многие, а совокупность различных между собой направлений.",
      date: "24 мая 2021",
    },
    {
      id: 2,
      img: "/Carousel/6.png",
      title: "Открытие новой лаборатории",
      text:
        "Мы запускаем обновлённую лабораторию робототехники для всех учеников старших классов.",
      date: "10 июня 2021",
    },
    {
      id: 3,
      img: "/Carousel/7.png",
      title: "Набор в летнюю IT-школу",
      text:
        "Приглашаем всех желающих на интенсив по программированию, робототехнике и дизайну.",
      date: "28 июля 2021",
    },
  ];

  return (
    <section
      style={{ background: "var(--gradient-background2)" }}
      className="w-full py-16 px-6 md:px-16 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Объявления школы</h2>
          <Link
            href="/blog"
            className="px-5 py-2 rounded-lg bg-primary text-black font-semibold hover:brightness-110 transition-all"
          >
            Все объявления школы
          </Link>
        </div>

        <div
          className="relative w-full overflow-hidden h-64 sm:h-72 lg:h-96 rounded-2xl mb-10 border border-cyan-400/30 shadow-[0_0_25px_rgba(0,255,255,0.2)]"
          onMouseEnter={stopAuto}
          onMouseLeave={startAuto}
        >
          <div
            className="flex h-full transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((src, i) => (
              <img
                key={i}
                src={src}
                className="w-full h-full object-cover flex-none"
                alt=""
              />
            ))}
          </div>

          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/55 border border-cyan-300/40 text-cyan-200 p-2 rounded-full hover:bg-black/75 hover:text-cyan-100 shadow-[0_0_14px_rgba(0,255,255,0.25)] transition-all"
            aria-label="Предыдущий слайд"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/55 border border-cyan-300/40 text-cyan-200 p-2 rounded-full hover:bg-black/75 hover:text-cyan-100 shadow-[0_0_14px_rgba(0,255,255,0.25)] transition-all"
            aria-label="Следующий слайд"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-5 h-5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="m9 18 6-6-6-6" />
            </svg>
          </button>

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  current === i ? "bg-cyan-300" : "bg-cyan-100/40"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {announcements.map((item) => (
            <article
              key={item.id}
              className="
                bg-[#062d37]
                border border-cyan-400/30
                rounded-2xl p-8 shadow-[0_0_15px_rgba(0,255,255,0.15)]
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
                src={item.img}
                className="w-full h-48 object-cover rounded-lg mb-4 relative z-10"
                alt=""
              />

              <h3 className="font-semibold text-lg mb-2 relative z-10">{item.title}</h3>

              <p className="text-sm text-neutral-200 mb-3 relative z-10">{item.text}</p>

              <p className="text-xs opacity-70 mb-3 relative z-10">{item.date}</p>

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
