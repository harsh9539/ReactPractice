import React from "react";
import { Pie } from "react-chartjs-2";
const labels = ["January", "February", "March", "April", "May", "June"];
const data = {
    labels: labels,
    datasets: [
        {
            label: "My First dataset",
            backgroundColor: ["rgb(255, 99, 132)",'green',"yellow","orange","hotpink","purple"],
            borderColor: "rgb(0,0,255)",
            data: [0, 10, 5, 2, 20, 30, 45],
        },
    ],
};
const PieChart = () => {
    return (
        <div style={{width:500,height:500}}>
            <Pie data={data} />
        </div>
    );
};
export default PieChart;