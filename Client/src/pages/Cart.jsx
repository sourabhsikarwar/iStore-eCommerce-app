import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Add, Remove } from "@material-ui/icons";
import { mobile } from "../responsive";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;

  ${mobile({padding : "10px"})}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 500;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};

`;
const TopTexts = styled.div`

${mobile({ display : "none"})}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  ${mobile({flexDirection : "column"})}
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  padding : 20px 0;

  ${mobile({flexDirection : "column"})}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content : space-around;
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductSize = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const PriceDetail = styled.div`
  flex: 1;
  display : flex;
  flex-direction : column;
  align-items : center;
  justify-content : center;
`;
const ProductAmountContainer = styled.div`
display : flex;
align-items : center;
margin-bottom : 20px;

`;
const ProductAmount = styled.div`
font-size : 24px;
margin : 5px;

${mobile({margin : "10px 15px"})}
`;
const ProductPrice = styled.div`
font-size : 30px;
font-weight : 200;

${mobile({ marginBottom : "15px"})}
`;
const Hr = styled.hr`
background-color : #eee;
border : none;
height : 1px;
margin : 15px;
`;
const Info = styled.div`
  flex: 3;
`;
const Summary = styled.div`
  flex: 1;
  border : 0.5px solid lightgray;
  border-radius : 10px;
  padding : 20px;
  height : 50vh;
`;
const SummaryTitle = styled.h1`
font-weight : 300;
`;
const SummaryItem = styled.div`
margin : 30px 0;
display : flex;
justify-content : space-between;
font-weight : ${props => props.type === "total" && "500"};
font-size : ${props => props.type === "total" && "24px"};
`;
const SummaryItemText = styled.span`

`;
const SummaryItemPrice = styled.span`

`;
const Button = styled.button`
width : 100%;
padding : 10px;
background-color : #000;
color : #fff;
font-weight : 500;
cursor : pointer;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://www.burdastyle.com/pub/media/catalog/product/cache/7bd3727382ce0a860b68816435d76e26/107/BUS-PAT-BURTE-1320516/1170x1470_BS_2016_05_132_front.png" />
                <Details>
                  <ProductName>
                    <b>Product : </b>Jessie thunder shoes
                  </ProductName>
                  <ProductId>
                    <b>Id : </b>452879
                  </ProductId>
                  <ProductColor color="bisque" />
                  <ProductSize>
                    <b>Size : </b>40
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                    <Remove/>
                    <ProductAmount>2</ProductAmount>
                    <Add/>
                </ProductAmountContainer>
                <ProductPrice>Rs 500</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr/>
            <Product>
              <ProductDetail>
                <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" />
                <Details>
                  <ProductName>
                    <b>Product : </b>Jessie thunder shoes
                  </ProductName>
                  <ProductId>
                    <b>Id : </b>452879
                  </ProductId>
                  <ProductColor color="bisque" />
                  <ProductSize>
                    <b>Size : </b>40
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                    <Remove/>
                    <ProductAmount>2</ProductAmount>
                    <Add/>
                </ProductAmountContainer>
                <ProductPrice>Rs 500</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice>RS 900</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
                <SummaryItemText>Estimated Shipping</SummaryItemText>
                <SummaryItemPrice>RS 50</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
                <SummaryItemText>Shipping Discount</SummaryItemText>
                <SummaryItemPrice>RS -50</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
                <SummaryItemText>total</SummaryItemText>
                <SummaryItemPrice>RS 900</SummaryItemPrice>
            </SummaryItem>
            <Button>Checkout Now</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
