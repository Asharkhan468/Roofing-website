"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Calendar, ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services", hasDropdown: true },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const serviceDropdown = [
    "Roof Installation",
    "Roof Repair",
    "Emergency Roofing",
    "Gutter Installation",
    "Roof Inspection",
  ];

  const closeMobileMenu = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white shadow-lg py-3"
            : "bg-white/95 backdrop-blur-sm py-5"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group flex-shrink-0"
            >
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                <span className="text-white font-bold text-lg sm:text-xl">
                  R
                </span>
              </div>
              <div>
                <span className="text-base sm:text-xl font-bold text-gray-900">
                  RoofPro<span className="text-blue-600">Experts</span>
                </span>
                <p className="text-[10px] sm:text-xs text-gray-500 hidden xs:block">
                  Licensed & Insured
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-10">
              {navLinks.map((link: any) =>
                link.hasDropdown ? (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(link.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium transition-colors group">
                      {link.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          activeDropdown === link.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === link.name && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 animate-fadeIn">
                        {serviceDropdown.map((service) => (
                          <a
                            key={service}
                            href="#services"
                            className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                            onClick={() => setActiveDropdown(null)}
                          >
                            {service}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
                  >
                    {link.name}
                  </Link>
                ),
              )}
            </div>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+15551234567"
                className="flex items-center gap-2 px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-all font-medium hover:shadow-md"
              >
                <Phone size={18} />
                <span className="hidden xl:inline">(555) 123-4567</span>
                <span className="xl:hidden">Call</span>
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all font-medium shadow-md hover:shadow-lg"
              >
                <Calendar size={18} />
                <span className="hidden xl:inline">Free Estimate</span>
                <span className="xl:hidden">Estimate</span>
              </a>
            </div>

            {/* Mobile Menu Button - Hamburger Icon */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-all duration-200 z-50"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <div className="relative w-6 h-6">
                {/* Hamburger Icon */}
                <div
                  className={`absolute inset-0 transition-all duration-300 transform ${
                    isOpen
                      ? "opacity-0 rotate-90 scale-0"
                      : "opacity-100 rotate-0 scale-100"
                  }`}
                >
                  <Menu className="w-6 h-6 text-gray-700" />
                </div>
                {/* X Mark Icon */}
                <div
                  className={`absolute inset-0 transition-all duration-300 transform ${
                    isOpen
                      ? "opacity-100 rotate-0 scale-100"
                      : "opacity-0 -rotate-90 scale-0"
                  }`}
                >
                  <X className="w-6 h-6 text-gray-700" />
                </div>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-full sm:w-96 bg-white z-40 shadow-2xl transition-transform duration-300 ease-in-out transform lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: 0 }}
      >
        {/* Close button inside mobile menu */}
        <div className="absolute top-4 right-4 lg:hidden">
          <button
            onClick={closeMobileMenu}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        <div className="h-full flex flex-col overflow-y-auto">
          {/* Mobile Menu Header */}

          {/* Navigation Links */}
          <div className="flex-1 px-4 py-6">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) =>
                link.hasDropdown ? (
                  <div key={link.name} className="border-b border-gray-100">
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="flex items-center justify-between w-full text-gray-700 font-medium py-4 hover:text-blue-600 transition-colors"
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${
                          servicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        servicesOpen ? "max-h-96" : "max-h-0"
                      }`}
                    >
                      <div className="ml-4 mb-4 space-y-2">
                        {serviceDropdown.map((service) => (
                          <a
                            key={service}
                            href="#services"
                            className="block text-gray-600 py-2 px-3 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            onClick={closeMobileMenu}
                          >
                            {service}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-gray-700 font-medium py-4 hover:text-blue-600 transition-colors border-b border-gray-100"
                    onClick={closeMobileMenu}
                  >
                    {link.name}
                  </Link>
                ),
              )}
            </div>
          </div>

          {/* Mobile CTA Buttons */}
          <div className="p-4 border-t bg-gray-50">
            <div className="space-y-3">
              <a
                href="tel:+15551234567"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-all"
                onClick={closeMobileMenu}
              >
                <Phone size={18} />
                Call Now: (555) 123-4567
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-all shadow-md"
                onClick={closeMobileMenu}
              >
                <Calendar size={18} />
                Get Free Estimate
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden animate-fadeIn"
          onClick={closeMobileMenu}
          aria-label="Close menu"
        />
      )}

      {/* Add custom animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-in-out;
        }

        @media (min-width: 480px) {
          .xs\\:block {
            display: block;
          }
        }
      `}</style>
    </>
  );
}
