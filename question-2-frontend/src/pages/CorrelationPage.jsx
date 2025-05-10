import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Grid
} from "@mui/material";
const stockTickers = ["AAPL", "NVDA", "PYPL", "GOOGL", "TSLA", "MSFT"];
const CorrelationPage = () => {
  const [minutes, setMinutes] = useState(30);
  const [matrix, setMatrix] = useState([]);
  const fetchCorrelations = async () => {
    const results = [];
    for (let i = 0; i < stockTickers.length; i++) {
      const row = [];
      for (let j = 0; j < stockTickers.length; j++) {
        if (i === j) {
          row.push(1);
        } else {
          try {
            const res = await axios.get(
              `${process.env.REACT_APP_BACKEND_URL}/stocks/correlation/compare?ticker=${stockTickers[i]}&ticker=${stockTickers[j]}&minutes=${minutes}`
            );
            row.push(res.data.correlation);
          } catch (err) {
            row.push(null); 
          }
        }
      }
      results.push(row);
    }

    setMatrix(results);
  };
  const getColor = (value) => {
    if (value === null) return "#ccc";
    const red = Math.floor(255 * (1 - value));
    const green = Math.floor(255 * value);
    return `rgb(${red}, ${green}, 100)`;
  };
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Correlation Heatmap</Typography>
      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
        <TextField
          label="Minutes"
          type="number"
          value={minutes}
          onChange={(e) => setMinutes(e.target.value)}
        />
        <Button variant="contained" onClick={fetchCorrelations}>Generate Heatmap</Button>
      </Box>

      <Grid container spacing={1}>
        {/* Header Row */}
        <Grid item xs={2}></Grid>
        {stockTickers.map((stock, idx) => (
          <Grid item xs={1.2} key={"col-" + idx}>
            <Typography variant="body2" fontWeight="bold">{stock}</Typography>
          </Grid>
        ))}

        {/* Data Rows */}
        {matrix.map((row, i) => (
          <React.Fragment key={i}>
            <Grid item xs={2}>
              <Typography variant="body2" fontWeight="bold">{stockTickers[i]}</Typography>
            </Grid>
            {row.map((value, j) => (
              <Grid
                item
                xs={1.2}
                key={`${i}-${j}`}
                sx={{
                  backgroundColor: getColor(value),
                  textAlign: "center",
                  p: 1,
                  borderRadius: "4px"
                }}
              >
                <Typography variant="body2">
                  {value !== null ? value.toFixed(2) : "N/A"}
                </Typography>
              </Grid>
            ))}
          </React.Fragment>
        ))}
      </Grid>
    </Container>
  );
};
export default CorrelationPage;
