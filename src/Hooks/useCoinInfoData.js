import {useEffect, useState} from "react";
import axios from "axios";
import {COIN_DATA_CACHE, COIN_GECKO_COIN_INFO_URL, REFRESH_INTERVAL} from "../Data/Constants";
import {setRefreshTime, shouldRefreshData} from "../Services/RefreshService";

export const useCoinInfoData = (coin) => {
    const dataObj = {
        marketRank: "NA",
        currentPrice: 0,
        marketCap: "NA",
        circSupply: "NA",
        totalSupply: "NA",
        percentChange: {
            day: "NA", week: "NA", month: "NA", year: "NA"
        }
    }

    const [coinData, setCoinData] = useState(() => {
        const cachedData = localStorage.getItem(COIN_DATA_CACHE(coin));
        return cachedData ? JSON.parse(cachedData) : null;
    });
    const [loading, setLoading] = useState(!coinData);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCoinData = async () => {
            setLoading(true);
            try {
                const res = await axios.get(COIN_GECKO_COIN_INFO_URL(coin));
                const obj = res.data
                const marketData = obj["market_data"]
                const cap = marketData["market_cap"]["usd"] || ''
                const circ = marketData["circulating_supply"] || ''
                const tot = marketData["total_supply"] || ''
                const objData = {
                    marketRank: obj["market_cap_rank"],
                    currentPrice: marketData["current_price"]["usd"] || 0,
                    marketCap: bigNumFormat(parseFloat(cap), cap.length),
                    circSupply: bigNumFormat(parseFloat(circ), circ.length),
                    totalSupply: (tot !== null) ? bigNumFormat(parseFloat(tot), tot.length) : "NA",
                    percentChange: {
                        day: marketData["price_change_percentage_24h"],
                        week: marketData["price_change_percentage_7d"],
                        month: marketData["price_change_percentage_30d"],
                        year: marketData["price_change_percentage_1y"]
                    }
                }
                setCoinData(objData)
                localStorage.setItem(COIN_DATA_CACHE(coin), JSON.stringify(objData));
                setRefreshTime(COIN_DATA_CACHE(coin))
                setError(null);
            } catch (err) {
                console.error(err);
                setError(`Failed to info for ${coin}`);
            } finally {
                setLoading(false);
            }
        };

        if (shouldRefreshData(COIN_DATA_CACHE(coin))) {
            fetchCoinData();
        }

        const intervalId = setInterval(fetchCoinData, REFRESH_INTERVAL);

        return () => clearInterval(intervalId);
    }, [coin]);

    const data = (coinData ? coinData : dataObj)
    return {data, loading, error};
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