import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import { mobile } from "../responsive";

const Container = styled.div`

`;
const Wrapper = styled.div`
padding : 50px;
display : flex;

${mobile({padding : "10px", flexDirection : "column"})}
`;
const ImgContainer = styled.div`
flex : 1;
`;
const Image = styled.img`
width : 100%;
height : 80vh;
object-fit : cover;

${mobile({height : "40vh"})}
`;
const InfoContainer = styled.div`
flex : 1;
padding : 0 50px;

${mobile({padding : "10px"})}
`;
const Title = styled.h1`
font-weight : 200;
`;
const Desc = styled.p`
margin : 20px 0;
`;
const Price = styled.span`
font-size : 40px;
font-weight : 100;
`;
const FilterContainer = styled.div`
width : 50%;
margin : 30px 0;
display : flex;
justify-content : space-between;

${mobile({width : "100%"})}
`;
const Filter = styled.div`
display : flex;
align-items : center;
`;
const FilterTitle = styled.span`
font-size : 20px;
font-weight : 200;
`;
const FilterColor = styled.div`
width : 20px;
height : 20px;
border-radius : 50%;
background-color : ${props=>props.color};
margin : 0 5px;
cursor : pointer;
`;
const FilterSize = styled.select`
padding : 5px;
margin-left : 10px;
`;
const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
width : 50%;
  display : flex;
  align-items : center;
  justify-content : space-between;

  ${mobile({width : "100%"})}
`;
const AmountContainer = styled.div`
  display : flex;
  align-items : center;
  font-weight : 700;
`;
const Amount = styled.span`
width : 30px;
height : 30px;
  border-radius : 10px;
  border : 1px solid teal;
  display : flex;
  align-items : center;
  justify-content : center;
  margin : 0 8px;
`;
const Button = styled.button`
  padding : 12px 20px; 
  border : 2px solid teal;
  background-color : white;
  cursor : pointer;
  font-weight : 500;
  transition : all .3s ease;

  &:hover {
    background-color : teal;
    color : white;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://i.ibb.co/S6qMxwr/jean.jpg" />
        </ImgContainer>
        <InfoContainer>
            <Title>Denim Jumpsuit</Title>
            <Desc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas et quaerat voluptatibus officiis delectus ipsa fugit. Incidunt qui, reprehenderit doloremque odit totam temporibus natus? Excepturi minima dolor quisquam error perferendis.
            </Desc>
            <Price>Rs 500</Price>
            <FilterContainer>
                <Filter>
                    <FilterTitle>Color</FilterTitle>
                    <FilterColor color="black"/>
                    <FilterColor color="red"/>
                    <FilterColor color="blue"/>
                </Filter>
                <Filter>
                    <FilterTitle>Size</FilterTitle>
                    <FilterSize>
                        <FilterSizeOption>XS</FilterSizeOption>
                        <FilterSizeOption>S</FilterSizeOption>
                        <FilterSizeOption>M</FilterSizeOption>
                        <FilterSizeOption>L</FilterSizeOption>
                        <FilterSizeOption>XL</FilterSizeOption>
                        <FilterSizeOption>XXL</FilterSizeOption>
                    </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
                <AmountContainer>
                    <Remove/>
                    <Amount>1</Amount>
                    <Add/>
                </AmountContainer>
                <Button>Add to Cart</Button>
            </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
