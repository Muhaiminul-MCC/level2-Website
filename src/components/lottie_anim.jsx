import React from "react";
import Lottie from "lottie-react";
import anm2 from "./programming_boy.json";
import { Box, Container, Typography } from "@mui/material";

export default function LottieAnimation() {
  return (
    <Container className="main">
      <Box className="writing_part" sx={{ mr: "60rem", mt: "10rem" }}>
        <Typography
          variant="h1"
          fontSize={"1.9rem"}
          sx={{
            color: "#19ee07",
          }}
        >
          Lottieanimations
        </Typography>
      </Box>
      <div
        className="animation"
        style={{
          marginLeft: "60rem",
          marginTop: "3rem",
        }}
      >
        <Lottie
          animationData={anm2}
          style={{ height: "25rem", width: "25rem" }}
          loop={true}
        />
      </div>
    </Container>
  );
}
