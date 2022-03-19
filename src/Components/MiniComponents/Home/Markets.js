import React from 'react'
import '../../../Style/Markets.css'
import {useMarketData} from "../../../Hooks/useMarketData";
import {RateTable} from "./RateTable";

const Markets = () => {
    const { marketData, loading, error } = useMarketData();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="card market-card">
            <div className="card-head">
                <div className="card-title">The Market</div>
                <div className="currency-converter">
                    Currency: <span className="current-currency">USD</span>
                </div>
            </div>
            <div className="horizontal-divider"></div>
            <RateTable data={marketData} columns={["Currency", "Price", "Growth"]}/>
        </div>
    );
}

export default Markets;