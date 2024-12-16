import React, { useContext, useEffect, useState } from "react";
import doctorIcon from "../images/doctor-icon.png";
import labsIcon from "../images/labs-icon.png";
import hospitalsIcon from "../images/hospitals-icon.png";
import medicineIcon from "../images/medicine-logo.png";
import ambulanceIcon from "../images/ambulance-icon.png";
import { IoIosSearch } from "react-icons/io";
import axios from "axios";
import { AutoComplete } from "antd";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../App";
const SearchForm = () => {
  const { state, setState, city, setCity } = useContext(AppContext);
  const [states, setStates] = useState([]);
  const [options1, setOptions1] = useState([]);
  const [cities, setCities] = useState([]);
  const [options2, setOptions2] = useState([]);
  const navigate = useNavigate();
  const fetchStates = async () => {
    try {
      const { data } = await axios(
        "https://meddata-backend.onrender.com/states"
      );
      setStates(data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCities = async () => {
    try {
      const { data } = await axios(
        "https://meddata-backend.onrender.com/cities/" + state
      );
      setCities(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchStates();
  }, []);

  useEffect(() => {
    setCity("");
    if (!state) return;
    setOptions2([]);
    fetchCities();
  }, [state]);

  const handleCitySearch = (value) => {
    setOptions2(() => {
      let c1;
      if (!value) c1 = [...cities];
      c1 = cities.filter((c) => c.toLowerCase().includes(value.toLowerCase()));
      return c1.map((c) => ({
        label: c,
        value: c,
      }));
    });
  };

  const handleStateSearch = (value) => {
    setOptions1(() => {
      let s1;
      if (!value) s1 = [...states];
      s1 = states.filter((s) => s.toLowerCase().includes(value.toLowerCase()));
      return s1.map((s) => ({
        label: s,
        value: s,
      }));
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!state || !city)
      return enqueueSnackbar("Please provide state and city", {
        variant: "error",
      });

    navigate("/hospitals");
  };
  return (
    <div className="static lg:absolute  mx-auto lg:-bottom-[10rem] lg:left-[12.5%] w-[75%]">
      <form
        onSubmit={handleSubmit}
        className="p-8 bg-white gap-10  flex flex-col justify-between items-center   shadow-md rounded-xl"
      >
        <div className="flex flex-col lg:flex-row gap-4 justify-between w-full flex-1 items-start">
          <div className="flex flex-col md:flex-row gap-4  justify-around   w-full lg:w-[80%] items-center">
            <div className="relative bg-[#fafbfe]">
              <IoIosSearch className="absolute left-2 top-4" />
              <AutoComplete
                className="w-[16rem] h-[3rem] pl-5 bg-transparent border-2 rounded-md border-gray-100 rounded"
                variant="borderless"
                onSelect={(value) => {
                  setState(value);
                }}
                options={options1}
                placeholder="state"
                onSearch={handleStateSearch}
              />
            </div>
            <div className="relative">
              <IoIosSearch className="absolute left-2 top-4" />
              <AutoComplete
                className="w-[16rem] pl-5 h-[3rem] bg-transparent border-2 rounded-md border-gray-100"
                variant="borderless"
                options={options2}
                onSelect={(value) => setCity(value)}
                placeholder="city"
                onSearch={handleCitySearch}
              />
            </div>
          </div>
          <div className="w-full lg:w-[20%]">
            <button
              type="submit"
              className="bg-[#2AA7FF] py-3 px-4 mx-auto  text-white w-fit h-fit rounded-md flex gap-1 items-center"
            >
              <IoIosSearch />
              Search
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-semibold text-xl text-center text-[#102851] ">
            You may be looking for
          </p>
          <div className="flex flex-wrap mt-4 justify-center gap-4 w-full">
            <div className="bg-[#FAFBFE] w-[12.5rem] flex-col gap-3 h-[10rem] flex justify-center items-center">
              <img src={doctorIcon} alt="" />
              <p className="text-gray-400">Doctors</p>
            </div>
            <div className="bg-[#FAFBFE] w-[12.5rem] flex-col gap-3 h-[10rem] flex justify-center items-center">
              <img src={labsIcon} alt="" />
              <p className="text-gray-400">Labs</p>
            </div>
            <div className="bg-[#EEF8FF] w-[12.5rem] flex-col gap-3 h-[10rem] rounded border-2 border-b-col flex justify-center items-center">
              <img src={hospitalsIcon} alt="" />
              <p>Hospitals</p>
            </div>
            <div className="bg-[#FAFBFE] w-[12.5rem] flex-col gap-3 h-[10rem] flex justify-center items-center">
              <img src={medicineIcon} alt="" />
              <p className="text-gray-400">Medical Store</p>
            </div>
            <div className="bg-[#FAFBFE] w-[12.5rem] flex-col gap-3 h-[10rem] flex justify-center items-center">
              <img src={ambulanceIcon} alt="" />
              <p className="text-gray-400">Ambulance</p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
