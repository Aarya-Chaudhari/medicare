'use client';

import { useState } from 'react';
import { generateId } from '@/lib/utils';
import { tests } from '@/data/mock-data';

export default function HomeCollectionForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    tests: [] as string[],
    preferredDate: '',
    preferredTime: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleTest = (testId: string) => {
    setFormData((prev) => ({
      ...prev,
      tests: prev.tests.includes(testId)
        ? prev.tests.filter((t) => t !== testId)
        : [...prev.tests, testId],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const collections = JSON.parse(localStorage.getItem('homeCollections') || '[]');
    collections.push({
      id: generateId(),
      ...formData,
      status: 'pending',
      createdAt: new Date().toISOString(),
    });
    localStorage.setItem('homeCollections', JSON.stringify(collections));
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      tests: [],
      preferredDate: '',
      preferredTime: '',
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-light p-6 rounded-lg">
      {submitted && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          ✓ Home collection request submitted successfully!
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-bold mb-2">Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold mb-2">Address</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          rows={3}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Complete address"
        ></textarea>
      </div>

      <div>
        <label className="block text-sm font-bold mb-4">Select Tests</label>
        <div className="grid md:grid-cols-2 gap-3">
          {tests.slice(0, 10).map((test) => (
            <label key={test.id} className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                checked={formData.tests.includes(test.id)}
                onChange={() => toggleTest(test.id)}
                className="w-4 h-4 rounded"
              />
              <span className="text-sm">{test.name}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-bold mb-2">Preferred Date</label>
          <input
            type="date"
            name="preferredDate"
            value={formData.preferredDate}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">Preferred Time</label>
          <input
            type="time"
            name="preferredTime"
            value={formData.preferredTime}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-bold"
      >
        Request Collection
      </button>
    </form>
  );
}
