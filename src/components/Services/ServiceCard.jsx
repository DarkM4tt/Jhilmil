import { Clock, IndianRupee, ArrowRight } from "lucide-react";
import Badge from "../UI/Badge";

const ServiceCard = ({ service, onBook }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col h-full hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-start mb-4">
        <Badge text={service.category} type="care" />
        <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-md">
          {service.price}
        </span>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
      <p className="text-gray-500 text-sm mb-6 grow">{service.description}</p>

      <div className="flex items-center gap-2 text-gray-400 text-sm mb-6">
        <Clock size={16} />
        <span>{service.duration}</span>
      </div>

      <button
        onClick={() => onBook(service)}
        className="w-full mt-auto bg-gray-900 text-white py-2.5 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 text-sm font-medium"
      >
        Book This Service <ArrowRight size={16} />
      </button>
    </div>
  );
};

export default ServiceCard;
