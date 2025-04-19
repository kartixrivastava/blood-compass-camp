
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blood-600/90 to-blood-900/90 z-10"></div>
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1615461066117-0d138f722e9a?q=80&w=1800&auto=format&fit=crop')",
          backgroundBlendMode: "multiply"
        }}
      ></div>
      
      <div className="container relative z-20 mx-auto px-4 py-20 md:py-32">
        <div className="max-w-3xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6">
            Save Lives, Donate Blood Today
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 md:mb-10 max-w-2xl">
            Your donation can help save lives. Join our community of life-savers and make a difference when it matters most.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button size="lg" className="bg-white text-blood-600 hover:bg-gray-100 hover:text-blood-700" asChild>
              <Link to="/donate">
                Donate Blood Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link to="/organize">Organize a Camp</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link to="/volunteer">Become a Volunteer</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
