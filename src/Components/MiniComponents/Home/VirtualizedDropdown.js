import React from 'react'
import ReactSelect, {createFilter} from 'react-select'
import {FixedSizeList as List} from 'react-window'
import '../../../Style/VirtualizedDropdown.css'


export const VirtualizedDropdown = ({value, options, handleOnChange, arrowPosition = "right", compare = false}) => {

    const IndicatorSeparator = () => null;

    const MenuList = (props) => {
        const itemHeight = 50
        const {options, children, maxHeight} = props
        const index = options.findIndex(i => i.value === value.value)
        const initialOffset = index * itemHeight

        return Array.isArray(children) ? (
            <div style={{paddingTop: 4}}>
                <List
                    height={maxHeight}
                    itemCount={children.length}
                    itemSize={itemHeight}
                    initialScrollOffset={initialOffset}
                    width="100%"
                >
                    {({index, style}) => <div className="list-item" style={{...style}}>{children[index]}</div>}
                </List>
            </div>
        ) : null
    }

    const Option = (props) => {
        const {children, innerProps, getStyles} = props

        // Emulate default react-select styles
        const customStyles = {
            ...getStyles('option', props)
        }

        return (
            <div
                style={customStyles}
                role="button"
                id={innerProps.id}
                tabIndex={innerProps.tabIndex}
                onClick={innerProps.onClick}
                onKeyDown={innerProps.onKeyDown}
            >
                {children}
            </div>
        )
    }

    const customStylesCompare = {
        container: (provided) => ({
            ...provided,
            width: "30vw",
            backgroundColor: "transparent"
        }),
        control: (provided) => ({
            ...provided,
            backgroundColor: 'transparent',
            border: 'none',
            textTransform: 'capitalize',
            textAlign: 'center',
            fontSize: 'var(--h2-font-size)',
            fontWeight: 'var(--h2-font-weight)',
            lineHeight: 'var(--h2-line-height)',
            paddingInlineStart: '50px'
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            color: arrowPosition === 'left' ? 'var(--primary)' : 'var(--secondary)'
        })
    };

    const customStylesNormal = {
        container: (provided) => ({
            ...provided,
            backgroundColor: "transparent"
        }),
        control: (provided) => ({
            ...provided,
            backgroundColor: 'transparent',
            border: 'none',
            textTransform: 'capitalize',
            textAlign: 'center',
            fontSize: 'var(--h6-font-size)',
            fontWeight: 'var(--h6-font-weight)',
            lineHeight: 'var(--h6-line-height)',
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            color: 'var(--primary)',
            '&:hover': {color: 'var(--secondary)'},
        })
    };

    return <ReactSelect
        placeholder={value.label}
        openMenuOnFocus={true}
        onChange={handleOnChange}
        options={options}
        components={{MenuList, Option, IndicatorSeparator}}
        filterOption={createFilter({ignoreAccents: false})}
        styles={compare ? customStylesCompare : customStylesNormal}
        classNamePrefix="react-select"
        isRtl={arrowPosition === "left"}
    />
}