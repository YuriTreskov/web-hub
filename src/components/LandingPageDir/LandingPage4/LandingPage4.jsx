import css from './LandingPage4.module.css'
import  { motion} from "framer-motion";

import img1 from './img/img1.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'
import img4 from './img/img4.png'
import img5 from './img/img5.png'
import img6 from './img/img6.png'



const LandingPage4 = () => {
    return ( 
<>
<section className={css.container}>
    <motion.h2  initial={{y:100}} whileInView={{y:0}} viewport={{amount:.7}}  className={css.header}>Особенности разработки <span>landing page</span></motion.h2>
    <div className={css.nestedContainer}>
        <div className={css.card}>
        <div className={css.imgContainer}>
                <motion.img initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.img} src={img1} alt="Детализированный просмотр макета лендинг пейдж в Figma, демонстрирующий инновационный веб-дизайн и пользовательский интерфейс." />
        </div>
            <div className={css.contentContainer}>
                <motion.h3 initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.cardHeader}>Сроки</motion.h3>
                <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.fullText}>
                    Мы гарантируем клиентам честный прогноз по времени и неукоснительно придерживаемся установленных дедлайнов.
                </motion.p>
            </div>
        </div>
        <div className={css.card}>
            <div className={css.imgContainer}>
                <motion.img initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.img} src={img2} alt="Команда веб-разработчиков координирует стратегию создания лендинга, обсуждая UX/UI элементы для оптимизации конверсии." />
            </div>
        
            <div className={css.contentContainer}>
                <motion.h3 initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.cardHeader}>Гибкий интерфейс</motion.h3>
                <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.fullText}>
                Применяем принципы реактивного дизайна и технологии для мобильных устройств, чтобы обеспечить безупречное отображение веб-сайтов на любых платформах.
                </motion.p>
            </div>
        </div>
        <div className={css.card}>
        <div className={css.imgContainer}>
                <motion.img initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.img} src={img3} alt="Стратегия и анализ: маркетолог вглядывается в SEO-метрики для оптимизации эффективности лендинг пейдж." />
        </div>
            <div className={css.contentContainer}>
                <motion.h3 initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.cardHeader}>Основы поисковой оптимизации</motion.h3>
                <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.fullText}>
                Применяем методы SEO-оптимизации для ускорения продвижения ваших сайтов в поисковых системах.
                </motion.p>
            </div>
        </div>
    </div>
    <div className={css.nestedContainer}>
    <div className={css.card}>
    <div className={css.imgContainer}>
                <motion.img initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.img} src={img4} alt="Концентрация и творчество: веб-дизайнер разрабатывает уникальный макет лендинга в Figma, подчеркивая инновационный подход к визуальной презентации." />
    </div>
            <div className={css.contentContainer}>
                <motion.h3 initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.cardHeader}>Дизайн</motion.h3>
                <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.fullText}>
                Применяем исключительно лицензионные материалы — коммерческие шрифты, графику, темы и плагины.
                </motion.p>
            </div>
        </div>
        <div className={css.card}>
        <div className={css.imgContainer}>
                <motion.img initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.img} src={img5} alt="За кулисами веб-разработки: детальный вид на код HTML и CSS, используемый для создания адаптивного лендинга." />
        </div>
            <div className={css.contentContainer}>
                <motion.h3 initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.cardHeader}>Контент-менеджмент</motion.h3>
                <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.fullText}>
                Создадим систему управления сайтом под ваши нужды. 
                </motion.p>
            </div>
        </div>
        <div className={css.card}>
        <div className={css.imgContainer}>
                <motion.img initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.img} src={img6} alt="На этом снимке изображен семинар по веб-дизайну, где специалисты обучаются созданию визуально привлекательных и функциональных лендинг пейдж." />
        </div>
            <div className={css.contentContainer}>
                <motion.h3 initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.cardHeader}>Гарантийная поддержка</motion.h3>
                <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.fullText}>
                Мы оказываем гарантийное и послегарантийное обслуживание проектов наших клиентов.
                </motion.p>
            </div>
        </div>
</div>
</section>
</>
     );
}
 
export default LandingPage4;