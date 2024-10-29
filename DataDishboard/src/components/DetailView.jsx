import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/detailView.css";

const DetailView = () => {
    const { id } = useParams();
    const [brewery, setBrewery] = useState(null);

    useEffect(() => {
        const fetchBrewery = async () => {
        try {
            const response = await axios.get(`https://api.openbrewerydb.org/breweries/${id}`);
            setBrewery(response.data);
        } catch (error) {
            console.error("Error fetching brewery data:", error);
        }
        };
        fetchBrewery();
    }, [id]);

    if (!brewery) return <div>Loading...</div>;

    return (
        <div className="detail-view">
        <h2>{brewery.name}</h2>
        <p>Type: {brewery.brewery_type}</p>
        <p>Address: {brewery.street}, {brewery.city}, {brewery.state}</p>
        <p>Website: <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">{brewery.website_url}</a></p>
        <p>Phone: {brewery.phone}</p>
        </div>
    );
};

export default DetailView;
