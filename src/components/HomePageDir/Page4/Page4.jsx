import css from './Page4.module.css'
import  { motion} from "framer-motion";
import {Link} from 'react-router-dom'

const Page4 = () => {
    return (
<>
<section className={css.container}>
    <motion.div initial={{ opacity:0 }} transition={{duration:2}}  whileInView={{ opacity:1 }} className={css.card}>
        <motion.div initial={{ y:50 }} viewport={{amount:.7}}  whileInView={{ y:0 }}><Link  to='/website'><img className={css.cardImg} src="Page4/dev.png" alt="" /></Link></motion.div>
        <motion.div initial={{ opacity:0 }} transition={{duration:2}}  whileInView={{ opacity:1 }}><Link  to='/website' className={css.cardHeader}>Разработка</Link></motion.div>
        <motion.p initial={{ opacity:0 }} transition={{duration:2, delay:.1}}  whileInView={{ opacity:1 }} className={css.cardFullText}>Создание корпоративных сайтов, интернет-магазинов, мобильных приложений, CRM-систем</motion.p>
    </motion.div>
    <motion.div initial={{ opacity:0 }} transition={{duration:2}}  whileInView={{ opacity:1 }} className={css.card}>
        <motion.div initial={{ y:50 }} viewport={{amount:.7}}  whileInView={{ y:0 }}><Link to='/disign' ><img className={css.cardImg} src="Page4/dis.png" alt="" /></Link></motion.div>
        <motion.div initial={{ opacity:0 }} transition={{duration:2}}  whileInView={{ opacity:1 }}><Link to='/disign'  className={css.cardHeader}>Дизайн</Link></motion.div>
        <motion.p initial={{ opacity:0 }} transition={{duration:2, delay:.1}}  whileInView={{ opacity:1 }} className={css.cardFullText}>Разработка эксклюзивного веб-дизайна, создание логотипа и фирменного стиля организации, а также дизайн страниц в социальных сетях.</motion.p>
    </motion.div>
    <motion.div initial={{ opacity:0 }} transition={{duration:2}}  whileInView={{ opacity:1 }} className={css.card}>
        <motion.div initial={{ y:50 }} viewport={{amount:.7}}  whileInView={{ y:0 }}><Link to='/promotion'  ><img className={css.cardImg} src="Page4/direct.png" alt="" /></Link></motion.div>
        <motion.div initial={{ opacity:0 }} transition={{duration:2}}  whileInView={{ opacity:1 }}><Link to='/promotion'  className={css.cardHeader}>Продвижение</Link></motion.div>
        <motion.p initial={{ opacity:0 }} transition={{duration:2, delay:.1}}  whileInView={{ opacity:1 }} className={css.cardFullText}>Мы проводим анализ рынка, оптимизируем сайты для поисковых запросов и управляем рекламой в Google и Yandex.</motion.p>
    </motion.div>
</section>
</>
    );
}
 
export default Page4;