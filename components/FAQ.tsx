'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'How long does a roof replacement take?',
    answer: 'Most residential roof replacements take 1-3 days depending on the size and complexity. We\'ll provide a detailed timeline during your free estimate.',
  },
  {
    question: 'Are you licensed and insured?',
    answer: 'Yes, we are fully licensed, bonded, and insured. We carry liability insurance and workers\' compensation for your protection.',
  },
  {
    question: 'Do you offer free estimates?',
    answer: 'Absolutely! We provide detailed, no-obligation estimates for all roofing projects. Just give us a call or fill out our contact form.',
  },
  {
    question: 'What types of roofing materials do you work with?',
    answer: 'We work with asphalt shingles, metal roofing, tile, slate, and flat roofing systems (TPO, EPDM, modified bitumen).',
  },
  {
    question: 'Do you handle insurance claims for storm damage?',
    answer: 'Yes, we can help you navigate the insurance claim process and work directly with your adjuster to ensure fair coverage.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id='faq' className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Everything you need to know about our roofing services.
          </p>
        </div>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                className="w-full flex justify-between items-center p-5 text-left font-semibold text-gray-900 hover:bg-gray-50 transition"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 p-5 pt-0' : 'max-h-0'
                } overflow-hidden`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}