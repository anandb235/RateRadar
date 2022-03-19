import {REFRESH_INTERVAL, REFRESH_TIME_LATEST} from "../Data/Constants";

export const shouldRefreshData = (DATA_NAME) => {
    const refreshTokenName = REFRESH_TIME_LATEST+"_"+DATA_NAME
    const lastRefreshTime = localStorage.getItem(refreshTokenName)
    const currentTime = Date.now()

    if (lastRefreshTime && (parseInt(lastRefreshTime) + REFRESH_INTERVAL(10) > currentTime)){
        return false
    }

    localStorage.setItem(refreshTokenName, currentTime.toString())
    return true
}

export const setRefreshTime = (DATA_NAME) => {
    const refreshTokenName = REFRESH_TIME_LATEST+"_"+DATA_NAME
    const currentTime = Date.now()
    localStorage.setItem(refreshTokenName, currentTime.toString())
}