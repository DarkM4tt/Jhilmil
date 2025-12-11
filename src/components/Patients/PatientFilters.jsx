import { Search, Filter } from "lucide-react";

const PatientFilters = ({ filters, setFilters }) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-6 flex flex-col md:flex-row gap-4 items-center justify-between">
      <div className="relative w-full md:w-96">
        <Search
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={20}
        />
        <input
          type="text"
          placeholder="Search patients by name..."
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
        />
      </div>

      <div className="flex gap-3 w-full md:w-auto">
        <select
          className="px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 text-sm focus:outline-none cursor-pointer hover:bg-gray-100"
          value={filters.status}
          onChange={(e) => setFilters({ ...filters, status: e.target.value })}
        >
          <option value="All">All Status</option>
          <option value="Active">Active</option>
          <option value="Inactive">Inactive</option>
        </select>

        <select
          className="px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 text-sm focus:outline-none cursor-pointer hover:bg-gray-100"
          value={filters.careType}
          onChange={(e) => setFilters({ ...filters, careType: e.target.value })}
        >
          <option value="All">All Care Types</option>
          <option value="Elder Care">Elder Care</option>
          <option value="Post-Surgery">Post-Surgery</option>
          <option value="Physiotherapy">Physiotherapy</option>
          <option value="General Care">General Care</option>
        </select>
      </div>
    </div>
  );
};

export default PatientFilters;
