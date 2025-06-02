import Image from "next/image";

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="py-20 px-4 md:px-8 bg-[#0c0c14]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center">
          <span className="text-blue-500 mr-4">/</span>
          Our Tech Stack
        </h2>

        <p className="text-xl text-center mb-16 max-w-3xl mx-auto">
          We use cutting-edge technologies to build scalable, performant, and beautiful web applications
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {/* Frontend Card */}
          <div className="bg-[#0f1224] rounded-lg p-8 relative overflow-hidden">
            <div className="flex justify-between items-start">
              <div className="bg-[#1a1a2f] p-3 rounded-lg mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <div className="w-8 h-8 rounded-full border border-blue-500/30"></div>
            </div>
            
            <h3 className="text-2xl font-bold mb-6">Frontend</h3>
            
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">●</span>
                React.js & Next.js
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">●</span>
                Vue.js & Nuxt.js
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">●</span>
                Angular
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">●</span>
                TypeScript
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">●</span>
                Tailwind CSS
              </li>
            </ul>
          </div>
          
          {/* Backend Card */}
          <div className="bg-[#0f1224] rounded-lg p-8 relative overflow-hidden">
            <div className="flex justify-between items-start">
              <div className="bg-[#1a1a2f] p-3 rounded-lg mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                  <line x1="6" y1="6" x2="6.01" y2="6"></line>
                  <line x1="6" y1="18" x2="6.01" y2="18"></line>
                </svg>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-6">Backend</h3>
            
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">●</span>
                Node.js & Express
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">●</span>
                Ruby on Rails
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">●</span>
                Python & Django
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">●</span>
                MongoDB & PostgreSQL
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">●</span>
                Firebase
              </li>
            </ul>
          </div>
          
          {/* DevOps Card */}
          <div className="bg-[#0f1224] rounded-lg p-8 relative overflow-hidden">
            <div className="flex justify-between items-start">
              <div className="bg-[#1a1a2f] p-3 rounded-lg mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-6">DevOps & Tools</h3>
            
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">●</span>
                Docker & Kubernetes
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">●</span>
                AWS & Google Cloud
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">●</span>
                Git & GitHub Actions
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">●</span>
                Performance Optimization
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 mr-2">●</span>
                Security Implementation
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12">
          <h3 className="text-xl text-center mb-8">Technologies We Work With</h3>
          <div className="flex flex-wrap justify-center gap-10 items-center">
            {/* Technology logos */}
            <div className="w-14 h-14 opacity-70 hover:opacity-100 transition-opacity">
              <Image src="/images/tech/vue.svg" alt="Vue" width={56} height={56} />
            </div>
            <div className="w-14 h-14 opacity-70 hover:opacity-100 transition-opacity">
              <Image src="/images/tech/angular.svg" alt="Angular" width={56} height={56} />
            </div>
            <div className="w-14 h-14 opacity-70 hover:opacity-100 transition-opacity">
              <Image src="/images/tech/node.svg" alt="Node.js" width={56} height={56} />
            </div>
            <div className="w-14 h-14 opacity-70 hover:opacity-100 transition-opacity">
              <Image src="/images/tech/javascript.svg" alt="JavaScript" width={56} height={56} />
            </div>
            <div className="w-14 h-14 opacity-70 hover:opacity-100 transition-opacity">
              <Image src="/images/tech/python.svg" alt="Python" width={56} height={56} />
            </div>
            <div className="w-14 h-14 opacity-70 hover:opacity-100 transition-opacity">
              <Image src="/images/tech/php.svg" alt="PHP" width={56} height={56} />
            </div>
            <div className="w-14 h-14 opacity-70 hover:opacity-100 transition-opacity">
              <Image src="/images/tech/aws.svg" alt="AWS" width={56} height={56} />
            </div>
            <div className="w-14 h-14 opacity-70 hover:opacity-100 transition-opacity">
              <Image src="/images/tech/docker.svg" alt="Docker" width={56} height={56} />
            </div>
            <div className="w-14 h-14 opacity-70 hover:opacity-100 transition-opacity">
              <Image src="/images/tech/github.svg" alt="GitHub" width={56} height={56} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}