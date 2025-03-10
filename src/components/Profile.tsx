import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import MoreHorizOutlinedIcon from "@mui/icons-material/MoreHorizOutlined";
import { IconButton } from "@mui/material";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import React from "react";


const Profile = () =>{
    return(
        <div
        style={{
          backgroundColor: "white",
          borderRadius: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          padding: 4,
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <IconButton size="large" sx={{ color: "gray" }}>
          <AccountCircleOutlinedIcon />
        </IconButton>
        <span style={{ color: "black", marginRight: 10 }}>
          Cameron Williamson
        </span>
        <IconButton size="large" sx={{ color: "gray" }}>
          <NotificationsOutlinedIcon />
        </IconButton>
        <IconButton size="large" sx={{ color: "gray" }}>
          <MoreHorizOutlinedIcon />
        </IconButton>
      </div>
    )
}

export default Profile