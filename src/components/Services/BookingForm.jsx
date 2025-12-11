import { useState } from "react";
import { X, CheckCircle } from "lucide-react";

const BookingForm = ({ service, onClose }) => {
  const [formData, setFormData] = useState({
    patientName: "",
    serviceName: service?.name || "",
    date: "",
    contact: "",
    address: "",
  });

  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.patientName)
      newErrors.patientName = "Patient Name is required";
    if (!formData.date) newErrors.date = "Preferred date is required";
    if (!formData.address) newErrors.address = "Address is required";

    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.contact) {
      newErrors.contact = "Contact number is required";
    } else if (!phoneRegex.test(formData.contact)) {
      newErrors.contact = "Enter a valid 10-digit number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const newBooking = {
        id: Date.now(),
        ...formData,
        status: "Confirmed",
        bookedAt: new Date().toLocaleDateString(),
      };

      const existingBookings = JSON.parse(
        localStorage.getItem("bookings") || "[]"
      );
      localStorage.setItem(
        "bookings",
        JSON.stringify([newBooking, ...existingBookings])
      );

      setIsSuccess(true);

      setTimeout(() => {
        onClose();
        window.dispatchEvent(new Event("storage"));
      }, 2000);
    }
  };

  if (isSuccess) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
        <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-sm mx-4 animate-in zoom-in">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle size={32} />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            Booking Confirmed!
          </h2>
          <p className="text-gray-500">
            We have received your request for {service.name}.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden">
        <div className="bg-gray-50 px-6 py-4 flex justify-between items-center border-b border-gray-100">
          <h2 className="text-lg font-bold text-gray-800">
            Book {service.name}
          </h2>
          <button onClick={onClose}>
            <X size={20} className="text-gray-400 hover:text-gray-600" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Patient Name
            </label>
            <input
              type="text"
              className={`w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
                errors.patientName ? "border-red-500" : "border-gray-200"
              }`}
              value={formData.patientName}
              onChange={(e) =>
                setFormData({ ...formData, patientName: e.target.value })
              }
            />
            {errors.patientName && (
              <p className="text-xs text-red-500 mt-1">{errors.patientName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Selected Service
            </label>
            <input
              type="text"
              readOnly
              className="w-full p-2.5 border border-gray-200 bg-gray-50 text-gray-500 rounded-lg cursor-not-allowed"
              value={formData.serviceName}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Visit Date
              </label>
              <input
                type="date"
                className={`w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
                  errors.date ? "border-red-500" : "border-gray-200"
                }`}
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
              />
              {errors.date && (
                <p className="text-xs text-red-500 mt-1">{errors.date}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Mobile No.
              </label>
              <input
                type="tel"
                placeholder="9876543210"
                maxLength="10"
                className={`w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
                  errors.contact ? "border-red-500" : "border-gray-200"
                }`}
                value={formData.contact}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    contact: e.target.value.replace(/\D/g, ""),
                  })
                }
              />
              {errors.contact && (
                <p className="text-xs text-red-500 mt-1">{errors.contact}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <textarea
              rows="3"
              className={`w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 outline-none ${
                errors.address ? "border-red-500" : "border-gray-200"
              }`}
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            ></textarea>
            {errors.address && (
              <p className="text-xs text-red-500 mt-1">{errors.address}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition-colors mt-2"
          >
            Confirm Booking
          </button>
        </form>
      </div>
    </div>
  );
};

export default BookingForm;
