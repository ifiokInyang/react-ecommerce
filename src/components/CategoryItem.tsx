import { Link } from "react-router-dom";
import styled  from "styled-components";
import { mobile } from "../responsive";


const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative

`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "30vh"})}

`;
const Title = styled.h1 `
    color: white;
    margin: 20px 
`;
const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;
const Button = styled.button`
    border: none;
    padding: 10px;
    font-size: 20px;
    background-color: white;
    cursor: pointer;
    color: gray;
    font-weight: 600 
`;


const CategoryItem = ({ item }: any) => {
  return (
    <Container>
      <Link to={`/products/${item.cat}`}>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </Info>
      </Link>
    </Container>
  )
}

export default CategoryItem



