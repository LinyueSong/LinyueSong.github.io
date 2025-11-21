import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../types';
import { Briefcase, Calendar } from 'lucide-react';

interface Props {
  data: Experience;
  index: number;
}

export const ExperienceCard: React.FC<Props> = ({ data, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 md:pl-0"
    >
      <div className="md:flex items-start justify-between group">
        {/* Timeline Line (Desktop) */}
        <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-200 -translate-x-1/2"></div>
        <div className="hidden md:block absolute left-[50%] top-6 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white -translate-x-1/2 z-10"></div>

        {/* Content */}
        <div className={`md:w-[45%] mb-8 ${index % 2 === 0 ? 'md:mr-auto md:text-right' : 'md:ml-auto md:text-left'}`}>
            
          <div className={`p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-slate-100 ${index % 2 === 0 ? 'mr-0' : 'ml-0'}`}>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
              {data.role}
            </h3>
            <h4 className="text-lg font-semibold text-slate-700 mb-2">{data.company}</h4>
            
            <div className={`flex items-center gap-2 text-slate-500 text-sm mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
              <Calendar size={14} />
              <span>{data.period}</span>
            </div>

            <ul className={`space-y-2 mb-4 ${index % 2 === 0 ? 'items-end' : 'items-start'}`}>
              {data.description.map((item, i) => (
                <li key={i} className="text-slate-600 text-sm leading-relaxed">
                  • {item}
                </li>
              ))}
            </ul>

            {data.technologies && (
              <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                {data.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-md font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
