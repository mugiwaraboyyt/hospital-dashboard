// components/analytics/VitalTrendsChart.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Activity } from "lucide-react";
import type { PatientVitals } from "@/assets/data/patients";

type VitalTrendsChartProps = {
    data: PatientVitals[];
};

export const VitalTrendsChart: React.FC<VitalTrendsChartProps> = ({ data }) => (
    <Card className="border-0 shadow-lg">
        <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-purple-600" />
                Average Vital Signs Trends (24h)
            </CardTitle>
        </CardHeader>
        <CardContent>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="time" tick={{ fontSize: 12 }} />
                    <YAxis />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: 'white',
                            border: '1px solid #e2e8f0',
                            borderRadius: '8px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                        }}
                    />
                    <Line
                        type="monotone"
                        dataKey="heartRate"
                        stroke="#ef4444"
                        strokeWidth={2}
                        dot={{ fill: '#ef4444' }}
                        name="Heart Rate (bpm)"
                    />
                    <Line
                        type="monotone"
                        dataKey="temperature"
                        stroke="#3b82f6"
                        strokeWidth={2}
                        dot={{ fill: '#3b82f6' }}
                        name="Temperature (°F)"
                    />
                    <Line
                        type="monotone"
                        dataKey="oxygen"
                        stroke="#22c55e"
                        strokeWidth={2}
                        dot={{ fill: '#22c55e' }}
                        name="Oxygen Saturation (%)"
                    />
                </LineChart>
            </ResponsiveContainer>
        </CardContent>
    </Card>
);