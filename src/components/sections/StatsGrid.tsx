// components/sections/StatsGrid.tsx
import type { Stats } from '@/assets/data/staff';
import { StatsCard } from '@/components/cards/StatsCard';
import { Users, AlertTriangle, BedDouble, UserCheck } from 'lucide-react';

type StatsGridProps = {
    stats: Stats;
};

export const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
            title="Total Patients"
            value={stats.totalPatients}
            subtitle="Active admissions"
            icon={<Users className="h-5 w-5 opacity-75" />}
            gradient="bg-gradient-to-br from-blue-500 to-blue-600"
            bgIcon={Users}
        />
        <StatsCard
            title="Critical Cases"
            value={stats.criticalPatients}
            subtitle="Require immediate care"
            icon={<AlertTriangle className="h-5 w-5 opacity-75" />}
            gradient="bg-gradient-to-br from-red-500 to-red-600"
            bgIcon={AlertTriangle}
        />
        <StatsCard
            title="Available Beds"
            value={stats.availableBeds}
            subtitle="Out of 120 total"
            icon={<BedDouble className="h-5 w-5 opacity-75" />}
            gradient="bg-gradient-to-br from-green-500 to-green-600"
            bgIcon={BedDouble}
        />
        <StatsCard
            title="Staff on Duty"
            value={stats.staffOnDuty}
            subtitle="Medical professionals"
            icon={<UserCheck className="h-5 w-5 opacity-75" />}
            gradient="bg-gradient-to-br from-purple-500 to-purple-600"
            bgIcon={UserCheck}
        />
    </div>
);