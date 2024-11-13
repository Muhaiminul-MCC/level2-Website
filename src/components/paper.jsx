import { Box, Typography, Paper } from "@mui/material";
import React from "react";

export default function paper() {
  return (
    <div>
      <Box align="center" mt={"2rem"}>
        <Typography variant="h1" fontSize={"2rem"}>
          Simple paper website
        </Typography>
      </Box>
      <Box sx={{ display: "flex" }} mt={"5rem"} ml={"5rem"} mr={"9rem"}>
        <Paper elevation={4}>
          <Typography variant="h2" sx={{ fontSize: "2rem" }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab quod
            nihil reprehenderit quos iure deserunt ea blanditiis corporis.
            Voluptas quos facere adipisci vel suscipit, inventore ipsa veritatis
            id odio dolore.
          </Typography>
        </Paper>
      </Box>
    </div>
  );
}
