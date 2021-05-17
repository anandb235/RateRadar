import React from 'react'
import { shallow } from 'enzyme'

import About from '../Components/About'
import Brand from '../Components/MiniComponents/About/Brand'
import Developer from '../Components/MiniComponents/About/Developer'

describe("Testing About component", () => {
	
	const component = shallow(<About />)
	const parent = component.find('div')
	
	it("should render Brand component", () => {
		expect(parent.find(Brand).length).toBe(1)
	})

	it("should render Developer component", () => {
		expect(parent.find(Developer).length).toBe(1)
	})
})