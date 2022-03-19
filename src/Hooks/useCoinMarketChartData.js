import {useEffect, useState} from "react";
import axios from "axios";
import {COIN_GECKO_MARKET_CHART_URL, COIN_MARKET_DATA_CACHE} from "../Data/Constants";
import {getCachedData, setCachedData} from "../Services/StorageService";

export const useCoinMarketChartData = (coinList) => {
    const [coinMarketData, setCoinMarketData] = useState(() => {
        const newObj = {}
        coinList.forEach((coin) => {
            newObj[coin] = getCachedData(COIN_MARKET_DATA_CACHE(coin), null)
        })
        return newObj;
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCoinMarketData = async (coin) => {
            try {
                let time = []
                let price = []
                const res = await axios.get(COIN_GECKO_MARKET_CHART_URL(coin));
                res.data["prices"].map(item => {
                    time.push(formatter(item[0]))
                    price.push(item[1])
                    return null
                })
                const objData = {
                    labels: time,
                    datasets: [{
                        label: coin.toUpperCase(),
                        data: price,
                        backgroundColor: '#3b4ab8',
                        borderWidth: 1,
                        borderColor: '#3b4ab8'
                    }]
                }
                setCachedData(COIN_MARKET_DATA_CACHE(coin), objData)
                return objData
            } catch (err) {
                console.error(err);
                setError(`Failed to info for ${coin}`);
            }
        };

        const fetchAllData = async () => {
            const updatedCoinMarketData = {};

            await Promise.all(coinList.map(async (coin) => {
                let data = getCachedData(COIN_MARKET_DATA_CACHE(coin), null);
                if (!data) {
                    data = await fetchCoinMarketData(coin);
                }
                updatedCoinMarketData[coin] = data;
            }));

            setCoinMarketData(updatedCoinMarketData);
        };

        fetchAllData().then(() => {
            setLoading(false);
            setError(null);
        });
    }, [coinList]);

    return {coinMarketData, loading, error};
};

const formatter = (timestamp) => {
    const dateObj = new Date(timestamp);
    const date = dateObj.getDate();
    const month = dateObj.getMonth() + 1;
    const hour = dateObj.getHours();
    return `${date}/${month}: ${hour}`;
};