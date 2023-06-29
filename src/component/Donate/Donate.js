import React, { useState } from 'react';
import style from './Donate.module.css';
import Button from 'react-bootstrap/Button';
import DonateProcess from './DonateProcess';
import InputWithIcon from '../layout/InputWithIcon/InputWithIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import Alert from 'react-bootstrap/Alert';
// import CurrencyFormat from 'react-currency-format';

function Donate() {
  const [donation, setDonation] = useState(100);
  const [customAmount, setCustomAmount] = useState(100);
  const [donationSelected, setDonationSelected] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const selectThousand = () => {
    setDonation(100000);
    setDonationSelected(true);
  };
  const selectSevenHundredFifty = () => {
    setDonation(75000);
    setDonationSelected(true);
  };
  const selectFiveHundred = () => {
    setDonation(50000);
    setDonationSelected(true);
  };
  const selectTwoHundred = () => {
    setDonation(20000);
    setDonationSelected(true);
  };
  const selectOneHundred = () => {
    setDonation(10000);
    setDonationSelected(true);
  };
  const selectFifty = () => {
    setDonation(5000);
    setDonationSelected(true);
  };
  const selectAmountSubmit = (e) => {
    e.preventDefault();
    if (customAmount >= 100) {
      setDonation(customAmount); // 10 ---> 1000
      setDonationSelected(true);
    } else {
      setErrorMessage('');
      setErrorMessage('Please enter a number equal or greater than $1.00');
    }
  };
  // const handleAmountChange = (e) => {
  //   setCustomAmount(e.target.value);
  // };
  return (
    <>
      {donationSelected === true ? (
        <DonateProcess donation={donation} />
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
                  <Button
                    className={`btn ${style['selectAmount-btn']}`}
                    onClick={selectThousand}
                    variant="btn-primary"
                    size="btn-lg"
                  >
                    $1,000
                  </Button>
                  <Button
                    className={`btn ${style['selectAmount-btn']}`}
                    onClick={selectSevenHundredFifty}
                    variant="btn-primary"
                    size="btn-lg"
                  >
                    $750
                  </Button>
                  <Button
                    className={`btn ${style['selectAmount-btn']}`}
                    onClick={selectFiveHundred}
                    variant="btn-primary"
                    size="btn-lg"
                  >
                    $500
                  </Button>
                  <Button
                    className={`btn ${style['selectAmount-btn']}`}
                    onClick={selectTwoHundred}
                    variant="btn-primary"
                    size="btn-lg"
                  >
                    $200
                  </Button>
                  <Button
                    className={`btn ${style['selectAmount-btn']}`}
                    onClick={selectOneHundred}
                    variant="btn-primary"
                    size="btn-lg"
                  >
                    $100
                  </Button>
                  <Button
                    className={`btn ${style['selectAmount-btn']}`}
                    onClick={selectFifty}
                    variant="btn-primary"
                    size="btn-lg"
                  >
                    $50
                  </Button>
                  <form
                    className={style.amountSubmitForm}
                    onSubmit={selectAmountSubmit}
                  >
                    <div className={style['custom-amount']}>
                      <InputWithIcon
                        type={'text'}
                        placeholder="10.00"
                        required
                        value={customAmount}
                        handleChange={(e) => setCustomAmount(e.target.value)} //handleAmountChange}
                      >
                        <FontAwesomeIcon icon={faDollarSign} />
                      </InputWithIcon>

                      <Button
                        className={`btn ${style['selectAmount-btn']}`}
                        type="submit"
                        variant="btn-primary"
                        size="btn-lg"
                      >
                        Donate
                      </Button>
                    </div>
                    {/* <CurrencyFormat
                      value={customAmount}
                      displayType={'input'}
                      thousandSeparator={true}
                      prefix={'$'}
                      decimalScale={2}
                      onValueChange={(values) => {
                        setCustomAmount(values.value);
                      }}
                    /> */}
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

// {/* {donationSelected && <DonateProcess donation={donation} />} */}
export default Donate;
