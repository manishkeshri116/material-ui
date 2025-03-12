import React from "react";
import { Grid, Box,  } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import EditIcon from "@mui/icons-material/Edit";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined"; // Import outlined icon
const rows = [
  { draftName: "Q1 Walmart Forecast", customer: "Walmart", ppg: "Snacks", method: "Delights", lastEdited: "09/30/2025", status: "IN PROGRESS" },
  { draftName: "Q1 Walmart Forecast", customer: "Costco", ppg: "Beverages", method: "Treats", lastEdited: "11/05/2024", status: "IN PROGRESS" },
  { draftName: "Q1 Walmart Forecast", customer: "Walmart", ppg: "Snacks", method: "Crunchies", lastEdited: "04/22/2028", status: "COMPLETED" },
  { draftName: "Q1 Walmart Forecast", customer: "Costco", ppg: "Beverages", method: "Munchies", lastEdited: "01/01/2027", status: "IN PROGRESS" },
  { draftName: "Q1 Walmart Forecast", customer: "Walmart", ppg: "Snacks", method: "Nibbles", lastEdited: "07/19/2023", status: "IN PROGRESS" },
  { draftName: "Q1 Walmart Forecast", customer: "Costco", ppg: "Beverages", method: "Goodies", lastEdited: "12/12/2022", status: "IN PROGRESS" },
  { draftName: "Q1 Walmart Forecast", customer: "Walmart", ppg: "Snacks", method: "Yummies", lastEdited: "10/10/2023", status: "IN PROGRESS" },
  { draftName: "Q1 Walmart Forecast", customer: "Costco", ppg: "Beverages", method: "Bites", lastEdited: "03/15/2026", status: "IN PROGRESS" },
];

const GridTable = () => {
  return (


    <>
    <AppBar
          position="static"
          sx={{
              backgroundColor: "#FFFFFF",
              color: "white",
              borderRadius: "12px", 
              margin: "10px",
              justifyContent:"space-around"
          }}
      >
          <Toolbar>
              <IconButton edge="start" color="default" aria-label="menu" sx={{ mr: 2 }}>
                  <MenuIcon />
              </IconButton>
              <Typography variant="h6" component="div"  sx={{ flexGrow: 1 , color:"grey"}}>
                  My Custom AppBar
              </Typography>
          </Toolbar>
      </AppBar>
      <Grid
          container
          sx={{
              p: 0,
              m: 0,
              backgroundColor: "#FFFFFF",
              borderRadius: 2,
              border: "1px solid gray",
              width: "100%",
              boxSizing: "border-box"
          }}
      >
              <Grid container sx={{  borderBottom: "1px solid gray", width: "100%" }}>
                  {["Draft Name", "Customer Accounts", "PPG(S)", "forcast Method", "Last Edited", "Status", "Actions"].map((heading, index) => (
                      <Grid
                          item
                          xs={index === 6 ? 1.5 : 1.75}
                          key={heading}
                          sx={{
                              textAlign: "left",
                              fontWeight: "bold",
                              borderRight: index !== 6 ? "1px solid gray" : "none",
                              p: 1
                          }}
                      >
                          <Typography variant="subtitle1">{heading}</Typography>
                      </Grid>
                  ))}
              </Grid>

              {rows.map((row, index) => (
                  <Grid
                      container
                      key={index}
                      sx={{
                          borderBottom: index !== rows.length - 1 ? "1px solid gray" : "none", 
                          width: "100%"
                      }}
                  >
                      <Grid item xs={1.75} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid gray", p: 1 }}>
                          <Typography variant="body1" sx={{ textAlign: "left", }}>{row.draftName}</Typography>
                      </Grid>

                      <Grid
                          item
                          xs={1.75}
                          sx={{ display: "flex", alignItems: "center", borderRight: "1px solid gray", p: 1 }}
                      >
                          <Box
                              sx={{
                                  backgroundColor: "#f9f9f9",
                                  border: "1px solid #ddd",
                                  borderRadius: "20px",
                                  px: 1.5, 
                                  py: 0.5 
                              }}
                          >
                              <Typography variant="body1" sx={{ textAlign: "left" }}>
                                  {row.customer}
                              </Typography>
                          </Box>
                      </Grid>

                      <Grid
                          item
                          xs={1.75}
                          sx={{ display: "flex", alignItems: "center", borderRight: "1px solid gray", p: 1 }}
                      >
                          <Box
                              sx={{
                                  backgroundColor: "#f9f9f9",
                                  border: "1px solid #ddd",
                                  borderRadius: "20px",
                                  px: 1.5,
                                  py: 0.5,
                              }}
                          >
                              <Typography variant="body1" sx={{ textAlign: "left" }}>
                                  {row.ppg}
                              </Typography>
                          </Box>
                      </Grid>
                      <Grid item xs={1.75} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid gray", p: 1 }}>
                          <Typography variant="body1" sx={{ textAlign: "left", }}>{row.method}</Typography>
                      </Grid>
                      <Grid item xs={1.75} sx={{ display: "flex", alignItems: "center", borderRight: "1px solid gray", p: 1 }}>
                          <Typography variant="body1" sx={{ textAlign: "left", }}>{row.lastEdited}</Typography>
                      </Grid>



                      <Grid
                          item
                          xs={1.75}
                          sx={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              borderRight: "1px solid gray",
                              p: 1
                          }}
                      >
                          <Box
                              sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: 0.5,
                                  backgroundColor: row.status === "COMPLETED" ? "#e6f9e6" : "#f2f2f2", 
                                  borderRadius: "20px",
                                  px: 2,
                                  py: 0.5 
                              }}
                          >
                              <Box
                                  sx={{
                                      width: 8,
                                      height: 8,
                                      borderRadius: "50%",
                                      backgroundColor: row.status === "COMPLETED" ? "green" : "gray"
                                  }} />

                              <Typography
                                  variant="body1"
                                  sx={{ textAlign: "center", fontWeight: "100" }}
                                  color={row.status === "COMPLETED" ? "green" : "gray"}
                              >
                                  {row.status}
                              </Typography>
                          </Box>
                      </Grid>

                      <Grid item xs={1.5} sx={{ textAlign: "center", p: 1 }}>
                          <IconButton
                              sx={{
                                  color: "blue",
                                  transition: "all 0.3s ease-in-out",
                              }}
                          >
                              <EditOutlinedIcon /> 
                          </IconButton>
                      </Grid>

                  </Grid>
              ))}
          </Grid></>
  );
};

export default GridTable;
