import React from 'react'
import { shallow } from 'enzyme'

import Home from '../Components/Home'

import Crypts from '../Components/MiniComponents/Home/Crypts'
import YourBag from '../Components/MiniComponents/Home/YourBag'
import PinCharts1 from '../Components/MiniComponents/Home/PinCharts1'
import PinCharts2 from '../Components/MiniComponents/Home/PinCharts2'

describe("Testing Home Component", () => {
	const component = shallow(<Home />)
	const parent = component.find('div')

	it("should render Crypts component", () => {
		expect(parent.find(Crypts).length).toBe(1)
	})

	it("should render YourBag component", () => {
		expect(parent.find(YourBag).length).toBe(1)
	})

	it("should render PinCharts1 component", () => {
		expect(parent.find(PinCharts1).length).toBe(1)
	})

	it("should render PinCharts2 component", () => {
		expect(parent.find(PinCharts2).length).toBe(1)
	})
})