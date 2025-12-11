import Badge from "../UI/Badge";

const PatientCard = ({ patient, onClick }) => {
  return (
    <div
      onClick={() => onClick(patient)}
      className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-blue-200 transition-all cursor-pointer group"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
          {patient.fullName.charAt(0)}
        </div>
        <Badge text={patient.status} />
      </div>

      <h3 className="font-bold text-gray-900 text-lg mb-1">
        {patient.fullName}
      </h3>
      <p className="text-sm text-gray-500 mb-3">
        {patient.age} Years • {patient.typeOfCare}
      </p>

      <div className="pt-3 border-t border-gray-100 flex justify-between items-center text-xs">
        <span className="text-gray-500">Next Visit:</span>
        <span className="font-medium text-gray-800">{patient.nextVisit}</span>
      </div>
    </div>
  );
};

export default PatientCard;
