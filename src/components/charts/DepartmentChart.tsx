import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Shield } from "lucide-react";

type DepartmentChartProps = {
    data: {
        name: string;
        patients: number;
        color: string;
    }[];
};

export const DepartmentChart: React.FC<DepartmentChartProps> = ({ data }) => (
    <Card className="border-0 shadow-lg">
        <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-green-600" />
                Department Patient Distribution
            </CardTitle>
        </CardHeader>
        <CardContent>
            <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        innerRadius={60}
                        paddingAngle={5}
                        dataKey="patients"
                        nameKey="name"
                        label={({ name, patients }) => `${name}: ${patients}`}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </CardContent>
    </Card>
);