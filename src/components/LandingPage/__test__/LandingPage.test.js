import React from "react";
import ReactDom from "react-dom";
import LandingPage from '../LandingPage';
import {act} from 'react-dom/test-utils'
import App from '../../../App'

let test_div;

beforeEach(() => {
    test_div = document.createElement('div');
    document.body.appendChild(test_div);
})

afterEach(() => {
    document.body.removeChild(test_div);
    test_div = null;
})

describe("Landing Page Component", () => {
    it('On logged out display default data', () => {
        
        /*
        const renderer = TestRenderer.create(
            <LandingPage></LandingPage>
        );
        const inst = renderer.root;
        expect(inst.findByProps({className:"datacat"}).children.length).toBe(1);
        expect(inst/findByProps({className:"datacat"}).children).toBe(["General"]);
        //expect(inst.findByType(NewsReel).props.data)
        */
       act(() => {
        ReactDom.render(<App />, test_div);
       })

       const news = test_div.querySelector("NewsReel")
       expect(news.data).toBe("")
           

    });
})

/*
describe("Settings Page Component", () => {
    it('User not logged in cannot update categories', () => {
        const renderer = TestRenderer.create(
             <SettingsPage></SettingsPage>
        );
        const inst = renderer.root;
        expect(inst.findByProps({className:"datacat"}).children.length).toBe(1);
        expect(inst/findByProps({className:"datacat"}).children).toBe(["General"]);
        //expect(inst.findByType(NewsReel).props.data)
    });

    
})
*/