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

export function LoginForm() {
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" id="email"/>
        <Input type="password" placeholder="Password" id="password"/>
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={async () => {await axios.get('http://localhost:8080/loginattempt',{
      params: {
        email: document.getElementById("email").value,
        pwd1: document.getElementById("password").value
      }
      })}}>Signup</SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an account?{" "}
        <Link to="/signup" style={{ textDecoration: 'none' }}>
            <BoldLink>
                Signup
            </BoldLink>
        </Link>
        <Marginer direction="vertical" margin=".5em" />
      </MutedLink>
    </BoxContainer>
  );
}