// components/Sidebar.js

import { SECTIONS } from '@/lib/constants';

export default function Sidebar({ currentSection, setCurrentSection }) {
  return (
    <aside className="lg:w-64 bg-black/30 backdrop-blur-sm border-r border-white/10 lg:min-h-screen sidebar-panel">
      <div className="p-6">
        <h2 className="text-white/70 text-sm font-semibold uppercase tracking-wider mb-4">
          Contents
        </h2>
        <nav className="space-y-2 sidebar-button-list">
          {SECTIONS.map((section) => (
            <button
              key={section.id}
              onClick={() => setCurrentSection(section.id)}
              className={`sidebar-button ${
                currentSection === section.id ? 'sidebar-button--active' : ''
              } w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                currentSection === section.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {section.title}
            </button>
          ))}
        </nav>
      </div>
    </aside>
  );
}
