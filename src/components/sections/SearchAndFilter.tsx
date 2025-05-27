import { Input } from '@/components/ui/input';
import { Search, Filter } from 'lucide-react';

type SearchAndFilterProps = {
    searchTerm: string;
    setSearchTerm: (value: string) => void;
    filterSeverity: string;
    setFilterSeverity: (value: string) => void;
};

export const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
    searchTerm,
    setSearchTerm,
    filterSeverity,
    setFilterSeverity
}) => (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
                placeholder="Search patients, conditions, doctors..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-gray-200 focus:border-blue-400 focus:ring-blue-400"
            />
        </div>
        <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <select
                value={filterSeverity}
                onChange={(e) => setFilterSeverity(e.target.value)}
                className="px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
                <option value="All">All Severities</option>
                <option value="Mild">Mild</option>
                <option value="Moderate">Moderate</option>
                <option value="Critical">Critical</option>
            </select>
        </div>
    </div>
);