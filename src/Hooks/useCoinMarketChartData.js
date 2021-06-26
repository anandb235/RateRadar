import {useEffect, useState} from "react";
import axios from "axios";
import {COIN_GECKO_MARKET_CHART_URL, COIN_MARKET_DATA_CACHE, REFRESH_INTERVAL} from "../Data/Constants";
import {setRefreshTime, shouldRefreshData} from "../Services/RefreshService";

export const useCoinMarketChartData = (coin) => {
    const [coinMarketData, setCoinMarketData] = useState(() => {
        const cachedData = localStorage.getItem(COIN_MARKET_DATA_CACHE(coin));
        return cachedData ? JSON.parse(cachedData) : null;
    });
    const [loading, setLoading] = useState(!coinMarketData);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCoinMarketData = async () => {
            setLoading(true);
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
                setCoinMarketData(objData)
                localStorage.setItem(COIN_MARKET_DATA_CACHE(coin), JSON.stringify(objData));
                setRefreshTime(COIN_MARKET_DATA_CACHE(coin))
                setError(null);
            } catch (err) {
                console.error(err);
                setError(`Failed to info for ${coin}`);
            } finally {
                setLoading(false);
            }
        };

        if (shouldRefreshData(COIN_MARKET_DATA_CACHE(coin))) {
            fetchCoinMarketData();
        }

        const intervalId = setInterval(fetchCoinMarketData, REFRESH_INTERVAL);

        return () => clearInterval(intervalId);
    }, [coin]);

    return {coinMarketData, loading, error};
};

const formatter = (timestamp) => {
    const date = new Date(timestamp).getDate();
    const month = new Date(timestamp).getMonth() + 1
    const hour = new Date(timestamp).getHours()
    return date + "/" + month + ": " + hour;
}