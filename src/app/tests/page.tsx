'use client';

import { useState, useMemo } from 'react';
import Hero from '@/components/Hero';
import TestCard from '@/components/TestCard';
import Search from '@/components/Search';
import Pagination from '@/components/Pagination';
import { tests, categories } from '@/data/mock-data';

export default function TestsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const filteredTests = useMemo(() => {
    return tests.filter((test) => {
      const matchesSearch = test.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        test.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = !selectedCategory || test.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const totalPages = Math.ceil(filteredTests.length / itemsPerPage);
  const paginatedTests = filteredTests.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <Hero
        title="Medical Tests"
        subtitle="Comprehensive range of diagnostic tests for your health needs"
        image="🔬"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search and Filter */}
          <div className="mb-12 space-y-6">
            <Search
              onSearch={setSearchQuery}
              placeholder="Search tests by name..."
            />

            <div>
              <h3 className="font-bold mb-3">Filter by Category</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory('')}
                  className={`px-4 py-2 rounded-lg transition ${
                    !selectedCategory
                      ? 'bg-primary text-white'
                      : 'bg-light hover:bg-gray-200'
                  }`}
                >
                  All Categories
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-lg transition ${
                      selectedCategory === category
                        ? 'bg-primary text-white'
                        : 'bg-light hover:bg-gray-200'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Count */}
          <p className="text-gray-600 mb-6">
            Found {filteredTests.length} test{filteredTests.length !== 1 ? 's' : ''}
          </p>

          {/* Tests Grid */}
          {paginatedTests.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {paginatedTests.map((test) => (
                  <TestCard key={test.id} test={test} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No tests found matching your criteria</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
