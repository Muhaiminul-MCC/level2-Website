import React, { useState } from "react";
import { Button, Paper, TextField, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

export default function Calculator() {
  /* logical part */

  // States for two numbers and the result
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  // Handle number input changes
  const handleNum1Change = (event) => setNum1(event.target.value);
  const handleNum2Change = (event) => setNum2(event.target.value);

  // Perform the selected operation
  const calculateResult = (operation) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult("Invalid input");
      return;
    }

    let calculationResult;

    switch (operation) {
      case "+":
        calculationResult = number1 + number2;
        break;
      case "-":
        calculationResult = number1 - number2;
        break;
      case "x":
        calculationResult = number1 * number2;
        break;
      case "/":
        if (number2 === 0) {
          setResult("Cannot divide by zero");
          return;
        }
        calculationResult = number1 / number2;
        break;
      default:
        calculationResult = "Invalid operation";
    }

    setResult(calculationResult);
  };

  /* Design webpage */

  return (
    <div>
      <Box>
        <Typography
          variant="h1"
          fontSize={"2rem"}
          align="center"
          color="#7fe438"
          mt={"2rem"}
        >
          Calculator
        </Typography>
        <Stack alignItems={"center"} sx={{ mt: "3rem" }}>
          <Paper
            elevation={3}
            sx={{ height: "25rem", width: "25rem", bgcolor: "#f2f7f1" }}
          >
            <Stack direction={"column"} spacing={3} mt={"2rem"}>
              {/* Number input fields */}
              <TextField
                variant="filled"
                label="1st number"
                value={num1}
                onChange={handleNum1Change}
                type="number"
              />
              <TextField
                variant="filled"
                label="2nd number"
                value={num2}
                onChange={handleNum2Change}
                type="number"
              />
              {/* Operator buttons */}
              <Stack direction={"row"} spacing={2} alignSelf={"center"}>
                <Button
                  variant="contained"
                  sx={{ bgcolor: "#7fe438" }}
                  onClick={() => calculateResult("+")}
                >
                  +
                </Button>
                <Button
                  variant="contained"
                  sx={{ bgcolor: "#7fe438" }}
                  onClick={() => calculateResult("-")}
                >
                  -
                </Button>
                <Button
                  variant="contained"
                  sx={{ bgcolor: "#7fe438" }}
                  onClick={() => calculateResult("x")}
                >
                  x
                </Button>
                <Button
                  variant="contained"
                  sx={{ bgcolor: "#7fe438" }}
                  onClick={() => calculateResult("/")}
                >
                  /
                </Button>
              </Stack>
              {/* Display the result */}
              <Typography
                variant="h1"
                fontSize={"2rem"}
                align="center"
                color="success"
              >
                Result:[ {result} ]
              </Typography>
            </Stack>
          </Paper>
        </Stack>
      </Box>
    </div>
  );
}
