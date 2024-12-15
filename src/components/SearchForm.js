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
      if (!value) return [];
      return cities
        .filter((c) => c.toLowerCase().includes(value.toLowerCase()))
        .map((c) => ({
          label: c,
          value: c,
        }));
    });
  };

  const handleStateSearch = (value) => {
    setOptions1(() => {
      if (!value) return [];
      const s1 = states.filter((s) =>
        s.toLowerCase().includes(value.toLowerCase())
      );
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
    <div>
      <form
        onSubmit={handleSubmit}
        className="w-[75%] p-6 bg-white h-[21rem] absolute flex flex-col justify-between items-center -bottom-24 left-[12.5%] shadow-md rounded-xl"
      >
        <div className="flex gap-2 justify-between w-[95%] flex-1 items-start">
          <div className="flex justify-around flex-1 items-center">
            <div className="relative">
              <IoIosSearch className="absolute left-2 top-3" />
              <AutoComplete
                className="w-[14rem] h-[2.5rem] pl-5 bg-[#FAFABFE] border-2 border-gray-100 rounded"
                variant="borderless"
                onSelect={(value) => {
                  setState(value);
                  // setSelCity("");
                }}
                options={options1}
                placeholder="state"
                onSearch={handleStateSearch}
              />
            </div>
            <div className="relative">
              <IoIosSearch className="absolute left-2 top-3" />
              <AutoComplete
                className="w-[14rem] pl-5 h-[2.5rem] bg-[#FAFABFE] border-2 border-gray-100"
                variant="borderless"
                options={options2}
                onSelect={(value) => setCity(value)}
                placeholder="city"
                onSearch={handleCitySearch}
              />
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#2AA7FF] py-2 px-3 text-white w-fit h-fit rounded flex gap-1 items-center"
          >
            <IoIosSearch />
            Search
          </button>
        </div>
        <p className="font-bold">You may be looking for</p>
        <div className="flex  mt-4 justify-between w-full">
          <div className="bg-[#FAFBFE] w-[9rem] h-[7rem] flex justify-center items-center">
            <img src={doctorIcon} alt="" />
          </div>
          <div className="bg-[#FAFBFE] w-[9rem] h-[7rem] flex justify-center items-center">
            <img src={labsIcon} alt="" srcset="" />
          </div>
          <div className="bg-[#EEF8FF] w-[9rem] h-[7rem] rounded border-2 border-b-col flex justify-center items-center">
            <img src={hospitalsIcon} alt="" />
          </div>
          <div className="bg-[#FAFBFE] w-[9rem] h-[7rem] flex justify-center items-center">
            <img src={medicineIcon} alt="" />
          </div>
          <div className="bg-[#FAFBFE] w-[9rem] h-[7rem] flex justify-center items-center">
            <img src={ambulanceIcon} alt="" />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchForm;
