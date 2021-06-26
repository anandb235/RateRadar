import React, {useState} from 'react'
import CompareCoin from './MiniComponents/Compare/CompareCoin'
import VersusAnimation from './MiniComponents/Compare/VersusAnimation'

import '../Style/Compare.css'
import '../Style/Card.css'
import {useCoinListData} from "../Hooks/useCoinListData";

const Compare = () => {

    const [selectedCoin1, setSelectedCoin1] = useState('bitcoin')
    const [selectedCoin2, setSelectedCoin2] = useState('ethereum')

    const {coinList, loading, error} = useCoinListData();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const handleDropDownSelect = (event, data, dropdown) => {
        if (dropdown === 1) {
            setSelectedCoin1(data.value);
        }

        if (dropdown === 2) {
            setSelectedCoin2(data.value);
        }
    }

    return (
        <>
            <div className="card compare-card">
                <CompareCoin
                    className="compare-section-1"
                    coin={selectedCoin1}
                    onChange={(event, data) => handleDropDownSelect(event, data, 1)}
                    options={coinList}/>

                <VersusAnimation/>

                <CompareCoin
                    className="compare-section-2"
                    coin={selectedCoin2}
                    onChange={(event, data) => handleDropDownSelect(event, data, 2)}
                    options={coinList}/>
            </div>
        </>
    )
}

export default Compare
