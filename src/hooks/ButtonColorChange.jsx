import React from "react";
import { useState } from "react";
import { Button, Typography, Box } from "@mui/material";
import { Stack } from "@mui/system";

export default function FavoriteColor() {
  const [color, setColor] = useState();

  return (
    <Box sx={{ ml: "50rem", mt: "5rem" }}>
      <Typography variant="h1" fontSize={"2rem"}>
        Enter your fabrit color [ {color} ]
      </Typography>
      <Stack direction={"row"} ml={"5rem"} spacing={2} p={(0, 2, 0, 0)}>
        <Button variant="contained" onClick={() => setColor("red")}>
          Red
        </Button>
        <Button variant="contained" onClick={() => setColor("abcd")}>
          pink
        </Button>
      </Stack>
    </Box>
  );
}
