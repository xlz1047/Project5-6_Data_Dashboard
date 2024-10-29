import React, { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, Link } from "react-router-dom";
import { Bar } from 'react-chartjs-2';
import DetailView from "./components/DetailView";
import "./app.css";  

const App = () => {
  const [data, setData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("All");

  // Fetch data from API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://api.openbrewerydb.org/breweries");
        setData(response.data);
      } catch (error) {
        console.error("Error fetching the data", error);
      }
    };
    fetchData();
  }, []);

  // Filter and search data
  const filteredData = data
    .filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filterType === "All" || item.brewery_type === filterType)
    );

  // Chart Data for Visualization
  const chartData = {
    labels: ["Micro", "Regional", "Brewpub"],
    datasets: [
      {
        label: 'Brewery Types Count',
        data: [
          data.filter(brewery => brewery.brewery_type === "micro").length,
          data.filter(brewery => brewery.brewery_type === "regional").length,
          data.filter(brewery => brewery.brewery_type === "brewpub").length,
        ],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      }
    ]
  };

  return (
    <div className="app-container">
      <h1>Open Brewery Dashboard</h1>

      <Routes>
        {/* Main Dashboard View */}
        <Route path="/" element={
          <>
            {/* Search bar */}
            <input
              type="text"
              placeholder="Search for a brewery..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />

            {/* Filter dropdown */}
            <select onChange={(e) => setFilterType(e.target.value)} value={filterType}>
              <option value="All">All Breweries</option>
              <option value="micro">Micro Brewery</option>
              <option value="regional">Regional Brewery</option>
              <option value="brewpub">Brewpub</option>
            </select>

            {/* Summary statistics */}
            <div className="statistics">
              <p>Total Breweries: {data.length}</p>
              <p>Micro Breweries: {data.filter(brewery => brewery.brewery_type === 'micro').length}</p>
              <p>Regional Breweries: {data.filter(brewery => brewery.brewery_type === 'regional').length}</p>
            </div>

            {/* Bar Chart Visualization */}
            <div className="chart-container">
              <Bar data={chartData} />
            </div>

            {/* Brewery list with Links */}
            <ul className="brewery-list">
              {filteredData.map((brewery) => (
                <li key={brewery.id}>
                  <Link to={`/brewery/${brewery.id}`}>
                    <h3>{brewery.name}</h3>
                  </Link>
                  <p>Type: {brewery.brewery_type}</p>
                  <p>City: {brewery.city}, {brewery.state}</p>
                </li>
              ))}
            </ul>
          </>
        } />

        {/* Detail View for Each Brewery */}
        <Route path="/brewery/:id" element={<DetailView />} />
      </Routes>
    </div>
  );
};

export default App;
