import React from "react";
import { Checkbox, Typography } from "@mui/material";
import { Link } from "@mui/material";

export default function Profile() {
  return (
    <main align="center">
      <Typography variant="h1" fontSize={26}>
        Hello, My name is <Link href="#">XY!</Link>
      </Typography>
      <Checkbox />
    </main>
  );
}
