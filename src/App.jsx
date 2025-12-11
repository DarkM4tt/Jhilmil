import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";

const Services = () => (
  <div className="p-8 text-center text-gray-500">Services Loading...</div>
);
const Bookings = () => (
  <div className="p-8 text-center text-gray-500">Bookings Loading...</div>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-sans">
        <Navbar />
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/patients" element={<Patients />} />
            <Route path="/services" element={<Services />} />
            <Route path="/bookings" element={<Bookings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
