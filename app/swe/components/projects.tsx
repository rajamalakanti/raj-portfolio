import { Geist_Mono, Inter } from "next/font/google";
import { JSX } from "react";
import { FaReact, FaNodeJs, FaDocker, FaPython, FaExternalLinkAlt, FaAws } from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiFastapi, SiScikitlearn, SiLangchain, SiGooglecalendar, SiWebrtc, SiRedis, SiPostgresql, SiDjango, SiTailwindcss, SiTypescript } from "react-icons/si";
import './projects.css';

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Tech Icons Mapping
const techIcons: { [key: string]: JSX.Element } = {
  "Next.js": <SiNextdotjs size={24} />,
  MongoDB: <SiMongodb size={24} />,
  LangChain: <SiLangchain size={24} />,
  WebRTC: <SiWebrtc size={24} />,
  React: <FaReact size={24} />,
  "Node.js": <FaNodeJs size={24} />,
  "Google Calendar API": <SiGooglecalendar size={24} />,
  FastAPI: <SiFastapi size={24} />,
  Python: <FaPython size={24} />,
  Docker: <FaDocker size={24} />,
  AWS: <FaAws size={24} />,
  Redis: <SiRedis size={24} />,
  PostgreSQL: <SiPostgresql size={24} />,
  Django: <SiDjango size={24} />,
  TailwindCSS: <SiTailwindcss size={24} />,
  TypeScript: <SiTypescript size={24} />,
  "Scikit-Learn": <SiScikitlearn size={24} />,
};

const projects = [
  {
    name: "Moola",
    tech: ["Next.js", "Django", "Redis", "AWS", "PostgreSQL"],
    year: 2025,
    description:
      "Designed and implemented a full-stack personal finance application integrating GPT-4 API and AWS services. Ensured secure, end-to-end authentication with Djoser and SES while optimizing data load times by 50% using Redis caching and React Query.",
    link: "https://github.com/rajamalakanti/moola",
  },
  {
    name: "BizBlends",
    tech: ["Next.js", "TypeScript", "TailwindCSS"],
    year: 2024,
    description:
      "Streamlined the haircut booking process for 100+ clients with a Next.js-powered web application. Deployed to Vercel with 100% uptime, scaling efficiently with growing traffic. Improved mobile bookings by 80% using responsive UI components.",
    link: "https://bizblends.com",
  },
];



export default function Projects() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        
        {/* Section Title */}
        <h2 className={`${inter.className} text-6xl tracking-tighter text-center mb-12 font-semibold`}>
          Projects
        </h2>

        {/* Boxy, Glowing Layout */}
        <div className="flex flex-col gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative block p-6 border border-gray-500 bg-transparent backdrop-blur-lg shadow-lg project-card transform transition-all hover:scale-105"
            >
              {/* Project Header */}
              <div className="flex justify-between items-center border-b border-gray-700 pb-2">
                <h3 className={`text-2xl font-bold uppercase ${geistMono.className}`}>
                  {project.name}
                </h3>
                <span className={`text-md text-gray-400 ${geistMono.className}`}>
                  {project.year}
                </span>
              </div>

              {/* Description */}
              <p className={`text-gray-300 mt-3 ${inter.className}`}>
                {project.description}
              </p>

              <div className="items-center flex flex-col md:flex-row justify-between">

              {/* Tech Stack (Using Icons) */}
              <div className="mt-4 flex flex-wrap gap-4">
                {project.tech.map((tech, i) => (
                  <div key={i} className="flex items-center justify-center p-2 border border-gray-500 text-gray-400">
                    {techIcons[tech]}
                  </div>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-4 right-4 flex gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-sm flex items-center gap-2 border border-gray-500 text-gray-300 hover:bg-gray-700 hover:text-white transition-all"
                >
                  <FaExternalLinkAlt size={16} />
                  Link
                </a>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}