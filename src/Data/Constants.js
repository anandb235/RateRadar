export const COIN_GECKO_MARKET_URL =
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&price_change_percentage=24h,7d,30d,1y`

export const COIN_GECKO_MARKET_CHART_URL = (coin) => `https://api.coingecko.com/api/v3/coins/${coin}/market_chart?vs_currency=usd&days=1`
export const REFRESH_INTERVAL=mins => mins * 60 * 1000

export const REFRESH_TIME_LATEST = "refreshTimeLatest"

export const MARKET_DATA_CACHE = "marketDataLatest"
export const COIN_MARKET_DATA_CACHE = (coin) => `coinMarketDataLatest${capitalize(coin)}`
export const COIN_COMPARE_CACHE = (id) => `coinCompare_${id}`

export const THEME_CACHE = "theme"
export const USER_CACHE = "googleUser"

const capitalize = s => s && String(s[0]).toUpperCase() + String(s).slice(1)