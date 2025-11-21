import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Circle, Minimize, Maximize } from 'lucide-react';

export const TerminalHero: React.FC = () => {
  const [text, setText] = useState('');
  const fullText = `> const engineer = new Engineer("Linyue Song");\n> engineer.loadSkills(["Backend", "ML", "Distributed Systems"]);\n> engineer.status\n"Ready to build scalable solutions."`;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
      }
    }, 40);
    return () => clearInterval(timer);
  }, [fullText]);

  return (
    <div className="w-full max-w-3xl mx-auto my-12 shadow-2xl rounded-lg overflow-hidden border border-slate-700 bg-slate-900 text-slate-100 font-mono text-sm md:text-base">
      <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <div className="flex-1 text-center text-slate-400 text-xs">linyue_song_portfolio.tsx</div>
      </div>
      <div className="p-6 min-h-[200px] md:min-h-[240px]">
        <pre className="whitespace-pre-wrap">
          <span className="text-green-400">{text}</span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="inline-block w-2.5 h-4 bg-green-400 ml-1 align-middle"
          />
        </pre>
      </div>
    </div>
  );
};
