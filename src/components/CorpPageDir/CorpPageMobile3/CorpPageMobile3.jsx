import css from './CorpPageMobile3.module.css'
import  { motion} from "framer-motion";

import landing from './img/landing1.png'

const CorpPageMobile3 = () => {
    return ( 
<>
<section className={css.container}>
 
    <motion.div initial={{x:0}} whileInView={{x:0}} viewport={{amount:.7}} className={css.contentContainer}>
        <motion.div initial={{opacity:0}} whileInView={{opacity:.8}} transition={{duration:1}} viewport={{amount:.7}} className={css.cardHeader}>Откройте Ваш Бизнес Миру</motion.div>
        <motion.div initial={{opacity:0}} whileInView={{opacity:.8}} transition={{duration:1}} viewport={{amount:.7}} className={css.cardFullText}>
        В цифровую эру корпоративный сайт становится ключевым для вашего бренда, 
        представляя вашу компанию в сети и упрощая связь с клиентами и партнерами. 
        Профессиональный сайт повышает доверие, усиливает вашу видимость и поддерживает 
        рост бизнеса. Он служит платформой для взаимодействия с аудиторией и дает 
        преимущество на рынке.
        </motion.div>
    </motion.div>
    <motion.img initial={{scale:0.7}} whileInView={{scale:1}} viewport={{amount:.7}} className={css.img} src={landing} alt="Интерактивная презентация корпоративных услуг" />
</section>
</>
     );
}
 
export default CorpPageMobile3;