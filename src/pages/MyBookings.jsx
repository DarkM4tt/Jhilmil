import { useState } from "react";
import { CalendarCheck, MapPin, Phone } from "lucide-react";
import Card from "../components/UI/Card";

const MyBookings = () => {
  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem("bookings");
    return saved ? JSON.parse(saved) : [];
  });

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Bookings</h1>
          <p className="text-gray-500">Track your upcoming appointments</p>
        </div>
        <div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-bold text-sm">
          {bookings.length} Total
        </div>
      </div>

      {bookings.length > 0 ? (
        <div className="space-y-4">
          {bookings.map((booking) => (
            <Card
              key={booking.id}
              className="p-0 flex flex-col md:flex-row overflow-hidden"
            >
              <div className="bg-blue-600 p-6 flex flex-col justify-center items-center text-white md:w-48 text-center">
                <span className="text-3xl font-bold">
                  {booking.date.split("-")[2]}
                </span>
                <span className="text-blue-100 uppercase text-sm font-bold">
                  {new Date(booking.date).toLocaleString("default", {
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </div>

              <div className="p-6 grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">
                    {booking.serviceName}
                  </h3>
                  <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-bold uppercase">
                    {booking.status}
                  </span>
                </div>

                <p className="text-gray-600 font-medium mb-4">
                  Patient: {booking.patientName}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-gray-400" />
                    {booking.contact}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-gray-400" />
                    <span className="truncate">{booking.address}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
          <CalendarCheck className="mx-auto text-gray-300 mb-4" size={48} />
          <h3 className="text-lg font-medium text-gray-900">No bookings yet</h3>
          <p className="text-gray-500 mb-6">
            Go to Services to book your first appointment.
          </p>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
