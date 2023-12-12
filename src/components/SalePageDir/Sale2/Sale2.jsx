import css from './Sale2.module.css'
import {motion} from 'framer-motion'

import referal from './img/referal.png'

const Sale2 = () => {
    return ( 
<>
<section className={css.container}>
        <motion.img className={css.img} src={referal} alt="" />
        <motion.h2 initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}} className={css.header}>Скидка 5% на последующие заказы.</motion.h2>
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}} className={css.descroption}><span className={css.span}>Мы ценим и уважаем наших постоянных клиентов. Поэтмоу дарим скидку 5% на все последующие заказы.</span></motion.p>
</section>
</>

     );
}
 
export default Sale2;