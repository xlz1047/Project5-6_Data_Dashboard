import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BreweryDetail = () => {
    const { id } = useParams(); // Get the ID from the URL
    const [brewery, setBrewery] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBrewery = async () => {
            try {
                const response = await axios.get(`https://api.openbrewerydb.org/breweries/${id}`);
                setBrewery(response.data);
            } catch (error) {
                console.error("Error fetching brewery details", error);
            } finally {
                setLoading(false);
            }
        };
        fetchBrewery();
    }, [id]);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (!brewery) {
        return <p>No brewery found!</p>;
    }

    return (
        <div>
            <h2>{brewery.name}</h2>
            <p>Type: {brewery.brewery_type}</p>
            <p>City: {brewery.city}</p>
            <p>State: {brewery.state}</p>
            <p>Address: {brewery.street}</p>
            <p>Phone: {brewery.phone}</p>
            <p>Website: <a href={brewery.website_url} target="_blank" rel="noopener noreferrer">{brewery.website_url}</a></p>
            <p>Details: {brewery.description || "No additional information available."}</p>
        </div>
    );
};

export default BreweryDetail;
