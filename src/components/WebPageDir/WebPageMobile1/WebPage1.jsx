import css from './WebPage1.module.css'
import  { motion} from "framer-motion";
import img1 from './img/in2.png'

const WebPage1 = () => {
    return ( 
<>
<section className={css.container}>
<motion.img initial={{ opacity:0,x:-100 }}   whileInView={{ opacity:1,x:0}} transition={{duration:.5,ease: "easeOut"}} className={css.fon} src={img1} alt="Создание сайта под ключ с индивидуальным дизайном" />    <div className={css.gradient}></div>
    <div className={css.textContainer}>
        <motion.h1 initial={{opacity:0,y:100}} whileInView={{opacity:1,y:0}} transition={{delay:.5}} className={css.header}>Создание  <span>реактивных сайтов</span></motion.h1>
        <motion.h2 initial={{opacity:0}} whileInView={{opacity:.7}} transition={{delay:1,duration:1}} className={css.header1}>От индивидуального веб-дизайна в Figma до адаптивной верстки и разработки на HTML, CSS и JavaScript</motion.h2>
    </div>

</section>
</>
     );
}
 
export default WebPage1;