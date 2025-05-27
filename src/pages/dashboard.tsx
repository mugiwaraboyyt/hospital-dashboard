// pages/HospitalDashboard.tsx
import { useState, useEffect, useMemo, useCallback } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { DashboardHeader } from '@/layout/DashboardHeader';
import { CriticalAlerts } from '@/components/alerts/CriticalAlerts';
import { StatsGrid } from '@/components/sections/StatsGrid';
import { SearchAndFilter } from '@/components/sections/SearchAndFilter';
import { admissionsData } from '@/assets/data/admissions';
import { departmentData } from '@/assets/data/departments';
import { vitalTrendsData } from '@/assets/data/trends';
import { AnalyticsCharts } from '@/components/sections/AnalyticsCharts';
import { PatientDetailModal } from '@/components/modals/PaitentDetailModal';
import { PatientList } from './PatientList';
import { StaffList } from './StaffList';
import type { StaffMember, Stats } from '@/assets/data/staff';
import type { Patient, VitalStatus } from '@/assets/data/patients';

const HospitalDashboard: React.FC = () => {
    const [patients, setPatients] = useState<Patient[]>([]);
    const [staff] = useState<StaffMember[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterSeverity, setFilterSeverity] = useState('All');
    const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);
    const [animatedStats, setAnimatedStats] = useState<Stats>({
        totalPatients: 0,
        criticalPatients: 0,
        availableBeds: 0,
        staffOnDuty: 0
    });

    // Filter patients based on search and severity
    const filteredPatients = useMemo(() => {
        return patients.filter(patient => {
            const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                patient.condition.toLowerCase().includes(searchTerm.toLowerCase()) ||
                patient.doctor.toLowerCase().includes(searchTerm.toLowerCase());

            const matchesSeverity = filterSeverity === 'All' ||
                patient.severity.toLowerCase() === filterSeverity.toLowerCase();

            return matchesSearch && matchesSeverity;
        });
    }, [patients, searchTerm, filterSeverity]);

    // Status calculation utilities
    const getSeverityColor = useCallback((severity: string) => {
        switch (severity) {
            case 'Critical': return 'bg-red-100 text-red-800 border-red-200';
            case 'Moderate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            default: return 'bg-green-100 text-green-800 border-green-200';
        }
    }, []);

    const getStatusColor = useCallback((status: string) => {
        switch (status) {
            case 'Critical': return 'bg-red-500';
            case 'Recovering': return 'bg-yellow-500';
            case 'Improving': return 'bg-blue-500';
            default: return 'bg-green-500';
        }
    }, []);

    const getVitalStatus = useCallback((value: number | string, type: keyof Patient['vitals']): VitalStatus => {
        const num = typeof value === 'string' ? parseInt(value.split('/')[0]) : value;
        switch (type) {
            case 'heartRate':
                return num > 100 || num < 60 ? 'warning' : 'normal';
            case 'temperature':
                return num > 99.5 || num < 97.5 ? 'warning' : 'normal';
            case 'oxygen':
                return num < 95 ? 'critical' : num < 97 ? 'warning' : 'normal';
            default:
                return 'normal';
        }
    }, []);

    // Animate stats on mount
    useEffect(() => {
        const targetStats = {
            totalPatients: 142,
            criticalPatients: 8,
            availableBeds: 34,
            staffOnDuty: 28
        };

        const animate = (stat: keyof Stats) => {
            let current = 0;
            const interval = setInterval(() => {
                current += Math.ceil(targetStats[stat] / 50);
                if (current >= targetStats[stat]) {
                    current = targetStats[stat];
                    clearInterval(interval);
                }
                setAnimatedStats(prev => ({ ...prev, [stat]: current }));
            }, 20);
        };

        (Object.keys(targetStats) as (keyof Stats)[]).forEach(animate);
    }, []);

    // Simulate real-time vital updates
    useEffect(() => {
        const interval = setInterval(() => {
            setPatients(prev => prev.map(p => ({
                ...p,
                vitals: {
                    heartRate: Math.max(60, Math.min(120, p.vitals.heartRate + Math.floor(Math.random() * 4 - 2))),
                    bloodPressure: `${Math.floor(110 + Math.random() * 20)}/${Math.floor(70 + Math.random() * 15)}`,
                    temperature: Number((98 + Math.random() * 2).toFixed(1)),
                    oxygen: Math.max(90, Math.min(100, p.vitals.oxygen + Math.floor(Math.random() * 2 - 1)))
                }
            })));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    // Handle patient updates
    const handleSavePatient = useCallback((updatedPatient: Patient) => {
        setPatients(prev => prev.map(p => p.id === updatedPatient.id ? updatedPatient : p));
        setSelectedPatient(null);
    }, []);

    return (
        <div className="space-y-8 p-6">
            <DashboardHeader />
            <CriticalAlerts />

            <Tabs defaultValue="patients" className="space-y-6">
                <TabsList>
                    <TabsTrigger value="patients">Patients</TabsTrigger>
                    <TabsTrigger value="staff">Staff</TabsTrigger>
                    <TabsTrigger value="analytics">Analytics</TabsTrigger>
                </TabsList>

                <TabsContent value="patients" className="space-y-6">
                    <StatsGrid stats={animatedStats} />
                    <SearchAndFilter
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                        filterSeverity={filterSeverity}
                        setFilterSeverity={setFilterSeverity}
                    />
                    <PatientList
                        patients={filteredPatients}
                        getSeverityColor={getSeverityColor}
                        getStatusColor={getStatusColor}
                        getVitalStatus={getVitalStatus}
                        onViewDetails={setSelectedPatient}
                    />
                </TabsContent>

                <TabsContent value="staff">
                    <StaffList staff={staff} />
                </TabsContent>

                <TabsContent value="analytics">
                    <AnalyticsCharts
                        admissionsData={admissionsData}
                        departmentData={departmentData}
                        vitalTrendsData={vitalTrendsData}
                    />
                </TabsContent>
            </Tabs>

            {selectedPatient && (
                <PatientDetailModal
                    patient={selectedPatient}
                    onClose={() => setSelectedPatient(null)}
                    onSave={handleSavePatient}
                    getSeverityColor={getSeverityColor}
                />
            )}
        </div>
    );
};

export default HospitalDashboard;