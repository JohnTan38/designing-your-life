'use client';

import { useEffect, useState } from 'react';
import ResultsModal from '@/components/ResultsModal';
import { RESULTS_STORAGE_KEY } from '@/lib/constants';

export default function ResultsPage() {
  const [payload, setPayload] = useState(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(RESULTS_STORAGE_KEY);
      if (stored) {
        setPayload(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Unable to read results payload', error);
    } finally {
      setLoaded(true);
    }
  }, []);

  const closeWindow = () => {
    if (window.opener) {
      window.close();
    } else {
      window.location.href = '/';
    }
  };

  const handleRetry = () => {
    if (window.opener) {
      window.opener.postMessage({ type: 'dyl-reset' }, window.location.origin);
      window.opener.focus();
      window.close();
      return;
    }

    window.location.href = '/';
  };

  if (!loaded) {
    return null;
  }

  if (!payload) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-8 text-center">
        <div className="space-y-4 max-w-md">
          <h1 className="text-3xl font-bold">No Results Found</h1>
          <p className="text-white/70">
            Please complete the assessment to generate your personalized results.
          </p>
          <button className="navigation-pill" onClick={closeWindow}>
            Return
          </button>
        </div>
      </div>
    );
  }

  return (
    <ResultsModal
      standalone
      score={payload.score}
      answers={payload.answers}
      onClose={closeWindow}
      onRetry={handleRetry}
    />
  );
}
