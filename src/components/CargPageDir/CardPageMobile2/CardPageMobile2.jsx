import css from './CardPageMobile2.module.css'
import  { motion} from "framer-motion";
import reactive from './img/react.png'
import cardimg1 from './img/cardImg1.png'
import cardimg2 from './img/cardImg2.png'
import cardimg3 from './img/cardImg3.png'


const lst = [
    {
      'header': 'Персональное Решение',
      'description': 'Каждый проект уникален, и мы создаем персонализированные решения, идеально подходящие под ваши бизнес-цели и потребности.'
    },
    {
      'header': 'Точное Воплощение Ваших Идей',
      'description': 'Ваши идеи и видение становятся реальностью благодаря тесному сотрудничеству на каждом этапе разработки проекта.'
    },
    {
      'header': 'Гибкая Функциональность',
      'description': 'Мы обеспечиваем гибкость функционала, позволяя вашему проекту масштабироваться и развиваться по мере роста вашего бизнеса.'
    },
    {
      'header': 'Инновационные Технологии',
      'description': 'Использование последних технологий гарантирует, что ваш проект будет современным и эффективным.'
    },
    {
      'header': 'Эксклюзивный Дизайн',
      'description': 'Разработка уникального дизайна, который выделит ваш проект среди конкурентов и привлечет внимание аудитории.'
    },
    {
      'header': 'Полный Цикл Разработки',
      'description': 'От идеи до запуска - мы предлагаем полный спектр услуг, обеспечивая успех на каждом этапе вашего проекта.'
    }
  ]


const CardPageMobile2 = () => {
    return (  
<section className={css.container}>
    <img className={css.fon} src={reactive} alt="" />
    <div className={css.nestedContainer}>
        <motion.h2 initial={{opacity:0}} whileInView={{opacity:.8}} transition={{duration:1}} viewport={{amount:.7}} className={css.header}>{lst[0].header}</motion.h2>
        <motion.p initial={{opacity:0}} whileInView={{opacity:.8}} transition={{duration:1}} viewport={{amount:.7}} className={css.fullText}>
        {lst[0].description}
        </motion.p>
    </div>
    <motion.div initial={{x:0}} whileInView={{x:0}} viewport={{amount:.7}} className={css.nestedContainer}>
        <motion.div initial={{x:-100}} whileInView={{x:0}} className={css.card}>
            <div className={css.imgContainers}>
                <img className={css.img} src={cardimg1} alt="" />
            </div>        
            <div className={css.contentContainer}>
            <motion.div initial={{opacity:0}} whileInView={{opacity:.9}} transition={{duration:1}} className={css.cardHeader}>{lst[1].header}</motion.div>
            <motion.div initial={{opacity:0}} whileInView={{opacity:.8}} transition={{duration:1}} className={css.cardFullText}>
            {lst[1].description} 
            </motion.div>
            </div>
        </motion.div>
        <motion.div initial={{x:100}} whileInView={{x:0}} className={css.card}>
        <div className={css.imgContainers}>
                <img className={css.img} src={cardimg2}  alt="" />
            </div>        
            <div className={css.contentContainer}>
                <motion.div initial={{opacity:0}} whileInView={{opacity:.9}} transition={{duration:1}} className={css.cardHeader}>{lst[2].header}</motion.div>
                <motion.div initial={{opacity:0}} whileInView={{opacity:.8}} transition={{duration:1}} className={css.cardFullText}>
                {lst[2].description}
                </motion.div>
            </div>
        </motion.div>
        <motion.div initial={{x:-100}} whileInView={{x:0}} className={css.card}>
        <div className={css.imgContainers}>
                <img className={css.img} src={cardimg3}  alt="" />
            </div>        
            <div className={css.contentContainer}>
                <motion.div initial={{opacity:0}} whileInView={{opacity:.9}} transition={{duration:1}} className={css.cardHeader}>{lst[3].header}</motion.div>
                <motion.div initial={{opacity:0}} whileInView={{opacity:.8}} transition={{duration:1}} className={css.cardFullText}>
                {lst[3].description}
                </motion.div>
            </div>
        </motion.div>
    </motion.div>
</section>
    );
}
 
export default CardPageMobile2;