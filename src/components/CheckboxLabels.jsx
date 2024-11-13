import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Container } from "@mui/material";

export default function CheckboxLabels() {
  return (
    <Container>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Enabled"
        />
        <FormControlLabel required control={<Checkbox />} label="Require" />
        <FormControlLabel disabled control={<Checkbox />} label="Disabled" />
      </FormGroup>
    </Container>
  );
}
