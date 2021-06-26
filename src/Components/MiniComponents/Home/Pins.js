import React, {useState} from 'react'

import '../../../Style/Pins.css'
import ArrowSvg from './ArrowSvg'
import 'semantic-ui-css/components/dropdown.css'
import 'semantic-ui-css/components/reset.css'
import 'semantic-ui-css/components/transition.css'
import VirtualizedDropdown from "./VirtualizedDropdown";
import PinCharts from "./PinCharts";
import {useCoinListData} from "../../../Hooks/useCoinListData";

const Pins = () => {

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
        <div className="card pin-card">
            <PinCharts className="chart1" coin={selectedCoin1}/>
            <div className="dropdown-area">
                <VirtualizedDropdown
                    value={selectedCoin1}
                    options={coinList}
                    onChange={(event, data) => handleDropDownSelect(event, data, 1)}/>
                <ArrowSvg className="arrow-svg"/>
                <VirtualizedDropdown
                    value={selectedCoin2}
                    options={coinList}
                    onChange={(event, data) => handleDropDownSelect(event, data, 1)}/>
            </div>
            <PinCharts className="chart2" coin={selectedCoin2}/>
        </div>

    )
}

export default Pins