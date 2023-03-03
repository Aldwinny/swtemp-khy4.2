import React from "react";
import { Link } from "react-router-dom";
import robot_img from "../assets/robot_reading.webp";

const ErrorPage = () => {
  return (
    <div className="h-screen">
      <div className="text-center tablet:text-2xl text-lg h-3/4 flex flex-col justify-center items-center">
        <img src="" alt="" /> 404
        <h1 className="mx-9">The requested URL is not found on this server.</h1>
        <img
          src={robot_img}
          alt="Robot"
          className="absolute bottom-0 right-0 -z-10 phone:max-h-80 max-h-48"
        />
        <Link to="/" className="text-sky-600 underline underline-offset-4">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
