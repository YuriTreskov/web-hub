import css from './ShopPageMobile3.module.css'
import  { motion} from "framer-motion";

import landing from './img/landing1.png'

const lst = [{
    'header': 'Расширьте Ваши Границы Торговли',
    'description': `В эпоху онлайн-шопинга, интернет-магазин открывает перед вашим бизнесом глобальные 
    возможности, обеспечивая удобство покупок клиентам по всему миру. Современный 
    и функциональный веб-магазин укрепляет лояльность клиентов, расширяет вашу 
    рыночную долю и способствует устойчивому росту продаж. Это ваш цифровой магазин 
    открытый 24/7 для покупателей из любой точки мира.`
},]


const ShopPageMobile3 = () => {
    return ( 
<>
<section className={css.container}>
 
    <motion.div initial={{x:0}} whileInView={{x:0}} viewport={{amount:.7}} className={css.contentContainer}>
        <motion.div initial={{opacity:0}} whileInView={{opacity:.8}} transition={{duration:1}} viewport={{amount:.7}} className={css.cardHeader}>{lst[0].header}</motion.div>
        <motion.div initial={{opacity:0}} whileInView={{opacity:.8}} transition={{duration:1}} viewport={{amount:.7}} className={css.cardFullText}>{lst[0].description}</motion.div>
    </motion.div>
    <motion.img initial={{scale:0.7}} whileInView={{scale:1}} viewport={{amount:.7}} className={css.img} src={landing} alt="Команда веб-разработчиков работает над проектом интернет-магазина" />
</section>
</>
     );
}
 
export default ShopPageMobile3;