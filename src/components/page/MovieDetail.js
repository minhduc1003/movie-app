import React from "react";
import { useParams } from "react-router-dom";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import useSWR from "swr";
import { dbApi, fetcher, picApi } from "../../config";
import CardItem from "../CardItem";
const MovieDetail = () => {
  const { slug } = useParams();
  return (
    <>
      <Movie slug={slug} detail={""}></Movie>
      <Movie slug={slug} detail={"/credits"}></Movie>
      <Movie slug={slug} detail={"/videos"}></Movie>
      <Movie slug={slug} detail={"/similar"}></Movie>
    </>
  );
};
function Movie({ slug, detail }) {
  const { data } = useSWR(dbApi.movieDataDetail(slug, detail), fetcher);
  if (!data) return null;
  if (detail === "") {
    return (
      <>
        <div className="relative w-[1440px] h-[700px]  mx-auto mb-10 ">
          <div className="absolute inset-0 h-[500px]  bg-black opacity-60"></div>
          <img
            alt=""
            src={`${picApi}${data.backdrop_path}`}
            className="w-full h-[500px] object-cover"
          ></img>
          <img
            alt=""
            src={`${picApi}${data.poster_path}`}
            className="w-[800px] h-[400px] object-cover -translate-y-2/4 mx-auto"
          ></img>
        </div>
        <h1 className="text-white text-center text-3xl font-bold">
          {data.original_title}
        </h1>
        <div className="flex gap-3 mx-auto w-fit my-10 ">
          {data.genres.map((item) => (
            <div
              key={item.id}
              className="h-[50px] p-5 flex items-center justify-center border border-primary border-solid text-primary rounded-lg "
            >
              {item.name}
            </div>
          ))}
        </div>
        <p className="w-[1440px] mx-auto text-center text-white mb-10">
          {data.overview}
        </p>
        <h1 className="flex justify-center items-center text-2xl text-white mb-10">
          Casts
        </h1>
      </>
    );
  } else if (detail === "/credits") {
    return (
      <>
        <div className="grid grid-cols-4 gap-5 mx-auto w-[1440px] mb-[100px]  ">
          {data.cast.length > 0 &&
            data.cast.slice(0, 4).map((item) => (
              <div key={item.id} className="h-[500px]">
                <img
                  className=" h-full object-cover "
                  alt=""
                  src={`${picApi}${item.profile_path}`}
                ></img>
                <h3 className="text-center text-white text-xl my-5">
                  {item.name}
                </h3>
              </div>
            ))}
        </div>
      </>
    );
  } else if (detail === "/videos") {
    return (
      <>
        {data.results.length > 0 &&
          data.results.slice(0, 2).map((item) => (
            <div key={item.id} className="w-[1444px] h-[900px] mx-auto ">
              <h2 className="text-white text-xl my-5">{item.name}</h2>
              <iframe
                height={"800px"}
                className="w-full  "
                src={`https://www.youtube.com/embed/${item.key}`}
                title={item.name}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          ))}
      </>
    );
  } else if (detail === "/similar") {
    return (
      <div className="page-container">
        <h2 className="text-white font-bold text-2xl my-10">Similar Movie</h2>
        <Swiper spaceBetween={40} navigation={true} modules={[Navigation]}>
          {data.results.length > 0 &&
            data.results.map((item) => (
              <SwiperSlide className="!w-[350px] " key={item.id}>
                <CardItem item={item} size={"text-white"}></CardItem>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    );
  }
}

export default MovieDetail;
