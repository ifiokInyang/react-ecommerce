import { ArrowLeftOutlined, ArrowRightOutlined } from '@material-ui/icons';
import styled from 'styled-components'


interface Props{
    direction: string
}
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: coral;
    position: relative;
`;
const Wrapper = styled.div`
    height: 100%;

`;
const Title = styled.h1`
    font-size: 70px;

`;
const Desc = styled.p`
    margin: 50px 0;
    font-size: 20;
    font-weight: 500;
    letter-spacing: 3px
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;
const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 100vh;
`
const ImgContainer = styled.div`
    flex: 1;
    height: 100%;
    border: 3px solid red;
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
    border: 3px solid blue;

`
const Image = styled.img`
    height: 80%;

`
const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${(props: Props) => props.direction === "left" && "10px"};
    right: ${(props: Props) => props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.5
`

const Slider = () => {
  return (
    <Container>
        <Arrow direction="left">
            <ArrowLeftOutlined />
        </Arrow>
        <Wrapper>
            <Slide>
                <ImgContainer>
                    <Image src="https://i.ibb.co/DG69bQ4/2.png"/>
                </ImgContainer>
                <InfoContainer>
                    <Title>
                        SUMMER SALE
                    </Title>
                    <Desc>
                        DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS
                    </Desc>
                    <Button>
                        SHOP NOW
                    </Button>
                </InfoContainer>
            </Slide>
        </Wrapper>
        <Arrow direction="right">
            <ArrowRightOutlined />
        </Arrow>
    </Container>
  )
}

export default Slider
