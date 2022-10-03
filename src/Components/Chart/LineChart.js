import React from "react";
import { Line } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
    labels: labels,
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: ["rgb(255, 99, 132)",'green',"yellow","blue"],
            borderColor: "rgb(255, 99, 132)",
            data: [0, 10, 5, 2, 20, 30, 45],
        },
    ],
};

const LineChart = () => {
    return (
        <div style={{width:800}}>
            <Line data={data} />
        </div>
    );
};

export default LineChart;