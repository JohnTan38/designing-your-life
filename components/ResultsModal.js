// components/ResultsModal.js

import { X } from 'lucide-react';
import { QUESTIONS } from '@/lib/constants';
import { getScoreAnalysis } from '@/lib/utils';

export default function ResultsModal({ score, answers, onClose, onRetry, standalone = false }) {
  const analysis = getScoreAnalysis(score);

  const card = (
    <div className="bg-gradient-to-br from-slate-800 to-purple-900 rounded-2xl max-w-2xl w-full p-8 shadow-2xl border border-white/20 relative animate-in fade-in duration-300">
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
      >
        <X size={24} />
      </button>

      <div className="text-center mb-6">
        <p className="text-white/60 uppercase tracking-[0.5em] mb-2">assessment complete</p>
        <h2 className="text-4xl font-bold text-center">
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Here are your results
          </span>
        </h2>
      </div>

      <div className="text-center mb-8">
        <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 rounded-full px-8 py-4 mb-4">
          <span className="text-6xl font-bold text-white">{score}</span>
          <span className="text-2xl text-white/80"> / 10</span>
        </div>
      </div>

      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
        <h3 className="text-2xl font-semibold text-purple-300 mb-3">
          {analysis.range}
        </h3>
        <p className="text-xl text-white leading-relaxed">
          {analysis.message}
        </p>
      </div>

      <div className="bg-white/5 rounded-xl p-6 mb-6">
        <h4 className="text-lg font-semibold text-white mb-4">Your Answers:</h4>
        <div className="space-y-2 max-h-60 overflow-y-auto">
          {QUESTIONS.map((question, index) => (
            <div key={index} className="flex items-start gap-3 text-sm">
              <span className="text-white/40">{index + 1}.</span>
              <span className="text-white/70 flex-1">{question}</span>
              <span className={`font-semibold ${
                answers[index] === 'yes' ? 'text-green-400' : 'text-red-400'
              }`}>
                {answers[index]?.toUpperCase()}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={onRetry}
          className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
        >
          Retry Assessment
        </button>
        <button
          onClick={onClose}
          className="flex-1 bg-white/10 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );

  if (standalone) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-6">
        {card}
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      {card}
    </div>
  );
}
