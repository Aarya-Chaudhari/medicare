'use client';

import { useState } from 'react';

interface SearchProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export default function Search({ onSearch, placeholder = 'Search...' }: SearchProps) {
  const [query, setQuery] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary transition"
      />
      <span className="absolute right-4 top-3 text-xl">🔍</span>
    </div>
  );
}
