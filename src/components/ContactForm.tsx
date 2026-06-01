'use client';

import { useState } from 'react';
import { generateId } from '@/lib/utils';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission - save to localStorage
    const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    contacts.push({
      id: generateId(),
      ...formData,
      status: 'new',
      createdAt: new Date().toISOString(),
    });
    localStorage.setItem('contacts', JSON.stringify(contacts));
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-light p-6 rounded-lg">
      {submitted && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
          ✓ Thank you! We will get back to you soon.
        </div>
      )}

      <div>
        <label className="block text-sm font-bold mb-2">Name</label>
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
        <label className="block text-sm font-bold mb-2">Phone</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Your phone number"
        />
      </div>

      <div>
        <label className="block text-sm font-bold mb-2">Subject</label>
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Subject"
        />
      </div>

      <div>
        <label className="block text-sm font-bold mb-2">Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Your message"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-primary text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition font-bold"
      >
        Send Message
      </button>
    </form>
  );
}
