import Footer from "@/sources/pages/freelancing/footer";

interface FreelancingLayoutProps {
  children: React.ReactNode;
}

export default function FreelancingLayout({ children }: FreelancingLayoutProps) {
  return (
    <div id="body" className="scroll-smooth antialiased">
      {children}
      <Footer />
    </div>
  );
}
