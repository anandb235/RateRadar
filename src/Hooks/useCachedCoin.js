import {useState} from "react";
import {COIN_COMPARE_CACHE} from "../Data/Constants";


export const useCachedCoin = (id) => {
    const defaultCoin = id === "1" ? "bitcoin" : "ethereum"
    const setSelectedCoinInCache = (coin) => {
        setSelectedCoin(coin)
        localStorage.setItem(COIN_COMPARE_CACHE(id), JSON.stringify(coin));
    }

    const [selectedCoin, setSelectedCoin] = useState(() => {
        const cachedCoin = localStorage.getItem(COIN_COMPARE_CACHE(id));
        return cachedCoin ? JSON.parse(cachedCoin) : {label: defaultCoin, value: defaultCoin};
    })

    return [selectedCoin, setSelectedCoinInCache]
}