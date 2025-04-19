
import { Calendar, Droplet, MapPin, Plus, User, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StatsCard from "@/components/dashboard/StatsCard";
import UpcomingCampsTable from "@/components/dashboard/UpcomingCampsTable";
import { mockCamps, mockDonors, mockBloodStock } from "@/data/mockData";

const Dashboard = () => {
  // Calculate total blood units collected
  const totalBloodUnits = mockBloodStock.reduce((acc, stock) => acc + stock.units, 0);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="container px-4 py-8 mx-auto">
          <div className="mb-6">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-gray-500">Monitor blood donation activities and manage camps</p>
          </div>
          
          {/* Quick Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <Button className="bg-blood-600 hover:bg-blood-700">
              <Plus className="h-4 w-4 mr-2" />
              Add Camp
            </Button>
            <Button variant="outline">
              <User className="h-4 w-4 mr-2" />
              Register Donor
            </Button>
            <Button variant="outline">
              <FileText className="h-4 w-4 mr-2" />
              View Reports
            </Button>
          </div>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
            <StatsCard 
              title="Total Camps" 
              value={mockCamps.length} 
              icon={<MapPin className="h-5 w-5" />} 
              description="All time blood donation camps"
            />
            <StatsCard 
              title="Registered Donors" 
              value={mockDonors.length} 
              icon={<User className="h-5 w-5" />}
              description="Total donors in database" 
            />
            <StatsCard 
              title="Blood Units Collected" 
              value={totalBloodUnits} 
              icon={<Droplet className="h-5 w-5" />}
              description="Units available across all blood groups" 
            />
            <StatsCard 
              title="Upcoming Camps" 
              value={mockCamps.filter(camp => new Date(camp.date) > new Date()).length} 
              icon={<Calendar className="h-5 w-5" />}
              description="Scheduled in the next 30 days" 
            />
          </div>
          
          {/* Upcoming Camps */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Upcoming Camps</h2>
              <Button variant="ghost" className="text-sm" asChild>
                <Link to="/camps">View All</Link>
              </Button>
            </div>
            <UpcomingCampsTable camps={mockCamps} />
          </div>
          
          {/* Blood Stock Overview */}
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Blood Stock Overview</h2>
              <Button variant="ghost" className="text-sm" asChild>
                <Link to="/blood-stock">View Details</Link>
              </Button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
              {mockBloodStock.map((stock) => (
                <div 
                  key={stock.bloodGroup} 
                  className="bg-gray-50 p-4 rounded-md border border-gray-100 text-center"
                >
                  <div className="text-xl font-bold text-blood-600 mb-1">{stock.bloodGroup}</div>
                  <div className="text-gray-500 text-sm">
                    {stock.units} <span className="text-xs">units</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
