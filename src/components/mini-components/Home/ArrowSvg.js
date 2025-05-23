import React from 'react'

function ArrowSvg({className}) {
	return (
		<svg className={className} style={{"marginTop": "-8px"}} viewBox="0 0 720 150" xmlns="http://www.w3.org/2000/svg">
			<g>
				<line strokeWidth="15" y2="111" x2="653" y1="111" x1="81" stroke="#3b4ab8" fill="#3b4ab8" />
				<line strokeWidth="15" y2="76" x2="653" y1="76" x1="81" stroke="#3b4ab8" fill="#3b4ab8" />
				<line strokeWidth="15" y2="111" x2="653" y1="148" x1="546" stroke="#3b4ab8" fill="#3b4ab8" />
				<line strokeWidth="15" y2="38.5" x2="187" y1="76" x1="81" stroke="#3b4ab8" fill="#3b4ab8" />
			</g>
		</svg>
	)
}

export default ArrowSvg