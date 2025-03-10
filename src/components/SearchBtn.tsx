import React, { useState } from "react";
import { Button } from "@mui/material";
import SaveDraftModal from "./SaveDraftModal"; 

const SearchBtn = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: "10px",
      }}
    >
      <h2 style={{ margin: 0, paddingLeft: 10, color: "black", flexShrink: 0 }}>
        Search and Select Base Plan Data
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "10px", 
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap", 
        }}
      >
        <Button
          variant="contained"
          size="medium"
          sx={{
            backgroundColor: "white",
            color: "gray",
            textTransform: "none",
            fontSize: "0.8rem",
            fontWeight: "600",
            minWidth: "120px",
          }}
          onClick={handleOpen}
        >
          Commit Base Plan
        </Button>
        <Button
          variant="contained"
          size="medium"
          sx={{
            backgroundColor: "blue",
            fontWeight: "600",
            color: "white",
            textTransform: "none",
            fontSize: "0.8rem",
            minWidth: "120px", 
          }}
          onClick={handleOpen}
        >
          Save a Base Plan
        </Button>
      </div>

      <SaveDraftModal open={open} handleClose={handleClose} />
    </div>
  );
};

export default SearchBtn;
