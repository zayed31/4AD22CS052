// StockDetails.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../api/axiosConfig';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

const StockDetails = () => {
  const { symbol } = useParams();
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await api.get(`/stocks/${symbol}/history`);
        setChartData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching stock history:', error);
        setLoading(false);
      }
    };

    fetchChartData();
  }, [symbol]);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Stock Details: {symbol}</h2>
      {loading ? (
        <div className="flex justify-center items-center py-6">
          <div className="w-12 h-12 border-4 border-t-4 border-blue-600 border-solid rounded-full animate-spin"></div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={chartData}>
              <CartesianGrid stroke="#ccc" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="price" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default StockDetails;
