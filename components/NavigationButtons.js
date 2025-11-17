// components/NavigationButtons.js

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SECTIONS } from '@/lib/constants';

export default function NavigationButtons({ currentSection, setCurrentSection }) {
  return (
    <div className="navigation-controls">
      <button
        onClick={() => setCurrentSection(Math.max(0, currentSection - 1))}
        disabled={currentSection === 0}
        className={`navigation-pill navigation-pill--prev ${currentSection === 0 ? 'is-disabled' : ''}`}
      >
        <ChevronLeft size={20} />
        Previous
      </button>

      <button
        onClick={() => setCurrentSection(Math.min(SECTIONS.length - 1, currentSection + 1))}
        disabled={currentSection === SECTIONS.length - 1}
        className={`navigation-pill navigation-pill--next ${currentSection === SECTIONS.length - 1 ? 'is-disabled' : ''}`}
      >
        Next
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
