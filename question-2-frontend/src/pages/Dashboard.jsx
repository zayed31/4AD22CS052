import React from 'react';
import { Link } from 'react-router-dom';
const stocks = ['AAPL', 'GOOGL', 'MSFT'];
const Dashboard = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Stocks Dashboard</h1>
      <ul>
        {stocks.map((stock) => (
          <li key={stock}>
            <Link to={`/stock/${stock}`} className="text-blue-600 underline">
              {stock}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Dashboard;
