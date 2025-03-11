import React from "react";
import { Dialog, DialogContent, Button, Box, Typography, IconButton, useTheme } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface CustomModalProps {
    open: boolean;
    onClose: () => void;
    message?: string;
    width?: string;
    height?: string;
    borderRadius?: string;
    icon?: React.ReactNode;
    bgColor?: string; // New prop to control background color
    buttons?: { text: string; onClick: () => void; color?: "primary" | "secondary" }[];
}

const CustomModal: React.FC<CustomModalProps> = ({
    open,
    onClose,
    message ="git ",
    width = "400px",
    height = "400px",
    borderRadius,
    bgColor = "#32D039", // Default to green

    icon,
    buttons = [],
}) => {
    const theme = useTheme(); // Get MUI theme

    return (
        <Dialog
            open={open}
            onClose={onClose}
            maxWidth="xs"
            sx={{
                "& .MuiDialog-paper": {
                    borderRadius: borderRadius || theme.shape.borderRadius, // ✅ Use theme.shape.borderRadius
                    width,
                    height,
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

            <DialogContent sx={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
                {/* Custom Icon Box */}
                {icon && (
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: "50px",
                            backgroundColor: bgColor, width: "180px",
                            height: "180px",
                            marginBottom: "24px",
                        }}
                    >
                        {icon}
                    </Box>
                )}

                <Typography variant="h6" sx={{ marginBottom: "24px" }}>
                    {message}
                </Typography>

                <Box sx={{ display: "flex", gap: 2 }}>
                    {buttons.map((button, index) => (
                        <Button
                            key={index}
                            variant="contained"
                            color={button.color || "primary"}
                            sx={{ minWidth: "120px" }}
                            onClick={button.onClick}
                        >
                            {button.text}
                        </Button>
                    ))}
                </Box>
            </DialogContent>
        </Dialog>
    );
};

export default CustomModal;
