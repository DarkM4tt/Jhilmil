import { useState } from "react";
import { servicesData } from "../data/mockData";
import ServiceCard from "../components/Services/ServiceCard";
import BookingForm from "../components/Services/BookingForm";

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedService, setSelectedService] = useState(null);

  const filteredServices =
    selectedCategory === "All"
      ? servicesData
      : servicesData.filter(
          (s) => s.category === selectedCategory || s.category === "All"
        );

  const categories = ["All", "Popular", "Recommended"];

  return (
    <div>
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Our Care Services
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Choose from our wide range of professional healthcare services
          designed for your comfort and recovery.
        </p>
      </div>

      <div className="flex justify-center mb-10">
        <div className="bg-white p-1 rounded-xl shadow-sm border border-gray-100 inline-flex">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredServices.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            onBook={setSelectedService}
          />
        ))}
      </div>

      {selectedService && (
        <BookingForm
          service={selectedService}
          onClose={() => setSelectedService(null)}
        />
      )}
    </div>
  );
};

export default Services;
