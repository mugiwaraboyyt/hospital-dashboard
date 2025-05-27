// components/staff/StaffList.tsx

import type { StaffMember } from "@/assets/data/staff";
import StaffCard from "@/components/cards/StaffCard";

type StaffListProps = {
    staff: StaffMember[];
};

export const StaffList: React.FC<StaffListProps> = ({ staff }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {staff.map((member) => (
            <StaffCard key={member.id} member={member} />
        ))}
    </div>
);