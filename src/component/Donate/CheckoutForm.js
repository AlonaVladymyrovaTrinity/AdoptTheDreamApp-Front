import React, { useEffect, useState } from 'react';
import {
  PaymentElement,
  LinkAuthenticationElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import style from './CheckoutForm.module.css';
import Button from 'react-bootstrap/Button';
// import CurrencyFormat from 'react-currency-format';

export default function CheckoutForm({ donation }) {
  const stripe = useStripe();
  const elements = useElements();

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );

    if (!clientSecret) {
      return;
    }

    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case 'succeeded':
          setMessage('Payment succeeded!');
          break;
        case 'processing':
          setMessage('Your payment is processing.');
          break;
        case 'requires_payment_method':
          setMessage('Your payment was not successful, please try again.');
          break;
        default:
          setMessage('Something went wrong.');
          break;
      }
    });
  }, [stripe]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email);

    if (!stripe || !elements) {
      // Stripe.js hasn't yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    setIsLoading(true);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: 'https://dashboard.stripe.com/test/',
      },
    });

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (error.type === 'card_error' || error.type === 'validation_error') {
      setMessage(error.message);
    } else {
      setMessage('An unexpected error occurred.');
    }

    setIsLoading(false);
  };

  const paymentElementOptions = {
    layout: 'tabs',
  };

  return (
    <form
      id="payment-form"
      onSubmit={handleSubmit}
      className={style.checkoutFormContainer}
    >
      <p>
        Your donation amount:{' '}
        {/* <CurrencyFormat
          value={donation} // The value to be displayed in the currency format
          displayType={'text'} // The display type (e.g., 'input' or 'text')
          thousandSeparator={true} // Whether to use thousand separators (e.g., 1,000)
          prefix={'$'} // The currency symbol or prefix
          decimalScale={2} // The number of decimal places to display
        /> */}
      </p>
      <LinkAuthenticationElement
        id="link-authentication-element"
        onChange={(e) => setEmail(e.value)}
      />
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      <Button
        className={`btn ${style['donation-btn']}`}
        disabled={isLoading || !stripe || !elements}
        id="submit"
        variant="btn-primary"
        size="btn-lg"
      >
        <span id="button-text">
          {isLoading ? (
            <div className={style.spinner} id="spinner"></div>
          ) : (
            'Pay now'
          )}
        </span>
      </Button>
      {/* <button
        disabled={isLoading || !stripe || !elements}
        id="submit"
        className={style['donation-btn']}
      >
        <span id="button-text">
          {isLoading ? (
            <div className={style.spinner} id="spinner"></div>
          ) : (
            'Pay now'
          )}
        </span>
      </button> */}
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
    </form>
  );
}
