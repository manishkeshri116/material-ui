import React from "react";
import { Box, IconButton } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import RequestPageOutlinedIcon from "@mui/icons-material/RequestPageOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import TopicOutlinedIcon from "@mui/icons-material/TopicOutlined";
import IntegrationInstructionsOutlinedIcon from "@mui/icons-material/IntegrationInstructionsOutlined";

function Sidebar() {
  const icons = [HomeOutlinedIcon, AutoGraphOutlinedIcon, SellOutlinedIcon, RequestPageOutlinedIcon, ArchiveOutlinedIcon, TopicOutlinedIcon, SettingsOutlinedIcon]
  return (
    <div
      style={{
        width: "80px",
        height: "100vh",
        backgroundColor: "rgb(241, 238, 244)",
        display: "flex",

        justifyContent: "center",
        position: "fixed",
        top: 0,
        left: 0,
        paddingTop: 20,
      }}
    >
      <Box
        sx={{
          width: "60px",
          height: "85vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-between",
          background: "linear-gradient(to bottom, rgb(7, 4, 175), rgb(19, 198, 195))",
          borderRadius: 4,

        }}
      >
        <Box>
          {icons.map((Icon, index) => (
            <IconButton key={index} size="large" sx={{ color: "white", m: 1 }}>
              <Icon />
            </IconButton>
          ))}
        </Box>

        <Box>
          <IconButton
            style={{
              backgroundColor: "rgb(19, 198, 195)",
              borderRadius: 4,
              padding: 6,
            }}
            size="large"
            sx={{ color: "white", m: 1 }}
          >
            <IntegrationInstructionsOutlinedIcon />
          </IconButton>
        </Box>
      </Box>
    </div>
  );
}

export default Sidebar;