import styled from "styled-components";
import { mobile } from "../responsive"

const Container = styled.div`
  flex: 1;
  height: 70vh;
  margin : 4px;
  position : relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

  ${mobile({height : "40vh"})};
`;
const Info = styled.div`
position : absolute;
top : 0;
left : 0;
width : 100%;
height : 100%;
display : flex;
flex-direction : column;
align-items : center;
justify-content : center;
`;
const Title = styled.h1`
color : #ffffff;
margin-bottom : 20px;
`;
const Button = styled.button`
color : gray;
font-weight : 500;
background-color : white;
padding : 10px 20px;
border : none;
cursor : pointer;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img}></Image>
      <Info>
        <Title>{item.title}</Title>
        <Button>Show Now</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
