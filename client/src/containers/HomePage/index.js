import React from "react";
import { PageContainer } from "../../components/pageContainer";
import { Home } from "./home";
import { Navbar } from "../../components/navbar";

export function HomePage(props) {
    return (
    <PageContainer>
        <Home>
            <Navbar useTransparent/>
        </Home>
    </PageContainer>
    );
}