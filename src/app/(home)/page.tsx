import About from "./components/About";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center px-4 text-center">
      <Hero />
      <About />
      <Projects />
    </div>
  );
}
