import {useState} from "react";
import {COIN_COMPARE_CACHE} from "../data/Constants";
import {getCachedData, setCachedData} from "../services/StorageService";


export const useCachedCoin = (id) => {
    const defaultCoin = id === "2" ? "ethereum" : "bitcoin"
    const setSelectedCoinInCache = (coin) => {
        setSelectedCoin(coin)
        setCachedData(COIN_COMPARE_CACHE(id), coin)
    }

    const [selectedCoin, setSelectedCoin] = useState(getCachedData(COIN_COMPARE_CACHE(id), {
        label: defaultCoin,
        value: defaultCoin
    }))

    return [selectedCoin, setSelectedCoinInCache]
}