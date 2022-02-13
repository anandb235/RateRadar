import React, {useRef} from 'react'
import {Line} from 'react-chartjs-2'
import {useCoinMarketChartData} from "../../../Hooks/useCoinMarketChartData";

function PinCharts({coin, className}) {

    const chartRef = useRef(null);
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();

    const options =  {
        responsive: true,
        maintainAspectRatio: false,
        plugins:
            {
                legend: {
                    labels: {
                        color: primaryColor,
                        boxWidth: 0,
                    },
                },
            }
    }

    const {coinMarketData, loading, error} = useCoinMarketChartData(coin)

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className={`card ${className}`}>
            <div style={{position: "relative", width: '99%', height: '99%'}}>
                <Line ref={chartRef} data={coinMarketData} type="line"
                      options={options}/>
            </div>
        </div>
    )
}

export default PinCharts