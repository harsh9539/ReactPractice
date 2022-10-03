import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = () => {
    const labels = ["January", "February", "March", "April", "May", "June"];
    const data = {
        labels: labels,
        datasets: [
            {
                label: "My First dataset",
                backgroundColor: ["rgb(255, 99, 132)",'green','yellow'],
                borderColor: ["rgb(255, 99, 132)"],
                data: [0, 10, 5, 2, 20, 30, 45],
            },
        ],
    };
    return (
        <div style={{width:800}}>
            <Bar data={data} />
        </div>
    );
};

export default BarChart;