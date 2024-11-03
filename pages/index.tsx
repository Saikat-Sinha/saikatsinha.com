import localFont from "next/font/local";
import Image from "next/image";
import { AiOutlineExperiment } from "react-icons/ai";
import { MdOutlineHandshake } from "react-icons/md";
import { GrInfo } from "react-icons/gr";
import { FaSpider, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa6";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/saikat-sinha/",
    icon: <FaLinkedin size={20} />,
  },
  {
    name: "Twitter",
    url: "https://twitter.com/_SaikatSinha",
    icon: <FaTwitter size={20} />,
  },
  {
    name: "Github",
    url: "https://github.com/saikat-sinha",
    icon: <FaGithub size={20} />,
  },
];

// export const metadata: Metadata = {
//   title: "Saikat Sinha - Experiments by Saikat Sinha",
//   description: "Web Experiments by Saikat Sinha",
// };

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen font-[family-name:var(--font-geist-sans)] px-4 pb-4 mt-2`}
    >
      <Head>
        <title>Saikat Sinha - Experiments by Saikat Sinha</title>
        <meta
          property="og:title"
          content="Saikat Sinha - Experiments by Saikat Sinha"
          key="title"
        />
        <meta name="description" content="Web Experiments by Saikat Sinha" />
      </Head>
      {/* Header */}
      <header className="container mx-auto flex justify-between align-middle">
        <nav className="flex items-center font-mono text-xs  uppercase font-semibold space-x-2 lg:space-x-8 lg:mt-4">
          <a
            href="#about"
            className="bg-stone-300 hover:bg-purple-400 py-1 px-2 cursor-pointer"
          >
            <div className="flex items-center">
              About me
              <GrInfo className="ml-1 text-lime-800" size={20} />
            </div>
          </a>
          <a
            href="#services"
            className="bg-stone-300 hover:bg-yellow-300 py-1 px-2 cursor-pointer"
          >
            <div className="flex items-center">
              My Experiments
              <AiOutlineExperiment className="ml-1" size={20} />
            </div>
          </a>

          <a
            href="#contact"
            className="bg-stone-300 hover:bg-lime-400 py-1 px-2 cursor-pointer"
          >
            <div className="flex items-center">
              Contact me
              <MdOutlineHandshake className="ml-1 text-lime-800" size={20} />
            </div>
          </a>
        </nav>
        <div className="hidden lg:flex gap-3 mt-4">
          <span className="text-sm">Connect with me @</span>
          {/* <FaLinkedin size={20} />
          <FaTwitter size={20} />
          <FaGithub size={20} /> */}
          {socialLinks.map((social) => (
            <a key={social.name} href={social.url} target="__blank">
              {social.icon}
            </a>
          ))}
        </div>
      </header>

      {/* Main */}
      <main className="container mx-auto">
        <div className="flex align-middle justify-center lg:hidden mt-2">
          <FaSpider size={32} />
          <Image src="/base-char.svg" alt="Hero" width={180} height={100} />
        </div>
        <div className="flex justify-between items-center mt-4 lg:mt-16">
          <div>
            <p>
              <span className="text-3xl text-gray-500">Hello, I am</span>
            </p>
            <h1 className="text-5xl lg:text-9xl font-bold">Saikat Sinha</h1>
            <div className="">
              <p className="text-xl lg:text-3xl mt-8 font-semibold">
                I make Web Applications and love experimenting with
                technologies.
              </p>

              <p className="text-xl lg:text-3xl mt-4">
                I am currently a Software Engineer exploring{" "}
                <span className="underline">Data Governance & Management</span>{" "}
                at <span className="text-indigo-700">Expedia Group.</span>
              </p>
              <p className="text-xl lg:text-3xl mt-4">
                Past Experience: <span className="underline">samsclub.com</span>{" "}
                at <span className="text-green-600">Walmart Global Tech</span>
              </p>
            </div>
            <div className="mt-8">
              <p className="text-xl underline decoration-clone inline-block px-3 mb-4">
                My Tools of Choice:{" "}
              </p>
              <div className="flex flex-wrap gap-2 align-middle">
                <span className="bg-yellow-300 font-bold px-2 py-1">
                  #JavaScript
                </span>
                <span className="bg-blue-200 font-bold px-2 py-1">
                  #TypeScript
                </span>
                <span className="bg-cyan-100 font-bold px-2 py-1">#React</span>
                <span className="bg-green-200 font-bold px-2 py-1">
                  #NodeJS
                </span>
                <span className="bg-fuchsia-200 font-bold px-2 py-1">
                  #GraphQL
                </span>
                <span className="bg-lime-300 font-bold px-2 py-1">#Docker</span>
                <span className="bg-orange-200 font-bold px-2 py-1">#AWS</span>
              </div>
            </div>
            <hr className="mt-4 border-black" />
            <div>
              <button className="bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold py-2 px-4 cursor-pointer mt-8">
                <div className="flex items-center">
                  <span className="text-2xl">View Experiments</span>
                  <AiOutlineExperiment className="ml-1" size={20} />
                </div>
              </button>
            </div>
            <div className="mt-6 mb-4">
              <div className="flex lg:hidden gap-3 mt-4">
                <span className="text-sm">Connect with me @</span>
                {socialLinks.map((social) => (
                  <a key={social.name} href={social.url} target="__blank">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <FaSpider size={32} />
            <Image src="/base-char.svg" alt="Hero" width={300} height={400} />
          </div>
        </div>
      </main>
    </div>
  );
}
