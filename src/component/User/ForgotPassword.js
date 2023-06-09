import React, { useState } from 'react';
import style from './ForgotPassword.module.css';
import Loader from '../layout/Loader/Loader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import InputWithIcon from '../layout/InputWithIcon/InputWithIcon';

const ForgotPassword = () => {
  //---server loading simulation---
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 1000);
  //--------------------------------

  const [email, setEmail] = useState('');

  const forgotPasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set('email', email);
    //---temporary console output of Register Submit form. This data will be passed to beknd later---
    console.log('Form Data');
    for (let obj of myForm) {
      console.log(obj);
    }
    //-------------------------
  };

  return (
    <>
      {loading ? (
        <Loader className="small-spinner" />
      ) : (
        <>
          <div className={style['forgotPasswordContainer']}>
            <div className={style['forgotPasswordBox']}>
              <h1 className={style['forgotPasswordHeading']}>
                FORGOT PASSWORD
              </h1>

              <form
                className={style['forgotPasswordForm']}
                onSubmit={forgotPasswordSubmit}
              >
                <div className={style['forgotPasswordEmail']}>
                  {/* InputWithIcon Component for forgotPasswordForm field Email: input element with icon. */}
                  <InputWithIcon
                    type={'email'}
                    placeholder={'Email'}
                    required
                    name="email"
                    value={email}
                    handleChange={(e) => setEmail(e.target.value)}
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </InputWithIcon>
                </div>
                {/* Form submit button */}
                <Button
                  className={style.forgotPasswordBtn}
                  variant="btn-primary"
                  size="btn-lg"
                  type="submit"
                >
                  Send
                </Button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ForgotPassword;
