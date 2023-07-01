import style from './DonationSuccess.module.css';
import StyledBackButton from '../BackButton/StyledBackButton';
import imgPageNotFound from '../../../images/giphy.gif';

function PageNotFound() {
  return (
    <>
      <h1 className={style['donation-success-header']}>Success!</h1>
      <div className={style['donation-success-page-container']}>
        <div className={style['donation-success-wrapper']}>
          <div className="card">
            <div className="card-body">
              {/* Renders a custom StyledBackButton component with a link to the home page, 
             styled by default with a className "link-color" color, and text "Go to home page" 
             which passed to the component as a child */}
              <StyledBackButton
                linkName={'/'}
                className={'link-color'}
                children
              >
                <span>Go to home page</span>
              </StyledBackButton>
              {/* Header with error message "The requested page does not exist." and an image of a 404 Error to indicate 
                  that the requested page could not be found. */}
              <h2>Thank you! Donation was made successfully!</h2>
              <img
                className={style['img-page-donation-success']}
                src={imgPageNotFound}
                alt="Page not found"
              />
              <p>
                Thank you for your generous donation! Your contribution will
                play a crucial role in helping us find loving homes for
                countless furry friends. We are incredibly grateful for your
                support and dedication to our pet adoption mission. With your
                donation, we can provide shelter, medical care, and nourishment
                to abandoned and neglected animals. Your generosity will
                directly impact their lives, ensuring they receive the care and
                attention they deserve. Your kindness brings us one step closer
                to finding forever homes for these precious pets. We are
                committed to making the adoption process seamless and ensuring
                that every pet finds a loving family. Your donation will enable
                us to continue our efforts in rescuing, rehabilitating, and
                rehoming animals in need. Together, we are creating a better
                future for these wonderful creatures. Once again, we extend our
                heartfelt gratitude for your contribution. Your support
                demonstrates your compassion for animals and your dedication to
                their well-being. We couldn't do this without you. If you have
                any further questions or would like to stay connected with our
                pet adoption community, please don't hesitate to reach out. We
                appreciate your involvement and look forward to keeping you
                informed about the impact of your donation. Thank you for making
                a difference in the lives of our furry friends and for being a
                vital part of our pet adoption journey.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PageNotFound;
