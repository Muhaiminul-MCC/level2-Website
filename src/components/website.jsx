import React from "react";
import { Box, Container } from "@mui/material";

export default function website() {
  return (
    <Container>
      <Box sx={{ mt: "15rem", ml: "0rem" }}>
        <h1>Many components</h1>

        <ol>
          <h1 style={{ fontSize: "1.7rem", fontStyle: "italic" }}>Like this</h1>
          <li>Typography</li>
          <li>Box</li>
          <li>Continer and more ...</li>
        </ol>
      </Box>
    </Container>
  );
}
