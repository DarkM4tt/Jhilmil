import { useState } from "react";
import { patientsData } from "../data/mockData";
import PatientCard from "../components/Patients/PatientCard";
import PatientFilters from "../components/Patients/PatientFilters";
import PatientModal from "../components/Patients/PatientModal";

const Patients = () => {
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [filters, setFilters] = useState({
    search: "",
    status: "All",
    careType: "All",
  });

  const filteredPatients = patientsData.filter((patient) => {
    const matchesSearch = patient.fullName
      .toLowerCase()
      .includes(filters.search.toLowerCase());
    const matchesStatus =
      filters.status === "All" || patient.status === filters.status;
    const matchesType =
      filters.careType === "All" || patient.typeOfCare === filters.careType;
    return matchesSearch && matchesStatus && matchesType;
  });

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Patient Registry</h1>
        <p className="text-gray-500">Manage and view all registered patients</p>
      </div>

      <PatientFilters filters={filters} setFilters={setFilters} />

      {filteredPatients.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPatients.map((patient) => (
            <PatientCard
              key={patient.id}
              patient={patient}
              onClick={setSelectedPatient}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
          <p className="text-gray-500 text-lg">
            No patients found matching your filters.
          </p>
          <button
            onClick={() =>
              setFilters({ search: "", status: "All", careType: "All" })
            }
            className="mt-2 text-blue-600 font-medium hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}

      {selectedPatient && (
        <PatientModal
          patient={selectedPatient}
          onClose={() => setSelectedPatient(null)}
        />
      )}
    </div>
  );
};

export default Patients;
