import styled from 'styled-components';
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from '../components/Footer';
import { mobile } from '../responsive';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

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

  const location = useLocation()
  const category = location.pathname.split("/")[2]

  const [filter, setFilter] = useState({})
  const [sort, setSort] = useState("newest")

  const handleFilters = (e) => {
    const value = e.target.value
    setFilter({
      ...filter,
      [e.target.name]: value,
    })
  }

  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>
            {category}
        </Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products : </FilterText>
                <Select name='color' onChange={handleFilters}>
                    <Option disabled>
                        Color
                    </Option>
                    <Option>Red</Option>
                    <Option>Black</Option>
                    <Option>Blue</Option>
                    <Option>Yellow</Option>
                    <Option>Green</Option>
                    <Option>White</Option>
                </Select>
                <Select name='size' onChange={handleFilters}>
                    <Option disabled>
                        Size
                    </Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>Xl</Option>
                    <Option>XXL</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products : </FilterText>
                <Select onChange={e => setSort(e.target.value)}>
                    <Option value="newest">Newest</Option>
                    <Option value="asc">Price : low to high</Option>
                    <Option value="desc">Price : high to low</Option>
                </Select>
                </Filter>
        </FilterContainer>
        <Products cat={category} filter={filter} sort={sort} />
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList