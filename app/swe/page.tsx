import Navbar from "../components/navbar";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Skills from "./components/skills";
import WelcomeHero from "./components/welcome-hero";
import Footer from "./components/footer";


export default function SWE() {
  return (
    <>
    <Navbar/>
    <WelcomeHero/>
    <Experience/>
    <div className="max-w-5xl flex flex-row justify-center items-center">
      <hr></hr>
    </div>
    <Projects/>
    <div className="max-w-5xl flex flex-row justify-center items-center">
      <hr></hr>
    </div>
    <Skills/>
    <div className="p-10"/>
    <Footer/>
    </>
  );
}