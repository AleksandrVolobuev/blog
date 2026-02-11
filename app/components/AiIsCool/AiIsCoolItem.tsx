export default function AiIsCoolItem({ text }) {
  return (
    <li
      className="
    flex items-start gap-3 p-4 
    bg-gradient-to-r from-gray-500/30 to-transparent
    border border-cyan-400/20 
    rounded-xl backdrop-blur-sm

    transition-all duration-300 ease-out
    hover:-translate-y-1 hover:scale-[1.02]
  "
    >
      <img src="/AiIsCool/icons1.svg" alt="" className="w-6 h-6" />
      <p className="text-neutral-200 leading-relaxed">{text}</p>
    </li>
  );
}
