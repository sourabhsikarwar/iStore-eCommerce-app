import styled from "styled-components";
import registerBg from "../assets/bg.jpg";
import { mobile } from "../responsive"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${registerBg}) center;
    background-size : cover;
    display : flex;
    justify-content : center;
    align-items : center;
`;
const Wrapper = styled.div`
width : 40%;
padding : 20px;
background-color : #EFEDE8;

${mobile({width : "75%"})};
`;
const Title = styled.h1`
font-size : 24px;
font-weight : 300;
margin : 5px 0;
`;
const Form = styled.form`
display : flex;
flex-wrap : wrap;
`;
const Input = styled.input`
flex : 1;
min-width : 40%;
margin : 20px 10px 0 0;
padding : 10px;
`;
const Agreement = styled.span`
font-size : 14px;
margin : 20px 0;
`;
const Button = styled.button`
width : 40%;
border : none;
padding : 15px 20px;
background-color : teal;
color : white;
cursor : pointer;
margin : 5px 0;
`;

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Create an Account</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="last name" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis, officiis!
          </Agreement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
