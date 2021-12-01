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
const { default: axios } = require('axios');


export function SignupForm() {
  const handleSubmit = async (event) => {
    const response = await axios.get('http://localhost:8080/insertuser',{
      params: {
        uname: document.getElementById("name").value,
        email: document.getElementById("email").value,
        pwd1: document.getElementById("password1").value,
        pwd2: document.getElementById("password2").value
      }
    });
    if(response.data.status !== "account created successfully"){
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("password1").value = "";
      document.getElementById("password2").value = "";
    }
    else{
      localStorage.setItem("token", response.data.token);
      window.location.href = '/home';
    }


  }

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Full Name" id="name"/>
        <Input type="email" placeholder="Email" id="email"/>
        <Input type="password" placeholder="Password" id="password1"/>
        <Input type="password" placeholder="Confirm Password" id="password2"/>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit" onClick={handleSubmit}>Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Already have an account?
        <Link to="/login" style={{ textDecoration: 'none' }} >
            <BoldLink>
                Login
            </BoldLink>
        </Link>
        <Marginer direction="vertical" margin=".5em" />
      </MutedLink>
    </BoxContainer>
  );
}