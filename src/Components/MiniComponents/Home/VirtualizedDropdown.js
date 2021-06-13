import React, {forwardRef, useCallback, useRef, useState} from "react"
import {Dropdown, Ref} from "semantic-ui-react"
import {FixedSizeList} from "react-window"
import "../../../style/VirtualizedDropdown.css"

const SUI_DROPDOWN_MENU_HEIGHT = 300
const SUI_DROPDOWN_MENU_ITEM_HEIGHT = 37

const VirtualizedDropdown = ({
                                 options, value, className,
                                 ...restProps
                             }) => {
    const dropdownRef = useRef()
    const listRef = useRef()

    const [open, setOpen] = useState(false)

    const OuterDiv = useCallback(({style, ...props}, ref) => {
        const {position, overflow, ...restStyle} = style
        return (
            <Ref innerRef={ref}>
                <Dropdown.Menu open={open} {...props} style={restStyle}>
                    {props.children}
                </Dropdown.Menu>
            </Ref>
        )
    }, [open])

    const InnerDiv = useCallback(props => {
        return (
            <Dropdown.Menu className="inner" open={open} style={{...props.style, maxHeight: props.style.height}}>
                {props.children}
            </Dropdown.Menu>
        )
    }, [open])

    return (
        <Dropdown
            className={`virtualized selection ${className}`}
            onClose={() => setOpen(false)}
            onOpen={() => {
                setOpen(true)
                listRef.current.scrollToItem(options.findIndex(i => i.value === value))
            }}
            // This causes "Warning: Failed prop type: Prop `children` in `Dropdown` conflicts with props: `options`. They cannot be defined together, choose one or the other."
            // but is necessary for some logic to work e.g. the selected item text.
            options={options}
            ref={dropdownRef}
            selectOnNavigation={false}
            value={value}
            {...restProps}
        >
            <FixedSizeList
                height={options.length * SUI_DROPDOWN_MENU_ITEM_HEIGHT < SUI_DROPDOWN_MENU_HEIGHT ? options.length * SUI_DROPDOWN_MENU_ITEM_HEIGHT + 1 : SUI_DROPDOWN_MENU_HEIGHT}
                innerElementType={InnerDiv}
                itemCount={options.length}
                itemData={{
                    options,
                    handleClick: (_e, x) => dropdownRef.current.handleItemClick(_e, x),
                    selectedIndex: options.findIndex(i => i.value === value),
                }}
                itemSize={SUI_DROPDOWN_MENU_ITEM_HEIGHT}
                outerElementType={forwardRef(OuterDiv)}
                ref={listRef}
            >
                {Row}
            </FixedSizeList>
        </Dropdown>
    )
}

const Row = ({index, style, data}) => {
    const {options, handleClick, selectedIndex} = data
    const item = options[index]

    return (
        <Dropdown.Item
            active={index === selectedIndex}
            className="ellipsis"
            key={item.value}
            onClick={handleClick}
            selected={index === selectedIndex}
            style={style}
            title={item.text}
            {...item}
        />
    )
}

export default VirtualizedDropdown