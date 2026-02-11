"use client";

import { useState } from "react";

interface Topic {
  title: string;
  text: string;
}

const topics: Topic[] = [
  {
    title: "Введение.",
    text: "Вводный урок — это поводокогость с историей человека, который сформировал курс и познакомился с доступными инструментами обучения на курсе.",
  },
  {
    title: "Введение в программирование.",
    text: "Ты узнаешь, что такое переменные, условные операторы, циклы, основы синтаксиса и научишься писать свой первый код на Python.",
  },
  {
    title: "Введение в искусственный интеллект.",
    text: "Ты узнаешь, как работает машинное обучение, виды обучения и основы классификации. Мы изучим AI-метрики и попробуем написать первую модель.",
  },
  {
    title: "Алгоритмы machine learning.",
    text: "Мы изучим линейную регрессию, деревья решений, случайный лес и другие базовые алгоритмы машинного обучения.",
  },
  {
    title: "Процесс разработки модели искусственного интеллекта.",
    text: "Ты узнаешь полный путь — от получения данных до обучения и валидации модели. Мы разберём этапы подготовки данных и выбор лучшего алгоритма.",
  },
  {
    title: "Отбор фичей.",
    text: "Что такое признаки в данных, почему их важно выбирать правильно и как это влияет на обучение модели.",
  },
  {
    title: "Всё о данных.",
    text: "Что такое датасеты, как устроены данные и какие методы обработки данных применяются в AI.",
  },
  {
    title: "Разработка нейронных сетей.",
    text: "Мы изучим строение нейронных сетей, функцию активации, градиентный спуск и напишем первую нейросеть своими руками.",
  },
  {
    title: "Deep learning (глубокое обучение).",
    text: "Мы изучим сверточные, рекуррентные и трансформерные сети. Ты поймёшь, как работают современные AI-модели.",
  },
  {
    title: "Работа с TensorFlow и PyTorch.",
    text: "Ты изучишь фреймворки глубокого обучения и сможешь писать полноценные модели.",
  },
  {
    title: "Нейронные сети для решения практических задач.",
    text: "Научишься применять искусственный интеллект для реальных задач — от распознавания изображений до анализа текстов.",
  }
];

export default function CourseProgramSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full py-20 px-6 md:px-16 bg-[#04253E] text-white">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          ЧТО Я УЗНАЮ ИЗ ЭТИХ КУРСОВ?
        </h2>

        <p className="text-lg text-gray-300 mb-8">
          Полностью весь курс состоит из 13 тем:
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
              <span className="font-semibold">AI – Senior Level</span>
              <span className="text-cyan-400">Продолжительность: 1.5 года</span>
            </button>
          </div>

          <div className="border border-cyan-800 bg-[#05304F] rounded-lg">
            <button className="w-full px-4 py-4 flex justify-between items-center">
              <span className="font-semibold">AI – Senior Level V2.0</span>
              <span className="text-cyan-400">Продолжительность: 1.9 года</span>
            </button>
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className="mt-12">
          <button className="px-10 py-4 bg-cyan-500 hover:bg-cyan-400 rounded-lg text-lg font-semibold shadow-lg">
            ЗАПИСАТЬСЯ НА ОЗНАКОМИТЕЛЬНЫЙ ВЕБИНАР
          </button>
        </div>

      </div>
    </section>
  );
}
