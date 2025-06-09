import Link from "next/link";

export default function FooterSection() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-4 md:px-8 bg-[#080810]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">DevDuo</h3>
            <p className="text-gray-400 mb-6">
              Transforming ideas into stunning, functional digital experiences
            </p>
            <p className="text-gray-500">
              © {currentYear} DevDuo. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-gray-400 hover:text-blue-400 transition-colors">About</Link>
              </li>
              <li>
                <Link href="/#projects" className="text-gray-400 hover:text-blue-400 transition-colors">Projects</Link>
              </li>
              <li>
                <Link href="/#tech-stack" className="text-gray-400 hover:text-blue-400 transition-colors">Tech Stack</Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/web-development" className="text-gray-400 hover:text-blue-400 transition-colors">Web Development</Link>
              </li>
              <li>
                <Link href="/services/mobile-apps" className="text-gray-400 hover:text-blue-400 transition-colors">Mobile Apps</Link>
              </li>
              <li>
                <Link href="/services/ui-ux-design" className="text-gray-400 hover:text-blue-400 transition-colors">UI/UX Design</Link>
              </li>
              <li>
                <Link href="/services/cloud-solutions" className="text-gray-400 hover:text-blue-400 transition-colors">Cloud Solutions</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-gray-400 hover:text-blue-400 transition-colors">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-blue-400 transition-colors">Terms of Service</Link>
              </li>
              <li>
                <Link href="/cookies-policy" className="text-gray-400 hover:text-blue-400 transition-colors">Cookies Policy</Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            Designed & Developed by DevDuo Team
          </p>
          
          <div className="flex space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
              <span className="sr-only">GitHub</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
            <a href="https://dribbble.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
              <span className="sr-only">Dribbble</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
              </svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
              <span className="sr-only">LinkedIn</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
              <span className="sr-only">Twitter</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}