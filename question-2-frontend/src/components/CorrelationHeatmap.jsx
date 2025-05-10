import React from 'react';
import { Grid, Typography, Tooltip, Box } from '@mui/material';

const getColor = (value) => {
  if (value > 0.8) return '#1b5e20'; // strong positive
  if (value > 0.4) return '#81c784';
  if (value > 0) return '#c8e6c9';
  if (value > -0.4) return '#ffcdd2';
  if (value > -0.8) return '#e57373';
  return '#b71c1c'; // strong negative
};

const CorrelationHeatmap = ({ data }) => {
  const stocks = Object.keys(data);

  return (
    <Box>
      <Typography variant="h6" gutterBottom>Correlation Heatmap</Typography>
      <Grid container>
        <Grid item xs={1}></Grid>
        {stocks.map(s => (
          <Grid item xs={1} key={s}><Typography variant="body2">{s}</Typography></Grid>
        ))}
        {stocks.map(s1 => (
          <Grid container key={s1}>
            <Grid item xs={1}><Typography variant="body2">{s1}</Typography></Grid>
            {stocks.map(s2 => {
              const corr = s1 === s2 ? 1 : data[s1][s2];
              return (
                <Grid item xs={1} key={s2}>
                  <Tooltip title={`Correlation: ${corr.toFixed(2)}`}>
                    <Box sx={{ width: 40, height: 40, backgroundColor: getColor(corr), m: 0.5 }} />
                  </Tooltip>
                </Grid>
              );
            })}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CorrelationHeatmap;
