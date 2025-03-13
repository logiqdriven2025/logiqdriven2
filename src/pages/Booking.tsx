import React, { useState } from 'react';
import { Calendar, Clock, Users, MessageSquare } from 'lucide-react';

export default function Booking() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    date: '',
    time: '',
    attendees: '1',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold text-white mb-6">Book Your Free Consultation</h1>
            <p className="text-xl mb-8">
              Transform your business with our expert marketing strategies. Schedule a free consultation to discuss your goals.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
                <Calendar className="h-8 w-8 text-purple-500 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Flexible Scheduling</h3>
                <p>Choose a time that works best for you</p>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
                <Clock className="h-8 w-8 text-purple-500 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">30-Minute Session</h3>
                <p>Focused discussion on your needs</p>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
                <Users className="h-8 w-8 text-purple-500 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>
                <p>Meet with our marketing specialists</p>
              </div>
              
              <div className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm">
                <MessageSquare className="h-8 w-8 text-purple-500 mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Personalized Plan</h3>
                <p>Get a customized strategy</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/30 p-8 rounded-2xl backdrop-blur-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="date" className="block text-sm font-medium text-gray-300 mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="time" className="block text-sm font-medium text-gray-300 mb-2">
                    Preferred Time
                  </label>
                  <input
                    type="time"
                    id="time"
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 text-center text-white font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 transform hover:scale-[1.02]"
              >
                Schedule Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}