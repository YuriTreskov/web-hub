import css from './Page2.module.css'
import  { motion} from "framer-motion";
import {Link} from 'react-router-dom'


const Page2 = () => {
    const width = window.screen.width

    if(width>768){
        return (
            <>
            <section className={css.container} >
                <motion.h1 initial={{ opacity:0 }} transition={{duration:2}}  whileInView={{ opacity:1 }}  className={css.header}>Создадим для вас:</motion.h1>
                <div className={css.cardContainer}>
                    <motion.div initial={{ opacity:0 }} transition={{duration:2}}  whileInView={{ opacity:1 }} className={css.card}>
                        <h3 className={`${css.cardHeader} ${css.webHeader}`}>Сайт</h3>
                        <Link style={{textAlign:'center'}} className={css.imgLink} to='/website'><img className={css.img} src="Page2/web.webp" alt="" /></Link>
                        <Link to='/website' initial={{ y:10 }} viewport={{amount:.7}}  whileInView={{ y:0 }} className={css.button} >Подробнее</Link>
                    </motion.div>
                    <motion.div initial={{ opacity:0 }} transition={{duration:2}}  whileInView={{ opacity:1 }} className={css.card}>
                        <h3 className={`${css.cardHeader} ${css.mobileHeader}`}>Мобильное приложение</h3>
                        <Link className={css.imgLink} to='mobile'><img className={css.img} src="Page2/mobile.webp" alt="" /></Link>
                        <Link to='mobile' initial={{ y:10 }} viewport={{amount:.7}}  whileInView={{ y:0 }} className={css.button} >Подробнее</Link>
                    </motion.div>
                    <motion.div initial={{ opacity:0 }} transition={{duration:2}}  whileInView={{ opacity:1 }} className={css.card}>
                        <h3 className={`${css.cardHeader} ${css.crmHeader}`}>CRM</h3>
                        <Link className={css.imgLink} to='crm'><img className={css.img} src="Page2/crm.webp" alt="" /></Link>
                        <Link to='crm' initial={{ y:10 }} viewport={{amount:.7}}  whileInView={{ y:0 }} className={css.button} >Подробнее</Link>
                    </motion.div>
                </div>
            </section>
            </>
                  );
    }else{
        return (
            <>
            <section className={css.container} >
                <motion.h1 initial={{ opacity:0 }} transition={{duration:2}}  whileInView={{ opacity:1 }} className={css.header}>Создадим для вас:</motion.h1>
                <div className={css.cardContainer}>
                    <motion.div initial={{ opacity:0 }} transition={{duration:2}}  whileInView={{ opacity:1 }} className={css.card}>
                        <h3 className={`${css.cardHeader} ${css.webHeader}`}>Сайт</h3>
                        <Link to='/website'><img className={css.img} src="Page2/web.webp" alt="" /></Link>
                        <Link to='/website' initial={{ y:10 }} viewport={{amount:.7}}  whileInView={{ y:0 }} className={css.button} >Подробнее</Link>
                    </motion.div>
                    <motion.div initial={{ opacity:0 }} transition={{duration:2}}  whileInView={{ opacity:1 }} className={css.card}>
                        <h3 className={`${css.cardHeader} ${css.mobileHeader}`}>Мобильное приложение</h3>
                        <Link to='mobile'><img className={css.img} src="Page2/mobile.webp" alt="" /></Link>
                        <Link to='mobile' initial={{ y:10 }} viewport={{amount:.7}}  whileInView={{ y:0 }} className={css.button} >Подробнее</Link>
                    </motion.div>
                    <motion.div initial={{ opacity:0 }} transition={{duration:2}}  whileInView={{ opacity:1 }} className={css.card}>
                        <h3 className={`${css.cardHeader} ${css.crmHeader}`}>CRM</h3>
                        <Link to='crm'><img className={css.img} src="Page2/crm.webp" alt="" /></Link>
                        <Link to='crm' initial={{ y:10 }} viewport={{amount:.7}}  whileInView={{ y:0 }} className={css.button} >Подробнее</Link>
                    </motion.div>
                </div>
            </section>
            </>
                  );
    }
   
}
 
export default Page2;