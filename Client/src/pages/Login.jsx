import { useState } from "react";
import styled from "styled-components";
import registerBg from "../assets/bg.jpg";
import { mobile } from "../responsive";
import { login } from "../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${registerBg}) center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 30%;
  padding: 20px;
  background-color: #efede8;

  ${mobile({ width: "75%" })};
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
  margin: 10px 0;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin: 10px 0;
  &:disabled{
    color: green;
    cursor: not-allowed; 
  }
`;
const Link = styled.a`
  margin: 5px 0;
  font-size: 14px;
  text-decoration: underline;
  cursor: pointer;
`;
const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const {isFetching, error} = useSelector((state) => state.user)

  const dispatch = useDispatch()

  const handleClick = (e) => {
    e.preventDefault()
    login(dispatch, {username, password})
  }

  return (
    <Container>
      <Wrapper>
        <Title>Sign In</Title>
        <Form>
          <Input
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button onClick={handleClick} disabled={isFetching}>Login</Button>
          {error && <Error>Something Went Wrong!</Error>}
          <Link>forgot password?</Link>
          <Link>Create a new Account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
