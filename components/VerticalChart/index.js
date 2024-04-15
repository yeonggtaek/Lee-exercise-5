import styles from './VerticalChart.module.css'
import { Bar } from 'react-chartjs-2'

import {
    Chart as ChartJs,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { useEffect, useState } from 'react'

ChartJs.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
)

export default function VerticalChart() {
    const [chartData, setChartData] = useState({
        datasets: []
    })
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        setChartData({
            labels: ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],
            datasets: [
                {
                   label: 'Sales $',
                   data: [154, 222, 195, 163, 286, 145, 310],
                   borderColor: 'rgb(53, 162, 235)',
                   backgroundColor: 'rgba(53, 162, 235, 0.4)' 
                }
            ]
        })

        setChartOptions({
            plugins: {
                legend: {
                    position: 'top'
                },
                title: {
                    display: true,
                    text: "Daily Revenue"
                }
            },
            maintainAspectRatio: false,
            responsive: true
        })    
    }, [])

    return(
        <>
            <Bar data={chartData} options={chartOptions} style={{width: "500px", height: "300px"}}/>
        </>
    )
}