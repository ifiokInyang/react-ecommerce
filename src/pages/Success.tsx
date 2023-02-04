import React from 'react';
import styled from "styled-components";

const Container = styled.div` 
    position: relative;
    height: 100vh
`;
  
const Button = styled.button`
    cursor: pointer;
    padding: 15px 50px;
    border-radius: 3%;
    font-size: 24px;
    background-color: teal;
    color: white;
`
const Text = styled.span`

`
const InfoWrapper = styled.div`
    position: absolute;
    left: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`


const Success = () => {
  return (
    <Container>
      <InfoWrapper>
        <Button>Successful</Button>
        <Text>Your order is being prepared. Thanks for choosing Ifiok's Shop</Text>
        </InfoWrapper>
    </Container>
  )
}

export default Success
