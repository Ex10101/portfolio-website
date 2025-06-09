'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

export default function AboutSection() {
  const [statsVisible, setStatsVisible] = useState(false);
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });
  
  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setStatsVisible(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [inView]);
  
  const AnimatedStat = ({ value, label }: { value: string, label: string }) => {
    const [displayValue, setDisplayValue] = useState("0");
    
    useEffect(() => {
      if (statsVisible) {
        const numericValue = parseInt(value);
        let currentValue = 0;
        const increment = Math.max(1, Math.floor(numericValue / 30));
        
        const timer = setInterval(() => {
          currentValue += increment;
          if (currentValue >= numericValue) {
            currentValue = numericValue;
            clearInterval(timer);
          }
          setDisplayValue(currentValue + "+");
        }, 30);
        
        return () => clearInterval(timer);
      }
    }, [statsVisible, value]);
    
    return (
      <div className="stat">
        <h3 className={`text-4xl font-bold text-blue-400 transition-opacity duration-500 ${statsVisible ? 'opacity-100' : 'opacity-0'}`}>
          {displayValue}
        </h3>
        <p className="text-gray-400">{label}</p>
      </div>
    );
  };
  
  return (
    <section id="about" ref={ref} className="py-20 px-4 md:px-8 bg-[#1a1a2f] scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-bold mb-8 md:mb-12 flex items-center ${
          inView ? 'animate-fade-in' : 'opacity-0'
        }`}>
          <span className="text-blue-500 mr-4">/</span>
          About Us
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-8">
            <p className={`text-xl md:text-2xl leading-relaxed ${
              inView ? 'animate-fade-in animation-delay-200' : 'opacity-0'
            }`}>
              We are a dynamic duo of passionate developers who create 
              exceptional web experiences that merge functionality with 
              stunning design.
            </p>
            
            <p className={`text-lg md:text-xl leading-relaxed text-gray-300 ${
              inView ? 'animate-fade-in animation-delay-400' : 'opacity-0'
            }`}>
              Founded in 2021, our mission is to help businesses establish a 
              powerful digital presence through clean code and innovative 
              design solutions. We believe in creating websites that not only look 
              amazing but also deliver results.
            </p>
            
            <div className={`flex flex-wrap gap-8 md:gap-12 mt-12 ${
              inView ? 'animate-fade-in animation-delay-600' : 'opacity-0'
            }`}>
              <AnimatedStat value="50" label="Projects Completed" />
              <AnimatedStat value="30" label="Happy Clients" />
              <AnimatedStat value="5" label="Years Experience" />
            </div>
            
            <div className={`mt-8 ${inView ? 'animate-fade-in animation-delay-800' : 'opacity-0'}`}>
              <Link 
                href="/process" 
                className="text-blue-400 flex items-center group hover:text-blue-300 transition-colors duration-300"
              >
                Learn more about our process
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${
            inView ? 'animate-fade-in animation-delay-400' : 'opacity-0'
          }`}>
            <div className="bg-[#0f1224] rounded-lg p-4 overflow-hidden transform hover:scale-[1.02] transition-transform shadow-lg">
              <div className="relative w-full h-60 mb-4 overflow-hidden rounded-lg">
                <Image 
                  src="/images/alex-morgan.jpg" 
                  alt="Alex Morgan - Frontend Developer" 
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-bold">Alex Morgan</h3>
              <p className="text-blue-400">Frontend Developer</p>
            </div>
            
            <div className="bg-[#0f1224] rounded-lg p-4 overflow-hidden transform hover:scale-[1.02] transition-transform shadow-lg">
              <div className="relative w-full h-60 mb-4 overflow-hidden rounded-lg">
                <Image 
                  src="/images/ryan-chen.jpg" 
                  alt="Ryan Chen - Backend Developer" 
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  loading="eager"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <h3 className="text-xl font-bold">Ryan Chen</h3>
              <p className="text-blue-400">Backend Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}