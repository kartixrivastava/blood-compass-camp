
import { bloodDonationFacts } from "@/data/mockData";
import { Droplet, Heart, Clock, BookOpen } from "lucide-react";

const ImportanceSection = () => {
  const icons = [
    <Droplet className="h-10 w-10 text-blood-600" />,
    <Clock className="h-10 w-10 text-blood-600" />,
    <Heart className="h-10 w-10 text-blood-600" />,
    <BookOpen className="h-10 w-10 text-blood-600" />
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Donate Blood?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Blood donation is a simple act that can have a profound impact. Learn why your contribution matters.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {bloodDonationFacts.map((fact, index) => (
            <div key={fact.id} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="mb-4">
                {icons[index]}
              </div>
              <h3 className="text-xl font-semibold mb-3">{fact.fact}</h3>
              <p className="text-gray-600">{fact.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-blood-50 rounded-lg p-6 md:p-8 border border-blood-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-blood-800 mb-2">Ready to Save Lives?</h3>
              <p className="text-blood-700">
                It only takes a few minutes to register as a donor or find a blood camp near you.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/donate"
                className="bg-blood-600 hover:bg-blood-700 text-white px-6 py-3 rounded-md font-medium text-center"
              >
                Become a Donor
              </a>
              <a
                href="/camps"
                className="bg-white hover:bg-gray-50 text-blood-600 border border-blood-200 px-6 py-3 rounded-md font-medium text-center"
              >
                Find Nearby Camps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImportanceSection;
