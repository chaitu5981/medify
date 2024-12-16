import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import oral from "../images/oral.png";
import { AppContext } from "../App";
import HospitalCard from "../components/HospitalCard";
import FAQ from "../components/FAQ";
import Mobile from "../components/Mobile";
const Hospitals = () => {
  const { state, city, hospitals, setHospitals } = useContext(AppContext);
  const [loading, setLoading] = useState(false);
  const fetchHospitals = async () => {
    try {
      setLoading(true);
      const { data } =
        await axios(`https://meddata-backend.onrender.com/data?state=${state}&city=${city}
`);
      setHospitals(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchHospitals();
  }, [state, city]);
  if (loading)
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <p className="text-3xl font-semibold">Loading...</p>
      </div>
    );
  else
    return (
      <div className="bg-[#EAF2FF] min-h-[100vh] pt-[5rem] pb-[2rem]">
        <div className="w-[75%] mx-auto ">
          <h2 className="text-2xl">
            {hospitals.length} medical centers available in {state}
          </h2>
          <div className="flex gap-5 items-center">
            <FaRegCheckCircle />
            <p className="text-gray-500">
              Book appointments with minimum wait-time & verified doctor details
            </p>
          </div>
          <div className="flex gap-3 mt-8">
            <div className="w-[72%] flex flex-col gap-5">
              {hospitals.map((hospital, index) => (
                <HospitalCard
                  hospital={hospital}
                  hospitalIndex={index}
                  key={index}
                  type="book"
                />
              ))}
            </div>
            <div className="w-[28%] bg-white rounded-xl h-[10rem]">
              <img src={oral} alt="oral" className="w-full" />
            </div>
          </div>
        </div>
        <FAQ />
        <Mobile />
      </div>
    );
};

export default Hospitals;
