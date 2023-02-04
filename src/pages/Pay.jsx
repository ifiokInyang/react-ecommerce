import React, { useEffect, useState } from 'react';
import styled from "styled-components";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";


const Container = styled.div`
    position: relative;
    height: 100vh
`
const Button = styled.button`
    cursor: pointer;
    padding: 15px 50px;
    border-radius: 3%;
    font-size: 24px;
    background-color: teal;
    color: white;
`
const ButtonContainer = styled.div`
    position: absolute;
    left: 0;
    margin: 0;
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center
`
const STRIPE_PUBLISHABLE_KEY="pk_test_51MMniXHbrkwSOekcVu8jSrX5VZ9cdiAXWMU8Ou6PwEG8xFmywSjvPWCkJLTBpwYHP99uLi7AXq7UpfxOakMq5rAw00K93D8VwO"


const Pay = () => {
    const [stripeToken, setStripeToken] = useState(null)
    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(()=>{
        const makeRequest = async()=>{
            try {
                const response = await axios.post("http://localhost:4545/api/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 2000
                })
                console.log("response is ", response.data)
            } catch (error) {
                console.log(error)
            }
        }
        stripeToken && makeRequest()
    }, [stripeToken])
  return (
    <Container>
        <ButtonContainer>
            <StripeCheckout 
            name="Ifiok's Shop"
            image="https://avatars.githubusercontent.com/u/1486366?v=4"
            billingAddress
            shippingAddress
            description='Your total is $25'
            amount={2000}
            token={onToken}
            stripeKey={STRIPE_PUBLISHABLE_KEY}>
            <Button>Pay Now</Button>
            </StripeCheckout>
        </ButtonContainer>
    </Container>
  )
}

export default Pay
