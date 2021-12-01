import axios from "axios";
import React, { Component } from "react";
import styled from "styled-components";
import { Marginer } from "../../components/marginer";
import { Button } from "../../components/button";
import { Link } from "react-router-dom"
import { TransferFromButton, 
         TransferToButton,
         FrequencyButton } from "../../components/dropdownButton";

const DepositPageContainer = styled.div`
    width: 100%;
    height: 100vh;
`;

const DepositPageInnerContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;
`;

const HeaderContainer = styled.div`
    width: 60%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`;

const ActionContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const FormContainer = styled.form`
  width: 90%;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 12px;
  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(241, 196, 15);
  }
`;

const HeaderText = styled.h3`
    margin: 0;
    line-height: 1.4;
    font-weight: 300;
    font-size: 40px;
`;

const SubHeaderText = styled.h3`
    margin: 0;
    line-height: 1.4;
    font-weight: 300;
    font-size: 25px;
`;

const SubText = styled.h3`
    margin: 0;
    line-height: 1.4;
    font-weight: 600;
    font-size: 15px;
`;

const LinkText = styled.h3`
    margin: 0;
    line-height: 1.4;
    color: rgba(8,125,195,255);
    font-weight: 300;
    font-size: 15px;
`;

const Seperator = styled.div`
    min-width: 60%;
    height: 1px;
    background-color: #D3D3D3;
`;

class Deposit extends Component {
    
    constructor(props) { 
        super(props);
        this.state = {
            amount: 0
        }
    }

    handleSubmit(val) {
        val.preventDefault();
        const amount = this.amount.value;

        const response = axios.get('http://localhost:8080/deposit', {
            params: {
                deposit_amount: amount,
                user_id: localStorage.getItem("token"),
            }
        })
            .then((response) => {
                console.log(response.status)
            })
        window.location.reload();
    }


    
    render() {
        return (
        <DepositPageContainer>
            {this.props.children}
                <DepositPageInnerContainer>
                    <HeaderText>Transfer money from an account</HeaderText>
                    <Seperator />
                    <HeaderContainer>
                        <SubHeaderText>Which account do you want to move money from?</SubHeaderText>
                    </HeaderContainer>
                    <ActionContainer>
                        <FormContainer>
                            <SubText>From</SubText>
                            <Marginer direction="horizontal" margin={15} />
                            <TransferFromButton />
                        </FormContainer>
                    </ActionContainer>
                    <Seperator />
                    <HeaderContainer>
                        <SubHeaderText>Where will the money be transferred to?</SubHeaderText>
                    </HeaderContainer>
                    <ActionContainer>
                        <FormContainer>
                            <SubText>To</SubText>
                            <Marginer direction="horizontal" margin={15} />
                            <TransferToButton />
                        </FormContainer>
                    </ActionContainer>
                    <Seperator />
                    <HeaderContainer>
                        <SubHeaderText>Enter your transfer details</SubHeaderText>
                    </HeaderContainer>
                    <ActionContainer>
                        <FormContainer>
                            <SubText>Frequency</SubText>
                            <Marginer direction="horizontal" margin={15} />
                            <FrequencyButton />
                        </FormContainer>
                        <FormContainer>
                            <SubText>Date</SubText>
                            <Marginer direction="horizontal" margin={15} />
                            <Input type="date" placeholder="Date" />
                        </FormContainer>
                        <Marginer direction="vertical" margin={15} />
                        <FormContainer onSubmit={(amt) => {this.handleSubmit(amt)}}>
                            <SubText>Amount</SubText>
                            <Marginer direction="horizontal" margin={15} />
                            <Input ref={(input) => {this.amount = input}} type="amount" placeholder="$" id="deposit_amt"/>
                            <ActionContainer>
                                <Button size={12} width={100} height={40} type="submit" >Continue</Button>
                            </ActionContainer>
                        </FormContainer>
                    </ActionContainer>
                    <Seperator />
                    <HeaderContainer>
                        <Link to="/home" style={{ textDecoration: 'none' }} >
                            <LinkText>Exit to portfolio summary</LinkText>
                        </Link>
                    </HeaderContainer>
                </DepositPageInnerContainer>
        </DepositPageContainer>
        );
    }
}
export default Deposit;