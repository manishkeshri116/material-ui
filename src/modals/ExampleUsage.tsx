import React, { useState } from "react";
import CustomModal from "./CustomModal";
import { Button, Typography } from "@mui/material";
import { WarningRounded } from "@mui/icons-material";

const ExampleUsage = () => {
    const [open, setOpen] = useState(true);

    return (
        <>
{/* <CustomModal
    open={open}
    onClose={() => setOpen(false)}
    message="Draft Saved Successfully"
    width="350px"
    height="350px"
    borderRadius="20px"
    icon={<Typography sx={{ fontSize: "50px", color: "white", fontWeight: "bold" }}>✔</Typography>}
    buttons={[
        { text: "Cancel", onClick: () => setOpen(false), color: "secondary" },
        { text: "View Saved Drafts", onClick: () => alert("Go to drafts") },
    ]} /> */}


<CustomModal
    open={open}
    onClose={() => setOpen(false)}
    message="Once commited the Base plan cnanot be chnage"
    width="350px"
    height="350px"
    borderRadius="20px"
    bgColor="red"
    icon={<Typography sx={{ fontSize: "50px", color: "white", fontWeight: "bold",backgroundColor:"red"}}>
        <WarningRounded sx={{fontSize:60}}/>
    </Typography>}
    buttons={[
        { text: "Cancel", onClick: () => setOpen(false), color: "secondary" },
        { text: "Confirm & commit", onClick: () => alert("Go to drafts") },
    ]} />

    
    </>
    );
};

export default ExampleUsage;
