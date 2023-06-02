import React from 'react';
import style from './NoFavorites.module.css';
import imgNoPets from '../../images/no-animals.png';
import NavigateButton from '../layout/NavigateButton/NavigateButton';

const NoFavorites = () => {
  return (
    <div className={style['container']}>
      <h3 className={style['no-favorites-header']}>You don't have favorite pets yet!</h3>
      <div className={style['imageWrapper']}>
        <img className={style['no-favorites-header-image']} src={imgNoPets} alt="no-favorite" />
        <div className={style['buttonWrapper']}>
          <NavigateButton
            linkName={'/pets'}
            size="btn-lg"
            variant="btn-primary"
            className={style['no-favorites-button']}
          >
            View Pets
          </NavigateButton>
        </div>
      </div>
    </div>
  );
};
export default NoFavorites;
