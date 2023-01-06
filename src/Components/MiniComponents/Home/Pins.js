import React, {useState} from 'react'

import '../../../Style/Pins.css'
import ArrowSvg from './ArrowSvg'
import 'semantic-ui-css/components/dropdown.css'
import 'semantic-ui-css/components/reset.css'
import 'semantic-ui-css/components/transition.css'
import {VirtualizedDropdown} from "./VirtualizedDropdown";
import PinCharts from "./PinCharts";
import {useCoinListData} from "../../../Hooks/useCoinListData";
import {useCachedCoin} from "../../../Hooks/useCachedCoin";
import {ErrorPlaceHolder} from "../../../Assets/placeholders";

const Pins = () => {

    const [selectedCoin1, setSelectedCoin1] = useCachedCoin("1")
    const [selectedCoin2, setSelectedCoin2] = useCachedCoin("2")

    const {coinList, loading, error} = useCoinListData();

    if (error) {
        return <div className="card pin-card">
            <ErrorPlaceHolder />
        </div>;
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
        <div className="card pin-card">
            <PinCharts className="chart1" coin={selectedCoin1.value}/>
            <div className="dropdown-area">
                <VirtualizedDropdown
                    loading={loading}
                    value={selectedCoin1}
                    options={coinList}
                    handleOnChange={(event) => handleDropDownSelect(event, 1)}/>
                <ArrowSvg className="arrow-svg"/>
                <VirtualizedDropdown
                    loading={loading}
                    value={selectedCoin2}
                    options={coinList}
                    handleOnChange={(event) => handleDropDownSelect(event, 2)}/>
            </div>
            <PinCharts className="chart2" coin={selectedCoin2.value}/>
        </div>

    )
}

export default Pins