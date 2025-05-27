// components/analytics/AnalyticsCharts.tsx
import type { AdmissionsData } from "@/assets/data/admissions";
import type { DepartmentData } from "@/assets/data/departments";
import type { VitalTrendsData } from "@/assets/data/trends";
import { AdmissionsChart } from "@/components/charts/AdmissionsChart";
import { DepartmentChart } from "@/components/charts/DepartmentChart";
import { VitalTrendsChart } from "@/components/charts/VitalTrendsChart";

type AnalyticsChartsProps = {
    admissionsData: AdmissionsData[];
    departmentData: DepartmentData[];
    vitalTrendsData: VitalTrendsData[];
};

export const AnalyticsCharts: React.FC<AnalyticsChartsProps> = ({
    admissionsData,
    departmentData,
    vitalTrendsData
}) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AdmissionsChart data={admissionsData} />
        <DepartmentChart data={departmentData} />
        <div className="lg:col-span-2">
            <VitalTrendsChart data={vitalTrendsData} />
        </div>
    </div>
);