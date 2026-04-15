'use client';

import { Shield, Award, FileText, Clock } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Licensed & Insured',
    description: 'Fully licensed, bonded, and insured for your peace of mind.',
  },
  {
    icon: Award,
    title: '10+ Years Experience',
    description: 'Decade of proven excellence in roofing craftsmanship.',
  },
  {
    icon: FileText,
    title: 'Free Estimates',
    description: 'No-obligation, detailed quotes for every project.',
  },
  {
    icon: Clock,
    title: '24/7 Emergency Service',
    description: 'Round-the-clock availability for urgent roofing needs.',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600">
            Setting the standard for quality, reliability, and customer care.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}