import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Line} from 'react-chartjs-2'

function PinCharts({coin, className}) {
    const onSurfaceColor = getComputedStyle(document.documentElement).getPropertyValue('--on-surface').trim();
    const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary').trim();
    const secondaryTranslucentColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-translucent').trim();
    const overlineFontSize = getComputedStyle(document.documentElement).getPropertyValue('--overline-font-size').trim();
    const overlineFontWeight = getComputedStyle(document.documentElement).getPropertyValue('--overline-font-weight').trim();
    const overlineLineSpacing = getComputedStyle(document.documentElement).getPropertyValue('--overline-line-spacing').trim();
    const [chartData, setChartData] = useState({})
    const customTicks = {
        grid: {
            color: secondaryTranslucentColor, // Change the color of the x-axis grid lines
        },
        ticks: {
            color: onSurfaceColor,
            font: {
                size: overlineFontSize,
                weight: overlineFontWeight,
                lineHeight: overlineLineSpacing
            }
        }
    }
    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                    color: secondaryColor,
                    font: {
                        size: overlineFontSize,
                        weight: overlineFontWeight,
                        lineHeight: overlineLineSpacing
                    },
                },
            },
        },
        scales: {
            x: customTicks,
            y: customTicks
        },
    }

    useEffect(() => {
        const chart = (coin) => {

            let time = []
            let price = []

            axios
                .get(`https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=1`)
                .then(res => {
                    res.data["prices"].map(item => {
                        time.push(formatter(item[0]))
                        price.push(item[1])
                        return null
                    })

                    function formatter(timestamp) {
                        const date = new Date(timestamp).getDate();
                        const month = new Date(timestamp).getMonth() + 1
                        const hour = new Date(timestamp).getHours()
                        return date + "/" + month + ": " + hour;
                    }

                    setChartData({
                        labels: time,
                        datasets: [{
                            label: coin.toUpperCase(),
                            data: price,
                            backgroundColor: '#3b4ab8',
                            borderWidth: 1,
                            borderColor: '#3b4ab8'
                        }]
                    })
                })
                .catch(err => {
                    console.log(err)
                })
        }
        chart(coin)
    }, [coin])


    return (
        <div className={`card ${className}`}>
            <div style={{width: '100%', height: '100%'}}>
                <Line data={chartData} type="line" options={chartOptions}/>
            </div>
        </div>
    )
}

export default PinCharts