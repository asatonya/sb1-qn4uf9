import React from 'react';
import { ScrollText } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center">
          <ScrollText className="h-8 w-8 text-indigo-600" />
          <h1 className="ml-3 text-2xl font-bold text-gray-900">Terms of Use</h1>
        </div>
      </div>
    </header>
  );
}