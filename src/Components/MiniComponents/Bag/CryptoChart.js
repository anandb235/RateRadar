import React, {useEffect, useMemo, useRef, useState} from "react";
import {useCoinMarketChartData} from "../../../Hooks/useCoinMarketChartData";
import {Line} from "react-chartjs-2";
import {ShimmerBarChart} from "shimmer-effects-react";
import {ErrorPlaceHolder} from "../../../Assets/placeholders";
import {useTheme} from "../../../Hooks/useTheme";

export const CryptoChart = ({coinList}) => {

    const coinIdList = useMemo(() => coinList.map((coin) => coin.id), [coinList])
    const {coinMarketData, loading, error} = useCoinMarketChartData(coinIdList);

    const [resultChartData, setResultChartData] = useState([])

    const chartRef = useRef(null);
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
    const {lightMode} = useTheme()
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins:
            {
                legend: {
                    labels: {
                        color: primaryColor,
                        boxWidth: 0,
                        fontSize: 25,
                    },
                },
            }
    }

    useEffect(() => {
        if (loading || !coinList.length || (Object.keys(coinMarketData).length === 0)) {
            setResultChartData([])
            return
        }

        const coinMarketDataCopy = JSON.parse(JSON.stringify(coinMarketData));
        const resultObject = Object.values(coinMarketDataCopy)[0];
        resultObject.datasets[0].label = "Your Assets"
        resultObject.datasets[0].data = new Array(resultObject.datasets[0].data.length).fill(0);

        coinList.forEach(({id, owned}) => {
            coinMarketData[id]?.datasets[0].data.forEach((dataPoint, index) => {
                resultObject.datasets[0].data[index] += owned * dataPoint
            });
        });

        setResultChartData(resultObject);

    }, [coinList, coinMarketData, loading])

    if (loading) {
        return <ShimmerBarChart
            mode={lightMode ? "light" : "dark"}
            chartType="random"
            barWidth={"7%"}
        />
    }

    if (error) {
        return (
            <div>
                <ErrorPlaceHolder/>
            </div>
        );
    }

    return <div style={{position: "relative", width: '99%', height: '70%'}}>
        <Line ref={chartRef} data={resultChartData} type="line"
              options={options}/>
    </div>
}