import React from 'react';
import {Layout} from "./style";
import HeroDiv from "../../components/Home/HeroDiv";
import InformationDiv from "../../components/Home/InformationDiv";
import AboutDiv from "../../components/Home/AboutDiv";

function HomePage(props) {
    return (
        <Layout>
            <HeroDiv/>
            <InformationDiv/>
            <AboutDiv/>
        </Layout>
    );
}

export default HomePage;