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

test("User can access single category news", async () => {
    let cat_btn = null
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
    await waitFor(() => {
        cat_btn = screen.getByRole('button', {name: "Entertainment"})
    })
    act(() => {
        fireEvent.click(cat_btn)
    })

    await waitFor(() => {
        expect(screen.getByText(/Next Page/i)).toBeInTheDocument()
    })
   
    

    
})

test("User can access general or multiple category news", async () => {
        let cat_btn = null
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
        await waitFor(() => {
            cat_btn = screen.getByRole('button', {name: "Next Page"})
        })
        
        act(() => {
            fireEvent.click(cat_btn)
        })

        await waitFor(() => {
            expect(screen.getByText(/Next Page/i)).toBeInTheDocument()
            expect(screen.getByText(/Prev Page/i)).toBeInTheDocument() 
        })
            
})



