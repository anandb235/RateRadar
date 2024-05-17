import React from 'react'
import CompareCoin from './mini-components/Compare/CompareCoin'
import VersusAnimation from './mini-components/Compare/VersusAnimation'

import '../style/Compare.css'
import '../style/Card.css'
import {useCoinListData} from "../hooks/useCoinListData";
import {useCachedCoin} from "../hooks/useCachedCoin";
import {ShimmerTitle} from "shimmer-effects-react";
import {useTheme} from "../hooks/useTheme";
import {ErrorPlaceHolder} from "../assets/placeholders";

const Compare = () => {

    const [selectedCoin1, setSelectedCoin1] = useCachedCoin("1")
    const [selectedCoin2, setSelectedCoin2] = useCachedCoin("2")

    const {coinList, loading, error} = useCoinListData();
    const {lightMode} = useTheme()

    if (loading) {
        return <div className="card compare-card">
            <ShimmerTitle
                className="shimmer"
                mode={lightMode ? "light" : "dark"}
                line={10}
                gap={8}/>
        </div>;
    }

    if (error) {
        return (
            <div className="card compare-card">
                <ErrorPlaceHolder/>
            </div>
        );
    }

    const handleDropDownSelect = (event, dropdown) => {
        if (dropdown === 1) {
            setSelectedCoin1(event);
        }

        if (dropdown === 2) {
            setSelectedCoin2(event);
        }
    }

    return (
        <>
            <div className="card compare-card">
                <CompareCoin
                    className="compare-section-1"
                    coin={selectedCoin1}
                    onChange={(event) => handleDropDownSelect(event, 1)}
                    options={coinList}
                    arrowPosition="left"/>

                <VersusAnimation/>

                <CompareCoin
                    className="compare-section-2"
                    coin={selectedCoin2}
                    onChange={(event) => handleDropDownSelect(event, 2)}
                    options={coinList}
                    arrowPosition="right"/>
            </div>
        </>
    )
}

export default Compare
