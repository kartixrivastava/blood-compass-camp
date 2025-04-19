
import { Camp } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, User } from "lucide-react";
import { Link } from "react-router-dom";

interface CampCardProps {
  camp: Camp;
}

const CampCard = ({ camp }: CampCardProps) => {
  const isUpcoming = new Date(camp.date) > new Date();
  const formattedDate = new Date(camp.date).toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
      <div className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-medium text-lg">{camp.name}</h3>
            <p className="text-sm text-gray-500">
              <span className="inline-flex items-center">
                <User className="h-3.5 w-3.5 mr-1" />
                {camp.organizerName}
              </span>
            </p>
          </div>
          <Badge className={isUpcoming ? "bg-green-100 text-green-800 border-green-200" : "bg-gray-100 text-gray-800"}>
            {isUpcoming ? "Upcoming" : "Completed"}
          </Badge>
        </div>

        <div className="mt-4 space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-2 text-gray-400" />
            <span>{formattedDate} • {camp.time}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2 text-gray-400" />
            <span>{camp.venue}</span>
          </div>
        </div>
        
        {camp.donorsCount && camp.bloodUnitsCollected && (
          <div className="mt-4 flex justify-between text-sm">
            <div>
              <span className="text-gray-500">Donors</span>
              <p className="font-medium">{camp.donorsCount}</p>
            </div>
            <div>
              <span className="text-gray-500">Blood Units</span>
              <p className="font-medium">{camp.bloodUnitsCollected}</p>
            </div>
          </div>
        )}
        
        <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between">
          <Button variant="outline" size="sm" asChild>
            <Link to={`/camps/${camp.id}`}>View Details</Link>
          </Button>
          {isUpcoming && (
            <Button variant="default" size="sm" className="bg-blood-600 hover:bg-blood-700" asChild>
              <Link to={`/register-donor?camp=${camp.id}`}>Register</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CampCard;
