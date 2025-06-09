import Image from "next/image";
import Link from "next/link";

function ProjectCard({ 
  image, 
  title, 
  description, 
  category, 
  tags, 
  caseStudyLink 
}: { 
  image: string, 
  title: string, 
  description: string, 
  category: string, 
  tags: string[],
  caseStudyLink: string 
}) {
  return (
    <div className="bg-white/5 rounded-xl overflow-hidden flex flex-col md:flex-row">
      <div className="md:w-1/2 relative">
        <Image 
          src={image} 
          alt={title} 
          width={600} 
          height={400} 
          className="object-cover w-full h-full"
        />
      </div>
      <div className="md:w-1/2 p-8 flex flex-col justify-center">
        <div className="text-blue-400 mb-2">{category}</div>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
        <p className="text-gray-300 mb-6">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className="bg-[#1a1a2f] text-sm px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div>
          <Link href={caseStudyLink} className="text-blue-400 flex items-center group">
            View Case Study
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

function FeaturedProject() {
  return (
    <div className="mb-20 bg-white/5 rounded-xl p-6 md:p-8 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-yellow-400/30"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="relative">
          <Image 
            src="/images/projects/luxemarket.png" 
            alt="LuxeMarket Dashboard" 
            width={600} 
            height={500}
            className="rounded-lg"
          />
        </div>
        
        <div>
          <div className="text-blue-400 mb-2">E-commerce Platform</div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">LuxeMarket Redesign</h3>
          
          <p className="text-gray-300 mb-6">
            A complete overhaul of an e-commerce platform with a focus on user 
            experience, performance optimization, and mobile responsiveness. The new 
            design increased conversions by 35% and reduced bounce rates 
            significantly.
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            <span className="bg-[#1a1a2f] text-sm px-3 py-1 rounded-full">React</span>
            <span className="bg-[#1a1a2f] text-sm px-3 py-1 rounded-full">Node.js</span>
            <span className="bg-[#1a1a2f] text-sm px-3 py-1 rounded-full">MongoDB</span>
            <span className="bg-[#1a1a2f] text-sm px-3 py-1 rounded-full">Stripe API</span>
          </div>
          
          <Link href="/projects/luxemarket" className="text-blue-400 flex items-center group">
            View Case Study
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ProjectShowcase() {
  const projects = [
    {
      image: "/images/projects/fittrack.png",
      title: "FitTrack Mobile App",
      description: "Fitness tracking application with personalized workout plans and progress analytics.",
      category: "Mobile App",
      tags: ["React Native", "Firebase"],
      caseStudyLink: "/projects/fittrack"
    },
    {
      image: "/images/projects/investpro.png",
      title: "InvestPro Dashboard",
      description: "Financial dashboard for investment tracking and portfolio management.",
      category: "Web Application",
      tags: ["Vue.js", "D3.js", "Express"],
      caseStudyLink: "/projects/investpro"
    },
    {
      image: "/images/projects/artconnect.png",
      title: "ArtConnect Platform",
      description: "Social media platform for artists to showcase their work and connect with others.",
      category: "Social Platform",
      tags: ["Next.js", "GraphQL", "AWS"],
      caseStudyLink: "/projects/artconnect"
    }
  ];
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <div key={index} className="bg-[#0f1224] rounded-lg overflow-hidden">
          <div className="relative h-48">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{project.description}</p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, idx) => (
                <span key={idx} className="text-xs text-blue-400">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 md:px-8 bg-[#0c0c14]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center">
          <span className="text-blue-500 mr-4">/</span>
          Our Projects
        </h2>
        
        <p className="text-xl text-center mb-16 max-w-3xl mx-auto">
          Showcasing our best work and the creative solutions we've built for our clients
        </p>
  
        <FeaturedProject />
        <ProjectShowcase />
        
        <div className="mt-12 flex justify-center">
          <Link 
            href="/projects" 
            className="flex items-center gap-2 bg-transparent hover:bg-blue-500/10 text-blue-400 border border-blue-500/30 rounded-full px-6 py-3 transition-colors"
          >
            View All Projects 
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}