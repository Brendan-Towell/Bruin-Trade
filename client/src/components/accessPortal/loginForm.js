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

export function LoginForm() {
  return (
    <BoxContainer>
      <FormContainer>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit">Signin</SubmitButton>
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
