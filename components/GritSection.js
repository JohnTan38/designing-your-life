// components/GritSection.js

import { GRIT_ASSETS } from '@/lib/constants';

export default function GritSection() {
  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
      <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/50">framework</p>
          <h2 className="text-3xl font-bold text-white">GRIT</h2>
        </div>
        <div className="text-right text-white/70 text-sm">
          <p>Angela Duckworth - University of Pennsylvania</p>
          <p>Author of <span className="text-white">Grit: The Power of Passion and Perseverance</span></p>
        </div>
      </div>

      <p className="text-purple-200 mb-10 text-lg">
        Four psychological assets practiced by paragons of GRIT.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {GRIT_ASSETS.map((asset) => (
          <div
            key={asset.num}
            className="grit-card"
          >
            <div className="grit-card__badge">{asset.num}</div>
            <h4 className="grit-card__title">{asset.title.trim()}</h4>
            <p className="grit-card__text">{asset.text.trim()}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
