import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-[#1a1a2f]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 md:mb-12 flex items-center">
          <span className="text-blue-500 mr-4">/</span>
          About Us
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="space-y-8">
            <p className="text-xl md:text-2xl leading-relaxed">
              We are a dynamic duo of passionate developers who create 
              exceptional web experiences that merge functionality with 
              stunning design.
            </p>
            
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              Founded in 2021, our mission is to help businesses establish a 
              powerful digital presence through clean code and innovative 
              design solutions. We believe in creating websites that not only look 
              amazing but also deliver results.
            </p>
            
            <div className="flex flex-wrap gap-12 mt-12">
              <div className="stat">
                <h3 className="text-4xl font-bold text-blue-400">50+</h3>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              
              <div className="stat">
                <h3 className="text-4xl font-bold text-blue-400">30+</h3>
                <p className="text-gray-400">Happy Clients</p>
              </div>
              
              <div className="stat">
                <h3 className="text-4xl font-bold text-blue-400">5+</h3>
                <p className="text-gray-400">Years Experience</p>
              </div>
            </div>
            
            <div className="mt-8">
              <Link href="/process" className="text-blue-400 flex items-center group">
                Learn more about our process
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-[#0f1224] rounded-lg p-4 overflow-hidden">
              <div className="relative w-full h-60 mb-4">
                <Image 
                  src="/images/alex-morgan.jpg" 
                  alt="Alex Morgan" 
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-bold">Alex Morgan</h3>
              <p className="text-blue-400">Frontend Developer</p>
            </div>
            
            <div className="bg-[#0f1224] rounded-lg p-4 overflow-hidden">
              <div className="relative w-full h-60 mb-4">
                <Image 
                  src="/images/ryan-chen.jpg" 
                  alt="Ryan Chen" 
                  fill
                  className="object-cover rounded-lg"
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