import styled from 'styled-components';
import { FavoriteBorderOutlined, ShoppingCartOutlined, SearchOutlined } from "@material-ui/icons";


const Info = styled.div`
opacity : 0;
  width : 100%;
  height : 100%;
  position : absolute;
  top : 0;
  left : 0;
  background-color : rgba(0,0,0,0.2);
  z-index : 3;
  display : flex; 
  justify-content : center;
  align-items : center;
  cursor : pointer;
  transition : all 0.5s ease;
`;

const Container = styled.div`
  flex: 1;
  margin : 4px;
  min-width : 300px;
  height : 350px;
  display : flex;
  align-items : center;
  justify-content : center;
  background-color : #f5fbfd;
  position : relative;
  
 &:hover ${Info}{
    opacity : 1;
 } 
`;
const Circle = styled.div`
  width: 200px;
  height : 200px;
  position : absolute;
  border-radius : 50%;
  background-color : white;
`;
const Image = styled.img`
  height : 75%;
  z-index : 2;
`;

const Icon = styled.div`
    width : 40px;
    height : 40px;
    border-radius : 50%;
    display : flex;
    align-items : center;
    justify-content : center;
    margin : 8px;
    background-color: white;
    transition : all 0.5s ease;

    &:hover{
        background-color : #f5fbfd;
        transform : scale(1.1);
    }
`;

const Product = ({item}) => {
  return (
    <Container>
        <Circle/>
        <Image src={item.img}></Image>
        <Info>
            <Icon>
                <ShoppingCartOutlined/>
            </Icon>
            <Icon>
                <SearchOutlined/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlined/>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product