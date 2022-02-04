import {useEffect, useState} from "react";
import axios from "axios";
import {COIN_GECKO_COIN_LIST_URL, COIN_LIST_CACHE, REFRESH_INTERVAL} from "../Data/Constants";
import {setRefreshTime, shouldRefreshData} from "../Services/RefreshService";
import {getCachedData, setCachedData} from "../Services/StorageService";

export const useCoinListData = () => {
    const [coinList, setCoinList] = useState(getCachedData(COIN_LIST_CACHE, []));
    const [loading, setLoading] = useState(!Array.isArray(coinList) || !coinList.length);
    const [error, setError] = useState(null);

    const fetchCoinList = async () => {
        setLoading(true);
        try {
            const res = await axios.get(COIN_GECKO_COIN_LIST_URL);
            const listItems = res.data.map(coin => {
                return {
                    label: coin.name,
                    value: coin.id,
                }
            });
            setCoinList(listItems);
            setCachedData(COIN_LIST_CACHE, listItems)
            setRefreshTime(COIN_LIST_CACHE)
            setError(null);
        } catch (err) {
            console.error(err);
            setError('Failed to fetch market data');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (shouldRefreshData(COIN_LIST_CACHE)) {
            fetchCoinList();
        }

        const intervalId = setInterval(fetchCoinList, REFRESH_INTERVAL);

        return () => clearInterval(intervalId);
    }, []);

    return {coinList, loading, error};
};