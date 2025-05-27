export const vitalTrendsData = [
    { time: '00:00', heartRate: 75, temperature: 98.6, oxygen: 98, bloodPressure: '120/80' },
    { time: '04:00', heartRate: 72, temperature: 98.4, oxygen: 97, bloodPressure: '118/76' },
    { time: '08:00', heartRate: 78, temperature: 98.8, oxygen: 98, bloodPressure: '122/82' },
    { time: '12:00', heartRate: 82, temperature: 99.1, oxygen: 96, bloodPressure: '125/85' },
    { time: '16:00', heartRate: 79, temperature: 98.9, oxygen: 97, bloodPressure: '120/80' },
    { time: '20:00', heartRate: 76, temperature: 98.7, oxygen: 98, bloodPressure: '119/78' }
];

export type VitalTrendsData = typeof vitalTrendsData[number];
