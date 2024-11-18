import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons";
import ImgMCC from "./Images/M_C_C.jpg";
import { Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export default function NewPortfolio() {
  return (
    <div
      style={{
        backgroundColor: "#214868",
        margin: 0,
        padding: 0,
      }}
    >
      {/* App bar */}
      <Stack
        sx={{
          ml: "2rem",
          mt: "1rem",
          backgroundColor: "transparent",
          padding: "0",
          margin: "0",
        }}
        direction={"row"}
      >
        <Typography ml={"3rem"} mt={"1rem"} variant="h1" fontSize={"1.5rem"}>
          MCC.
        </Typography>
        <Stack
          className="navigation"
          direction={"row"}
          spacing={3}
          sx={{
            mt: "1rem",
            ml: "65em",
            padding: 0,
          }}
        >
          {["Home", "Services", "Education", "Skills", "Contact"].map(
            (text) => (
              <Button
                key={text}
                sx={{
                  color: "#fff",
                  borderColor: "#fff",
                  ":hover": {
                    color: "#47f61c",
                  },
                  margin: 0,
                  padding: 0,
                  fontSize: "1.1rem",
                }}
              >
                {text}
              </Button>
            )
          )}
        </Stack>
      </Stack>
      <Stack
        direction="row"
        sx={{
          ml: "3rem",
          mt: "20rem",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        spacing={3}
      >
        {/* Text Content */}
        <Stack spacing={2} sx={{ flex: 1 }}>
          <Typography variant="h2" fontSize={"3rem"} color="#fff">
            Muhaiminul Islam
          </Typography>

          <Typography variant="h3" fontSize={"2rem"} color="#fff">
            I'm a <span className="custom-span"></span>
          </Typography>

          <Typography
            color="white"
            variant="body1"
            fontSize={"1rem"}
            fontStyle={"italic"}
          >
            I'm a Frontend developer. I'm starting developing on class 9.
            <br />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            qui quae alias tempore hic vitae vero voluptatum odio rerum
            eligendi.
          </Typography>

          <Stack direction={"row"} spacing={3}>
            <Button
              className="cv-button"
              sx={{
                width: "20vh",
                borderRadius: "20px",
                bgcolor: "transparent",
                ":hover": {
                  bgcolor: "transparent", // Keep background gradient handled by CSS
                  color: "black", // Smooth text color change
                },
                color: "#47f61c",
              }}
              variant="contained"
            >
              Download CV
            </Button>

            <div className="social-container">
              <a
                href="https://www.youtube.com/@Muhaiminul_coding_club"
                className="youtube social"
              >
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
              <a
                href="https://github.com/Muhaiminul-MCC"
                className="Github social"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </div>
          </Stack>
        </Stack>

        {/* Image */}
        <img
          src={ImgMCC}
          alt="Profile"
          style={{
            height: "17rem",
            width: "17rem",
            borderRadius: "50%",
            objectFit: "cover",

            marginRight: "15rem", // Adds spacing from the right edge
          }}
        />
      </Stack>
    </div>
  );
}
