import {VirtualizedDropdown} from "../Home/VirtualizedDropdown";
import React, {useEffect, useState} from "react";
import {useCachedCoin} from "../../../Hooks/useCachedCoin";
import {useCoinListData} from "../../../Hooks/useCoinListData";
import {Equal, Minus, Multiply, Plus} from "../../../Assets/svg";
import '../../../Style/AddCrypto.css'
import {useCoinInfoData} from "../../../Hooks/useCoinInfoData";
import {ErrorPlaceHolder} from "../../../Assets/placeholders";
import {ShimmerDiv} from "shimmer-effects-react";
import {useTheme} from "../../../Hooks/useTheme";
import {useOwnedCrypto} from "../../../Hooks/useOwnedCrypto";

export const AddCrypto = ({onDataAdded}) => {
    const [selectedCoin, setSelectedCoin] = useCachedCoin("3")
    const {coinList, loading, error} = useCoinListData();
    const {coinData} = useCoinInfoData(selectedCoin)
    const [inputValue, setInputValue] = useState("");
    const {lightMode} = useTheme()
    const [showRemove, setShowRemove] = useState(false);
    const {crypto, loading: cryptoLoading} = useOwnedCrypto()

    const preventMinus = (e) => {
        if (e.code === 'Minus' || e.code === 'KeyE' || e.code === 'Equal') {
            e.preventDefault();
        }
    };

    const handlePaste = (e) => {
        let clipboardData, pastedData;

        clipboardData = e.clipboardData || window.clipboardData;
        pastedData = clipboardData.getData('Text').toUpperCase();

        if (pastedData.indexOf('E') > -1 || pastedData.indexOf('-') > -1 || pastedData.indexOf('+') > -1) {
            e.stopPropagation();
            e.preventDefault();
        }
    };

    const handleInput = (event) => {
        const {value} = event.target;
        setInputValue(parseFloat(value).toString())
    }

    const handleDataAddition = (remove) => {
        if (inputValue === "" && !remove) return;

        const data = {
            id: selectedCoin.value,
            owned: parseFloat(inputValue) | 0
        }

        onDataAdded(data, remove || inputValue === "0");
        setInputValue("")
    }

    useEffect(() => {
        if (cryptoLoading) return;

        const found = crypto.findIndex((obj) => obj.id === selectedCoin.value);

        setShowRemove(found !== -1)

    }, [crypto, cryptoLoading, selectedCoin])

    if (loading || !coinData || cryptoLoading) {
        return <div className="crypto-adder-container">
            <ShimmerDiv mode={lightMode ? "light" : "dark"} height={50} width={300}/>
        </div>;
    }

    if (error) {
        return (
            <div className="crypto-adder-container">
                <ErrorPlaceHolder/>
            </div>
        );
    }

    return (
        <div className="crypto-adder-container">
            <div className="bag-crypto-adder">
                <VirtualizedDropdown value={selectedCoin} handleOnChange={setSelectedCoin} options={coinList}
                                     arrowPosition="left"/>
                <Multiply className="crypto-adder-icons"/>
                <input className="crypto-adder-input" type="number" placeholder="Specify an amount" min={0}
                       onKeyDown={preventMinus} onPaste={handlePaste} value={inputValue} onInput={handleInput}
                       name="amount"/>
                <Equal className="crypto-adder-icons"/>
                <div className="crypto-adder-result">
                    <div>{coinData.symbol.toUpperCase()} {inputValue | 0}</div>
                    <div className="horizontal-divider"/>
                    <div>USD {parseFloat(inputValue) * coinData.currentPrice | 0}</div>
                </div>
            </div>
            <div className="add-remove-container">
                <button className="crypto-adder-button" onClick={() => handleDataAddition(false)}>
                    <Plus/>
                    {showRemove ? "UPDATE" : "ADD"}
                </button>
                {
                    showRemove &&
                    <button className="crypto-adder-button" onClick={() => handleDataAddition(true)}>
                        <Minus/>
                        REMOVE
                    </button>
                }
            </div>
        </div>
    )
}