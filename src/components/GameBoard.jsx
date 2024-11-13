import React, { useState } from "react";
import { Grid, Button, Typography, Box } from "@mui/material";

const GameBoard = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const handleRestart = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={20}>
      <Typography variant="h4" gutterBottom={2}>
        Welcome to Tic-Tac-Toe
      </Typography>
      <Grid container spacing={1} sx={{ maxWidth: 180 }}>
        {board.map((value, index) => (
          <Grid item xs={4} key={index}>
            <Button
              variant="outlined"
              onClick={() => handleClick(index)}
              sx={{ width: "60px", height: "60px", fontSize: "20px" }}
            >
              {value}
            </Button>
          </Grid>
        ))}
      </Grid>
      {winner ? (
        <Typography variant="h6" color="success.main" mt={2}>
          {winner} wins!
        </Typography>
      ) : (
        <Typography variant="h6" mt={2}>
          Next Player: {isXNext ? "X" : "O"}
        </Typography>
      )}
      <Button
        onClick={handleRestart}
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
      >
        Restart
      </Button>
    </Box>
  );
};

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

export default GameBoard;
