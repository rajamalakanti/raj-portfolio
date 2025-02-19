import { Poppins, Geist_Mono, Inter } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function WelcomeHero() {

  return (
    <section className="flex flex-col items-center justify-center h-screen bg-black text-white px-6">
      <div className="text-center max-w-5xl">
        
        {/* Name */}
        <h1 className={`${inter.className} text-6xl md:text-8xl font-normal tracking-tighter`}>
          Meet Raj
        </h1>

        {/* "THE" Typography */}
        <p className={`${geistMono.className} my-4 text-lg text-gray-400 tracking-wide`}>
          THE
        </p>

        {/* Title */}
        <h2 className={`text-2xl md:text-4xl font-bold uppercase underline text-gray-300 ${geistMono.className}`}>
          Entrepreneur & Innovator
        </h2>

        {/* Short Bio */}
        <p className={`text-lg md:text-xl text-gray-400 my-4 mb-10 max-w-3xl mx-auto ${inter.className}`}>
          Transforming ideas into reality. Building startups, leading ventures, and driving innovation.
        </p>

        {/* Call to Action Button */}
        <button
          className="mt-6 px-8 py-3 text-lg font-semibold uppercase border border-gray-500 rounded-md text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300"
        >
          Scroll down to view my journey
        </button>
      </div>
    </section>
  );
}

