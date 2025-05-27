// components/analytics/AdmissionsChart.tsx
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp } from "lucide-react";

interface DailyData {
    day: string;
    admissions: number;
    discharges: number;
}

type AdmissionsChartProps = {
    data: DailyData[];
};

export const AdmissionsChart: React.FC<AdmissionsChartProps> = ({ data }) => (
    <Card className="border-0 shadow-lg">
        <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                Daily Admissions & Discharges
            </CardTitle>
        </CardHeader>
        <CardContent>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="day" tick={{ fontSize: 12 }} />
                    <YAxis />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: 'white',
                            border: '1px solid #e2e8f0',
                            borderRadius: '8px',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                        }}
                    />
                    <Bar
                        dataKey="admissions"
                        fill="#3b82f6"
                        radius={[4, 4, 0, 0]}
                        name="Admissions"
                    />
                    <Bar
                        dataKey="discharges"
                        fill="#10b981"
                        radius={[4, 4, 0, 0]}
                        name="Discharges"
                    />
                </BarChart>
            </ResponsiveContainer>
        </CardContent>
    </Card>
);
