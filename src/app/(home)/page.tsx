import About from "./components/About";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center px-4 text-center">
      <Hero />
      <About />
    </div>
  );
}
