import redCat from '../../images/redCat.mp4';
import style from './Home.module.css';
import Pets from '../Pet/Pets'
import NavigateButton from '../layout/NavigateButton/NavigateButton';

const Home = () => {
  return (
    <>
      <div /*className={style.home_container}*/>
        <div className={style.home_banner}>
          <div className={style.overlay}></div>
          <video src={redCat} autoPlay loop muted />
          <div className={style.home_banner_content}>
            <h1>WELCOME TO ADOPT PET</h1>
            <div className={style.find_pet_button}>
              <NavigateButton
                linkName={'/pets'}
                children={'FIND YOUR FRIENDS'}
                size="btn-lg"
              />
            </div>
          </div>
        </div>
        <div className={style.cardsContainer} fluid="md" id="container">
          <Pets showFilters={false} />
        </div>
      </div>
    </>
  );
};

export default Home;
