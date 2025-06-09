'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success?: boolean;
    message?: string;
  }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);


    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitStatus({
        success: true,
        message: 'Message sent successfully! We will get back to you soon.'
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: 'Something went wrong. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-[#0c0c14]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center">
          <span className="text-blue-500 mr-4">/</span>
          Contact Us
        </h2>

        <p className="mb-16 text-gray-300 max-w-2xl">
          Feel free to reach out to us for any inquiries or to discuss your project. We're always happy to help!
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-[#14142b] p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6">Ready to start your project?</h3>
            <p className="text-gray-300 mb-8">Let's discuss how we can help bring your vision to life</p>

            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-sm">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full p-3 bg-[#0c0c14] border border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full p-3 bg-[#0c0c14] border border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block mb-2 text-sm">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className="w-full p-3 bg-[#0c0c14] border border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="w-full p-3 bg-[#0c0c14] border border-gray-700 rounded-md focus:outline-none focus:border-blue-500"
                  required
                />
              </div>

              {submitStatus.message && (
                <div className={`p-3 mb-6 rounded ${submitStatus.success ? 'bg-green-500/20 text-green-300' : 'bg-red-500/20 text-red-300'}`}>
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-8">
            <div className="relative h-80 w-full rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555666234!2d-122.50764035!3d37.75781595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1686267912422!5m2!1sen!2sus"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location"
              />
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-[#1a1a2f] p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href="mailto:hello@devduo.com" className="text-blue-400 hover:text-blue-300">hello@devduo.com</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-[#1a1a2f] p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a href="tel:+12345678900" className="text-blue-400 hover:text-blue-300">+1 (234) 567-8900</a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#1a1a2f] p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold">Office</h4>
                  <p className="text-gray-300">123 Tech Street, San Francisco, CA 94107</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="bg-[#1a1a2f] p-2 rounded-lg hover:bg-blue-500/20 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="bg-[#1a1a2f] p-2 rounded-lg hover:bg-blue-500/20 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
                  </svg>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-[#1a1a2f] p-2 rounded-lg hover:bg-blue-500/20 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-[#1a1a2f] p-2 rounded-lg hover:bg-blue-500/20 transition-colors duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}