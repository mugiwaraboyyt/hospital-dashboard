import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Badge, Calendar, CheckCircle2, MoreHorizontal, Stethoscope, User } from "lucide-react";
import VitalSigns from "../ui/VitalSigns";
import type { Patient } from "@/assets/data/patients";

interface PatientCardProps {
    patient: Patient;
    getSeverityColor: (severity: string) => string;
    getStatusColor: (status: string) => string;
    getVitalStatus: (value: number | string, type: keyof Patient['vitals']) => string;

    onViewDetails: (patient: Patient) => void;
}

const PatientCard: React.FC<PatientCardProps> = ({ patient, getSeverityColor, getStatusColor, getVitalStatus, onViewDetails }) => {
    return (
        <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:-translate-y-1">
            <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                    <div className="space-y-2">
                        <CardTitle className="text-lg group-hover:text-blue-600 transition-colors flex items-center gap-2">
                            <User className="h-5 w-5" />
                            {patient.name}
                        </CardTitle>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                            <span>{patient.age} years • {patient.gender}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Badge className={getSeverityColor(patient.severity)}>
                                {patient.severity === 'Critical' ? <AlertCircle className="h-3 w-3 mr-1" /> : <CheckCircle2 className="h-3 w-3 mr-1" />}
                                {patient.severity}
                            </Badge>
                            <div className="flex items-center gap-1">
                                <div className={`w-2 h-2 rounded-full ${getStatusColor(patient.status)}`}></div>
                                <span className="text-xs text-gray-600">{patient.status}</span>
                            </div>
                        </div>
                    </div>
                    <Button variant="ghost" size="sm" onClick={() => onViewDetails(patient)}>
                        <MoreHorizontal className="h-4 w-4" />
                    </Button>
                </div>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-3 text-sm">
                    <div className="space-y-1">
                        <div className="text-gray-600">Condition</div>
                        <div className="font-medium">{patient.condition}</div>
                    </div>
                    <div className="space-y-1">
                        <div className="text-gray-600">Room</div>
                        <div className="font-medium">{patient.room}</div>
                    </div>
                </div>

                <div className="space-y-3">
                    <div className="text-sm font-medium text-gray-700">Vital Signs</div>
                    <VitalSigns vitals={patient.vitals} getVitalStatus={getVitalStatus} />
                </div>

                <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                        <Stethoscope className="h-4 w-4" />
                        <span>{patient.doctor}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                        <Calendar className="h-4 w-4" />
                        <span>Admitted: {new Date(patient.admissionDate).toLocaleDateString()}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
};

export default PatientCard;