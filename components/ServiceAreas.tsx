'use client';

import { MapPin } from 'lucide-react';

const cities = [
  'Springfield', 'Riverside', 'Oakwood', 'Fairview',
  'Lakewood', 'Hillcrest', 'Brookside', 'Maple Grove',
  'Cedar Park', 'Stone Ridge', 'Westbrook', 'Northgate'
];

export default function ServiceAreas() {
  return (
    <section className="py-16 bg-blue-50" id="service-areas">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Service Areas
          </h2>
          <p className="text-gray-600">
            Proudly serving homeowners and businesses across the region.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {cities.map((city) => (
            <div
              key={city}
              className="bg-white rounded-lg p-3 text-center shadow-sm hover:shadow-md transition"
            >
              <MapPin className="w-4 h-4 text-blue-600 inline-block mr-1" />
              <span className="text-gray-700">{city}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}