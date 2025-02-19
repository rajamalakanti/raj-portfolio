import { Bonheur_Royale, Geist_Mono, Inter } from "next/font/google";


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
    company: "ClimeCast (Antler NYC7)",
    role: "Software Engineering Intern",
    date: "Jan 2024 - Aug 2024",
    description:
      "Automated statistical risk models with Pandas and NumPy, saving clients 50+ hours of manual calculations. Optimized data transfer speeds by 55% via PostgreSQL partial indexing and React Query optimizations. Transitioned vendor data storage to MongoDB, improving retrieval efficiency by 70% and migrated legacy React.js components to shadcn/ui and Next.js, cutting initial load times by 50%.",
    skills: ["Machine Learning", "Data Engineering", "Optimization"],
  },
  {
    company: "Illinois Enactus",
    role: "Technical Project Manager",
    date: "Jan 2024 - Aug 2024",
    description:
      "Led a team of 20+ members to develop a water meter and React.js application, saving 10+ liters of water. Implemented AWS CloudWatch for real-time monitoring of water data pipelines. Managed a 16-week implementation roadmap, technical onboarding, and Agile sprint planning.",
    skills: ["Project Management", "IoT & Web Development", "Agile"],
  },
  {
    company: "Illinois Enactus",
    role: "Software Engineer",
    date: "Sep 2023 - Dec 2023",
    description:
      "Developed an ESP-32 sensor pipeline to monitor dorm shower water consumption in a React.js app. Improved data pipeline efficiency by 40% using AWS Lambda for transfers from AWS IoT to S3. Enhanced anomaly detection speeds by 24x through interactive D3.js visualizations in React.js.",
    skills: ["Embedded Systems", "AWS IoT", "Data Visualization"],
  },
];

export default function Experience() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        
        {/* Section Title */}
        <h2 className={`${inter.className} text-6xl tracking-tighter text-center mb-12 font-semibold`}>
          Experience
        </h2>

        {/* Experience List - Each Job in Its Own Row */}
        <div className="flex flex-col gap-10">
          {experience.map((job, index) => (
            <div 
              key={index} 
              className="group flex flex-col p-8 border border-gray-500 bg-transparent backdrop-blur-lg shadow-lg transform transition-all hover:scale-[1.02] hover:border-gray-300"
            >
              
              {/* Company Logo & Header */}
              <div className="flex items-center gap-6">
                <div>
                  <h3 className={`text-2xl font-bold uppercase ${geistMono.className}`}>
                    {job.company}
                  </h3>
                  <span className={`text-md text-gray-400 ${geistMono.className}`}>
                    {job.date}
                  </span>
                </div>
              </div>

              {/* Job Role */}
              <h4 className={`text-lg font-semibold mt-4 text-gray-200 ${inter.className}`}>
                {job.role}
              </h4>

              {/* Description */}
              <p className={`text-gray-400 mt-4 leading-relaxed ${inter.className}`}>
                {job.description}
              </p>

              {/* Skills Used */}
              <div className="mt-5 flex flex-wrap gap-3">
                {job.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="text-xs px-4 py-2 border border-gray-500 text-gray-300 bg-gray-800/20"
                  >
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