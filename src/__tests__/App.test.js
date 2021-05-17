import React from 'react'
import { shallow } from 'enzyme'
import { Route } from 'react-router-dom'

import App from '../App'
import Home from '../Components/Home'
import Compare from '../Components/Compare'
import About from '../Components/About'
import Contact from '../Components/Contact'

let pathMap = {}
const component = shallow(<App />)

describe('Test Routing', () => {

	beforeAll(() => {
		pathMap = component.find(Route).reduce((paths, route) => {
			const routeProps = route.props()
			paths[routeProps.path] = routeProps.component
			return paths
		}, {})
	})

	it("should show Home component for path = '/'", () => {
		expect(pathMap['/']).toBe(Home)
	})

	it("should show Compare component for path = '/compare'", () => {
		expect(pathMap['/compare']).toBe(Compare)
	})

	it("should dhow About component for path = '/about'", () => {
		expect(pathMap['/about']).toBe(About)
	})

	it("should show Contact component for path = '/contact'", () => {
		expect(pathMap['/contact']).toBe(Contact)
	})
})