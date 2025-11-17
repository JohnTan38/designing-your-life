// components/GradientTitle.js

export default function GradientTitle() {
  return (
    <h1 className="text-5xl lg:text-7xl font-bold mb-12 text-center gradient-title">
      <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
        Designing Your Life
      </span>
    </h1>
  );
}
