import css from './Sale1.module.css'
import {motion} from 'framer-motion'

import referal from './img/referal.png'

const Sale1 = () => {
    return ( 
<>
<section className={css.container}>
        <motion.img className={css.img} src={referal} alt="" />
        <motion.h2 initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}} className={css.header}> Приведи друга - получите 10%</motion.h2>
        <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}} className={css.descroption}><span className={css.span}>Пригласи друга и получи 5% от суммы его заказа и подари ему скидку 5%.</span></motion.p>
</section>
</>

     );
}
 
export default Sale1;