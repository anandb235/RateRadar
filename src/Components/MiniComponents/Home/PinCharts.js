import React from 'react'
import {Line} from 'react-chartjs-2'
import {useCoinMarketChartData} from "../../../Hooks/useCoinMarketChartData";

function PinCharts({coin, className}) {
    const onSurfaceColor = getComputedStyle(document.documentElement).getPropertyValue('--on-surface').trim();
    const secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary').trim();
    const secondaryTranslucentColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary-translucent').trim();
    const overlineFontSize = getComputedStyle(document.documentElement).getPropertyValue('--overline-font-size').trim();
    const overlineFontWeight = getComputedStyle(document.documentElement).getPropertyValue('--overline-font-weight').trim();
    const overlineLineSpacing = getComputedStyle(document.documentElement).getPropertyValue('--overline-line-spacing').trim();

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

    const {coinMarketData, loading, error} = useCoinMarketChartData(coin)

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className={`card ${className}`}>
            <div style={{width: '100%', height: '100%'}}>
                <Line data={coinMarketData} type="line" options={chartOptions}/>
            </div>
        </div>
    )
}

export default PinCharts