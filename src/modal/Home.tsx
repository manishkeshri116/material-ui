import React, { useState } from "react";
import { Button } from "@mui/material";
import SuccessModal from "./common-modal";

const App: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="contained" onClick={() => setOpen(true)}>
        Open Modal
      </Button>
      <SuccessModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default App;
