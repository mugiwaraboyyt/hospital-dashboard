export const departmentData = [
    { name: 'Emergency', patients: 24, color: '#ef4444' },
    { name: 'ICU', patients: 12, color: '#f97316' },
    { name: 'General', patients: 45, color: '#eab308' },
    { name: 'Surgery', patients: 18, color: '#22c55e' },
    { name: 'Pediatrics', patients: 16, color: '#3b82f6' },
    { name: 'Maternity', patients: 8, color: '#a855f7' }
];

export type DepartmentData = typeof departmentData[number];