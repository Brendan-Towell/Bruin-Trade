import React from "react";
import { PageContainer } from "../../components/pageContainer";
import { Login } from "./login";
import { Navbar } from "../../components/navbar";

export function LoginPage(props) {
    return (
    <PageContainer>
        <Login>
            <Navbar useTransparent/>
        </Login>
    </PageContainer>
    );
}