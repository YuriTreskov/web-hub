import css from './Page6.module.css'
import  { motion} from "framer-motion";
import { MyContext } from '../../LayoutDir/MyContextProvider/MyContextProvider';
import { useContext } from 'react';

const Page6 = () => {
    const { modal, setModal } = useContext(MyContext); 
    return ( 
<>
<section className={css.container}>
    <motion.h2 initial={{ y:100 }} viewport={{amount:.7}}  whileInView={{ y:0 }} className={css.header}>Остались вопросы?</motion.h2>
    <motion.h3 initial={{ opacity:0 }} transition={{delay:.3,duration:.9}}  whileInView={{ opacity:1 }} viewport={{amount:.7}} className={css.header1}>Свяжитесь с нами!</motion.h3>
    <motion.div initial={{ y:100,gap:'10vw' }} viewport={{amount:.7}}  whileInView={{ y:0,gap:'1vw' }} className={css.buttonContainer}>
        <a className={css.watsapp} href='https://wa.me/79891246157' >WatsApp</a>
        <a className={css.telegram} href="https://t.me/i_am_yurii">Telegram</a>
        <a className={css.number} href="tel:+79785780435">+7 (978) 578-04-35</a>
        <a onClick={()=>{setModal(true)}} className={css.number} >Обратный звонок</a>
    </motion.div>
</section>
</>
     );
}
 
export default Page6;