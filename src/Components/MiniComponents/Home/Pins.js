import React, {useEffect, useMemo, useState} from 'react'
import axios from 'axios'

import '../../../style/Pins.css'
import ArrowSvg from './ArrowSvg'
import 'semantic-ui-css/components/dropdown.css'
import 'semantic-ui-css/components/reset.css'
import 'semantic-ui-css/components/transition.css'
import VirtualizedDropdown from "./VirtualizedDropdown";
import PinCharts from "./PinCharts";

const Pins = () => {

    const [opts, setOpts] = useState([])
    const [selectedCoin1, setSelectedCoin1] = useState('bitcoin')
    const [selectedCoin2, setSelectedCoin2] = useState('ethereum')
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDropdownData = async () => {
            try {
                const res = await axios.get('https://api.coingecko.com/api/v3/coins/list');
                const listItems = res.data.map(coin => ({
                    key: coin.id,
                    text: coin.name,
                    value: coin.id,
                }));
                setOpts(listItems);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchDropdownData();
    }, []);

    const handleDropDownSelect1 = (event, data) => {
        setSelectedCoin1(data.value)
    }

    const handleDropDownSelect2 = (event, data) => {
        setSelectedCoin2(data.value)
    }

    const memoizedOptions = useMemo(() => opts, [opts]);

    return (

        <div className="card pin-card">
            <PinCharts className="chart1" coin={selectedCoin1}/>
            <div className="dropdown-area">
                <VirtualizedDropdown value={selectedCoin1} options={memoizedOptions}
                                     onChange={handleDropDownSelect1}/>
                <ArrowSvg className="arrow-svg"/>
                <VirtualizedDropdown value={selectedCoin2} options={memoizedOptions}
                                     onChange={handleDropDownSelect2}/>
            </div>
            <PinCharts className="chart2" coin={selectedCoin2}/>
        </div>

    )
}

export default Pins