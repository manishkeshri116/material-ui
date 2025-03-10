import React from "react";
import Sidebar from "./Sidebar";
import BasePlanType from "./BasePlanType";
import SearchBtn from "./SearchBtn";
import Profile from "./Profile";
import Filter from "./Filter";
import ForecastPlanningTable from "./ForcastPlanning";

const Mainbar = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgb(241, 238, 244)",
        width: "100vw",
        height: "100vh",
        overflowY:"auto",
        margin:0,
        padding:0,
        boxSizing:"border-box"

      }}
    >
      <Sidebar />

      <div
        style={{
          flexGrow: 1, 
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "20px",
          marginLeft:60
        }}
      >
        <Profile />
        <SearchBtn />
        <BasePlanType />
        <Filter/>
        <ForecastPlanningTable/>
      </div>
    </div>
  );
};

export default Mainbar;