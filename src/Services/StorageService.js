export const getCachedData = (DATA_NAME, defaultValue) => {
    const data = localStorage.getItem(DATA_NAME)
    return data ? JSON.parse(data) : defaultValue;
}
export const setCachedData = (DATA_NAME, data) => {
    localStorage.setItem(DATA_NAME, JSON.stringify(data))
}