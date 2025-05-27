import { AlertTriangle } from "lucide-react";
import { Button } from "../ui/button";

export const CriticalAlerts: React.FC = () => (
    <div className="bg-gradient-to-r from-red-50 to-orange-50 border border-red-200 rounded-lg p-4">
        <div className="flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <span className="font-medium text-red-800">Critical Alert:</span>
            <span className="text-red-700">2 patients require immediate attention in ICU</span>
            <Button size="sm" variant="destructive" className="ml-auto">
                View Details
            </Button>
        </div>
    </div>
);
