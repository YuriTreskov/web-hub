import css from './Contacts.module.css'
import  { motion} from "framer-motion";
import { MyContext } from '../../../components/LayoutDir/MyContextProvider/MyContextProvider';
import { useContext } from 'react';
import fon from './img/fon.png'

const Contacts = () => {
    const { modal, setModal } = useContext(MyContext); 
    return ( 
<>
<section className={css.container}>
    <div className={css.contentContainer}>
    <motion.img initial={{x:-100,scale:0.7}} whileInView={{x:0,scale:1}} viewport={{amount:.7}} className={css.fon} src={fon} alt="" />
    
    <motion.div initial={{ x:100 }} viewport={{amount:.7}}  whileInView={{ x:0 }} className={css.buttonContainer}>
    <h2 className={css.cardHeader}>Контакты</h2>
        <a className={css.watsapp} href='https://wa.me/79891246157' >WatsApp</a>
        <a className={css.telegram} href="https://t.me/i_am_yurii">Telegram</a>
        <a className={css.number} href="tel:+79891246157">+7 (989) 124-61-57</a>
        <a onClick={()=>{setModal(true)}} className={css.number} >Заказать звонок</a>
    </motion.div>
    
    </div>

</section>
</>
     );
}
 
export default Contacts;