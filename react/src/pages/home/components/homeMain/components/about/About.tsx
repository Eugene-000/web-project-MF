import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../../../components/button/Button'
import { PATH_ABOUT, PATH_CATALOG } from '../../../../../../constants/routes';
import photoAbout from '../../../../../../assets/images/about-image.png'
import styles from './About.module.scss'

export const About = () => {

  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate(PATH_ABOUT);
  }

  return (
    <section className={styles.mainContainer}>
      <span className={styles.title}>О нас</span>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <p className={styles.text}><span>Men’s Fashion-один из ведущих мировых брендов дизайнерского стиля жизни, признанный на международном уровне за то, что он отражает суть классического американского крутого стиля, отличающегося опрятным дизайном с изюминкой.</span><br /><span>Men’s Fashion является глобальной компанией по производству одежды и розничной торговле с более чем 16 000 партнерами по всему миру. Благодаря поддержке широкого признания потребителей во всем мире Tommy Hilfiger создал обширную дистрибьюторскую сеть в более чем 100 странах и более 2000 розничных магазинов по всей Северной Америке и Европе.</span></p>
          <div className={styles.btnContainer}>
            <Button painted={false} text='Читать далее' handleClick={handleBtnClick} icon='arrow'/>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <img className={styles.image} src={photoAbout} alt="Изображение" />
        </div>
      </div>
    </section>
  )
}
