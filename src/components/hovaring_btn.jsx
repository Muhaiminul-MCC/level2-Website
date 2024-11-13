import React from "react";
import { Typography, Button, Container } from "@mui/material";

export default function Parsonal_website() {
  return (
    <main>
      <Container
        className="btn"
        align="center"
        dir="continer"
        mt={20}
        direction="row"
      >
        <Typography variant="h1" fontSize={60} gutterBottom>
          Hovering button !
        </Typography>
        <Button variant="contained" sx={{ ":hover": { bgcolor: "#24f712" } }}>
          hover me !
        </Button>
        <Button
          variant="contained"
          sx={{ ":hover": { background: "transparent" } }}
        >
          hover me!
        </Button>
      </Container>
    </main>
  );
}
