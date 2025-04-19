
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ImportanceSection from "@/components/home/ImportanceSection";
import CampsSection from "@/components/home/CampsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import DonateSection from "@/components/home/DonateSection";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <StatsSection />
        <ImportanceSection />
        <CampsSection />
        <TestimonialsSection />
        <DonateSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
