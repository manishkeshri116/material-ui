import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface SaveDraftModalProps {
  open: boolean;
  handleClose: () => void;
}

const SaveDraftModal: React.FC<SaveDraftModalProps> = ({
  open,
  handleClose,
}) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      BackdropProps={{
        style: {
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          backdropFilter: "blur(6px)",
        },
      }}
      sx={{
        "& .MuiPaper-root": {
          position: "relative",
          padding: "20px",
          width: "30%",
          height:"26%",
          borderRadius: "12px",
        },
      }}
    >
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 16,
          color: "black",
          backgroundColor: "rgba(241, 238, 244, 0.39)",
          border: "2px solid rgba(241, 238, 244, 0)",
          borderRadius: "20%",
          height: 24,
          width: 24,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CloseIcon sx={{ fontSize: 14 }} />
      </IconButton>

      <Typography fontSize={14} fontWeight={700} mb={2}>
        Save as Draft
      </Typography>
      <Typography fontSize={12} color="black" mb={2}>
        Would you like to save your draft?
      </Typography>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <label style={{ fontSize: "12px", fontWeight: "600", color: "gray" }}>
          Draft Name
        </label>
        <input
          type="text"
          placeholder="Enter Draft Name"
          style={{
            backgroundColor: "rgba(241, 238, 244, 0.39)",
            height: "20px",
            padding: "5px 10px",
            fontSize: "13px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            outline: "none",
          }}
        />
      </div>

      <DialogActions sx={{ justifyContent: "flex-end", padding: 0, mt: 3 }}>
        <Button
          onClick={handleClose}
          size="small"
          variant="outlined"
          sx={{
            color: "gray",
            borderColor: "gray",
            textTransform: "none",
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleClose}
          size="small"
          variant="contained"
          sx={{
            backgroundColor: "blue",
            color: "white",
            textTransform: "none",
          }}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SaveDraftModal;
