
import { HeartPulse, Users, Calendar, Droplet } from "lucide-react";

const StatsSection = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Through the power of blood donation, we've helped save countless lives. 
            Join us in making a difference in your community.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard
            icon={<Droplet className="h-10 w-10 text-blood-500" />}
            number="10,000+"
            label="Blood Units Collected"
          />
          <StatCard
            icon={<Users className="h-10 w-10 text-blood-500" />}
            number="5,000+"
            label="Registered Donors"
          />
          <StatCard
            icon={<Calendar className="h-10 w-10 text-blood-500" />}
            number="500+"
            label="Camps Organized"
          />
          <StatCard
            icon={<HeartPulse className="h-10 w-10 text-blood-500" />}
            number="30,000+"
            label="Lives Impacted"
          />
        </div>
      </div>
    </section>
  );
};

interface StatCardProps {
  icon: React.ReactNode;
  number: string;
  label: string;
}

const StatCard = ({ icon, number, label }: StatCardProps) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center">
      <div className="flex justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-3xl font-bold mb-2">{number}</h3>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

export default StatsSection;
