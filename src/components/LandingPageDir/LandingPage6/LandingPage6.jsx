import css from './LandingPage6.module.css'
import  { motion} from "framer-motion";
import { MyContext } from '../../LayoutDir/MyContextProvider/MyContextProvider';
import { useContext } from 'react';
import fon from './img/fon.png'

const LandingPage6 = () => {
    const { modal, setModal } = useContext(MyContext); 
    return ( 
<>
<section className={css.container}>
    <motion.h2 initial={{ y:100 }} viewport={{amount:.7, once:true}}  whileInView={{ y:0 }} className={css.header}>Остались вопросы?</motion.h2>
    <motion.h3 initial={{ opacity:0 }} transition={{delay:.3,duration:.9}}  whileInView={{ opacity:.8 }} viewport={{amount:.7}} className={css.header1}>Свяжитесь с нами!</motion.h3>
    <div className={css.contentContainer}>
    <motion.img initial={{x:-100,scale:0.7}} whileInView={{x:0,scale:1}} viewport={{amount:.7}} className={css.fon} src={fon} alt="На фотографии - команда маркетологов, работающих над SEO-оптимизацией и продвижением лендинг пейдж для увеличения вовлеченности аудитории." />
    
    <motion.div initial={{ x:100 }} viewport={{amount:.7}}  whileInView={{ x:0 }} className={css.buttonContainer}>
    <h2 className={css.cardHeader}>Контакты</h2>
        <a className={css.watsapp} href='https://wa.me/79891246157' >WatsApp</a>
        <a className={css.telegram} href="https://t.me/i_am_yurii">Telegram</a>
        <a className={css.number} href="tel:+79891246157">+7 (989) 124-61-57</a>
        <a onClick={()=>{setModal(true)}} className={css.number} >Заказать Лендинг</a>
    </motion.div>
    
    </div>

</section>
</>
     );
}
 
export default LandingPage6;