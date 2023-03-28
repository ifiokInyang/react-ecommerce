import React, { useEffect, useState } from "react";
import styled from "styled-components";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";

const Container = styled.div`
  position: relative;
  height: 100vh;
`;
const Button = styled.button`
  cursor: pointer;
  padding: 15px 50px;
  border-radius: 3%;
  font-size: 24px;
  background-color: teal;
  color: white;
`;
const ButtonContainer = styled.div`
  position: absolute;
  left: 0;
  margin: 0;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;
const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const url = "http://localhost:4545";

const Pay = () => {
  const [stripePromise, setStripePromise] = useState<Stripe | null>(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const stripeFunc = async () => {
      const { data } = await axios.get(
        "http://localhost:4545/api/checkout/config"
      );

      setStripePromise(await loadStripe(`${data.publishableKey}`));
    };
    stripeFunc();
  }, []);

  useEffect(() => {
    axios
      .post("http://localhost:4545/api/checkout/payment-intent")
      .then((response) => {
        // const data = response.json()

        setClientSecret(response.data.clientSecret);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);
  return (
    <div>
      <PaymentContainer>
        <h1>React Stripe and the Payment Element</h1>
        {/* Loads only when the stripepromise and clientsecret are available */}
        {stripePromise && clientSecret && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm />
          </Elements>
        )}
      </PaymentContainer>
    </div>
  );
};

export default Pay;


// const Pay = () => {
//     const [stripeToken, setStripeToken] = useState<any>(null);
//     const onToken = (token: any) => {
//         setStripeToken(token)
//     }

//     useEffect(()=>{
//         const makeRequest = async()=>{
//             try {
//                 const config = {
//                     headers: {
//                         Authorization: `Bearer ${STRIPE_SECRET}`
//                     }
//                 }
//                 const response = await axios.post("http://localhost:4545/api/checkout/payment", {
//                     tokenId: stripeToken.id,
//                     amount: 2000
//                 }, config)

//             } catch (error) {
//                 console.log(error)
//             }
//         }
//         stripeToken && makeRequest()
//     }, [stripeToken])
//   return (
//     <Container>
//         <ButtonContainer>
//             <StripeCheckout
//             name="Ifiok's Shop"
//             image="https://avatars.githubusercontent.com/u/1486366?v=4"
//             billingAddress
//             shippingAddress
//             description='Your total is $25'
//             amount={2000}
//             token={onToken}
//             stripeKey={STRIPE_PUBLISHABLE_KEY} />
//             {/* <Button>Pay Now</Button> */}
//             {/* </StripeCheckout> */}
//         </ButtonContainer>
//     </Container>
//   )
// }

// export default Pay
