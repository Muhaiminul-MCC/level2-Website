import * as React from "react";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

const DemoPaper = styled(Paper)(({ theme }) => ({
  width: 120,
  height: 120,
  padding: theme.spacing(2),
  ...theme.typography.body2,
  textAlign: "center",
}));

const AnotherPaper = styled(Paper)(({ theme }) => ({
  width: "10rem",
  height: "10rem",
  p: theme.spacing(2),
  ...theme.typography.h6,
  textAlign: "center",
}));
export default function Variants() {
  return (
    <Box>
      <Stack direction="row" spacing={2}>
        <DemoPaper variant="elevation">default variant</DemoPaper>
        <AnotherPaper variant="elevation" elevation={4}>
          My own paper
        </AnotherPaper>
      </Stack>
    </Box>
  );
}
