
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const DonateSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="bg-gradient-to-r from-blood-600 to-blood-700 rounded-lg p-8 md:p-12">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Support Our Blood Donation Mission</h2>
              <p className="text-white/90 mb-6 text-lg">
                Your financial contribution can help us organize more camps, improve facilities, and reach more donors. Every dollar makes a difference in our life-saving mission.
              </p>
              <div className="space-x-4">
                <Button size="lg" className="bg-white text-blood-600 hover:bg-gray-100" asChild>
                  <Link to="/donate-funds">
                    Donate Now
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-blood-500" asChild>
                  <Link to="/sponsor">Become a Sponsor</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm mt-6 md:mt-0">
                <h3 className="text-white text-xl font-semibold mb-4">Donation Impact</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-white/90">
                    <div className="h-2 w-2 rounded-full bg-white mr-2"></div>
                    <span>$25 - Support supplies for one blood drive</span>
                  </li>
                  <li className="flex items-center text-white/90">
                    <div className="h-2 w-2 rounded-full bg-white mr-2"></div>
                    <span>$50 - Help transport blood to hospitals</span>
                  </li>
                  <li className="flex items-center text-white/90">
                    <div className="h-2 w-2 rounded-full bg-white mr-2"></div>
                    <span>$100 - Fund emergency blood services</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateSection;
