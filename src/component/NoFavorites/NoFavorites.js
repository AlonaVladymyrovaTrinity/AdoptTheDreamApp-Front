import React from 'react';
import style from './NoFavorites.module.css';
import imgNoPets from '../../images/no-animals.png';
import Button from 'react-bootstrap/Button';

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

      <div className="mb-2">
        <Button></Button>
      </div>
    </>
  );
};

export default NoFavorites;
