import css from './LandingPageMobile3.module.css'
import  { motion} from "framer-motion";

import landing from './img/landing1.png'

const LandingPageMobile3 = () => {
    return ( 
<>
<section className={css.container}>
 
    <motion.div initial={{x:0}} whileInView={{x:0}} viewport={{amount:.7}} className={css.contentContainer}>
        <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}} viewport={{amount:.7}} className={css.cardHeader}>Первое Впечатление о Вашем Бизнесе</motion.div>
        <motion.div initial={{opacity:0}} whileInView={{opacity:.8}} transition={{duration:1}} viewport={{amount:.7}} className={css.cardFullText}>
        Лендинг пейдж — это ключевое место взаимодействия с потенциальными 
        клиентами и ваше главное рекламное преимущество. Посетители попадают 
        сюда непосредственно из рекламных кампаний, и именно здесь они впервые 
        знакомятся с вашим предложением. Задача лендинга — не только привлечь 
        внимание и эффективно представить ключевые преимущества продукта или услуги, 
        но и мотивировать к действию, будь то заявка на регистрацию, подписка или 
        непосредственная покупка.
        </motion.div>
    </motion.div>
    <motion.img initial={{x:0,scale:0.7}} whileInView={{x:0,scale:1}} viewport={{amount:.7}} className={css.img} src={landing} alt="Создание профессионального веб-сайта под ключ" />
</section>
</>
     );
}
 
export default LandingPageMobile3;