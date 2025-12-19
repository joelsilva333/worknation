import Footer from "../ui/Footer";
import Header from "../ui/Header";

export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="bg-background min-h-screen text-white flex flex-col w-full items-center">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
