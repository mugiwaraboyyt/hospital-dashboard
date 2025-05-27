export interface PatientVitals {
    heartRate: number;
    temperature: number;
    bloodPressure: string;
    oxygen: number;
}

export interface Patient {
    id: number;
    name: string;
    age: number;
    gender: string;
    condition: string;
    severity: string;
    room: string;
    doctor: string;
    admissionDate: string;
    status: string;
    vitals: PatientVitals;
    phone: string;
    emergency: string;
}

export type VitalStatus = "normal" | "warning" | "critical";


export const patients: Patient[] = [
    {
        id: 1,
        name: "Sarah Johnson",
        age: 34,
        gender: "Female",
        condition: "Hypertension",
        severity: "Moderate",
        room: "A-201",
        doctor: "Dr. Smith",
        admissionDate: "2024-05-20",
        status: "Stable",
        vitals: { heartRate: 78, bloodPressure: "140/90", temperature: 98.6, oxygen: 98 },
        phone: "(555) 123-4567",
        emergency: "John Johnson - (555) 987-6543"
    },
    {
        id: 2,
        name: "Michael Chen",
        age: 67,
        gender: "Male",
        condition: "Cardiac Surgery",
        severity: "Critical",
        room: "ICU-3",
        doctor: "Dr. Rodriguez",
        admissionDate: "2024-05-18",
        status: "Critical",
        vitals: { heartRate: 95, bloodPressure: "160/95", temperature: 99.2, oxygen: 94 },
        phone: "(555) 234-5678",
        emergency: "Linda Chen - (555) 876-5432"
    },
    {
        id: 3,
        name: "Emma Williams",
        age: 28,
        gender: "Female",
        condition: "Appendectomy",
        severity: "Mild",
        room: "B-105",
        doctor: "Dr. Thompson",
        admissionDate: "2024-05-21",
        status: "Recovering",
        vitals: { heartRate: 72, bloodPressure: "120/80", temperature: 98.4, oxygen: 99 },
        phone: "(555) 345-6789",
        emergency: "David Williams - (555) 765-4321"
    },
    {
        id: 4,
        name: "Robert Davis",
        age: 45,
        gender: "Male",
        condition: "Pneumonia",
        severity: "Moderate",
        room: "C-310",
        doctor: "Dr. Lee",
        admissionDate: "2024-05-19",
        status: "Improving",
        vitals: { heartRate: 85, bloodPressure: "130/85", temperature: 100.1, oxygen: 96 },
        phone: "(555) 456-7890",
        emergency: "Mary Davis - (555) 654-3210"
    },
    {
        id: 5,
        name: "Jennifer Brown",
        age: 52,
        gender: "Female",
        condition: "Diabetes Management",
        severity: "Mild",
        room: "D-207",
        doctor: "Dr. Patel",
        admissionDate: "2024-05-22",
        status: "Stable",
        vitals: { heartRate: 74, bloodPressure: "125/82", temperature: 98.7, oxygen: 98 },
        phone: "(555) 567-8901",
        emergency: "James Brown - (555) 543-2109"
    }
];

