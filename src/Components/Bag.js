import React, {useEffect, useState} from 'react'

import '../Style/Compare.css'
import '../Style/Card.css'
import '../Style/Bag.css'
import {AddCrypto} from "./MiniComponents/Bag/AddCrypto";
import {RateTable} from "./MiniComponents/Home/RateTable";
import {useOwnedCrypto} from "../Hooks/useOwnedCrypto";
import {addOwnedCrypto, deleteOwnedCrypto, updateOwnedCrypto} from "../Services/StorageService";
import {CryptoChart} from "./MiniComponents/Bag/CryptoChart";
import {useMarketData} from "../Hooks/useMarketData";
import {ChartPlaceHolder, TablePlaceHolder} from "../Assets/placeholders";

const Bag = () => {
    const crypto = useOwnedCrypto()
    const {marketData, loading: marketLoading} = useMarketData()


    const [tableData, setTableData] = useState([])

    const addItem = (item, remove) => {

        const index = crypto.findIndex((obj) => obj.id === item.id);
        if (index === -1) {
            if (remove) return
            //1: create
            addOwnedCrypto(item)
        } else if (remove) {
            //2: delete
            deleteOwnedCrypto({...item, docId: crypto[index].docId})
        } else {
            //3: update
            updateOwnedCrypto({...item, docId: crypto[index].docId})
        }
    }

    useEffect(() => {
        if (marketLoading) setTableData([])

        const amountMap = new Map(crypto.map(obj => [obj.id, {change: obj.owned, docId: obj.docId}]))

        const result = marketData.filter(obj => amountMap.has(obj.id)).map(obj => ({
            ...obj,
            ...amountMap.get(obj.id),
            color: "var(--on-surface)",
            bgColor: "var(--surface)",
        }))

        setTableData(result)

    }, [crypto, marketData, marketLoading]);

    return (
        <>
            <div className="card bag-card">
                <div className="bag-left">
                    <AddCrypto onDataAdded={(data, remove) => addItem(data, remove)}/>
                    <div className="bag-table-container">
                        {
                            tableData.length ?
                                <RateTable data={tableData} columns={["Currency", "Price", "Owned Value"]}/>:
                                <TablePlaceHolder />
                        }
                    </div>
                </div>
                <div className="bag-right">
                    {
                        (Object.keys(crypto).length !== 0) ?
                            <CryptoChart coinList={crypto}/>:
                            <ChartPlaceHolder />
                    }
                </div>
            </div>
        </>
    )
}

export default Bag
