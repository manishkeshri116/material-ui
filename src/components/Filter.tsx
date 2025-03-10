import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

const Filter = () => {
  const [customerAccount, setCustomerAccount] = useState("");
  const [ppg, setPpg] = useState("");

  const isDisabled = !customerAccount || !ppg;

  return (
    <Box
      sx={{
        backgroundColor: "white",
        borderRadius: 2,
        display: "flex",
        gap: 1.5,
        flexDirection: "column",
        p: 1.5,
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography fontWeight="bold" fontSize={13} sx={{ width: "100%" }}>
        Filters
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          gap: 1.5,
        }}
      >
        <Box sx={{ width: { xs: "100%", sm: "45%" } }}>
          <Typography fontWeight="bold" fontSize={12} color="gray">
            Customer Account
          </Typography>
          <FormControl fullWidth size="small">
            <Select
              displayEmpty
              value={customerAccount}
              onChange={(e) => setCustomerAccount(e.target.value)}
            >
              <MenuItem value="" disabled> 
                Select Customer Account
              </MenuItem>
              <MenuItem value="account1">Account 1</MenuItem>
              <MenuItem value="account2">Account 2</MenuItem>
              <MenuItem value="account3">Account 3</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Box sx={{ width: { xs: "100%", sm: "45%" } }}>
          <Typography fontWeight="bold" fontSize={12} color="gray">
            PPG(S)
          </Typography>
          <FormControl fullWidth size="small">
            <Select
              displayEmpty
              value={ppg}
              onChange={(e) => setPpg(e.target.value)}
            >
              <MenuItem value="" disabled>
                Select PPG(S)
              </MenuItem>
              <MenuItem value="ppg1">PPG 1</MenuItem>
              <MenuItem value="ppg2">PPG 2</MenuItem>
              <MenuItem value="ppg3">PPG 3</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Button
          variant="contained"
          size="small"
          disabled={isDisabled}
          sx={{
            backgroundColor: isDisabled ? "#b0b0b0" : "blue",
            fontWeight: "600",
            color: "white",
            textTransform: "none",
            fontSize: "0.75rem",
            padding: "10px 15px",
            mt: { xs: 0, sm: 2 }, 
            width: { xs: "100%", sm: "auto" }, 
          }}
        >
          Apply filter
        </Button>
      </Box>
    </Box>
  );
};

export default Filter;
