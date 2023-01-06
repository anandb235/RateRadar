import React from 'react'
import CompareCoin from './MiniComponents/Compare/CompareCoin'
import VersusAnimation from './MiniComponents/Compare/VersusAnimation'

import '../Style/Compare.css'
import '../Style/Card.css'
import {useCoinListData} from "../Hooks/useCoinListData";
import {useCachedCoin} from "../Hooks/useCachedCoin";
import {ShimmerTitle} from "shimmer-effects-react";
import {useTheme} from "../Hooks/useTheme";
import {ErrorPlaceHolder} from "../Assets/placeholders";

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
