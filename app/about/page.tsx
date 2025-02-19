import React from "react";
import Image from "next/image"; 
import { Geist_Mono, Inter } from "next/font/google";
import { BsLinkedin, BsGithub, BsFolder2Open } from "react-icons/bs";
import Navbar from "../components/navbar";

const featuredArticles = [
  {
    title: "IMSA Powerpitch 2023 Competition (1:23:10 mark)",
    link: "https://www.youtube.com/watch?v=JDx38YlfV4A",
    image: "https://i.ytimg.com/vi/JDx38YlfV4A/maxresdefault.jpg",
  },
  {
    title: "Jacabson Institute Innovator Competition Spring 2023 winners",
    link: "https://jacobsoninstitute.org/innovatorcompetition/winners",
    image: "https://jacobsoninstitute.org/sites/jacobsoninstitute.org/files/styles/widescreen__1312_x_738/public/2023-06/stutteron_team_photo_website.jpg?h=650406dc&itok=hyglhunl",
  },
  {
    title: "CS students are building award-winning tech startups",
    link: "https://siebelschool.illinois.edu/news/2024-student-run-startups",
    image: "https://tec.illinois.edu/_sitemanager/viewphoto.aspx?id=91947&s=1920&h=1200",
  },
];

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const About = () => {
  return (
    <>
      <Navbar />
      <section className="bg-black text-white py-20 px-6">
        <div className="container mx-auto mt-15 max-w-6xl flex flex-col items-center">
          
          {/* Profile Section */}
          <div className="flex flex-col items-center text-center">
            <Image
              src="/profile.jpg" 
              alt="Raj Kamal Amalakanti"
              width={150}
              height={150}
              className="rounded-full object-cover aspect-square border-4 border-gray-500 shadow-lg"
            />
            <h2 className={`${inter.className} text-4xl mt-4 font-semibold`}>
              Raj Kamal Amalakanti
            </h2>
            <p className="text-gray-400 text-lg">Software Engineer | AI Innovator | Entrepreneur</p>

            {/* Social Links */}
            <div className="flex gap-6 mt-4">
              <a href="https://linkedin.com/in/raj-amalakanti" target="_blank" rel="noopener noreferrer">
                <BsLinkedin className="text-gray-300 text-2xl hover:text-white transition-all duration-300" />
              </a>
              <a href="https://github.com/rajamalakanti" target="_blank" rel="noopener noreferrer">
                <BsGithub className="text-gray-300 text-2xl hover:text-white transition-all duration-300" />
              </a>
              <a href="https://rajamalakanti.me" target="_blank" rel="noopener noreferrer">
                <BsFolder2Open className="text-gray-300 text-2xl hover:text-white transition-all duration-300" />
              </a>
            </div>
          </div>

          {/* Bio Section */}
          <div className="max-w-3xl text-center mt-8">
            <p className={`text-lg md:text-xl text-gray-400 leading-relaxed ${inter.className}`}>
              I am a software engineer, entrepreneur, and AI innovator passionate about building scalable AI solutions
              and machine learning-powered platforms. I specialize in LLM & RAG-based AI startups, data-driven product
              development, and full-stack engineering.
            </p>

            <p className={`text-lg md:text-xl text-gray-400 leading-relaxed mt-4 ${inter.className}`}>
              Currently, I’m developing AI-powered speech therapy tools at StutterOn. In the past, I helped optimize climate risk
              prediction at ClimeCast, and scaling innovative business intelligence solutions with Sliks.
            </p>
          </div>

          {/* Featured Articles */}
          <div className="mt-16 w-full">
            <h3 className={`text-3xl font-semibold text-center mb-8 ${geistMono.className}`}>
              Featured In
            </h3>
            <div className="grid md:grid-cols-3 gap-6 w-full">
              {featuredArticles.map((article, index) => (
                <a
                  key={index}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block bg-gray-900/70 backdrop-blur-lg p-4 rounded-lg shadow-lg border border-gray-500 hover:border-gray-300 transform transition-all hover:scale-[1.05]"
                >
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={400}
                    height={250}
                    className="rounded-lg mb-4 w-full object-cover"
                  />
                  <h4 className="text-lg font-semibold text-gray-200 group-hover:text-white transition-all">
                    {article.title}
                  </h4>
                  <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-all">
                    Learn more →
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;