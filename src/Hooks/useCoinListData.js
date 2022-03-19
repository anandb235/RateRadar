import {useEffect, useState} from "react";
import {useMarketData} from "./useMarketData";

export const useCoinListData = () => {
    const [coinList, setCoinList] = useState([]);
    const {marketData, loading: marketLoading, error: marketError} = useMarketData()
    const [loading, setLoading] = useState(!Array.isArray(coinList) || !coinList.length || marketLoading);
    const [error, setError] = useState(marketError);

    useEffect(() => {
        const fetchCoinList = () => {
            setLoading(true);
            try {
                const listItems = marketData.map(coin => {
                    return {
                        label: coin.name,
                        value: coin.id,
                    }
                });
                setCoinList(listItems);
                setError(null);
            } catch (err) {
                console.error(err);
                setError('Failed to fetch market data');
            } finally {
                setLoading(false);
            }
        };

        fetchCoinList();

    }, [marketData]);

    return {coinList, loading, error};
};