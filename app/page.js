// app/page.js
'use client';

import { useState, useEffect, useCallback } from 'react';
import Sidebar from '@/components/Sidebar';
import GradientTitle from '@/components/GradientTitle';
import MindsetSection from '@/components/MindsetSection';
import GritSection from '@/components/GritSection';
import AssessmentSection from '@/components/AssessmentSection';
import NavigationButtons from '@/components/NavigationButtons';
import { RESULTS_STORAGE_KEY } from '@/lib/constants';
import { calculateTotalScore } from '@/lib/utils';

export default function Home() {
  const [currentSection, setCurrentSection] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleAnswer = (questionIndex, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionIndex]: value
    }));
  };

  const resetAssessment = useCallback(() => {
    setAnswers({});
    setCurrentSection(2);
  }, []);

  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin !== window.location.origin) return;
      if (event.data?.type === 'dyl-reset') {
        resetAssessment();
      }
    };

    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [resetAssessment]);

  const handleSubmit = () => {
    const total = calculateTotalScore(answers);
    const payload = { score: total, answers };

    if (typeof window !== 'undefined') {
      localStorage.setItem(RESULTS_STORAGE_KEY, JSON.stringify(payload));

      const resultsUrl = `${window.location.origin}/results`;
      const windowFeatures = 'popup=yes,width=720,height=900';
      const newWindow = window.open(resultsUrl, '_blank', windowFeatures);

      if (!newWindow) {
        alert('Please allow pop-ups to view your results.');
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 page-shell">
      <div className="flex flex-col lg:flex-row page-layout">
        <Sidebar 
          currentSection={currentSection} 
          setCurrentSection={setCurrentSection} 
        />

        <main className="flex-1 p-6 lg:p-12 content-area">
          <GradientTitle />

          <div className="max-w-4xl mx-auto content-inner">
            {currentSection === 0 && <MindsetSection />}
            {currentSection === 1 && <GritSection />}
            {currentSection === 2 && (
              <AssessmentSection
                answers={answers}
                handleAnswer={handleAnswer}
                onSubmit={handleSubmit}
              />
            )}

            <NavigationButtons
              currentSection={currentSection}
              setCurrentSection={setCurrentSection}
            />
          </div>
        </main>
      </div>
    </div>
  );
}
