// // components/Hero.tsx
// 'use client';

// import { Phone, Calculator, ArrowRight, CheckCircle, Shield, Clock, Award } from 'lucide-react';
// import { useEffect, useState } from 'react';

// export default function Hero() {
//   const [isVisible, setIsVisible] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const stats = [
//     { icon: Shield, value: '500+', label: 'Projects Completed' },
//     { icon: Award, value: '98%', label: 'Customer Satisfaction' },
//     { icon: Clock, value: '24/7', label: 'Emergency Service' },
//   ];

//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden">
//       {/* Background Image with Overlay */}
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: 'url("https://images.unsplash.com/photo-1632778149955-e80f8ceca2b8?w=1600&h=900&fit=crop")',
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}
//       >
//         <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
//         <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
//       </div>

//       {/* Animated Background Pattern */}
//       <div className="absolute inset-0 z-0 opacity-30">
//         <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
//         <div className="absolute bottom-20 right-10 w-72 h-72 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
//       </div>

//       <div className="relative z-10 container mx-auto px-4 py-32 md:py-40">
//         <div className="max-w-4xl mx-auto text-center">
//           {/* Badge */}
//           <div
//             className={`inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20 transition-all duration-700 ${
//               isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
//             }`}
//           >
//             <span className="relative flex h-3 w-3">
//               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
//               <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
//             </span>
//             <span className="text-sm font-medium text-white">Available 24/7 for Emergency Calls</span>
//           </div>

//           {/* Main Heading */}
//           <h1
//             className={`text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight transition-all duration-700 delay-100 ${
//               isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
//             }`}
//           >
//             Trusted Roofing Experts for
//             <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"> Residential & Commercial</span>
//             Projects
//           </h1>

//           {/* Subheading */}
//           <p
//             className={`text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
//               isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
//             }`}
//           >
//             Quality craftsmanship, reliable service, and peace of mind for every roof we touch.
//             Serving homeowners and businesses with excellence since 2014.
//           </p>

//           {/* CTA Buttons */}
//           <div
//             className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-700 delay-300 ${
//               isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'
//             }`}
//           >
//             <a
//               href="#contact"
//               className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
//             >
//               <Calculator size={20} className="group-hover:rotate-12 transition-transform" />
//               Get Free Estimate
//               <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
//             </a>
//             <a
//               href="tel:+15551234567"
//               className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40"
//             >
//               <Phone size={20} className="group-hover:scale-110 transition-transform" />
//               Call Now: (555) 123-4567
//             </a>
//           </div>

//           {/* Stats Section */}
//           <div
//             className={`grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto pt-8 border-t border-white/20 transition-all duration-700 delay-500 ${
//               isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//             }`}
//           >
//             {stats.map((stat, index) => (
//               <div key={index} className="text-center">
//                 <div className="flex justify-center mb-2">
//                   <stat.icon className="w-6 h-6 text-orange-400" />
//                 </div>
//                 <div className="text-2xl font-bold text-white">{stat.value}</div>
//                 <div className="text-sm text-gray-300">{stat.label}</div>
//               </div>
//             ))}
//           </div>

//           {/* Trust Badges */}
//           <div
//             className={`flex flex-wrap justify-center gap-4 mt-8 transition-all duration-700 delay-700 ${
//               isVisible ? 'opacity-100' : 'opacity-0'
//             }`}
//           >
//             <div className="flex items-center gap-2 text-gray-300 text-sm">
//               <CheckCircle size={14} className="text-green-400" />
//               <span>Licensed & Insured</span>
//             </div>
//             <div className="flex items-center gap-2 text-gray-300 text-sm">
//               <CheckCircle size={14} className="text-green-400" />
//               <span>Free Estimates</span>
//             </div>
//             <div className="flex items-center gap-2 text-gray-300 text-sm">
//               <CheckCircle size={14} className="text-green-400" />
//               <span>10+ Years Experience</span>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
//         <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
//           <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse" />
//         </div>
//       </div>
//     </section>
//   );
// }

// components/Hero.tsx
"use client";

import {
  Phone,
  Calculator,
  ArrowRight,
  CheckCircle,
  Shield,
  Clock,
  Award,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { icon: Shield, value: "500+", label: "Projects Completed" },
    { icon: Award, value: "98%", label: "Customer Satisfaction" },
    { icon: Clock, value: "24/7", label: "Emergency Service" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1632778149955-e80f8ceca2b8?w=1600&h=900&fit=crop")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      </div>

      {/* Animated Background Pattern - Reduced opacity and size for better balance */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 left-10 w-56 h-56 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-56 h-56 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading - Adjusted sizes for better fit */}
          <h1
            className={`text-3xl mt-6 sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight transition-all duration-700 delay-100 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            Trusted Roofing Experts for
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              {" "}
              Residential & Commercial
            </span>
            Projects
          </h1>

          {/* Subheading - More compact */}
          <p
            className={`text-base md:text-lg text-gray-200 mb-6 max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            Quality craftsmanship, reliable service, and peace of mind for every
            roof we touch. Serving homeowners and businesses with excellence
            since 2014.
          </p>

          {/* CTA Buttons - More compact */}
          <div
            className={`flex flex-col sm:flex-row gap-3 justify-center mb-8 transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-sm md:text-base"
            >
              <Calculator
                size={18}
                className="group-hover:rotate-12 transition-transform"
              />
              Get Free Estimate
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="tel:+15551234567"
              className="group inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 border border-white/20 hover:border-white/40 text-sm md:text-base"
            >
              <Phone
                size={18}
                className="group-hover:scale-110 transition-transform"
              />
              Call Now: (555) 123-4567
            </a>
          </div>

          {/* Stats Section - More compact grid */}
          <div
            className={`grid grid-cols-3 gap-4 max-w-2xl mx-auto pt-6 border-t border-white/20 transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-5 h-5 text-orange-400 mx-auto mb-1" />
                <div className="text-xl md:text-2xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="text-xs text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Trust Badges - More compact */}
          <div
            className={`flex flex-wrap justify-center gap-3 mt-5 transition-all duration-700 delay-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center gap-1.5 text-gray-300 text-xs">
              <CheckCircle size={12} className="text-green-400" />
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-300 text-xs">
              <CheckCircle size={12} className="text-green-400" />
              <span>Free Estimates</span>
            </div>
            <div className="flex items-center gap-1.5 text-gray-300 text-xs">
              <CheckCircle size={12} className="text-green-400" />
              <span>10+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
