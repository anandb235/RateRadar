export const COIN_GECKO_MARKET_URL =
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd`

export const COIN_GECKO_COIN_LIST_URL = "https://api.coingecko.com/api/v3/coins/list"

export const COIN_GECKO_COIN_INFO_URL = (coin) => `https://api.coingecko.com/api/v3/coins/${coin}/`

export const COIN_GECKO_MARKET_CHART_URL = (coin) => `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=1`
export const REFRESH_INTERVAL = 5 * 60 * 1000

export const REFRESH_TIME_LATEST = "refreshTimeLatest"

export const MARKET_DATA_CACHE = "marketDataLatest"
export const COIN_LIST_CACHE = "coinListLatest"
export const COIN_DATA_CACHE = (coin) => `coinDataLatest${capitalize(coin)}`
export const COIN_MARKET_DATA_CACHE = (coin) => `coinMarketDataLatest${capitalize(coin)}`
export const COIN_COMPARE_CACHE = (id) => `coinCompare_${id}`

const capitalize = s => s && String(s[0]).toUpperCase() + String(s).slice(1)