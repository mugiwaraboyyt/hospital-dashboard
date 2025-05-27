// components/patients/PatientList.tsx
import type { Patient } from '@/assets/data/patients';
import PatientCard from '@/components/cards/PatientCard';

type PatientListProps = {
    patients: Patient[];
    getSeverityColor: (severity: string) => string;
    getStatusColor: (status: string) => string;
    getVitalStatus: (value: number | string, type: keyof Patient['vitals']) => string;
    onViewDetails: (patient: Patient) => void;
};

export const PatientList: React.FC<PatientListProps> = ({
    patients,
    getSeverityColor,
    getStatusColor,
    getVitalStatus,
    onViewDetails
}) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {patients.map(patient => (
            <PatientCard
                key={patient.id}
                patient={patient}
                getSeverityColor={getSeverityColor}
                getStatusColor={getStatusColor}
                getVitalStatus={getVitalStatus}
                onViewDetails={onViewDetails}
            />
        ))}
    </div>
);