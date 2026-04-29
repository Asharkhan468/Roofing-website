"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    "Roof Installation",
    "Roof Repair",
    "Emergency Roofing",
    "Gutter Installation",
    "Roof Inspection",
    "Maintenance Plans",
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "7:00 AM - 7:00 PM" },
    { day: "Saturday", hours: "8:00 AM - 5:00 PM" },
    { day: "Sunday", hours: "9:00 AM - 3:00 PM" },
    { day: "Emergency", hours: "24/7 Available" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      {/* Main Footer */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 mb-4 justify-center md:justify-start">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">R</span>
              </div>
              <div>
                <span className="text-xl font-bold text-white">
                  RoofPro<span className="text-blue-400">Experts</span>
                </span>
              </div>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Trusted roofing experts providing quality craftsmanship and
              reliable service for residential and commercial properties since
              2014.
            </p>
            <div className="flex gap-3 justify-center md:justify-start">
              <a
                href="#"
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-200"
              >
                <FaFacebookF size={16} />
              </a>

              <a
                href="#"
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-200"
              >
                <FaTwitter size={16} />
              </a>

              <a
                href="#"
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-200"
              >
                <FaInstagram size={16} />
              </a>

              <a
                href="#"
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 hover:scale-110 transition-all duration-200"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors justify-center md:justify-start"
                  >
                    <span className="text-blue-400">›</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <a
                    href="#services"
                    className="inline-flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors justify-center md:justify-start"
                  >
                    <span className="text-blue-400">›</span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Hours */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold text-white mb-4">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 justify-center md:justify-start">
                <span className="text-blue-400 text-lg">📍</span>
                <span className="text-gray-400 text-left">
                  123 Roofing Avenue, Suite 100
                  <br />
                  Springfield, IL 62701
                </span>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <span className="text-blue-400 text-lg">📞</span>
                <a
                  href="tel:+15551234567"
                  className="text-gray-400 hover:text-blue-400"
                >
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <span className="text-blue-400 text-lg">✉️</span>
                <a
                  href="mailto:info@roofproexperts.com"
                  className="text-gray-400 hover:text-blue-400"
                >
                  info@roofproexperts.com
                </a>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-800">
              <div className="flex items-center gap-2 mb-3 justify-center md:justify-start">
                <span className="text-blue-400 text-lg">🕐</span>
                <h4 className="font-medium text-white">Business Hours</h4>
              </div>
              <div className="space-y-1 text-sm">
                {businessHours.map((item) => (
                  <div
                    key={item.day}
                    className="flex flex-col md:flex-row md:justify-between gap-1 md:gap-4"
                  >
                    <span className="text-gray-400">{item.day}</span>
                    <span className="text-gray-300">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Banner */}
      <div className="bg-blue-600 py-3">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 text-center">
          <p className="text-white text-sm md:text-base">
            🚨 <strong>24/7 Emergency Roofing Services Available</strong> — Call
            us anytime at{" "}
            <a href="tel:+15551234567" className="font-bold underline">
              (555) 123-4567
            </a>
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {currentYear} RoofPro Experts. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6 text-sm justify-center">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
