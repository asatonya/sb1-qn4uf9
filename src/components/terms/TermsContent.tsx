import React from 'react';
import { TermsSection } from './TermsSection';

export function TermsContent() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <TermsSection title="1. Acceptance of Terms">
        <p>By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement.</p>
      </TermsSection>

      <TermsSection title="2. Use License">
        <p>Permission is granted to temporarily download one copy of the materials (information or software) on this website for personal, non-commercial transitory viewing only.</p>
        <ul className="list-disc pl-5 mt-2">
          <li>This is the grant of a license, not a transfer of title</li>
          <li>You may not modify or copy the materials</li>
          <li>You may not use the materials for any commercial purpose</li>
        </ul>
      </TermsSection>

      <TermsSection title="3. Disclaimer">
        <p>The materials on this website are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
      </TermsSection>

      <TermsSection title="4. Limitations">
        <p>In no event shall we or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on this website.</p>
      </TermsSection>

      <TermsSection title="5. Revisions">
        <p>We may revise these terms of service for this website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.</p>
      </TermsSection>
    </div>
  );
}