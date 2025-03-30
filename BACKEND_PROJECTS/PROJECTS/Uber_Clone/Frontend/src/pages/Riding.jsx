import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import mapImage from "/public/map-image.webp";
import taxi from "/public/taxi.png";
import "remixicon/fonts/remixicon.css";

const Riding = () => {
  return (
    <div className="h-screen ">
      {/* image */}
      <div className="w-full h-1/2  overflow-hidden ">
        <img
          src={mapImage}
          alt="Taxi Icon"
          className=" aspect-[2/1] h-full  object-cover "
        />
      </div>

      {/*  second div */}
      <div className="h-1/2 p-4 py-6">
        <div className="flex flex-col items-center justify-between px-2 mb-4   border-2 border-transparent active:border-gray-800   rounded-md">
          <div className="flex justify-between  w-full">
            {/*image  */}
            <div className="w-full  overflow-hidden">
              <img
                src={taxi}
                alt="Taxi Icon"
                className=" aspect-[2/1] h-10  object-cover "
              />
            </div>
            <div className=" w-full text-right">
              <h2 className="text-base font-medium text-gray-800 font-serif">
                Sarthak
              </h2>
              <h4 className="text-lg font-semibold font-mono -my-1 text-slate-800">
                MP04 AB 1234
              </h4>
              <p className="text-sm text-gray-500 ">Maruti Suzuki</p>
              <p className="text-sm text-gray-500">⭐4.9</p>
            </div>
          </div>
          {/*  */}

          {/*  */}
          <div className="w-full  gap-4  ">
            <div className="text-lg font-semibold flex gap-5">
              <span className="flex justify-center items-center text-base">
                <i className="ri-square-fill"></i>{" "}
              </span>
              <div className="border-gray-400 border-b-2 w-full py-3 px-6">
                <h1 className="text-lg text-gray-800"> Third Wave Cofffe</h1>
                <h2 className="text-sm text-gray-500 mt-2">
                  17th Cross Rd , PWD Quarters , 1st Sector , HSR Layout ,
                  Bengaluru , Karnataka
                </h2>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="w-full  gap-4  ">
            <div className="text-lg font-semibold flex gap-5">
              <span className="flex justify-center items-center text-base">
                <i className="ri-wallet-fill"></i>
              </span>
              <div className="w-full py-3 px-6">
                <h1 className="text-lg text-gray-800">₹ 193.20</h1>
                <h2 className="text-sm text-gray-500 mt-2">Cash Cash</h2>
              </div>
            </div>
          </div>
        </div>
        <button className="w-full mb-3  py-3 bg-green-400 text-white font-bold   text-lg rounded-2xl">
          Make a Payment
        </button>
      </div>
    </div>
  );
};

export default Riding;
