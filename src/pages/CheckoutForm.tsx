import React, { SyntheticEvent, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import styled from "styled-components"

const Button = styled.button`
  cursor: pointer;
  padding: 15px 50px;
  border-radius: 3%;
  font-size: 24px;
  background-color: teal;
  color: white;
`;

const CheckoutForm = ({total}: {total: number}) => {
  const stripe = useStripe();
  const elements = useElements();

  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [message, setMessage] = useState<string | undefined | null>(null);

  const handleFormSubmit = async (event: SyntheticEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    //For a case where you wish to redirect
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
      },
    });

    if (error) {
      setMessage(error.message);
    }
    //For a situation where you don't wish to redirect

    // const { error, paymentIntent } = await stripe.confirmPayment({
    //   elements,
    //   confirmParams: {
    //     return_url: `${window.location.origin}/success`,
    //   },
    //   redirect: "if_required",
    // });

    // if (error) {
    //   setMessage(error.message);
    // } else if (paymentIntent && paymentIntent.status === "succeeded") {
    //   setMessage(`payment Status: ${paymentIntent.status}`);
    // } else {
    //   setMessage("unexpected state");
    // }

    setIsProcessing(false);
  };

  return (
    <div>
      <form id="payment-form" onSubmit={handleFormSubmit}>
        <PaymentElement />
        <Button disabled={isProcessing} id="submit">
          <span id="button-text">
            {isProcessing ? "Processing..." : `Pay $ ${total}`}
          </span>
        </Button>

        {message && <div id="payment-message">{message}</div>}
      </form>
    </div>
  );
};

export default CheckoutForm;
