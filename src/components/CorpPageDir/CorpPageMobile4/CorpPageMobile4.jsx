import css from './CorpPageMobile4.module.css'
import  { motion} from "framer-motion";

import img1 from './img/img1.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'
import img4 from './img/img4.png'
import img5 from './img/img5.png'
import img6 from './img/img6.png'

const CorpPageMobile4 = () => {
    return ( 
<>
<section className={css.container}>
    <motion.h2  initial={{y:100}} whileInView={{y:0}} viewport={{amount:.7, once:true}}  className={css.header}>Что входит в разработку <span className={css.span}>Корпоративного сайта</span></motion.h2>
    <div className={css.nestedContainer}>
        <motion.div initial={{x:100}} whileInView={{x:0}} className={css.card}>
        <div className={css.imgContainer}>
                <motion.img initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.img} src={img1} alt="Корпоративный логотип компании на главной странице" />
        </div>
            <div className={css.contentContainer}>
                <motion.h3 initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.cardHeader}>Уникальный Брендинг </motion.h3>
                <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.fullText}>
                Отражение индивидуальности вашего бизнеса.
                </motion.p>
            </div>
        </motion.div>
        <motion.div initial={{x:-100}} whileInView={{x:0}} className={css.card}>
            <div className={css.imgContainer}>
                <motion.img initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.img} src={img2} alt="Команда профессионалов компании на встрече" />
            </div>
        
            <div className={css.contentContainer}>
                <motion.h3 initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.cardHeader}>Продвинутый SEO</motion.h3>
                <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.fullText}>
                Больше видимости в поисковых системах.
                </motion.p>
            </div>
        </motion.div>
        <motion.div initial={{x:100}} whileInView={{x:0}} className={css.card}>
        <div className={css.imgContainer}>
                <motion.img initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.img} src={img3} alt="Инфографика с ключевыми показателями бизнеса" />
        </div>
            <div className={css.contentContainer}>
                <motion.h3 initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.cardHeader}>Интуитивный Интерфейс</motion.h3>
                <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.fullText}>
                Оптимальное пользовательское взаимодействие.
                </motion.p>
            </div>
        </motion.div>
    </div>
    <div className={css.nestedContainer}>
    <motion.div initial={{x:-100}} whileInView={{x:0}} className={css.card}>
    <div className={css.imgContainer}>
                <motion.img initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.img} src={img4} alt="Главный офис компании в современном бизнес-центре" />
    </div>
            <div className={css.contentContainer}>
                <motion.h3 initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.cardHeader}>Мобильная Оптимизация</motion.h3>
                <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.fullText}>
                Идеальное отображение на всех устройствах.
                </motion.p>
            </div>
        </motion.div>
        <motion.div initial={{x:100}} whileInView={{x:0}} className={css.card}>
        <div className={css.imgContainer}>
                <motion.img initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.img} src={img5} alt="Совещание специалистов по веб-разработке" />
        </div>
            <div className={css.contentContainer}>
                <motion.h3 initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.cardHeader}>Безопасность Данных </motion.h3>
                <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.fullText}>
                Защита информации на высшем уровне. 
                </motion.p>
            </div>
        </motion.div>
        <motion.div initial={{x:-100}} whileInView={{x:0}} className={css.card}>
        <div className={css.imgContainer}>
                <motion.img initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.img} src={img6} alt="Корпоративные тренинги и семинары для сотрудников" />
        </div>
            <div className={css.contentContainer}>
                <motion.h3 initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.cardHeader}>Постоянная Поддержка</motion.h3>
                <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.fullText}>
                Надежное обслуживание и помощь экспертов.
                </motion.p>
            </div>
        </motion.div>
</div>
</section>
</>
     );
}
 
export default CorpPageMobile4;