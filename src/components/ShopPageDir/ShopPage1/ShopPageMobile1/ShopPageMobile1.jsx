
import css from './ShopPageMobile1.module.css'
import  { motion} from "framer-motion";
import { MyContext } from '../../../LayoutDir/MyContextProvider/MyContextProvider';
import { useContext } from 'react';


import img1 from './img/q.png'

const ShopPageMobile1 = () => {
    const { modal, setModal } = useContext(MyContext);
 
    return ( 
<>
<section className={css.container}>
    <motion.img initial={{ opacity:0,x:-100 }}   whileInView={{ opacity:1,x:0}} transition={{duration:.2,ease: "easeOut"}} className={css.fon} src={img1} alt="Интерфейс пользовательской корзины в интернет-магазине" />
    <div className={css.gradient}></div>
    <div className={css.textContainer}>
        <motion.h1 initial={{opacity:0,y:100}} whileInView={{opacity:.8,y:0}} transition={{delay:.5}} className={css.header}><span>Интернет Магазин</span> под ключ</motion.h1>
        <div className={css.buttonContainer}>
            <motion.h2 onClick={()=>{setModal(true)}} initial={{opacity:0}} whileInView={{opacity:.7}} transition={{delay:1,duration:1}} className={css.header1}>Заказать Магазин</motion.h2>
        </div>
    </div>

</section>
</>
     );
}
 
export default ShopPageMobile1;