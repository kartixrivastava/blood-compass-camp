
import { Donor } from "@/types";
import { Badge } from "@/components/ui/badge";
import { Calendar, Mail, Phone, User } from "lucide-react";

interface DonorCardProps {
  donor: Donor;
}

const DonorCard = ({ donor }: DonorCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
      <div className="p-4">
        <div className="flex items-center space-x-4">
          <div className="bg-blood-100 rounded-full p-3">
            <User className="h-6 w-6 text-blood-600" />
          </div>
          <div>
            <h3 className="font-medium text-lg">{donor.name}</h3>
            <div className="flex items-center text-sm text-gray-500">
              <span className="mr-2">{donor.age} years</span>
              <span className="mr-2">•</span>
              <span>{donor.gender}</span>
            </div>
          </div>
        </div>
        
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-sm">
            <Badge variant="outline" className="bg-blood-50 text-blood-700 border-blood-200">
              {donor.bloodGroup}
            </Badge>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <Phone className="h-4 w-4 mr-2 text-gray-400" />
            <span>{donor.contact}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <Mail className="h-4 w-4 mr-2 text-gray-400" />
            <span>{donor.email}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-2 text-gray-400" />
            <span>Last donated: {new Date(donor.lastDonationDate).toLocaleDateString()}</span>
          </div>
        </div>
        
        <div className="mt-4 pt-3 border-t border-gray-100">
          <p className="text-sm text-gray-500">
            <span className="font-medium">Camp:</span> {donor.campParticipated}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonorCard;
