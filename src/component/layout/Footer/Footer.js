import React from "react";
import styled from "styled-components";

const Footer = () => {

    return (
        <FooterContainer className="main-footer">
            <div className="footer-middle">
                <div className="container">
                    <div className="row">
                        {/*Column 1 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Contact</h4>
                        </div>
                        {/*Column 2 */}
                        <div className="col-md-3 col-sm-6">
                            <h4>Our Team</h4>
                        </div>
                    </div>
                    {/*Footer Bottom */}
                    <div className="footer-bottom">
                        <p className="text-xs-center">
                            &copy; All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </FooterContainer>
    );
}

export default Footer;

const FooterContainer = styled.footer`
    .footer-middle {
        background: var(--mainDark);
        padding-top: 3rem; 
        color: var(--mainWhite);
    }

`;