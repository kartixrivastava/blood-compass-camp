
import { Camp } from "@/types";
import { Calendar, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface UpcomingCampsTableProps {
  camps: Camp[];
}

const UpcomingCampsTable = ({ camps }: UpcomingCampsTableProps) => {
  // Filter and sort camps to show only upcoming ones, ordered by date
  const upcomingCamps = camps
    .filter(camp => new Date(camp.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 5); // Show only next 5 upcoming camps

  if (upcomingCamps.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">No upcoming camps scheduled.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b">
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Camp Name</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Date & Time</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Location</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-gray-500">Actions</th>
          </tr>
        </thead>
        <tbody>
          {upcomingCamps.map((camp) => (
            <tr key={camp.id} className="border-b hover:bg-gray-50">
              <td className="px-4 py-4">
                <div>
                  <p className="font-medium">{camp.name}</p>
                  <p className="text-sm text-gray-500">{camp.organizerName}</p>
                </div>
              </td>
              <td className="px-4 py-4">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                  <span className="text-sm">
                    {new Date(camp.date).toLocaleDateString()} 
                  </span>
                </div>
                <div className="flex items-center mt-1">
                  <Clock className="h-4 w-4 mr-2 text-gray-400" />
                  <span className="text-sm text-gray-500">{camp.time}</span>
                </div>
              </td>
              <td className="px-4 py-4">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                  <span className="text-sm">{camp.venue}</span>
                </div>
              </td>
              <td className="px-4 py-4">
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm" asChild>
                    <Link to={`/camps/${camp.id}`}>View</Link>
                  </Button>
                  <Button size="sm" className="bg-blood-600 hover:bg-blood-700" asChild>
                    <Link to={`/register-donor?camp=${camp.id}`}>Register</Link>
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UpcomingCampsTable;
