import React from "react";
import {screen,render,cleanup,fireEvent, waitFor,configure} from "@testing-library/react"
import '@testing-library/jest-dom'
import App from '../../../App'
import { act } from 'react-dom/test-utils';
import { Provider } from "react-redux";
import store, {persistedStore} from '../../../redux/store'
import {PersistGate} from 'redux-persist/integration/react'
import {MemoryRouter} from 'react-router-dom'

//import {setupServer} from "msw/node"
//import {rest} from "msw"

afterEach(cleanup);

test("User can add categories to account", async () => {
    act(() => {
        render(
        <Provider store={store}>
            <PersistGate Loading={null} persistor={persistedStore}>
                <App />
            </PersistGate>
        </Provider>
        ,{wrapper:MemoryRouter})
    })
    let submit_form = null
    let health_box = null
    
    expect(screen.getByText(/Welcome to the News Reel!/i)).toBeInTheDocument()
    let signin_btn = await screen.getByRole('button', {name: "Signin"})
    act(() => {
        fireEvent.click(signin_btn)
    })
    
    expect(screen.getByText(/Login Page/i)).toBeInTheDocument()

    let user_in = await screen.getByPlaceholderText("User Name")
    let pass_in = await screen.getByPlaceholderText("Password")
    act(() => {
        fireEvent.change(user_in, {target: {value: "Spongebob23"}})
    })
    act(() => {
        fireEvent.change(pass_in, {target: {value: "DinoStein45"}})
    })
    expect(user_in.value).toBe('Spongebob23')
    expect(pass_in.value).toBe('DinoStein45')
    let login_btn = await screen.getByRole('button', {name: "Login"})
    act(() => {
        fireEvent.click(login_btn)
    })

    await waitFor(() => {
        expect(screen.getByText(/Spongebob23/i)).toBeInTheDocument()
        expect(screen.getByText(/Welcome to the News Reel!/i)).toBeInTheDocument()
    })

    let settings_btn = await screen.getByRole('button', {name: "Settings"})
    act(() => {
        fireEvent.click(settings_btn)
    })

    health_box = await screen.getByRole('checkbox', {name: "Health"})

    act(() => {
        fireEvent.click(health_box)
    })

    submit_form = await screen.getByRole('button', {name: "Submit"})
    act(() => {
        fireEvent.click(submit_form)
    })

    await waitFor(() => {
        expect(screen.getByText(/Spongebob23/i)).toBeInTheDocument()
        expect(screen.getByText(/Welcome to the News Reel!/i)).toBeInTheDocument()
    })

    settings_btn = await screen.getByRole('button', {name: "Settings"})
    act(() => {
        fireEvent.click(settings_btn)
    })

    health_box = await screen.getByRole('checkbox', {name: "Health"})
    await waitFor(() => {
        expect(health_box.checked).toEqual(true)
    })
    let logout_btn = await screen.getByRole('button', {name: "Logout"})
    act(() => {
        fireEvent.click(logout_btn)
    })

    await waitFor(() => {
        
        expect(screen.getByText(/Welcome to the News Reel!/i)).toBeInTheDocument()
    })
    
})

test("User can remove categories from account", async () => {
    act(() => {
        render(
        <Provider store={store}>
            <PersistGate Loading={null} persistor={persistedStore}>
                <App />
            </PersistGate>
        </Provider>
        ,{wrapper:MemoryRouter})
    })
    let submit_form = null
    let health_box = null
    
    expect(screen.getByText(/Welcome to the News Reel!/i)).toBeInTheDocument()
    let signin_btn = await screen.getByRole('button', {name: "Signin"})
    act(() => {
        fireEvent.click(signin_btn)
    })
    
    expect(screen.getByText(/Login Page/i)).toBeInTheDocument()

    let user_in = await screen.getByPlaceholderText("User Name")
    let pass_in = await screen.getByPlaceholderText("Password")
    act(() => {
        fireEvent.change(user_in, {target: {value: "Spongebob23"}})
    })
    act(() => {
        fireEvent.change(pass_in, {target: {value: "DinoStein45"}})
    })
    expect(user_in.value).toBe('Spongebob23')
    expect(pass_in.value).toBe('DinoStein45')
    let login_btn = await screen.getByRole('button', {name: "Login"})
    act(() => {
        fireEvent.click(login_btn)
    })

    await waitFor(() => {
        expect(screen.getByText(/Spongebob23/i)).toBeInTheDocument()
        expect(screen.getByText(/Welcome to the News Reel!/i)).toBeInTheDocument()
    })

    let settings_btn = await screen.getByRole('button', {name: "Settings"})
    act(() => {
        fireEvent.click(settings_btn)
    })

    health_box = await screen.getByRole('checkbox', {name: "Health"})

    act(() => {
        fireEvent.click(health_box)
    })

    submit_form = await screen.getByRole('button', {name: "Submit"})
    act(() => {
        fireEvent.click(submit_form)
    })

    await waitFor(() => {
        expect(screen.getByText(/Spongebob23/i)).toBeInTheDocument()
        expect(screen.getByText(/Welcome to the News Reel!/i)).toBeInTheDocument()
    })

    settings_btn = await screen.getByRole('button', {name: "Settings"})
    act(() => {
        fireEvent.click(settings_btn)
    })

    health_box = await screen.getByRole('checkbox', {name: "Health"})
    await waitFor(() => {
        expect(health_box.checked).toEqual(true)
    })

    act(() => {
        fireEvent.click(health_box)
    })

    submit_form = await screen.getByRole('button', {name: "Submit"})
    act(() => {
        fireEvent.click(submit_form)
    })

    await waitFor(() => {
        expect(screen.getByText(/Spongebob23/i)).toBeInTheDocument()
        expect(screen.getByText(/Welcome to the News Reel!/i)).toBeInTheDocument()
    })

    settings_btn = await screen.getByRole('button', {name: "Settings"})
    act(() => {
        fireEvent.click(settings_btn)
    })

    await waitFor(() => {
        expect(health_box.checked).toEqual(false)
    })

    let logout_btn = await screen.getByRole('button', {name: "Logout"})
    act(() => {
        fireEvent.click(logout_btn)
    })

    await waitFor(() => {
        
        expect(screen.getByText(/Welcome to the News Reel!/i)).toBeInTheDocument()
    })

    
})


