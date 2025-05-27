import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { ReactElement, ElementType } from 'react';

type StatsCardProps = {
  title: string;
  value: number;
  subtitle: string;
  icon: ReactElement;
  gradient: string;
  bgIcon?: ElementType;
};

export const StatsCard: React.FC<StatsCardProps> = ({ 
  title, 
  value, 
  subtitle, 
  icon, 
  gradient, 
  bgIcon: BgIcon 
}) => (
  <Card className={`relative overflow-hidden border-0 shadow-lg ${gradient} text-white`}>
    <CardHeader className="pb-3">
      <div className="flex items-center justify-between">
        <CardTitle className="text-sm font-medium opacity-90">{title}</CardTitle>
        {icon}
      </div>
    </CardHeader>
    <CardContent>
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-sm opacity-75 mt-1">{subtitle}</div>
      {BgIcon && (
        <div className="absolute -right-4 -bottom-4 opacity-20">
          <BgIcon className="h-20 w-20" />
        </div>
      )}
    </CardContent>
  </Card>
);