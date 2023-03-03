import React, { useEffect } from "react";
import robot_img from "../assets/robot_happy_badge.webp";

const AboutPage = () => {
  useEffect(() => {
    document.title = "Khybots | About";
  }, []);

  return (
    <div className="h-screen">
      <div className="text-center tablet:text-2xl text-lg h-3/4 flex flex-col justify-center items-center">
        <img src="" alt="" />
        <h1 className="mx-9">
          This is my assignment 3.1 submission for Mobile Computing
        </h1>
        <img
          src={robot_img}
          alt="Robot"
          className="absolute bottom-0 right-0 -z-10 phone:max-h-80 max-h-48"
        />
      </div>
    </div>
  );
};

export default AboutPage;
