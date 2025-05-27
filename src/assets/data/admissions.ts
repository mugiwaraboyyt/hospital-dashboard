

export const admissionsData = [
    { day: 'Mon', admissions: 12, discharges: 8 },
    { day: 'Tue', admissions: 15, discharges: 10 },
    { day: 'Wed', admissions: 8, discharges: 12 },
    { day: 'Thu', admissions: 18, discharges: 9 },
    { day: 'Fri', admissions: 22, discharges: 15 },
    { day: 'Sat', admissions: 16, discharges: 11 },
    { day: 'Sun', admissions: 14, discharges: 13 }
];

export type AdmissionsData = typeof admissionsData[number];