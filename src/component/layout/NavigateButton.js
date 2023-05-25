import React from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

//The NavigateButton lets us navigate to another screen in our app.
const NavigateButton = ({ linkName, children, variant, size }) => {
  // linkName is a destination name of the route
  //variant and size - style of bootstrap Button (variant:'primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light', 'link'; size:'sm', 'lg')
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(linkName, { replace: true }); //replace-replace the current screen with a new one (linkName)
  };
  return (
    <>
      <div className="mb-2">
        <Button onClick={clickHandler} variant={variant} size={size}>
          {children}
        </Button>
      </div>
    </>
  );
};
export default NavigateButton;
