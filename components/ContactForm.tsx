"use client";

import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    serviceType: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      serviceType: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get Your Free Estimate
            </h2>
            <p className="text-gray-300">
              Tell us about your project and we'll get back to you within 24
              hours.
            </p>
          </div>

          {isSubmitted ? (
            <div className="bg-green-600 text-white rounded-lg p-8 text-center">
              <CheckCircle className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
              <p>We've received your request and will contact you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-medium mb-2"
                  >
                    Property Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="serviceType"
                  className="block text-sm font-medium mb-2"
                >
                  Service Needed *
                </label>

                <div className="relative">
                  <select
                    id="serviceType"
                    name="serviceType"
                    required
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 pr-10 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none appearance-none cursor-pointer"
                  >
                    <option value="">Select a service</option>
                    <option value="roof-installation">Roof Installation</option>
                    <option value="roof-repair">Roof Repair</option>
                    <option value="emergency">Emergency Roofing</option>
                    <option value="gutter">Gutter Installation</option>
                    <option value="inspection">Roof Inspection</option>
                  </select>

                  {/* Custom Arrow */}
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
                    ⏷
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Project Details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your roofing needs..."
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send size={20} />
                    Request Free Estimate
                  </>
                )}
              </button>

              <p className="text-center text-gray-400 text-sm">
                By submitting, you agree to our privacy policy. We'll never
                share your information.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
