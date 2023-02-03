import React from "react";
import { mobile } from "../responsive";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import Badge from "@material-ui/core/Badge";
import ShoppingCart from "@material-ui/icons/ShoppingCartOutlined";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })};
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  max-width: 1280px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  ${mobile({ padding: "10px 0" })}
`;

const Lang = styled.div`
  font-size: 14px;
  cursor: pointer;

  ${mobile({ display: "none" })};
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 3px;
`;

const Input = styled.input`
  border: none;
  padding: 3px;

  ${mobile({ width: "50px" })};
`;
const Logo = styled.h1`
  font-weight: bold;

  ${mobile({ fontSize: "24px" })};
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  ${mobile({ justifyContent: "center", flex : "2" })};
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;

  ${mobile({ fontSize: "12px", marginLeft: "10px" })};
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Lang>EN</Lang>
          <SearchContainer>
            <Input placeholder="Search"></Input>
            <SearchIcon
              style={{
                color: "gray",
                fontSize: "22px",
                cursor: "pointer",
                margin: "0 5px",
              }}
            />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Maatr.</Logo>
        </Center>
        <Right>
          <MenuItem>Register</MenuItem>
          <MenuItem>Login</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCart color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
