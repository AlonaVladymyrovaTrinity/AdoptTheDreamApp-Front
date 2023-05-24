import React from 'react';
import './InputWithIcon.css';
import PropTypes from 'prop-types';
// Functional React component named InputWithIcon with props
const InputWithIcon = ({
  type,
  placeholder,
  value,
  handleChange,
  id,
  name,
  children,
}) => {
  return (
    <>
      {/* Icon which renders from children prop */}
      {children}
      {/* Input element which is configured as a “controlled component” with attributes such as “value”, “onChange” and others */}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        id={id}
        name={name}
      />
    </>
  );
};

InputWithIcon.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  handleChange: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.object,
};

export default InputWithIcon;
