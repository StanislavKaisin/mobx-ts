import React, { FC } from "react";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
} from "@mui/material";
import { BASE_URL } from "../../api/endpoints";

interface InfoModalProps {
  open: boolean;
  handleClose: () => void;
}

export const InfoModal: FC<InfoModalProps> = ({ open, handleClose }) => {
  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle alignSelf="center">Set backup account</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Data by:
          <Link
            href={BASE_URL}
            sx={{ ml: "8px" }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {BASE_URL}
          </Link>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
