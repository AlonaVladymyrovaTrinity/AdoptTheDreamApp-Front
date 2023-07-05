import React from 'react';
import style from './NoSearchResults.module.css';
import imgNoPets from '../../images/no-animals.png';

const NoSearchResults = () => {
  return (
    <div className={style['no-search-container']}>
      <div className={style['no-search-image-wrapper']}>
        <img
          className={style['no-search-result-header-image']}
          src={imgNoPets}
          alt="no-pets"
        />
        <h3 className={style['no-search-result-header']}>
          No results matching your criteria. Consider broadening your search.
        </h3>
      </div>
    </div>
  );
};
export default NoSearchResults;
