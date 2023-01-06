import React from 'react'
import {VirtualizedDropdown} from "../Home/VirtualizedDropdown";

import {useCoinInfoData} from "../../../Hooks/useCoinInfoData";
import {ShimmerSectionHeader} from "shimmer-effects-react";
import {useTheme} from "../../../Hooks/useTheme";
import {ErrorPlaceHolder} from "../../../Assets/placeholders";

const CompareCoin = ({coin, options, onChange, className, arrowPosition}) => {

    const {coinData: data, loading, error} = useCoinInfoData(coin)
    const {lightMode} = useTheme()

    if (loading) {
        return <div className={`compare-coin-container ${className}`}>
            <ShimmerSectionHeader
                className="shimmer"
                center={true}
                titleHeight={40}
                titleGap={50}
                subtitleGap={35}
                mode={lightMode ?  "light" : "dark"}
            />
        </div>;
    }

    if (error) {
        return (
            <div className={`compare-coin-container ${className}`}>
                <ErrorPlaceHolder/>
            </div>
        );
    }

    return (
        <div className={`compare-coin-container ${className}`}>
            <VirtualizedDropdown loading={loading} value={coin} options={options} handleOnChange={onChange}
                                 arrowPosition={arrowPosition} compare/>
            <div className="lists">
                <ul>
                    <li>Rank</li>
                    <li>Current Price</li>
                    <li>Market Capital</li>
                    <li>Circulating Supply</li>
                    <li>Total Supply</li>
                </ul>
                <ul>
                    <li>:</li>
                    <li>:</li>
                    <li>:</li>
                    <li>:</li>
                    <li>:</li>
                </ul>
                <ul>
                    <li>{data.marketRank}</li>
                    <li>{data.currentPrice}</li>
                    <li>{data.marketCap}</li>
                    <li>{data.circSupply}</li>
                    <li>{data.totalSupply}</li>
                </ul>
            </div>
            <span className="percent-change">Percent Change in Last...</span>
            <table className="percent-table">
                <thead>
                <tr>
                    <th>24 Hrs</th>
                    <th>1 Week</th>
                    <th>1 Month</th>
                    <th>1 Year</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>{data.percentChange.day}</td>
                    <td>{data.percentChange.week}</td>
                    <td>{data.percentChange.month}</td>
                    <td>{data.percentChange.year}</td>
                </tr>
                </tbody>
            </table>
        </div>)
}

export default CompareCoin
