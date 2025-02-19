import { Inter } from "next/font/google";
import Link from "next/link";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b-[1px] bg-black border-gray-800 py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 justify-between flex flex-row">
        <Link href={'/'}>
        <h1 className={`${inter.className} text-2xl tracking-tighter font-semibold`}>
            Raj Kamal
        </h1>
        </Link>
      </div>
    </header>
  );
}
