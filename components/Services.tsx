// // components/Services.tsx
// 'use client';

// import { 
//   Home, 
//   Hammer, 
//   AlertTriangle, 
//   Gauge, 
//   ClipboardCheck,
//   ArrowRight 
// } from 'lucide-react';

// const services = [
//   {
//     icon: Home,
//     title: 'Roof Installation',
//     description: 'Professional installation for asphalt, metal, tile, and flat roofs.',
//   },
//   {
//     icon: Hammer,
//     title: 'Roof Repair',
//     description: 'Fast, reliable repairs for leaks, missing shingles, and storm damage.',
//   },
//   {
//     icon: AlertTriangle,
//     title: 'Emergency Roofing',
//     description: '24/7 rapid response for urgent roof damage and leaks.',
//   },
//   {
//     icon: Gauge,
//     title: 'Gutter Installation',
//     description: 'Seamless gutters and downspouts to protect your foundation.',
//   },
//   {
//     icon: ClipboardCheck,
//     title: 'Roof Inspection',
//     description: 'Thorough inspections with detailed reports and recommendations.',
//   },
// ];

// export default function Services() {
//   return (
//     <section className="py-16 bg-gray-50">
//       <div className="container mx-auto px-4">
//         <div className="text-center max-w-2xl mx-auto mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
//             Our Roofing Services
//           </h2>
//           <p className="text-gray-600">
//             Comprehensive roofing solutions for every need — residential and commercial.
//           </p>
//         </div>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 group"
//             >
//               <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition">
//                 <service.icon className="w-6 h-6 text-blue-600 group-hover:text-white" />
//               </div>
//               <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                 {service.title}
//               </h3>
//               <p className="text-gray-600 mb-4">{service.description}</p>
//               <a
//                 href="#contact"
//                 className="inline-flex items-center gap-1 text-blue-600 font-medium hover:gap-2 transition-all"
//               >
//                 Learn More <ArrowRight size={16} />
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


// components/Services.tsx
'use client';

import { 
  Home, 
  Hammer, 
  AlertTriangle, 
  Gauge, 
  ClipboardCheck,
  ArrowRight 
} from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Roof Installation',
    description: 'Professional installation for asphalt, metal, tile, and flat roofs.',
  },
  {
    icon: Hammer,
    title: 'Roof Repair',
    description: 'Fast, reliable repairs for leaks, missing shingles, and storm damage.',
  },
  {
    icon: AlertTriangle,
    title: 'Emergency Roofing',
    description: '24/7 rapid response for urgent roof damage and leaks.',
  },
  {
    icon: Gauge,
    title: 'Gutter Installation',
    description: 'Seamless gutters and downspouts to protect your foundation.',
  },
  {
    icon: ClipboardCheck,
    title: 'Roof Inspection',
    description: 'Thorough inspections with detailed reports and recommendations.',
  },
];

export default function Services() {
  return (
    <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-50 mx-auto">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Roofing Services
          </h2>
          <p className="text-gray-600">
            Comprehensive roofing solutions for every need — residential and commercial.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300 group"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 transition">
                <service.icon className="w-6 h-6 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-blue-600 font-medium hover:gap-2 transition-all"
              >
                Learn More <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}