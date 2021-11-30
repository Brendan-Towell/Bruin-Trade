import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { Link } from "react-router-dom";
import {useState} from 'react';
const { default: axios } = require('axios');


export function SignupForm() {
  var response = "test";
  return (
    <BoxContainer>
      <FormContainer action="./testfunction">
        <Input type="text" placeholder="Full Name" id="name"/>
        <Input type="email" placeholder="Email" id="email"/>
        <Input type="password" placeholder="Password" id="password1"/>
        <Input type="password" placeholder="Confirm Password" id="password2"/>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={async () => {response = (await axios.get('http://localhost:8080/insertuser',{
      params: {
        uname: document.getElementById("name").value,
        email: document.getElementById("email").value,
        pwd1: document.getElementById("password1").value,
        pwd2: document.getElementById("password2").value
      }
      })).data}}>Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      {<MutedLink href="#">
        {response}
        <Marginer direction="vertical" margin=".5em" />
      </MutedLink>}
      <MutedLink href="#">
        Already have an account?
        <Link to="/login" style={{ textDecoration: 'none' }} >
            <BoldLink>
                Signin
            </BoldLink>
        </Link>
        <Marginer direction="vertical" margin=".5em" />
      </MutedLink>
    </BoxContainer>
  );
}