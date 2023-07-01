import React, { useState } from 'react';
import style from './Donate.module.css';
import Button from 'react-bootstrap/Button';
import DonateProcess from './DonateProcess';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import Alert from 'react-bootstrap/Alert';
import CurrencyInputField from 'react-currency-input-field';

function Donate() {
  const [donation, setDonation] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [donationSelected, setDonationSelected] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleAmountChange = (value) => {
    if (
      value === null ||
      value === '' ||
      value === '0' ||
      value === '0.' ||
      value === '0.0' ||
      value === '0.00' ||
      value === undefined ||
      value === isNaN ||
      parseFloat(value) < 1
    ) {
      setCustomAmount('');
      setErrorMessage('');
      setErrorMessage('Please enter an amount of $1.00 or more!');
    } else if (value >= 1000000) {
      setCustomAmount('');
      setErrorMessage('');
      setErrorMessage('Please enter an amount below $1,000,000.00!');
    } else {
      setCustomAmount(value);
      setErrorMessage('');
    }
  };

  const handleDonationSelection = (amount) => {
    setDonation(amount);
    setCustomAmount(`${amount / 100}.00`);
    setDonationSelected(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const amountInCents = Math.round(
      parseFloat(customAmount.replace(',', '')) * 100
    );

    if (amountInCents < 100) {
      setErrorMessage('');
      setErrorMessage('Please enter an amount of $1.00 or more');
    } else if (amountInCents >= 100000000) {
      setErrorMessage('');
      setErrorMessage('Please enter an amount below $1,000,000.00');
    } else {
      setDonation(amountInCents);
      setDonationSelected(true);
    }
  };
  return (
    <>
      {donationSelected === true ? (
        <DonateProcess donation={donation} customAmount={customAmount} />
      ) : (
        <>
          {' '}
          {successMessage && (
            <Alert
              variant="success"
              onClose={() => setSuccessMessage('')}
              dismissible
            >
              {successMessage}
            </Alert>
          )}
          {errorMessage && (
            <Alert
              variant="danger"
              onClose={() => setErrorMessage('')}
              dismissible
            >
              {errorMessage}
            </Alert>
          )}
          <h1 className={style['donation-header']}>Donation</h1>
          <div className={style['donation-container']}>
            <div className={style['donation-wrapper']}>
              <div className="card">
                <div className="card-body">
                  <h2>Secure donation</h2>
                  <p>Select amount:</p>
                  <div className={style['first-container']}>
                    <Button
                      type="button"
                      className={`btn ${style['selectAmount-btn']}`}
                      onClick={() => handleDonationSelection(100000)}
                      variant="btn-outline-dark"
                      size="btn-lg"
                    >
                      $1,000
                    </Button>

                    <Button
                      className={`btn ${style['selectAmount-btn']}`}
                      onClick={() => handleDonationSelection(75000)}
                      variant="btn-primary"
                      size="btn-lg"
                    >
                      $750
                    </Button>

                    <Button
                      className={`btn ${style['selectAmount-btn']}`}
                      onClick={() => handleDonationSelection(50000)}
                      variant="btn-primary"
                      size="btn-lg"
                    >
                      $500
                    </Button>
                  </div>
                  <div className={style['second-container']}>
                    <Button
                      className={`btn ${style['selectAmount-btn']}`}
                      onClick={() => handleDonationSelection(20000)}
                      variant="btn-primary"
                      size="btn-lg"
                    >
                      $200
                    </Button>

                    <Button
                      className={`btn ${style['selectAmount-btn']}`}
                      onClick={() => handleDonationSelection(10000)}
                      variant="btn-primary"
                      size="btn-lg"
                    >
                      $100
                    </Button>

                    <Button
                      className={`btn ${style['selectAmount-btn']}`}
                      onClick={() => handleDonationSelection(5000)}
                      variant="btn-primary"
                      size="btn-lg"
                    >
                      $50
                    </Button>
                  </div>
                  <p>Or enter a custom amount:</p>
                  <form
                    className={style.amountSubmitForm}
                    onSubmit={handleSubmit}
                  >
                    <div className={style['custom-amount']}>
                      <CurrencyInputField
                        // prefix="$"
                        placeholder="1.00"
                        decimalSeparator="."
                        groupSeparator=","
                        value={customAmount}
                        onValueChange={(value) => handleAmountChange(value)}
                        allowNegativeValue={false}
                        // thousandSeparator={true}
                        decimalScale={2} // The number of digits after the decimal point is limited to 2
                        maxLength={10} // The maximum number of characters is limited to prevent excessive input
                        autoComplete="off" // auto-completion disabled
                      />
                      <FontAwesomeIcon icon={faDollarSign} />
                    </div>

                    <Button
                      className={`btn ${style['selectAmount-btn']}`}
                      type="submit"
                      variant="btn-primary"
                      size="btn-lg"
                    >
                      Donate
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Donate;
