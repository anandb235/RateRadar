import React, {useEffect, useState} from 'react'
import '../../../style/Markets.css'
import {useMarketData} from "../../../hooks/useMarketData";
import {RateTable} from "./RateTable";
import {ShimmerTable} from "shimmer-effects-react";
import {useTheme} from "../../../hooks/useTheme";
import {ErrorPlaceHolder} from "../../../assets/placeholders";

const Markets = () => {
    const {marketData, loading, error} = useMarketData();

    const [tableData, setTableData] = useState([]);

    const {lightMode} = useTheme()

    useEffect(() => {
        const newData = marketData.map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            color: item.color,
            bgColor: item.bgColor,
            change: item.percentChange.day
        }))

        setTableData(newData);
    }, [marketData])

    if (loading) {
        return (
            <div className="card market-card">
                <ShimmerTable
                    mode={lightMode ? "light" : "dark"}
                    row={15}
                    col={3}
                    border={0}
                    rounded={0.25}
                    rowGap={10}
                    colPadding={[10, 5, 10, 5]}
                />
            </div>);
    }

    if (error) {
        return (
            <div className="card market-card">
                <ErrorPlaceHolder />
            </div>
        );
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
            <RateTable data={tableData} columns={["Currency", "Price", "Growth (%)"]}/>
        </div>
    );
}

export default Markets;