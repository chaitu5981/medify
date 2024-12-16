import React from "react";
import { Row, Col } from "antd";
import q from "../images/q.png";
import bloodTest from "../images/blood-test.png";
import heart from "../images/heart-rate.png";
import ecg from "../images/ecg.png";
import labs from "../images/labs-icon.png";
import steth from "../images/Stethoscope.png";
import xray from "../images/x-ray.png";

const Card = ({ image, name }) => {
  return (
    <div className="bg-white py-8 flex flex-col gap-3 rounded-xl items-center">
      <img src={image} alt="image1" className="w-[4rem] h-[4rem]" />
      <p className="text-xl text-gray-400 text-center">{name}</p>
    </div>
  );
};
const Specialities = () => {
  return (
    <div className="bg-[#F3F8FF] py-10 px-12 flex flex-col items-center gap-8 ">
      <h1 className="text-center text-2xl font-semibold">
        Find By Specialisation
      </h1>
      <div className="w-[75%] mx-auto">
        <Row gutter={[16, 16]} className="mb-8">
          <Col lg={6} sm={12} xs={24}>
            <Card image={labs} name="Dentistry" />
          </Col>
          <Col lg={6} sm={12} xs={24}>
            <Card image={steth} name="Primary Care" />
          </Col>
          <Col lg={6} sm={12} xs={24}>
            <Card image={heart} name="Cardiology" />
          </Col>
          <Col lg={6} sm={12} xs={24}>
            <Card image={ecg} name="MRI Resonance" />
          </Col>
        </Row>
        <Row gutter={[16, 16]}>
          <Col lg={6} sm={12} xs={24}>
            <Card image={bloodTest} name="Blood Test" />
          </Col>
          <Col lg={6} sm={12} xs={24}>
            <Card image={q} name="Piscologist" />
          </Col>
          <Col lg={6} sm={12} xs={24}>
            <Card image={labs} name="Laboratory" />
          </Col>
          <Col lg={6} sm={12} xs={24}>
            <Card image={xray} name="X-Ray" />
          </Col>
        </Row>
      </div>
      <button className="bg-blue-500 rounded-md px-3 py-2 mx-auto text-white w-fit">
        View All
      </button>
    </div>
  );
};

export default Specialities;
