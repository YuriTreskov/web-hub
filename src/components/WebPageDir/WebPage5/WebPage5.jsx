import css from './WebPage5.module.css'
import { MyContext } from '../../LayoutDir/MyContextProvider/MyContextProvider';
import { useContext } from 'react';
import {motion} from 'framer-motion'


const WebPage5 = () => {
    const { modal, setModal } = useContext(MyContext); 
    return ( 
<>
<section className={css.container}>
    <motion.h2  initial={{y:100}} whileInView={{y:0}} className={css.header}>Сайт должен приносить прибыль!</motion.h2>
    <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.4}} transition={{duration:1}} className={css.fullText}>
        Сделаем сайт под ваш бюджет. От одностраничного сайта до крупных масштабируемых проектов , созданных индивидульно под ваши цели.
    </motion.p>
    <motion.a initial={{y:100}} whileInView={{y:0}} onClick={()=>{setModal(true)}}  className={css.button}>Оставить заявку</motion.a>
</section>
</>
     );
}
 
export default WebPage5;