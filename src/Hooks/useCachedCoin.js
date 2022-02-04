import {useState} from "react";
import {COIN_COMPARE_CACHE} from "../Data/Constants";
import {getCachedData, setCachedData} from "../Services/StorageService";


export const useCachedCoin = (id) => {
    const defaultCoin = id === "1" ? "bitcoin" : "ethereum"
    const setSelectedCoinInCache = (coin) => {
        setSelectedCoin(coin)
        setCachedData(COIN_COMPARE_CACHE(id), coin)
    }

    const [selectedCoin, setSelectedCoin] = useState(getCachedData(COIN_COMPARE_CACHE(id), {label: defaultCoin, value: defaultCoin}))

    return [selectedCoin, setSelectedCoinInCache]
}