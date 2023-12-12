import css from './CardPage3.module.css'
import  { motion} from "framer-motion";

import landing from './img/landing1.png'

const lst = [
    {
      'header': 'Индивидуальное Решение',
      'description': `Мы создаем не просто сайты, а индивидуальные бизнес-инструменты, 
      максимально адаптированные под ваши задачи и потребности, подчеркивающие 
      уникальность вашего предложения и обеспечивающие эффективное взаимодействие с клиентами.`
    }
  ]

const CardPage3 = () => {
    return ( 
<>
<section className={css.container}>
 
    <motion.div initial={{x:-100}} whileInView={{x:0}} viewport={{amount:.7}} className={css.contentContainer}>
        <motion.div initial={{opacity:0}} whileInView={{opacity:.8}} transition={{duration:1}} viewport={{amount:.7}} className={css.cardHeader}>{lst[0].header}</motion.div>
        <motion.div initial={{opacity:0}} whileInView={{opacity:.8}} transition={{duration:1}} viewport={{amount:.7}} className={css.cardFullText}>{lst[0].description}</motion.div>
    </motion.div>
    <motion.img initial={{x:100,scale:0.7}} whileInView={{x:0,scale:1}} viewport={{amount:.7}} className={css.img} src={landing} alt="" />
</section>
</>
     );
}
 
export default CardPage3;