import {useEffect, useState} from "react";
import axios from "axios";
import {COIN_GECKO_MARKET_URL, MARKET_DATA_CACHE, REFRESH_INTERVAL} from "../Data/Constants";
import {setRefreshTime, shouldRefreshData} from "../Services/RefreshService";
import {getCachedData, setCachedData} from "../Services/StorageService";

export const useMarketData = () => {
    const [marketData, setMarketData] = useState(getCachedData(MARKET_DATA_CACHE, []));
    const [loading, setLoading] =
        useState(!Array.isArray(marketData) || !marketData.length)
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMarketData = async () => {
            setLoading(true);
            try {
                const res = await axios.get(COIN_GECKO_MARKET_URL);

                const formattedData = res.data.map(coin => {
                    const cap = coin["market_cap"] || ''
                    const circ = coin["circulating_supply"] || ''
                    const tot = coin["total_supply"] || ''
                    return {
                        id: coin.id,
                        name: coin.name,
                        price: Number(coin["current_price"].toFixed(3)),
                        change: Number(coin["price_change_24h"].toFixed(2)),
                        bgColor: coin["price_change_24h"] < 0 ? 'var(--error)' : 'var(--surface)',
                        color: coin["price_change_24h"] < 0 ? 'var(--on-error)' : 'var(--secondary)',
                        marketRank: coin["market_cap_rank"],
                        marketCap: bigNumFormat(parseFloat(cap), cap.length),
                        circSupply: bigNumFormat(parseFloat(circ), circ.length),
                        totalSupply: (tot !== null) ? bigNumFormat(parseFloat(tot), tot.length) : "NA",
                        percentChange: {
                            day: Number((coin["price_change_percentage_24h_in_currency"] || 0).toFixed(3)),
                            week: Number((coin["price_change_percentage_7d_in_currency"] || 0).toFixed(3)),
                            month: Number((coin["price_change_percentage_30d_in_currency"] || 0).toFixed(3)),
                            year: Number((coin["price_change_percentage_1y_in_currency"] || 0).toFixed(3))
                        },
                        symbol: coin["symbol"]
                    }
                });
                setMarketData(formattedData);
                setCachedData(MARKET_DATA_CACHE, formattedData)
                setRefreshTime(MARKET_DATA_CACHE)
                setError(null);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch market data');
            } finally {
                setLoading(false);
            }
        };


        if (shouldRefreshData(MARKET_DATA_CACHE)) {
            fetchMarketData();
        }

        const intervalId = setInterval(fetchMarketData, REFRESH_INTERVAL(10));

        return () => clearInterval(intervalId);
    }, []);

    return {marketData, loading, error};
};

const bigNumFormat = (num, digits) => {

    const lookup = [
        {value: 1, symbol: ""},
        {value: 1e3, symbol: "k"},
        {value: 1e6, symbol: "M"},
        {value: 1e9, symbol: "B"}
    ]

    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/
    const item = lookup.slice().reverse().find(item => num >= item.value)

    return item ? (num / item.value).toFixed(digits).replace(rx, "$1") + " " + item.symbol : "0"
}