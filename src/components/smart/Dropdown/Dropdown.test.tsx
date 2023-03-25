
import { useContext } from "react"
import { BrowserRouter, HashRouter, MemoryRouter, useLocation } from "react-router-dom"
import { StoreContext } from "../../.."
import { IUIStore } from "../../../core/types/store"
import { act, queryByAttribute, render, renderHook,  screen } from "../../../core/utils/test-utils"
import {render as defaultRender} from '@testing-library/react'
import Dropdown from "./Dropdown"
import { ThemeProvider } from "styled-components"
import { DarkTheme } from "../../../core/themes/Dark"

describe('Testing Dropdown component', () => {

	let uiStore: IUIStore | null;

	beforeEach(() => {
		 uiStore = renderHook(() => useContext(StoreContext)).result.current.uiStore
	})

	afterEach(() => {
		uiStore = null
	})

	it('Renders Dropdown', () => {
		const { container } = render(<Dropdown />)
		const getByHref = queryByAttribute.bind(null, 'href')
		
		act(() => {
			uiStore?.toggleDropdown(true)
		})
		
		expect(screen.queryByText('Меню')).not.toBe(null);
		expect(getByHref(container, '#/composed')).toBeInTheDocument()
		expect(getByHref(container, '#/rings')).toBeInTheDocument()
		expect(getByHref(container, '#/lessons')).toBeInTheDocument()
	})
	
	it('Tests that clicking links in dropdown is correctly affecting url', () => {
		const { container } = render(<Dropdown />)
		const getByHref = queryByAttribute.bind(null, 'href')
		
		act(() => {
			uiStore?.toggleDropdown(true)
		})
		
		getByHref(container, '#/composed').click()
		expect(window.location.hash).toBe('#/composed')
		
		getByHref(container, '#/rings').click()
		expect(window.location.hash).toBe('#/rings')
		
		getByHref(container, '#/lessons').click()
		expect(window.location.hash).toBe('#/lessons')
	})
})
