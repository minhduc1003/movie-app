import React, { useEffect, useState } from "react";
import CardItem from "./CardItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
import useSWR from "swr";
import { dbApi, fetcher } from "../config";
import { Navigation } from "swiper";
const CardList = ({ type, url }) => {
  const [datas, setDatas] = useState([]);
  const { data } = useSWR(dbApi.movieData(url), fetcher);
  useEffect(() => {
    if (data && data.results) setDatas(data.results);
  }, [data]);

  return (
    <>
      <section className=" page-container  rounded-lg mb-10 text-white">
        <h1 className="text-2xl mb-10">{type}</h1>
        <div className="movie-list">
          <Swiper spaceBetween={40} navigation={true} modules={[Navigation]}>
            {datas.length > 0 &&
              datas.map((item) => (
                <SwiperSlide key={item.id}>
                  <CardItem item={item}></CardItem>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default CardList;
