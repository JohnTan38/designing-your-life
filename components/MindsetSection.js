// components/MindsetSection.js

const mindsetCards = [
  {
    id: 'belief',
    title: 'Dysfunctional Belief',
    text:
      'I am not good at math and I am never going to get better. There are a bunch of things I could not do, and there are people who are far more talented than I am. I am stuck with my abilities and I cannot get better.',
    container:
      'from-rose-600/30 via-rose-500/10 to-transparent border-rose-500/50',
    titleColor: 'text-rose-100',
    eyebrowColor: 'text-rose-200/80',
    eyebrow: 'Fixed Mindset',
  },
  {
    id: 'reframe',
    title: 'Reframe',
    text:
      'With a growth mindset and a lot of hard work and practice, you can probably accomplish about anything you set your mind to. Talent is not the reason other people are doing well, they are working hard to get better.',
    container:
      'from-emerald-500/30 via-emerald-400/10 to-transparent border-emerald-400/40',
    titleColor: 'text-emerald-100',
    eyebrowColor: 'text-emerald-200/80',
    eyebrow: 'Growth Mindset',
  },
];

export default function MindsetSection() {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
      <h2 className="text-3xl font-bold text-white mb-6">
        Growth Mindset vs. Fixed Mindset
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {mindsetCards.map((card) => (
          <div
            key={card.id}
            className={`relative overflow-hidden rounded-2xl border ${card.container} bg-gradient-to-br p-6 shadow-xl`}
          >
            <p
              className={`text-xs uppercase tracking-[0.4em] font-semibold mb-4 ${card.eyebrowColor}`}
            >
              {card.eyebrow}
            </p>
            <h3 className={`text-2xl font-semibold mb-4 ${card.titleColor}`}>
              {card.title}
            </h3>
            <p className="text-white/90 leading-relaxed">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
