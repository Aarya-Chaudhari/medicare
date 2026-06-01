'use client';

import { useState } from 'react';
import { generateId } from '@/lib/utils';
import { tests } from '@/data/mock-data';

export default function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    testId: '',
    date: '',
    time: '',
    collectionType: 'center' as 'home' | 'center',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    appointments.push({
      id: generateId(),
      ...formData,
      status: 'pending',
      createdAt: new Date().toISOString(),
    });
    localStorage.setItem('appointments', JSON.stringify(appointments));
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      testId: '',
      date: '',
      time: '',
      collectionType: 'center',
    });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-light p-6 rounded-lg">
      {submitted && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          Appointment booked successfully! We will confirm shortly.
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
            placeholder="Your name"
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
            placeholder="Your email"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your phone"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">Select Test</label>
          <select
            name="testId"
            value={formData.testId}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Choose a test</option>
            {tests.map((test) => (
              <option key={test.id} value={test.id}>
                {test.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">Preferred Date</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">Preferred Time</label>
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>

        <div>
          <label className="block text-sm font-bold mb-2">Collection Type</label>
          <select
            name="collectionType"
            value={formData.collectionType}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="center">Visit Center</option>
            <option value="home">Home Collection</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-bold mt-6"
      >
        Book Appointment
      </button>
    </form>
  );
}
