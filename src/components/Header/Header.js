import React from "react";
import {NavLink, Outlet} from "react-router-dom"
const Header = () => {
    const navigationList = [
        {
            id:1,
            title:"Home",
            to:"/"
        },
        {
            id:2,
            title:"Movie",
            to:"/Movie"
        },
        
    ]
  return (
    <>
      <header>
        <div className="flex items-center justify-center gap-3 text-white py-5">
          {navigationList.length>0 && navigationList.map((items)=><NavLink className={({isActive})=>isActive?"text-primary":""} key={items.id} to={items.to}>{items.title}</NavLink>)}
        </div>
      </header>
      <Outlet></Outlet>
    </>
  );
};

export default Header;
