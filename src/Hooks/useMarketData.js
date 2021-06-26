import {useEffect, useState} from "react";
import axios from "axios";
import {COIN_GECKO_MARKET_URL, MARKET_DATA_CACHE, REFRESH_INTERVAL} from "../Data/Constants";
import {setRefreshTime, shouldRefreshData} from "../Services/RefreshService";

export const useMarketData = () => {
    const [marketData, setMarketData] = useState(() => {
        const cachedData = localStorage.getItem(MARKET_DATA_CACHE);
        return cachedData ? JSON.parse(cachedData) : [];
    });
    const [loading, setLoading] =
        useState(!Array.isArray(marketData) || !marketData.length)
    const [error, setError] = useState(null);

    const fetchMarketData = async () => {
        setLoading(true);
        try {
            const res = await axios.get(COIN_GECKO_MARKET_URL);
            const formattedData = res.data.map(coin => ({
                id: coin.id,
                name: coin.name,
                price: Number(coin["current_price"].toFixed(3)),
                change: Number(coin["price_change_percentage_24h"].toFixed(2)),
                bgColor: coin["price_change_percentage_24h"] < 0 ? 'var(--error)' : 'var(--surface)',
                color: coin["price_change_percentage_24h"] < 0 ? 'var(--on-error)' : 'var(--secondary)'
            }));
            setMarketData(formattedData);
            localStorage.setItem(MARKET_DATA_CACHE, JSON.stringify(formattedData));
            setRefreshTime(MARKET_DATA_CACHE)
            setError(null);
        } catch (err) {
            console.error(err);
            setError('Failed to fetch market data');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (shouldRefreshData(MARKET_DATA_CACHE)) {
            fetchMarketData();
        }

        const intervalId = setInterval(fetchMarketData, REFRESH_INTERVAL);

        return () => clearInterval(intervalId);
    }, []);

    return {marketData, loading, error};
};