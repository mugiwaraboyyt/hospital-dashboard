export interface StaffMember {
    id: number;
    name: string;
    role: string;
    shift: "Day" | "Night";
    patients: number;
    rating: number;
    avatar: string;
    experience: string;
    specialty: string;
}

export interface Stats {
    totalPatients: number;
    criticalPatients: number;
    availableBeds: number;
    staffOnDuty: number;
}


export const staff: StaffMember[] = [
    {
        id: 1,
        name: "Dr. Smith",
        role: "Cardiologist",
        shift: "Day",
        patients: 8,
        rating: 4.9,
        avatar: "👨‍⚕️",
        experience: "15 years",
        specialty: "Heart Surgery"
    },
    {
        id: 2,
        name: "Dr. Rodriguez",
        role: "Surgeon",
        shift: "Day",
        patients: 5,
        rating: 4.8,
        avatar: "👩‍⚕️",
        experience: "12 years",
        specialty: "General Surgery"
    },
    {
        id: 3,
        name: "Dr. Thompson",
        role: "General",
        shift: "Night",
        patients: 12,
        rating: 4.7,
        avatar: "👨‍⚕️",
        experience: "8 years",
        specialty: "Family Medicine"
    },
    {
        id: 4,
        name: "Dr. Lee",
        role: "Pulmonologist",
        shift: "Day",
        patients: 6,
        rating: 4.9,
        avatar: "👩‍⚕️",
        experience: "20 years",
        specialty: "Lung Diseases"
    }
]