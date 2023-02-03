import styled from 'styled-components';
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from '../components/Footer';
import { mobile } from '../responsive';

const Container = styled.div`
  
`;
const FilterContainer = styled.div`
  display : flex;
  justify-content : space-between;
  // align-items : center;
`;
const Title = styled.h1`
  margin : 20px;
`;
const Filter = styled.div`
  margin : 20px;

  ${mobile({margin : "0 20px", display : "flex", flexDirection : "column"})}
`;
const FilterText = styled.span`
  font-size : 20px;
  font-weight : 600;
  margin-right : 20px;

  ${mobile({marginRight : "0"})}
`;
const Select = styled.select`
  padding : 10px;
  margin-right : 20px;

  ${mobile({margin : "10px 0"})}
`;
const Option = styled.option`
`;

const ProductList = () => {
  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>
            Dresses
        </Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products : </FilterText>
                <Select>
                    <Option disabled selected>
                        Color
                    </Option>
                    <Option>Red</Option>
                    <Option>Black</Option>
                    <Option>Red</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                </Select>
                <Select>
                    <Option disabled selected>
                        Size
                    </Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                    <Option>XXL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products : </FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price : low to high</Option>
                    <Option>Price : high to low</Option>
                </Select>
                </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList