import React, { FC } from "react";
import { Avatar, Box, Typography } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid";

interface AvatarCellProps {
  img: string;
  text: string;
}
export const AvatarCell: FC<AvatarCellProps> = ({ img, text }) => {
  return (
    <Box display="flex" alignItems="center">
      <Avatar variant="rounded" src={img} />
      <Typography sx={{ ml: "8px" }}>{text}</Typography>
    </Box>
  );
};

export const renderAvatarCell = (
  params: GridRenderCellParams<any, AvatarCellProps>
) => {
  return <AvatarCell img={params.value?.img!} text={params.value?.text!} />;
};
