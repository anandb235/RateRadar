import React, {useEffect, useState} from 'react'

import '../style/Compare.css'
import '../style/Card.css'
import '../style/Bag.css'
import {AddCrypto} from "./mini-components/Bag/AddCrypto";
import {RateTable} from "./mini-components/Home/RateTable";
import {useOwnedCrypto} from "../hooks/useOwnedCrypto";
import {addOwnedCrypto, deleteOwnedCrypto, updateOwnedCrypto} from "../services/StorageService";
import {CryptoChart} from "./mini-components/Bag/CryptoChart";
import {useMarketData} from "../hooks/useMarketData";
import {ChartPlaceHolder, ErrorPlaceHolder, TablePlaceHolder} from "../assets/placeholders";
import {ShimmerBarChart, ShimmerTable} from "shimmer-effects-react";
import {useTheme} from "../hooks/useTheme";

const Bag = () => {
    const {crypto, loading: cryptoLoading} = useOwnedCrypto()
    const {marketData, loading: marketLoading, error: marketError} = useMarketData()
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const {lightMode} = useTheme()

    const [tableData, setTableData] = useState([])

    const addItem = (item, remove) => {

        const index = crypto.findIndex((obj) => obj.id === item.id);
        if (index === -1) {
            if (remove) return
            //1: create
            addOwnedCrypto(item, setLoading, setError)
        } else if (remove) {
            //2: delete
            deleteOwnedCrypto({...item, docId: crypto[index].docId}, setLoading, setError)
        } else {
            //3: update
            updateOwnedCrypto({...item, docId: crypto[index].docId}, setLoading, setError)
        }
    }

    useEffect(() => {
        if (marketLoading || cryptoLoading) setTableData([])

        const amountMap = new Map(crypto.map(obj => [obj.id, {change: obj.owned, docId: obj.docId}]))

        const result = marketData.filter(obj => amountMap.has(obj.id)).map(obj => ({
            ...obj,
            ...amountMap.get(obj.id),
            color: "var(--on-surface)",
            bgColor: "var(--surface)",
        }))

        setTableData(result)

    }, [crypto, marketData, marketLoading, cryptoLoading]);

    if (error || marketError) {
        return (
            <div className="card bag-card">
                <ErrorPlaceHolder/>
            </div>
        );
    }

    return (
        <>
            <div className="card bag-card">
                <div className="bag-left">
                    <AddCrypto onDataAdded={(data, remove) => addItem(data, remove)}/>
                    <div className="bag-table-container">
                        {
                            !(marketLoading || cryptoLoading || loading) ?
                                tableData.length ?
                                    <RateTable data={tableData} columns={["Currency", "Price", "Owned Value"]}/> :
                                    <TablePlaceHolder/> :
                                <ShimmerTable
                                    className="shimmer"
                                    mode={lightMode ? "light" : "dark"}
                                    row={5}
                                    col={3}
                                    border={0}
                                    rounded={0.25}
                                    rowGap={10}
                                    colPadding={[10, 5, 10, 5]}
                                />
                        }
                    </div>
                </div>
                <div className="bag-right">
                    {
                        !(marketLoading || cryptoLoading || loading) ?
                            (Object.keys(crypto).length !== 0) ?
                                <CryptoChart coinList={crypto}/> :
                                <ChartPlaceHolder/> :
                            <ShimmerBarChart
                                mode={lightMode ? "light" : "dark"}
                                chartType="random"
                                barWidth={"7%"}
                            />
                    }
                </div>
            </div>
        </>
    )
}

export default Bag
