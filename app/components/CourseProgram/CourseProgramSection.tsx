"use client";

import { useState } from "react";

interface Topic {
  title: string;
  text: string;
}

const topics: Topic[] = [
  {
    title: "Discovery и постановка задачи.",
    text: "Фиксируем цели, ограничения и ожидания, чтобы команда работала с единым пониманием результата.",
  },
  {
    title: "Аудит текущего решения.",
    text: "Разбираю сильные и слабые стороны текущего продукта: архитектуру, UI, производительность и технический долг.",
  },
  {
    title: "Проектирование архитектуры.",
    text: "Определяю структуру приложения, данные, API-контракты и технические решения под масштабирование.",
  },
  {
    title: "UI/UX и дизайн-система.",
    text: "Привожу интерфейс к целостному виду и формирую переиспользуемые компоненты для ускорения разработки.",
  },
  {
    title: "Разработка фронтенда.",
    text: "Реализую страницы и сценарии с фокусом на отзывчивость, доступность и удобство для пользователя.",
  },
  {
    title: "Интеграция и backend-логика.",
    text: "Настраиваю API-взаимодействие, валидацию данных и устойчивую обработку ошибок.",
  },
  {
    title: "Оптимизация производительности.",
    text: "Ускоряю загрузку и рендеринг, улучшаю Core Web Vitals и устраняю узкие места.",
  },
  {
    title: "SEO и техническая индексация.",
    text: "Настраиваю метаданные, структуру контента, sitemap/robots и социальные превью.",
  },
  {
    title: "Тестирование и контроль качества.",
    text: "Проверяю критичные сценарии и устраняю дефекты до релиза, чтобы снизить риск регрессий.",
  },
  {
    title: "Релиз и сопровождение.",
    text: "Готовлю продукт к выкладке, мониторю поведение после запуска и оперативно вношу улучшения.",
  },
  {
    title: "Передача знаний команде.",
    text: "Документирую ключевые решения и делаю handoff, чтобы проект можно было поддерживать без потери контекста.",
  }
];

export default function CourseProgramSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full py-20 px-6 md:px-16 bg-[#04253E] text-white">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          КАК Я ВЕДУ ПРОЕКТ
        </h2>

        <p className="text-lg text-gray-300 mb-8">
          Прозрачный процесс из 11 этапов: от постановки задачи до поддержки после релиза.
        </p>

        {/* PROGRAM LIST */}
        <div className="space-y-4">
          {topics.map((item, index) => (
            <div
              key={index}
              className="border border-cyan-700/40 rounded-lg bg-[#05304F] shadow-md"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center px-4 py-4 text-left"
              >
                <span className="text-lg font-semibold">{item.title}</span>

                <span className="text-cyan-400 text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-300">
                  {item.text}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* LEVEL SELECTOR */}
        <div className="mt-10 space-y-4">
          <div className="border border-cyan-800 bg-[#05304F] rounded-lg">
            <button className="w-full px-4 py-4 flex justify-between items-center">
              <span className="font-semibold">Формат: Проект под ключ</span>
              <span className="text-cyan-400">Срок: зависит от объема задач</span>
            </button>
          </div>

          <div className="border border-cyan-800 bg-[#05304F] rounded-lg">
            <button className="w-full px-4 py-4 flex justify-between items-center">
              <span className="font-semibold">Формат: Почасовая поддержка</span>
              <span className="text-cyan-400">Фокус: Улучшение текущего продукта</span>
            </button>
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="mt-12">
          <button className="px-10 py-4 bg-cyan-500 hover:bg-cyan-400 rounded-lg text-lg font-semibold shadow-lg">
            Обсудить задачу
          </button>
        </div>

      </div>
    </section>
  );
}
