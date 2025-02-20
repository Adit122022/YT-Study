import React from "react";
import "remixicon/fonts/remixicon.css";

const LocationSearchPanel = ({setPanelOpen,setVehiclePanel }) => {
    const location = [
        { id: 1, name: "24B, near Kapoor's Cafe", lat: 37.7749, lng: -122.4194 },
        { id: 2, name: "123, Main Street, San Francisco", lat: 37.7749, lng: -122.4194 },
        { id: 3, name: "456, Elm Street, San Francisco", lat: 37.7749, lng: -122.4194 },
        //... add more locations
    ];
  return (
    <>
      {/* this is smaple data */}
      {
        location.map((val,index)=>{
            return <div onClick={()=>{setVehiclePanel(true); setPanelOpen(false)}} key={index} className="flex items-center shadow-md rounded-b-xl px-2 justify-start my-3 border-b-2 active:rounded-xl active:border-2 border-gray-200 py-2 gap-4">
            <h4 className="bg-[#a59a9a25] px-2 py-1 rounded-full ">
              <i className="ri-map-pin-fill"></i>
            </h4>
            <h4  className="font-semibold text-gray-800">24B, near Kapoor's Cafe</h4>
          </div>
        })
      }
    </>
  );
};

export default LocationSearchPanel;
