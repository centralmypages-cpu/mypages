
import React from 'react';
import { MyPagesLogo } from './MyPagesLogo';

export const SectionDivider: React.FC = () => {
  return (
    <div className="relative py-8 bg-white overflow-hidden">
      <div className="absolute inset-0 flex items-center" aria-hidden="true">
        <div className="w-full border-t border-slate-100"></div>
      </div>
      <div className="relative flex justify-center">
        <span className="bg-white px-4">
          <MyPagesLogo className="h-6 w-6 text-slate-200 opacity-50" />
        </span>
      </div>
    </div>
  );
};
