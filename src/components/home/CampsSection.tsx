
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import { mockCamps } from "@/data/mockData";
import { Link } from "react-router-dom";

const CampsSection = () => {
  const upcomingCamps = mockCamps
    .filter(camp => new Date(camp.date) > new Date())
    .slice(0, 3);

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Blood Donation Camps</h2>
            <p className="text-gray-600 max-w-2xl">
              Join us at these upcoming blood donation camps in your area and help save lives.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button variant="outline" className="flex items-center" asChild>
              <Link to="/camps">
                See All Camps
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {upcomingCamps.map((camp) => (
            <div 
              key={camp.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{camp.name}</h3>
                <p className="text-gray-500 text-sm mb-4">{camp.organizerName}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="h-5 w-5 mr-2 text-blood-500" />
                    <span>
                      {new Date(camp.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2 text-blood-500" />
                    <span>{camp.time}</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2 text-blood-500" />
                    <span>{camp.venue}</span>
                  </div>
                </div>
                
                <div className="mt-6 flex justify-between">
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/camps/${camp.id}`}>Details</Link>
                  </Button>
                  <Button variant="default" size="sm" className="bg-blood-600 hover:bg-blood-700" asChild>
                    <Link to={`/register-donor?camp=${camp.id}`}>Register</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampsSection;
