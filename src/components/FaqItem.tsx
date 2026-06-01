'use client';

import { useState } from 'react';

interface FaqItemProps {
  question: string;
  answer: string;
}

export default function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-4 px-4 flex items-center justify-between hover:bg-light transition text-left"
      >
        <span className="font-bold text-gray-800">{question}</span>
        <span className="text-primary text-2xl">{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && <div className="px-4 pb-4 text-gray-700">{answer}</div>}
    </div>
  );
}
