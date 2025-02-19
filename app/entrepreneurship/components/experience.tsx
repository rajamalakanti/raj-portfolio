import { Geist_Mono, Inter } from "next/font/google";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const experience = [
  {
    company: "StutterOn",
    role: "Co-Founder & CTO",
    date: "2022 - Present",
    description:
      "Developing an LLM-powered RAG solution for 5+ clients in school pilot programs with $50K+ in endowments. Secured $10K+ in funding & joined the Google TRC research program, gaining access to 1,000+ Cloud TPUs. Conducting research with board-certified academics to build 1TB+ of proprietary training data.",
    skills: ["AI & Speech Therapy", "LLM & RAG", "Cloud TPU Research"],
  },
  {
    company: "ClimeCast (Antler NYC7)",
    role: "Engineering & Outreach",
    date: "2024",
    description:
      "Engineered the MVP using PostgreSQL, Next.js, Express.js, and MongoDB within a CI/CD pipeline. Automated statistical risk models with Pandas & NumPy, saving clients 50+ hours of manual calculations. Secured $45K+ in funding and engaged in customer discovery calls to refine product strategy.",
    skills: ["Machine Learning", "Data Engineering", "Customer Discovery"],
  },
  {
    company: "Sliks",
    role: "Engineering",
    date: "2023 - 2024",
    description:
      "Developed 10+ fully-responsive React Native pages for user accounts, styled with TailwindCSS. Helped successfully launch the beta version, attracting 200+ users on launch day through strategic marketing.",
    skills: ["React Native", "Frontend Development", "Growth Marketing"],
  },
  {
    company: "Illinois Enactus",
    role: "Founder, Technical Project Manager, Software Engineer",
    date: "2023 - Present",
    description:
      "Led a team of 20+ developers through the SDLC, overseeing design, development, and deployment. Built a prototype for a shower meter and web dashboard, reducing water usage by 20+ liters per month. Secured a partnership with UIUC University Housing and $10K+ in grants for integration.",
    skills: ["Project Management", "IoT & Web Development", "Sustainability"],
  },
  {
    company: "OTCR Consulting",
    role: "Technical Consultant",
    date: "2023 - Present",
    description:
      "Advised 2+ clients on cloud architecture, software optimization, data warehousing, and data-driven decision-making.",
    skills: ["Cloud Architecture", "Data Warehousing", "Consulting"],
  },
];


export default function Experience() {
  return (
    <section id="experience" className="bg-black text-white py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        
        {/* Section Title */}
        <h2 className={`${inter.className} text-6xl tracking-tighter text-center mb-12 font-semibold`}>
          Entrepreneurial Experience
        </h2>

        {/* Experience List */}
        <div className="flex flex-col gap-8">
          {experience.map((job, index) => (
            <div key={index} className="group bg-gray-900/70 backdrop-blur-lg p-6 rounded-lg shadow-lg border border-gray-500 transform transition-all hover:scale-[1.02] hover:border-gray-300">
              
              {/* Company + Role + Date */}
              <div className="flex items-center gap-4">
                <div>
                  <h3 className={`text-xl font-bold uppercase ${geistMono.className}`}>
                    {job.company}
                  </h3>
                  <span className={`text-md text-gray-400 ${geistMono.className}`}>
                    {job.date}
                  </span>
                </div>
              </div>

              {/* Job Role */}
              <h4 className={`text-lg font-semibold mt-3 text-gray-200 ${inter.className}`}>
                {job.role}
              </h4>

              {/* Description */}
              <p className={`text-gray-400 mt-3 ${inter.className}`}>
                {job.description}
              </p>

              {/* Skills Used */}
              <div className="mt-4 flex flex-wrap gap-2">
                {job.skills.map((skill, i) => (
                  <span key={i} className="text-xs px-3 py-1 border border-gray-500 rounded-md text-gray-300">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
