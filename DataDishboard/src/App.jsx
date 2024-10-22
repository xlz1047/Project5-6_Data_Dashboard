import React, { useState, useEffect } from "react";
import axios from "axios";
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

  return (
    <div className="app-container">
      <h1>Open Brewery Dashboard</h1>

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

      {/* Brewery list */}
      <ul className="brewery-list">
        {filteredData.map((brewery) => (
          <li key={brewery.id}>
            <h3>{brewery.name}</h3>
            <p>Type: {brewery.brewery_type}</p>
            <p>City: {brewery.city}, {brewery.state}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
