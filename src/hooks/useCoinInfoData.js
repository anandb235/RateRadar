import {useEffect, useState} from "react";
import {useMarketData} from "./useMarketData";
import {DEFAULT_LOADING_TIMEOUT} from "../data/Constants";

export const useCoinInfoData = (coin) => {
    const coinValue = coin.value;
    const [coinData, setCoinData] = useState(null);
    const {marketData, loading: marketLoading, error: marketError} = useMarketData();
    const [loading, setLoading] = useState(!coinData || marketLoading);
    const [error, setError] = useState(marketError);

    useEffect(() => {
        const fetchCoinData = () => {
            setLoading(true);

            if (marketLoading) return null
            
            try {
                const res = marketData.find(coin => coin.id === coinValue);
                const objData = {
                    marketRank: res.marketRank,
                    currentPrice: res.price,
                    marketCap: res.marketCap,
                    circSupply: res.circSupply,
                    totalSupply: res.totalSupply,
                    percentChange: res.percentChange,
                    symbol: res.symbol
                }
                setCoinData(objData)
                setError(null);
            } catch (err) {
                console.error(err);
                setError(`Failed to info for ${coinValue}`);
            } finally {
                setTimeout(()=>setLoading(false), DEFAULT_LOADING_TIMEOUT)
            }
        };

        fetchCoinData();
    }, [coinValue, marketData, marketLoading]);

    return {coinData, loading, error};
};