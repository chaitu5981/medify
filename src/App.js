import React, { createContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Bookings from "./pages/Bookings";
import Hospitals from "./pages/Hospitals";
import Footer from "./components/Footer";
export const AppContext = createContext();
const App = () => {
  const [hospitals, setHospitals] = useState(() => {
    const hospitals1 = localStorage.getItem("hospitals");
    return hospitals1 ? JSON.parse(hospitals1) : [];
  });
  const [appointments, setAppointments] = useState(() => {
    const appointments1 = localStorage.getItem("appointments");
    return appointments1 ? JSON.parse(appointments1) : [];
  });
  const [state, setState] = useState(() => {
    const state1 = localStorage.getItem("state");
    return state1 ? state1 : "";
  });
  const [city, setCity] = useState(() => {
    const city1 = localStorage.getItem("city");
    return city1 ? city1 : "";
  });
  useEffect(() => {
    localStorage.setItem("hospitals", JSON.stringify(hospitals));
    localStorage.setItem("appointments", JSON.stringify(appointments));
    localStorage.setItem("state", state);
    localStorage.setItem("city", city);
  }, [hospitals, appointments, state, city]);
  return (
    <AppContext.Provider
      value={{
        hospitals,
        appointments,
        state,
        city,
        setHospitals,
        setAppointments,
        setState,
        setCity,
      }}
    >
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/hospitals" element={<Hospitals />} />
        </Routes>
        <Footer />
      </div>
    </AppContext.Provider>
  );
};

export default App;
