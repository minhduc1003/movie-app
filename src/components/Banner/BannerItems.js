import React from "react";
import { useNavigate } from "react-router-dom";
import { picApi } from "../../config";
import Buttons from "../Buttons";

const BannerItems = ({ item }) => {
  const navigate = useNavigate();
  console.log(item);
  return (
    <>
      <div className="  bg-white h-[600px] rounded-lg mb-10">
        <div className=" absolute bg-gradient-to-t inset-0 from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)]"></div>
        <img
          className="w-full h-full object-cover  rounded-lg"
          alt=" "
          src={`${picApi}${item.poster_path}`}
        ></img>
        <div className="absolute bottom-5 left-5 text-white">
          <h1 className="text-5xl mb-10 font-bold">{item.title}</h1>
          <div className="flex items-center gap-2  mb-[60px]">
            <div className="p-2 border-solid border rounded-lg border-primary ">
              Action
            </div>
            <div className="p-2 border-solid border rounded-lg border-primary ">
              Adventure
            </div>
            <div className="p-2 border-solid border rounded-lg border-primary ">
              Drama
            </div>
          </div>
          <Buttons
            size={"w-[200px]"}
            activiti={() => navigate(`/Movie/${item.id}`)}
          ></Buttons>
        </div>
      </div>
    </>
  );
};

export default BannerItems;
