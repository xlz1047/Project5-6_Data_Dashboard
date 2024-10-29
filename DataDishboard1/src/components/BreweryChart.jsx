import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BreweryChart = ({ breweries }) => {
    const breweryTypes = {};

    breweries.forEach(brewery => {
        breweryTypes[brewery.brewery_type] = (breweryTypes[brewery.brewery_type] || 0) + 1;
    });

    const data = {
        labels: Object.keys(breweryTypes),
        datasets: [
            {
                label: 'Number of Breweries',
                data: Object.values(breweryTypes),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    };

    if (!breweries || breweries.length === 0) {
        return <p>No data available for the chart.</p>;
    }

    return (
        <div>
            <h2>Brewery Types Chart</h2>
            <Bar data={data} />
        </div>
    );
};

export default BreweryChart;
