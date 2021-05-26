import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import 'semantic-ui-css/components/dropdown.css'
import 'semantic-ui-css/components/reset.css'
import 'semantic-ui-css/components/transition.css'

function DropdownPin(props) {

	return (
		<div style={{zIndex: 4}}>
			<Dropdown
				defaultValue={ props.default }
				placeholder="Coin 1"
				search
				selection
				style={{innerWidth: '2em'}}
				options={ props.opts }
			/>
		</div>
	)
}

export default DropdownPin