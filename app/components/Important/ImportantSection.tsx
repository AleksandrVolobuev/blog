import React from "react";
import { importantGridData } from "./importantData";

const GridItemImg = ({ src, alt }) => {
  return (
    <div className="w-full h-48 md:h-56 rounded-xl overflow-hidden border border-cyan-400/20 relative">
      <img src={src} alt={alt} className="w-full h-full object-cover" />
      <span className="pointer-events-none absolute left-1/4 right-1/4 bottom-2 h-2 rounded-full blur-xl bg-cyan-400/30" />
    </div>
  );
};

const GridItemText = ({ title, text }) => {
  return (
    <div
      className="
        p-5 rounded-xl text-white 
        bg-black/30 
        border border-cyan-400/10 
        backdrop-blur-md 
        shadow-[0_0_25px_rgba(0,255,255,0.15)]
      "
    >
      <h3 className="text-lg md:text-xl font-semibold mb-3">{title}</h3>
      <p className="text-sm md:text-base leading-relaxed">{text}</p>
    </div>
  );
};

const ImportantSectionGrid = () => {
  return (
    <section style={{ background: "var(--gradient-background2)" }}
     className="py-16 px-6 md:px-16 ">
      <h2 className="text-4xl md:text-6xl font-bold text-cyan-400 mb-10">
        ВАЖНО ПОНИМАТЬ ЧТО
      </h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {importantGridData.map((item) => (
          <li
            key={item.id}
            className="
              p-0 
              rounded-xl 
              transition-transform duration-300 
              hover:-translate-y-2 hover:scale-[1.02]
            "
          >
            {item.type === "img" ? (
              <GridItemImg src={item.src} alt={item.alt || ""} />
            ) : (
              <GridItemText title={item.title} text={item.text} />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ImportantSectionGrid;
