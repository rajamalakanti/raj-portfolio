import Navbar from "./components/navbar";
import Hero from "./components/hero";

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className='h-[calc(100vh-73px)] flex justify-center items-center bg-black'>
      <Hero/>   
      </div>
    </>
  );
}
