import React from "react";
import { PageContainer } from "../../components/pageContainer";
import { Signup } from "./signup";
import { Navbar } from "../../components/navbar";

export function SignupPage(props) {
    return (
    <PageContainer>
        <Signup>
            <Navbar useTransparent/>
        </Signup>
    </PageContainer>
    );
}