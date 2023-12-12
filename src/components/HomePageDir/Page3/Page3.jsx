import css from './Page3.module.css'
import  { motion} from "framer-motion";


const Page3 = () => {
    const width = window.screen.width

    if(width>768){
        return (
            <>
            <section className={css.container}>
                    <div className={css.nestedContainer} style={{'--clr':'#01e100;--i:1;'}}>
                        <motion.img initial={{ x:-100 }} viewport={{amount:.7}}  whileInView={{ x:0 }} className={css.webStudio} src="Page3/webstudio.png" alt="" />
                    </div>
                    <motion.div initial={{ x:100 }} viewport={{amount:.7}}  whileInView={{ x:0 }} className={css.nestedContainer}>
                        <motion.h2 initial={{ opacity:0 }} transition={{duration:2}}  whileInView={{ opacity:1 }} className={css.header}>Инновационное агентство полного спектра для <span> веб-разработки</span> и цифрового дизайна</motion.h2>
                        <motion.p initial={{ opacity:0 }} transition={{duration:2}}  whileInView={{ opacity:1 }} className={css.fullText}>У нас слаженный коллектив экспертов, увлеченных миром интернета и обладающих знаниями о том, как превратить его в инструмент для процветания Вашего предприятия. Мы предлагаем всеобъемлющие услуги, начиная от создания веб-сайтов до их продвижения и технической поддержки.</motion.p>
                    </motion.div>
            </section>
            </>
                );
    }else{
        return (
            <>
            <section className={css.container}>
                    <motion.div initial={{ y:100 }}  whileInView={{ y:0 }}  className={css.nestedContainer} style={{'--clr':'#01e100;--i:1;'}}>
                        <motion.img className={css.webStudio} src="Page3/webstudio.png" alt="" />
                    </motion.div>
                    <div  className={css.nestedContainer}>
                        <motion.h2 initial={{ opacity:0 }} transition={{duration:2}}  whileInView={{ opacity:1 }} className={css.header}>Инновационное агентство полного спектра для <span> веб-разработки</span> и цифрового дизайна</motion.h2>
                        <motion.p initial={{ opacity:0 }} transition={{duration:2}}  whileInView={{ opacity:1 }} className={css.fullText}>У нас слаженный коллектив экспертов, увлеченных миром интернета и обладающих знаниями о том, как превратить его в инструмент для процветания Вашего предприятия. Мы предлагаем всеобъемлющие услуги, начиная от создания веб-сайтов до их продвижения и технической поддержки.</motion.p>
                    </div>
            </section>
            </>
                );
    }

}
 
export default Page3;