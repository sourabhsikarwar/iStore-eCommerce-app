import styled from 'styled-components';

const Container = styled.div`
  min-height : 30px;
  color : white;
  background-color : teal;
  display : flex;
  align-items : center;
  justify-content : center;
  font-size: 14px;
  font-weight : 500;
  text-align : center;
  padding : 10px;
`;

const Announcement = () => {
  return (
    <Container>
        Super Deal!!! Lorem ipsum dolor sit amet consectetur adipisicing elit.
    </Container>
  )
}

export default Announcement