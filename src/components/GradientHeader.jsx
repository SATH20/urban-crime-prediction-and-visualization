export default function GradientHeader() {
  return (
<div className={`absolute top-0 left-0 w-full h-[390px] z-0 ${isDark ? "bg-[#051139]" : "bg-gradient-to-r from-indigo-700 via-blue-600 to-cyan-400"} transition-all duration-500`} />

  );
}
