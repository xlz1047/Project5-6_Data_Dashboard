// src/App.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./app.css";
import BreweryChart from "./components/BreweryChart";
import Modal from "./components/Modal"; // Import the Modal component

const App = () => {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filterType, setFilterType] = useState("All");
    const [selectedBrewery, setSelectedBrewery] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://api.openbrewerydb.org/breweries");
                setData(response.data);
                console.log('Data fetched:', response.data);
            } catch (error) {
                console.error("Error fetching the data", error);
            }
        };
        fetchData();
    }, []);

    const filteredData = data.filter((item) => {
        const matchesQuery = item.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesType = filterType === "All" || item.brewery_type === filterType;
        return matchesQuery && matchesType;
    });

    const handleBreweryClick = (brewery) => {
        setSelectedBrewery(brewery);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedBrewery(null);
    };

    return (
        <Router>
            <div className="app-container">
                <h1>Open Brewery Dashboard</h1>
                <input
                    type="text"
                    placeholder="Search for a brewery..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <select onChange={(e) => setFilterType(e.target.value)} value={filterType}>
                    <option value="All">All Breweries</option>
                    <option value="micro">Micro Brewery</option>
                    <option value="regional">Regional Brewery</option>
                    <option value="brewpub">Brewpub</option>
                </select>
                <div className="statistics">
                    <p>Total Breweries: {data.length}</p>
                    <p>Micro Breweries: {data.filter(brewery => brewery.brewery_type === 'micro').length}</p>
                    <p>Regional Breweries: {data.filter(brewery => brewery.brewery_type === 'regional').length}</p>
                </div>
                <ul className="brewery-list">
                    {filteredData.map((brewery) => (
                        <li key={brewery.id}>
                            <h3>
                                <button onClick={() => handleBreweryClick(brewery)}>
                                    {brewery.name}
                                </button>
                            </h3>
                            <p>Type: {brewery.brewery_type}</p>
                            <p>City: {brewery.city}, {brewery.state}</p>
                        </li>
                    ))}
                </ul>
                <BreweryChart breweries={filteredData} />
            </div>

            {/* Modal for Brewery Details */}
            <Modal isOpen={isModalOpen} onClose={closeModal} brewery={selectedBrewery} />
        </Router>
    );
};

export default App;
