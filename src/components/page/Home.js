import React from 'react';
import Banner from '../Banner/Banner';
import CardList from '../CardList';

const Home = () => {
    return (
        <>
         <Banner></Banner>
              <CardList type={"Now Playing"} url={"now_playing"}></CardList>
              <CardList type={"Popular"} url={"upcoming"}></CardList>
              <CardList type={"Top Rate"} url={"top_rated"}></CardList>   
        </>
    );
};

export default Home;