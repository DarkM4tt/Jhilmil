import { X, User, Calendar, Activity, FileText } from "lucide-react";
import Badge from "../UI/Badge";

const PatientModal = ({ patient, onClose }) => {
  if (!patient) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-200">
        <div className="bg-gray-50 px-6 py-4 flex justify-between items-center border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-800">Patient Details</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-200 rounded-full transition-colors"
          >
            <X size={20} className="text-gray-500" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">
                {patient.fullName}
              </h3>
              <p className="text-gray-500">{patient.age} Years Old</p>
            </div>
            <Badge text={patient.status} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-100">
              <div className="flex items-center gap-2 mb-1 text-blue-700">
                <Activity size={16} />
                <span className="text-xs font-bold uppercase">Care Type</span>
              </div>
              <p className="font-medium text-gray-900">{patient.typeOfCare}</p>
            </div>

            <div className="p-4 bg-purple-50 rounded-xl border border-purple-100">
              <div className="flex items-center gap-2 mb-1 text-purple-700">
                <Calendar size={16} />
                <span className="text-xs font-bold uppercase">Next Visit</span>
              </div>
              <p className="font-medium text-gray-900">{patient.nextVisit}</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="mt-1">
                <User size={18} className="text-gray-400" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold">
                  Assigned Caregiver
                </p>
                <p className="text-gray-900 font-medium">{patient.caregiver}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="mt-1">
                <FileText size={18} className="text-gray-400" />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase font-bold">
                  Medical Notes
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {patient.notes}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientModal;
