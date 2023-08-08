import React from "react";
import { useNavigate } from "react-router-dom";
import { picApi } from "../config";
import Buttons from "./Buttons";

const CardItem = ({ item, size }) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`h-full flex flex-col bg-slate-800 p-2 rounded-lg ${size}`}
      >
        <img alt={item.title} src={`${picApi}${item.backdrop_path}`}></img>
        <div className="flex flex-1 flex-col mt-3">
          <h3 className="text-lg mb-6">{item.title}</h3>
          <div className="flex items-center justify-between mb-5 opacity-50">
            <div>{new Date(item.release_date).getFullYear()}</div>
            <div>{item.vote_average}</div>
          </div>
          {/* <div
            onClick={() => navigate(`/Movie/${item.id}`)}
            className="flex items-center justify-center bg-primary w-full p-5 rounded-lg mt-auto"
          >
            Watch Now
          </div> */}
          <Buttons
            size={"mt-auto w-full"}
            activiti={() => navigate(`/Movie/${item.id}`)}
          ></Buttons>
        </div>
      </div>
    </>
  );
};

export default CardItem;
