import Navbar from "../components/navbar";
import WelcomeHero from "./components/welcome-hero";
import Footer from "../swe/components/footer";
import Experience from "./components/experience";

export default function Entrepreneurship() {
  return (
    <>
      <Navbar />
      <WelcomeHero />

      <div className="max-w-5xl flex flex-row justify-center items-center">
        <hr />
      </div>

      <Experience/>

      <div className="max-w-5xl flex flex-row justify-center items-center">
        <hr />
      </div>

      <div className="p-10" />
      <Footer />
    </>
  );
}