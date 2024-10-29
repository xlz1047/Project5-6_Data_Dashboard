import React from "react";
import { Bar } from "react-chartjs-2";
import "../styles/dataVisualization.css";

const DataVisualization = ({ data }) => {
    const breweryTypes = data.reduce((acc, brewery) => {
        acc[brewery.brewery_type] = (acc[brewery.brewery_type] || 0) + 1;
        return acc;
    }, {});

    const chartData = {
        labels: Object.keys(breweryTypes),
        datasets: [
        {
            label: "Brewery Types",
            data: Object.values(breweryTypes),
            backgroundColor: ["#66c2ff", "#ff9999", "#99ff99"],
        },
        ],
    };

    return (
        <div className="chart-container">
        <Bar data={chartData} />
        </div>
    );
};

export default DataVisualization;
