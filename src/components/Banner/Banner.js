import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { dbApi, fetcher } from "../../config";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import BannerItems from "./BannerItems";
import { Autoplay } from "swiper";
const Banner = () => {
  const [datas, setDatas] = useState([]);
  const { data } = useSWR(dbApi.movieData("popular"), fetcher);
  useEffect(() => {
    if (data && data.results) setDatas(data.results);
  }, [data]);
  return (
    <div className="banner">
      <Swiper
        modules={[Autoplay]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        {datas.length > 0 &&
          datas.map((items) => (
            <SwiperSlide key={items.id}>
              <BannerItems item={items}></BannerItems>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Banner;
