import React from "react";
import chanel_logo from "./Images/M_C_C.jpg";
import py_logo from "./Images/pythonLogo.png";
import html_logo from "./Images/htmlLogo.png";
import css_logo from "./Images/cssLogo.png";
import react_logo from "./Images/reactLogo.png";
import mui_logo from "./Images/muiLogo.png";

import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

export default function Portfolio() {
  return (
    <div>
      <Container className="hader">
        <Typography
          align="center"
          variant="h1"
          fontSize={"2rem"}
          mt={"2rem"}
          color="#7bf52a"
          spacing={5}
        >
          <b>Portfolio</b>
        </Typography>
      </Container>
      <Stack direction={"row"}>
        <Box
          className="aboutPaper"
          sx={{
            ml: "2rem",
            mt: "5rem",
          }}
        >
          <Paper
            className="aboutme"
            elevation={8}
            style={{ height: "17rem", width: "30rem" }}
          >
            <Typography
              align="center"
              variant="h6"
              fontStyle={"italic"}
              gutterBottom
            >
              <h2>
                <ol style={{ color: "#7bf52a" }}> ABOUT ME </ol>
              </h2>
              My name is Muhaiminul islam. I am a forentend developer.I have an
              youtube chanel. My youtube chanel name is Muhaiminul coding club.
            </Typography>
            <Stack alignItems={"center"}>
              <Typography variant="h6" fontStyle={"italic"}>
                My chanel link
              </Typography>

              <Button
                variant="contained"
                sx={{
                  borderRadius: "12px",
                  height: "3rem",
                  width: "5rem",
                  bgcolor: "black",
                  color: "#7bf52a",
                  "&:hover": { bgcolor: "#7bf52a", color: "#000" },
                }}
                href="https://www.youtube.com/@Muhaiminul_coding_club"
              >
                <b>Chanel</b>
              </Button>
            </Stack>
          </Paper>
        </Box>
        <img
          style={{
            marginLeft: "60rem",
            marginTop: "5rem",
            height: "15rem",
            width: "15rem",
            borderRadius: "50%",
          }}
          src={chanel_logo}
          alt={""}
        />
      </Stack>
      {/*Skillpaper*/}
      <Stack direction={"row"}>
        <Box
          className="skillPaper"
          sx={{
            ml: "2rem",
            mt: "5rem",
          }}
        >
          <Paper elevation={8} sx={{ height: "15rem", width: "30rem" }}>
            <Typography align="center">
              <h2>
                <ol style={{ color: "#7bf52a" }}>Skills</ol>
              </h2>
              <Stack
                spacing={1.3}
                alignItems={"flex-start"}
                ml={"2rem"}
                direction={"row"}
              >
                <Stack spacing={1.5}>
                  <li>
                    Python
                    <img style={{ height: "1.5rem" }} src={py_logo} alt={""} />
                  </li>
                  <li>
                    React
                    <img
                      style={{ height: "1.5rem" }}
                      src={react_logo}
                      alt={""}
                    />
                  </li>

                  <li>
                    MUI
                    <img style={{ height: "1.5rem" }} src={mui_logo} alt={""} />
                  </li>
                </Stack>
                {/**/}
                <Stack spacing={2}>
                  <li>
                    HTML
                    <img
                      style={{ height: "1.5rem" }}
                      src={html_logo}
                      alt={""}
                    />
                  </li>
                  <li>
                    CSS
                    <img style={{ height: "1.5rem" }} src={css_logo} alt={""} />
                  </li>
                </Stack>
              </Stack>
            </Typography>
          </Paper>
        </Box>
        {/*Contact*/}

        <Paper
          elevation={3}
          sx={{ mt: "4rem", ml: "55rem", height: "17rem", width: "30rem" }}
        >
          <Typography align="center">
            <h2>
              <ol style={{ color: "#7bf52a" }}> Contact </ol>
            </h2>
            <Stack
              spacing={1}
              alignItems={"flex-start"}
              ml={"2rem"}
              direction={"column"}
            >
              <li>E-mail Adress: mahi.aideveloper@gmail.com</li>
              <li>Phone number: 017xxxxx</li>
              <li>Facebook ID: Muhaiminul islam</li>
            </Stack>
          </Typography>
        </Paper>
      </Stack>
      <Typography variant="body1" align="center">
        Muhaiminul coding Club
      </Typography>
    </div>
  );
}
