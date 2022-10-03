import React from 'react'
import Chart from "chart.js/auto";
import BarChart from './BarChart'
import LineChart from './LineChart'
import PieChart from './PieChart'

const ChartJs = () => {
    return (
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
            <LineChart />
            <BarChart />
            <PieChart />
        </div>
    )
}

export default ChartJs
