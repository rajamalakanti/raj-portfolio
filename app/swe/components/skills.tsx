import { Geist_Mono, Inter } from "next/font/google";
import { FaReact, FaNodeJs, FaDocker, FaPython, FaGitAlt, FaJava, FaAws, FaLinux } from "react-icons/fa";
import { SiMongodb, SiNextdotjs, SiFastapi, SiJavascript, SiScikitlearn, SiVercel, SiLangchain, SiGooglecloud, SiTypescript, SiTailwindcss, SiPostgresql, SiTensorflow, SiPytorch, SiRedis, SiSupabase, SiPrisma, SiTerraform, SiFlask, SiDjango, SiCplusplus, SiC, SiExpress, SiMysql, SiRedux, SiOpenai, SiSelenium, SiPostman, SiApachespark, SiSpring, SiSpringboot, SiZod, SiSentry, SiD3Dotjs, SiJenkins, SiNginx, SiCaddy } from "react-icons/si";


const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

// Complete Skill Icons Mapping
const skills = [
  // Programming Languages
  { name: "Python", icon: <FaPython size={36} /> },
  { name: "Java", icon: <FaJava size={36} /> },
  { name: "C++", icon: <SiCplusplus size={36} /> },
  { name: "C", icon: <SiC size={36} /> },
  { name: "TypeScript", icon: <SiTypescript size={36} /> },
  { name: "JavaScript", icon: <SiJavascript size={36} /> },

  // Frontend Frameworks/Libraries
  { name: "Next.js", icon: <SiNextdotjs size={36} /> },
  { name: "React.js", icon: <FaReact size={36} /> },
  { name: "Redux", icon: <SiRedux size={36} /> },
  { name: "D3.js", icon: <SiD3Dotjs size={36} /> },
  { name: "Vercel", icon: <SiVercel size={36} /> },
  { name: "Apache Spark", icon: <SiApachespark size={36} /> },
  { name: "TailwindCSS", icon: <SiTailwindcss size={36} /> },

  // Backend Frameworks/Libraries
  { name: "Node.js", icon: <FaNodeJs size={36} /> },
  { name: "Express.js", icon: <SiExpress size={36} /> },
  { name: "Spring", icon: <SiSpring size={36} /> },
  { name: "Spring Boot", icon: <SiSpringboot size={36} /> },
  { name: "Django", icon: <SiDjango size={36} /> },
  { name: "Flask", icon: <SiFlask size={36} /> },
  { name: "FastAPI", icon: <SiFastapi size={36} /> },
  { name: "LangChain", icon: <SiLangchain size={36} /> },

  // Databases
  { name: "MongoDB", icon: <SiMongodb size={36} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={36} /> },
  { name: "MySQL", icon: <SiMysql size={36} /> },
  { name: "Redis", icon: <SiRedis size={36} /> },
  { name: "Supabase", icon: <SiSupabase size={36} /> },
  { name: "Prisma", icon: <SiPrisma size={36} /> },

  // Cloud/DevOps
  { name: "Google Cloud", icon: <SiGooglecloud size={36} /> },
  { name: "AWS", icon: <FaAws size={36} /> },
  { name: "Terraform", icon: <SiTerraform size={36} /> },
  { name: "Docker", icon: <FaDocker size={36} /> },
  { name: "Jenkins", icon: <SiJenkins size={36} /> },
  { name: "Nginx", icon: <SiNginx size={36} /> },
  { name: "Caddy", icon: <SiCaddy size={36} /> },

  // Machine Learning / AI
  { name: "TensorFlow", icon: <SiTensorflow size={36} /> },
  { name: "PyTorch", icon: <SiPytorch size={36} /> },
  { name: "Scikit-Learn", icon: <SiScikitlearn size={36} /> },
  { name: "OpenAI API", icon: <SiOpenai size={36} /> },

  // Other Tools
  { name: "Git", icon: <FaGitAlt size={36} /> },
  { name: "Linux", icon: <FaLinux size={36} /> },
  { name: "Postman", icon: <SiPostman size={36} /> },
  { name: "Selenium", icon: <SiSelenium size={36} /> },
  { name: "Zod", icon: <SiZod size={36} /> },
  { name: "Sentry", icon: <SiSentry size={36} /> },
];

export default function Skills() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        
        {/* Section Title */}
        <h2 className={`${inter.className} text-6xl tracking-tighter text-center mb-12 font-semibold`}>
          Skills
        </h2>

        {/* Boxy, Glowing Grid Layout */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card flex flex-col items-center justify-center p-4 border border-gray-500 bg-gray-900/50 backdrop-blur-lg shadow-lg transform transition-all hover:scale-110"
            >
              {skill.icon}
              <span className={`mt-2 text-md font-medium ${geistMono.className}`}>
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}