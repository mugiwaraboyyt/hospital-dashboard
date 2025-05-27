import { Heart } from "lucide-react";

export const DashboardHeader = () => (
    <div className="text-center space-y-4">
        <div className="flex items-center justify-center gap-3">
            <div className="p-3 bg-gradient-to-r from-blue-600 to-green-600 rounded-full">
                <Heart className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                MedCare Hospital System
            </h1>
        </div>
        <p className="text-gray-600 text-lg">Advanced Healthcare Management & Patient Monitoring</p>
    </div>
);