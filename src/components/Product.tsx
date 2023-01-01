import styled from "styled-components";
import { popularProducts } from "../data";
import { SearchOutlined, ShoppingCartOutlined, FavoriteBorderOutlined } from '@material-ui/icons';


const Info = styled.div`
    position: absolute;
    opacity: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 3;
    display: flex;
    align-items: center;
    background-color: rgba(0,0,0, 0.5);
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;
`;
const Container = styled.div`
    display: flex;
    flex: 1; 
    margin: 5px;
    min-width: 280px;
    height: 350px;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;

    &:hover ${Info} {
        opacity: 1
    }
`;
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: white;
    position: absolute;
    
`
const Image = styled.img`
    height: 75%;
    z-index: 2
`;

const Icon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    margin: 10px;
    transition: all 0.5s ease;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.5 )
    }
`

const Product = ({item}: any) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
            <ShoppingCartOutlined />
        </Icon>
        <Icon>
            <SearchOutlined />
        </Icon>
        <Icon>
            <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  )
}

export default Product
