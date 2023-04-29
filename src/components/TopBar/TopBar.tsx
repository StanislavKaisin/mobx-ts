import React, { FC, useState } from "react";
import { AppBar, IconButton, Toolbar } from "@mui/material";
import HelpOutlineRoundedIcon from "@mui/icons-material/HelpOutlineRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { InfoModal } from "../InfoModal/InfoModal";

interface TopBarProps {
  openSideBar: (condition: boolean) => void;
  isSideBarOpen: boolean;
}

export const TopBar: FC<TopBarProps> = ({ openSideBar, isSideBarOpen }) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <AppBar component="nav">
      <InfoModal open={openModal} handleClose={() => setOpenModal(false)} />
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          maxWidth: "1280px",
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="end"
          onClick={() => openSideBar(!isSideBarOpen)}
        >
          {isSideBarOpen ? <MenuRoundedIcon /> : <CloseRoundedIcon />}
        </IconButton>

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
