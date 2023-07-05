import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import style from './DonateProcess.module.css';
import Cookies from 'js-cookie';

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  `${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`
);

const DonateProcess = () => {
  const [clientSecret, setClientSecret] = useState('');
  const donation = Cookies.get('donation');
  const customAmount = Cookies.get('customAmount');
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch('http://localhost:8000/api/v1/stripe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ donation }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [donation]);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <>
      <div className={style.App}>
        {clientSecret && (
          <>
            <Elements options={options} stripe={stripePromise}>
              <CheckoutForm customAmount={customAmount} />
            </Elements>
          </>
        )}
      </div>
    </>
  );
};

export default DonateProcess;
