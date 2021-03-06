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

test("User cannot signin", async () => {
    act(() => {
        render(
        <Provider store={store}>
            <PersistGate Loading={null} persistor={persistedStore}>
                <App />
            </PersistGate>
        </Provider>
        ,{wrapper:MemoryRouter})
    })

    expect(screen.getByText(/Welcome to the News Reel!/i)).toBeInTheDocument()
    const signin_btn = await screen.getByRole('button', {name: "Signin"})
    act(() => {
        fireEvent.click(signin_btn)
    })
    
    expect(screen.getByText(/Login Page/i)).toBeInTheDocument()

    const user_in = await screen.getByPlaceholderText("User Name")
    const pass_in = await screen.getByPlaceholderText("Password")

    act(() => {
        fireEvent.change(user_in, {target: {value: "NoUserHere55"}})
    })
    act(() => {
        fireEvent.change(pass_in, {target: {value: "ThisPasswordInv65"}})
    })

    expect(user_in.value).toBe("NoUserHere55")
    expect(pass_in.value).toBe("ThisPasswordInv65")
    const login_btn = await screen.getByRole('button', {name: "Login"})
    act(() => {
        fireEvent.click(login_btn)
    })

    await waitFor(() => {
        expect(screen.getByText(/Incorrect Username/i)).toBeInTheDocument()
        expect(screen.getByText(/Incorrect Password/i)).toBeInTheDocument()
    })

})

test("User can signin to account", async () => {
    act(() => {
        render(
        <Provider store={store}>
            <PersistGate Loading={null} persistor={persistedStore}>
                <App />
            </PersistGate>
        </Provider>
        ,{wrapper:MemoryRouter})
    })
    
    expect(screen.getByText(/Welcome to the News Reel!/i)).toBeInTheDocument()
    const signin_btn = await screen.getByRole('button', {name: "Signin"})
    act(() => {
        fireEvent.click(signin_btn)
    })
    
    expect(screen.getByText(/Login Page/i)).toBeInTheDocument()

    //const signup_btn = await screen.getByRole('button', {name: "Signup?"})
    //fireEvent.click(signup_btn)
    const user_in = await screen.getByPlaceholderText("User Name")
    const pass_in = await screen.getByPlaceholderText("Password")
    act(() => {
        fireEvent.change(user_in, {target: {value: "Spongebob23"}})
    })
    act(() => {
        fireEvent.change(pass_in, {target: {value: "DinoStein45"}})
    })
    expect(user_in.value).toBe('Spongebob23')
    expect(pass_in.value).toBe('DinoStein45')
    const login_btn = await screen.getByRole('button', {name: "Login"})
    act(() => {
        fireEvent.click(login_btn)
    })

    await waitFor(() => {
        expect(screen.getByText(/Spongebob23/i)).toBeInTheDocument()
        expect(screen.getByText(/Welcome to the News Reel!/i)).toBeInTheDocument()
    })
    
})


