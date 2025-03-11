import React from "react";
import { Dialog, DialogContent, Button, Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface SuccessModalProps {
    open: boolean;
    onClose: () => void;
}

const SuccessModals: React.FC<SuccessModalProps> = ({ open, onClose }) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="xs"
            sx={{
                "& .MuiDialog-paper": {
                    borderRadius: "20px",
                    width: "400px",
                    height: "400px",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                },
            }}
        >
            {/* Close Button */}
            <IconButton
                onClick={onClose}
                sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    color: "gray",
                }}
            >
                <CloseIcon />
            </IconButton>

            <DialogContent
                sx={{
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        borderRadius: "50px",
                        backgroundColor: "#32D039",
                        width: "180px",
                        height: "180px",
                        marginBottom: "24px",
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "50px",
                            color: "white",
                            lineHeight: "1",
                            fontFamily:"inherit"
                        }}
                    >
                        ✔
                    </Typography>
                </Box>

                <Typography variant="h6" fontWeight="bold" sx={{ marginBottom: "24px" }}>
                    Draft Saved Successfully
                </Typography>

                <Box sx={{ display: "flex", gap: 2 }}>
                    <Button variant="contained" color="secondary" sx={{ borderRadius: "8px", minWidth: "120px" }} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button variant="contained" color="primary" sx={{ borderRadius: "8px", minWidth: "120px" }} onClick={onClose}>
                        View Saved Drafts
                    </Button>
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default SuccessModals;
