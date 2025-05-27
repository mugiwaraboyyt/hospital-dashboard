import type { PatientVitals } from "@/assets/data/patients";
import { Activity, Heart, MonitorSpeaker, Thermometer } from "lucide-react";
interface VitalSignsProps {
    vitals: PatientVitals;
    getVitalStatus: (value: number | string, type: keyof PatientVitals) => string;

}

const VitalSigns: React.FC<VitalSignsProps> = ({ vitals, getVitalStatus }) => (
    <div className="grid grid-cols-2 gap-2 text-xs">
        <div className={`p-2 rounded-lg ${getVitalStatus(vitals.heartRate, 'heartRate') === 'normal' ? 'bg-green-50' : 'bg-yellow-50'}`}>
            <div className="flex items-center gap-1">
                <Heart className="h-3 w-3 text-red-500" />
                <span className="text-gray-600">HR</span>
            </div>
            <div className="font-medium">{vitals.heartRate} bpm</div>
        </div>
        <div className={`p-2 rounded-lg ${getVitalStatus(vitals.temperature, 'temperature') === 'normal' ? 'bg-green-50' : 'bg-yellow-50'}`}>
            <div className="flex items-center gap-1">
                <Thermometer className="h-3 w-3 text-blue-500" />
                <span className="text-gray-600">Temp</span>
            </div>
            <div className="font-medium">{vitals.temperature}°F</div>
        </div>
        <div className="p-2 rounded-lg bg-blue-50">
            <div className="flex items-center gap-1">
                <MonitorSpeaker className="h-3 w-3 text-purple-500" />
                <span className="text-gray-600">BP</span>
            </div>
            <div className="font-medium">{vitals.bloodPressure}</div>
        </div>
        <div className={`p-2 rounded-lg ${getVitalStatus(vitals.oxygen, 'oxygen') === 'normal' ? 'bg-green-50' : 'bg-red-50'}`}>
            <div className="flex items-center gap-1">
                <Activity className="h-3 w-3 text-green-500" />
                <span className="text-gray-600">O2</span>
            </div>
            <div className="font-medium">{vitals.oxygen}%</div>
        </div>
    </div>
);

export default VitalSigns;