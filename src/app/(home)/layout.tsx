import Footer from "../ui/Footer";
import Header from "../ui/Header";

export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-[url('/images/backgrounds/1.png')] bg-primary bg-cover min-h-screen text-white flex flex-col w-full">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
