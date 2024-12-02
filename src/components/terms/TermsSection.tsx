import React from 'react';

interface TermsSectionProps {
  title: string;
  children: React.ReactNode;
}

export function TermsSection({ title, children }: TermsSectionProps) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">{title}</h2>
      <div className="prose prose-indigo max-w-none">
        {children}
      </div>
    </section>
  );
}