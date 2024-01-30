import React from "react";
import { useNavigate } from "react-router-dom";

import GoogleButton from "react-google-button";

import { useUserAuth } from "../UserAuthContext";
import { Box, Button } from "@mui/material";
import { WebsiteRoutes } from "../constants/routes";

const LoginPage = () => {
  const userContext = useUserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    try {
      await userContext?.googleSignIn();
      navigate(WebsiteRoutes.home);
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const handleLogOut = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      await userContext?.logOut();
      navigate(WebsiteRoutes.home);
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        gap: "20px",
      }}
    >
      <GoogleButton
        className="g-btn"
        type="dark"
        onClick={handleGoogleSignIn}
      />
      <Button
        onClick={(e) => handleLogOut(e)}
        variant="contained"
        sx={{ width: "20%" }}
      >
        Log out
      </Button>
    </Box>
  );
};

export default LoginPage;
