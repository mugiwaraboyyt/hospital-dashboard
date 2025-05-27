import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { FileText, Phone, Star } from "lucide-react";

interface StaffCardProps {
    member: StaffMember;
}
interface StaffMember {
    name: string;
    role: string;
    avatar: string;
    shift: 'Day' | 'Night';
    rating: number;
    experience: string;
    specialty: string;
    patients: number;
}

const StaffCard: React.FC<StaffCardProps> = ({ member }) => (
    <Card className="hover:shadow-lg transition-shadow border-0 shadow-md">
        <CardHeader className="pb-4">
            <div className="flex items-center gap-4">
                <div className="text-4xl">{member.avatar}</div>
                <div className="flex-1">
                    <CardTitle className="text-lg">{member.name}</CardTitle>
                    <CardDescription className="text-sm text-gray-600">{member.role}</CardDescription>
                    <div className="flex items-center gap-2 mt-2">
                        <Badge variant="outline" className={member.shift === 'Day' ? 'bg-green-50 text-green-700' : 'bg-blue-50 text-blue-700'}>
                            {member.shift} Shift
                        </Badge>
                        <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-yellow-500 fill-current" />
                            <span className="text-sm font-medium">{member.rating}</span>
                        </div>
                    </div>
                </div>
            </div>
        </CardHeader>
        <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                    <div className="text-gray-600">Experience</div>
                    <div className="font-medium">{member.experience}</div>
                </div>
                <div>
                    <div className="text-gray-600">Specialty</div>
                    <div className="font-medium">{member.specialty}</div>
                </div>
            </div>

            <div className="space-y-2">
                <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-600">Current Patients</span>
                    <span className="font-medium">{member.patients}</span>
                </div>
                <Progress value={(member.patients / 15) * 100} className="h-2" />
            </div>

            <div className="flex gap-2">
                <Button size="sm" variant="outline" className="flex-1">
                    <Phone className="h-3 w-3 mr-1" />
                    Contact
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                    <FileText className="h-3 w-3 mr-1" />
                    Schedule
                </Button>
            </div>
        </CardContent>
    </Card>
);

export default StaffCard;