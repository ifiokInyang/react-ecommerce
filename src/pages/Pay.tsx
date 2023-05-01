import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { loadStripe, Stripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { publicRequest } from "../utils/api/requestMethod";

const Container = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
`;

const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const PaymentHeading = styled.h1`
  margin-bottom: 30px;
`;
const Pay = ({total}: {total: number}) => {
  const [stripePromise, setStripePromise] = useState<Stripe | null>(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const stripeFunc = async () => {
      const { data } = await publicRequest.get(
        "api/checkout/config"
      );

      setStripePromise(await loadStripe(`${data.publishableKey}`));
    };
    stripeFunc();
  }, []);

  useEffect(() => {
    publicRequest
      .post("api/checkout/payment-intent")
      .then((response) => {
        // const data = response.json()

        setClientSecret(response.data.clientSecret);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, []);
  return (
    <Container>
      <PaymentContainer>
        <PaymentHeading>Your total payment is $ {total}</PaymentHeading>

        {/* Loads only when the stripepromise and clientsecret are available */}
        {stripePromise && clientSecret && (
          <Elements stripe={stripePromise} options={{ clientSecret }}>
            <CheckoutForm total={total} />
          </Elements>
        )}
      </PaymentContainer>
    </Container>
  );
};

export default Pay;
