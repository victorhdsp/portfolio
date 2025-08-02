import Footer from "@/sources/pages/projects/footer";
import Header from "@/sources/pages/projects/header";

interface ProjectsLayoutProps {
  children: React.ReactNode;
}

export default function ProjectsLayout({ children }: ProjectsLayoutProps) {
  return (
    <div id="body" className="scroll-smooth antialiased">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
