// components/modals/PatientDetailModal.tsx
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X, Phone, FileText, Heart, Thermometer, MonitorSpeaker, Activity, AlertTriangle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { useEffect, useState } from 'react';
import type { Patient } from '@/assets/data/patients';

type PatientDetailModalProps = {
    patient: Patient | null;
    onClose: () => void;
    getSeverityColor: (severity: string) => string;
    onSave: (patient: Patient) => void;
};

export const PatientDetailModal: React.FC<PatientDetailModalProps> = ({
    patient,
    onClose,
    getSeverityColor,
    onSave
}) => {
    const [editedPatient, setEditedPatient] = useState<Patient | null>(patient);

    useEffect(() => {
        setEditedPatient(patient);
    }, [patient]);

    if (!editedPatient) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto border-0 shadow-2xl">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-green-600 text-white">
                    <div className="flex items-center justify-between">
                        <div>
                            <CardTitle className="text-xl">{editedPatient.name}</CardTitle>
                            <span className="text-blue-100">Detailed Patient Information</span>
                        </div>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={onClose}
                            className="text-white hover:bg-white/20"
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                    {/* Patient details JSX */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <span className="text-sm text-gray-600">Age</span>
                            <div className="font-medium">{editedPatient.age} years</div>
                        </div>
                        <div className="space-y-1">
                            <span className="text-sm text-gray-600">Gender</span>
                            <div className="font-medium">{editedPatient.gender}</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-sm text-gray-600">Room</div>
                            <div className="font-medium">{editedPatient.room}</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-sm text-gray-600">Status</div>
                            <Badge className={getSeverityColor(editedPatient.severity)}>
                                {editedPatient.status}
                            </Badge>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="text-sm font-medium text-gray-700">Contact Information</div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <Phone className="h-4 w-4 text-gray-500" />
                                <span>{editedPatient.phone}</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <AlertTriangle className="h-4 w-4 text-red-500" />
                                <span className="text-sm">{editedPatient.emergency}</span>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <div className="text-sm font-medium text-gray-700">Current Vital Signs</div>
                        <div className="grid grid-cols-2 gap-3">
                            <div className="p-3 bg-red-50 rounded-lg">
                                <div className="flex items-center gap-2">
                                    <Heart className="h-4 w-4 text-red-500" />
                                    <span className="text-sm text-gray-600">Heart Rate</span>
                                </div>
                                <div className="text-lg font-bold text-red-600">
                                    {editedPatient.vitals.heartRate} bpm
                                </div>
                            </div>
                            <div className="p-3 bg-blue-50 rounded-lg">
                                <div className="flex items-center gap-2">
                                    <Thermometer className="h-4 w-4 text-blue-500" />
                                    <span className="text-sm text-gray-600">Temperature</span>
                                </div>
                                <div className="text-lg font-bold text-blue-600">{editedPatient.vitals.temperature}°F</div>
                            </div>
                            <div className="p-3 bg-purple-50 rounded-lg">
                                <div className="flex items-center gap-2">
                                    <MonitorSpeaker className="h-4 w-4 text-purple-500" />
                                    <span className="text-sm text-gray-600">Blood Pressure</span>
                                </div>
                                <div className="text-lg font-bold text-purple-600">{editedPatient.vitals.bloodPressure}</div>
                            </div>
                            <div className="p-3 bg-green-50 rounded-lg">
                                <div className="flex items-center gap-2">
                                    <Activity className="h-4 w-4 text-green-500" />
                                    <span className="text-sm text-gray-600">Oxygen Saturation</span>
                                </div>
                                <div className="text-lg font-bold text-green-600">{editedPatient.vitals.oxygen}%</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex gap-2 pt-4">
                        <Button
                            className="flex-1 bg-blue-600 hover:bg-blue-700"
                            onClick={() => onSave(editedPatient)}
                        >
                            <FileText className="h-4 w-4 mr-2" />
                            Save Changes
                        </Button>
                        <Button variant="outline" className="flex-1">
                            <Phone className="h-4 w-4 mr-2" />
                            Contact Doctor
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};