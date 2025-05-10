import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { Typography } from '@mui/material';

const StockChart = ({ data, average }) => {
  return (
    <div>
      <Typography variant="h6" gutterBottom>Stock Price Chart (Last M Minutes)</Typography>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <XAxis dataKey="lastUpdatedAt" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#1976d2" />
          <ReferenceLine y={average} label="Average" stroke="red" strokeDasharray="3 3" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockChart;
