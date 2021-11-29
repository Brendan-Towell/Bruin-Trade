import styled from "styled-components";
import { LoginForm } from "./loginForm";
import { SignupForm } from "./signupForm";

const BoxContainer = styled.div`
  width: 280px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: rgba(8,125,195,255);
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  {/* overflow: hidden; */}
`;

const TopContainer = styled.div`
  width: 280px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const HeaderContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
`;

const InnerContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`;

export function AccessPortal(props) {
    const loggingIn = props.loggingIn
    if (loggingIn) { 
      return (
      <BoxContainer>
        <TopContainer>
          <HeaderContainer>
            <HeaderText>Welcome</HeaderText>
            <HeaderText>Back</HeaderText>
            <SmallText>Please sign-in to continue!</SmallText>
          </HeaderContainer>
        </TopContainer>
        <InnerContainer>
          <LoginForm />
        </InnerContainer>
      </BoxContainer>
  ); } 
  
  if (!loggingIn) { 
  return (
    <BoxContainer>
      <TopContainer>
        <HeaderContainer>
          <HeaderText>Create</HeaderText>
          <HeaderText>Account</HeaderText>
          <SmallText>Please sign-up to continue!</SmallText>
        </HeaderContainer>
      </TopContainer>
      <InnerContainer>
        <SignupForm />
      </InnerContainer>
    </BoxContainer>
  ); }
}