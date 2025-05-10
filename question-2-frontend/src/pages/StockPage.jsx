import React, { useEffect, useState } from "react";
import axios from "axios";
import { Line } from "react-chartjs-2";
import {
  Container,
  TextField,
  Button,
  Typography,
  Box,
  Grid
} from "@mui/material";
export default function StockPage() {
  const [ticker, setTicker] = useState("NVDA");
  const [minutes, setMinutes] = useState(15);
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_BACKEND_URL}/stocks/${ticker}?minutes=${minutes}&aggregation=average`
      );
      setData(res.data);
    } catch (err) {
      alert("Error fetching stock data.");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Stock Price Viewer</Typography>
      <Box sx={{ flexGrow: 1, mb: 2 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Ticker"
              value={ticker}
              onChange={(e) => setTicker(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <TextField
              fullWidth
              label="Minutes"
              type="number"
              value={minutes}
              onChange={(e) => setMinutes(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Button
              fullWidth
              variant="contained"
              onClick={fetchData}
              sx={{ height: "100%" }}
            >
              Fetch
            </Button>
          </Grid>
        </Grid>
      </Box>
      {data && (
        <>
          <Typography variant="h6">
            Average Price: ${data.averageStockPrice.toFixed(2)}
          </Typography>
          <Line
            data={{
              labels: data.priceHistory.map((d) =>
                new Date(d.lastUpdatedAt).toLocaleTimeString()
              ),
              datasets: [
                {
                  label: "Stock Price",
                  data: data.priceHistory.map((d) => d.price),
                  borderColor: "blue",
                  fill: false,
                },
              ],
            }}
          />
        </>
      )}
    </Container>
  );
}
