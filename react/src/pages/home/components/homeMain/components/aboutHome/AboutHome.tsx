import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button } from '../../../../../../components/button/Button'
import { PATH_ABOUT, PATH_CATALOG } from '../../../../../../constants/routes';
import photoAbout from '../../../../../../assets/images/about-image.png'
import styles from './AboutHome.module.scss'

interface IProps {
  isMainAbout?: boolean;
}

export const AboutHome: React.FC<IProps> = ({ isMainAbout = false }) => {

  const navigate = useNavigate();

  const handleBtnClick = () => {
    navigate(PATH_ABOUT);
  }

  return (
    <section className={styles.mainContainer}>
      <span className={styles.title}>О нас</span>
      <div className={styles.container}>
        <div className={styles.infoContainer}>
          <p className={styles.welcomeText}>Добро пожаловать в интернет-магазин мужской одежды Mens Fashion!</p><br />
          <p className={styles.text}><span>Мы - команда энтузиастов, стремящихся сделать покупки одежды для мужчин простыми, удобными и приятными. Наша цель - предложить стильные и качественные товары, которые подчеркнут вашу индивидуальность и помогут вам выглядеть настоящим джентльменом.</span><br /><span>В Mens Fashion мы верим, что одежда - это не просто способ закрыться от холода или защититься от погодных условий. Это выражение вашего стиля, вашей личности и вашего уникального вкуса. Мы тщательно отбираем каждый предмет одежды в нашем ассортименте, чтобы предоставить вам самые модные и актуальные тренды сезона.</span></p>
          {isMainAbout && 
            <p className={styles.text}><span>Наша коллекция включает в себя все, что вам может понадобиться - от классических рубашек и пиджаков до спортивной одежды и аксессуаров. Мы работаем с известными брендами и дизайнерами, чтобы предложить вам лучший выбор. Каждый товар проходит тщательный отбор, чтобы удовлетворить самые высокие стандарты качества.</span><br /><span>В Mens Fashion мы ценим наших клиентов и стремимся предоставить им безупречный сервис. Наша команда готова помочь вам с выбором, ответить на любые вопросы и обеспечить приятный опыт покупок. Мы гарантируем быструю доставку, удобные варианты оплаты и простой возврат товара, если вам не подошло или не устроило.</span><br /><span>Мы также гордимся своим участием в социальных и экологических инициативах. Мы поддерживаем производителей, которые следуют этическим стандартам и заботятся о окружающей среде. Мы стараемся минимизировать наш экологический след и способствовать устойчивому развитию.</span><br /><span>Спасибо, что выбрали Mens Fashion. Мы надеемся, что наша одежда станет вашим стилем, и вы будете наслаждаться покупками у нас. Если у вас есть вопросы или пожелания, не стесняйтесь обращаться к нам. Мы всегда готовы помочь!</span><br /><p className={styles.welcomeText}>С уважением, Команда Mens Fashion!</p></p>
          }
          {!isMainAbout &&
            <div className={styles.btnContainer}>
              <Button painted={false} text='Читать далее' handleClick={handleBtnClick} icon='arrow' />
            </div>
          }
        </div>
        <div className={styles.imgContainer}>
          <img className={styles.image} src={photoAbout} alt="Изображение" />
        </div>
      </div>
    </section>
  )
}
