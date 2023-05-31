import React from 'react';
import styled from 'styled-components';
import BackButtonSvg from '../../../images/arrow-back.svg';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BackButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: left;
  margin: 10px 0 0 15px;
`;
const GoBackImg = styled.img`
  align-items: center;
  width: 35px;
  height: 40px;
  font-size: 10px;
  font-weight: none;
  text-transform: none;
`;
const BackLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-size: 1rem;
  font-weight: bold;

  &.link-color {
    color: #000;
  }
`;
// This is functional styled 'StyledBackButton' component that renders a styled back button
//with optional children and custom CSS class
const StyledBackButton = ({ linkName, children, className }) => (
  <BackLink to={`${linkName}`} className={className}>
    <BackButtonWrapper>
      <GoBackImg src={BackButtonSvg} alt="go back arrow" />
      {children}
    </BackButtonWrapper>
  </BackLink>
);

StyledBackButton.propTypes = {
  linkName: PropTypes.string,
  children: PropTypes.object,
  className: PropTypes.string,
};

export default StyledBackButton;
