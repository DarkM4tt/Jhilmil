import { Users, Activity, Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Card from "../components/UI/Card";
import Badge from "../components/UI/Badge";
import { patientsData, servicesData } from "../data/mockData";

const Dashboard = () => {
  const activePatients = patientsData.filter(
    (p) => p.status === "Active"
  ).length;
  const totalServices = servicesData.length;

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-linear-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white shadow-lg">
        <h1 className="text-3xl font-bold mb-2">Welcome to Jhilmil Homecare</h1>
        <p className="text-blue-100 max-w-2xl">
          Your central hub for managing patient care and home services
          efficiently.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 border-l-4 border-l-blue-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Total Patients
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">
                {patientsData.length}
              </h3>
              <p className="text-xs text-green-600 mt-1 flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-1"></span>
                {activePatients} Active currently
              </p>
            </div>
            <div className="p-2 bg-blue-50 rounded-lg">
              <Users className="text-blue-600" size={24} />
            </div>
          </div>
        </Card>

        <Card className="p-6 border-l-4 border-l-purple-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Available Services
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">
                {totalServices}
              </h3>
              <p className="text-xs text-gray-500 mt-1">Across 3 categories</p>
            </div>
            <div className="p-2 bg-purple-50 rounded-lg">
              <Activity className="text-purple-600" size={24} />
            </div>
          </div>
        </Card>

        <Card className="p-6 border-l-4 border-l-orange-500">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-500">
                Pending Bookings
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">0</h3>
              <p className="text-xs text-gray-500 mt-1">Check back later</p>
            </div>
            <div className="p-2 bg-orange-50 rounded-lg">
              <Calendar className="text-orange-600" size={24} />
            </div>
          </div>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-800">Recent Patients</h3>
            <Link
              to="/patients"
              className="text-sm text-blue-600 hover:text-blue-700 flex items-center font-medium"
            >
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          <div className="space-y-3">
            {patientsData.slice(0, 3).map((patient) => (
              <div
                key={patient.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                    {patient.fullName.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">
                      {patient.fullName}
                    </h4>
                    <p className="text-xs text-gray-500">
                      {patient.typeOfCare}
                    </p>
                  </div>
                </div>
                <Badge text={patient.status} />
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-gray-800">Popular Services</h3>
            <Link
              to="/services"
              className="text-sm text-blue-600 hover:text-blue-700 flex items-center font-medium"
            >
              View All <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          <div className="space-y-3">
            {servicesData.slice(0, 3).map((service) => (
              <div
                key={service.id}
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
              >
                <div>
                  <h4 className="font-medium text-gray-900">{service.name}</h4>
                  <p className="text-xs text-gray-500">{service.duration}</p>
                </div>
                <span className="text-sm font-semibold text-gray-700">
                  {service.price}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
