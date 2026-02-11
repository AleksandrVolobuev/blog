import React from "react";

const ImportantItem = ({ image, title, text, reverse = false }) => {
  // reverse — если true, картинка справа (на md+ экране)
  const containerClasses = [
    "flex flex-col md:flex-row items-center gap-6",
    "p-6 rounded-xl border border-cyan-400/20",
    "bg-gradient-to-r from-gray-500/20 to-transparent backdrop-blur-sm",
    "shadow-xl transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
  ];

  // Если reverse, добавим на md уровень переворот флекса
  if (reverse) containerClasses.push("md:flex-row-reverse");

  return (
    <li className={containerClasses.join(" ")}>
      <div className="w-full md:w-48 h-40 md:h-40 rounded-lg overflow-hidden border border-cyan-400/20 flex-shrink-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="text-white">
        <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm md:text-base leading-relaxed">{text}</p>
      </div>
    </li>
  );
};

export default ImportantItem;
