import React from 'react';
import style from './NoFavorites.module.css';
import imgNoPets from '../../images/no-animals.png';
import NavigateButton from '../layout/NavigateButton/NavigateButton';

const NoFavorites = () => {
  return (
    <>
      <div>
        <h1 className={style['header']}>You don't have favorites pet yet!</h1>
      </div>
      <div className={style['no-favorite-page__container']}>
        <div className={style['no-favorite-wrapper']}>
          <div>
            <img
              className={style['img-page-no-favorite']}
              src={imgNoPets}
              alt="no-favorite"
            />
          </div>
        </div>
      </div>

        {/* <div className={style['no-favorites-pets-button']}> */}
            <NavigateButton
              linkName={'/pets'}
              children
              size="btn-lg"
              variant="btn-primary"
              className={`btn ${style['no-favorites-pets-button']} position-absolute top-0 end-0 mt-3 me-3`}
            ><span>View Pets</span></NavigateButton>
        {/* </div> */}
    </>
  );
};

export default NoFavorites;
