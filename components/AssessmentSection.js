// components/AssessmentSection.js

import { QUESTIONS } from '@/lib/constants';
import { allQuestionsAnswered } from '@/lib/utils';

export default function AssessmentSection({ answers, handleAnswer, onSubmit }) {
  const isComplete = allQuestionsAnswered(answers, QUESTIONS.length);

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
      <h2 className="text-3xl font-bold text-white mb-8">Try Stuff - Assessment</h2>

      <div className="space-y-5 mb-10">
        {QUESTIONS.map((question, index) => {
          const normalized = question.trim();
          const current = answers[index];
          return (
            <div 
              key={index} 
              className="assessment-question"
            >
              <div className="assessment-question__meta">
                <span className="assessment-question__number">{index + 1}</span>
                <p className="assessment-question__text">{normalized}</p>
              </div>
              
              <div className="assessment-question__actions">
                <button
                  type="button"
                  onClick={() => handleAnswer(index, 'yes')}
                  aria-pressed={current === 'yes'}
                  className={`choice-button choice-button--positive ${current === 'yes' ? 'is-active' : ''}`}
                >
                  Yes
                </button>
                <button
                  type="button"
                  onClick={() => handleAnswer(index, 'no')}
                  aria-pressed={current === 'no'}
                  className={`choice-button choice-button--negative ${current === 'no' ? 'is-active' : ''}`}
                >
                  No
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex justify-center">
        <button
          onClick={onSubmit}
          disabled={!isComplete}
          className={`assessment-submit ${isComplete ? 'is-ready' : ''}`}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
