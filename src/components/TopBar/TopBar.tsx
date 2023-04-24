import React, { useState } from "react";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import { InfoModal } from "../InfoModal/InfoModal";

export const TopBar = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <AppBar component="nav">
      <InfoModal open={openModal} handleClose={() => setOpenModal(false)} />
      <Toolbar sx={{ display: "flex", justifyContent: "end" }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={() => setOpenModal(!openModal)}
        >
          <HelpOutlineRoundedIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};
