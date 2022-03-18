import React from "react";
import ReactDom from "react-dom";
import LandingPage from '../LandingPage';
import TestRenderer from 'react-test-renderer';
import NewsReel from "../../NewsReel/NewsReel";
import Cookies from 'js-cookie';
import SettingsPage from '../../SettingsPage/SettingsPage'

describe("Landing Page Component", () => {
    it('On logged out display default data', () => {
        const renderer = TestRenderer.create(
            <LandingPage></LandingPage>
        );
        const inst = renderer.root;
        expect(inst.findByProps({className:"datacat"}).children.length).toBe(1);
        expect(inst/findByProps({className:"datacat"}).children).toBe(["General"]);
        //expect(inst.findByType(NewsReel).props.data)
    });
})

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