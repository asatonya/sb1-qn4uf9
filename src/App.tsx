import React from 'react';
import { Header } from './components/layout/Header';
import { TermsContent } from './components/terms/TermsContent';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <TermsContent />
      </main>
    </div>
  );
}

export default App;