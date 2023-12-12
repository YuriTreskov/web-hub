import css from './CardPage4.module.css'
import  { motion} from "framer-motion";

import img1 from './img/img1.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'
import img4 from './img/img4.png'
import img5 from './img/img5.png'
import img6 from './img/img6.png'

const lst =[
  {
    'header': 'Персональный Дизайн',
    'description': 'Разработка уникального дизайна, полностью соответствующего вашему бренду и видению.'
  },
  {
    'header': 'Детальный Анализ',
    'description': 'Глубокий анализ потребностей вашего бизнеса для создания наилучшего решения.'
  },
  {
    'header': 'Инновационные Технологии',
    'description': 'Использование передовых технологий для обеспечения функциональности и безопасности.'
  },
  {
    'header': 'Функциональная Гибкость',
    'description': 'Гибкая архитектура проекта, позволяющая легко расширять функционал в будущем.'
  },
  {
    'header': 'Оптимизация Под Пользователя',
    'description': 'Создание интуитивно понятного интерфейса для улучшения пользовательского опыта.'
  },
  {
    'header': 'СЕО-Адаптация',
    'description': 'Полная SEO оптимизация для улучшения видимости в поисковых системах.'
  },
  {
    'header': 'Интегрированный Маркетинг',
    'description': 'Внедрение маркетинговых инструментов для эффективной рекламы и привлечения клиентов.'
  },
  {
    'header': 'Профессиональное Тестирование',
    'description': 'Многоуровневое тестирование для гарантии качества и надежности проекта.'
  },
  {
    'header': 'Поддержка и Обслуживание',
    'description': 'Непрерывная техническая поддержка и обновление контента для динамичного развития проекта.'
  }
]

const CardPage4 = () => {
    return ( 
<>
<section className={css.container}>
    <motion.h2  initial={{y:100}} whileInView={{y:0}} viewport={{amount:.7}}  className={css.header}>Что входит в разработку <span>индивидуального проекта</span></motion.h2>
    <div className={css.nestedContainer}>
        <div className={css.card}>
        <div className={css.imgContainer}>
                <motion.img initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.img} src={img1} alt="" />
        </div>
            <div className={css.contentContainer}>
                <motion.h3 initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.cardHeader}>{lst[0].header}</motion.h3>
                <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.fullText}>
                {lst[0].description}
                </motion.p>
            </div>
        </div>
        <div className={css.card}>
            <div className={css.imgContainer}>
                <motion.img initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.img} src={img2} alt="" />
            </div>
        
            <div className={css.contentContainer}>
                <motion.h3 initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.cardHeader}>{lst[1].header}</motion.h3>
                <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.fullText}>
                {lst[1].description}
                </motion.p>
            </div>
        </div>
        <div className={css.card}>
        <div className={css.imgContainer}>
                <motion.img initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.img} src={img3} alt="" />
        </div>
            <div className={css.contentContainer}>
                <motion.h3 initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.cardHeader}>{lst[2].header}</motion.h3>
                <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.fullText}>
                {lst[2].description}
                </motion.p>
            </div>
        </div>
    </div>
    <div className={css.nestedContainer}>
    <div className={css.card}>
    <div className={css.imgContainer}>
                <motion.img initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.img} src={img4} alt="" />
    </div>
            <div className={css.contentContainer}>
                <motion.h3 initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.cardHeader}>{lst[3].header}</motion.h3>
                <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.fullText}>
                {lst[3].description}
                </motion.p>
            </div>
        </div>
        <div className={css.card}>
        <div className={css.imgContainer}>
                <motion.img initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.img} src={img5} alt="" />
        </div>
            <div className={css.contentContainer}>
                <motion.h3 initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.cardHeader}>{lst[4].header}</motion.h3>
                <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.fullText}>
                {lst[4].description} 
                </motion.p>
            </div>
        </div>
        <div className={css.card}>
        <div className={css.imgContainer}>
                <motion.img initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.img} src={img6} alt="" />
        </div>
            <div className={css.contentContainer}>
                <motion.h3 initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.cardHeader}>{lst[5].header}</motion.h3>
                <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.fullText}>
                {lst[5].description}
                </motion.p>
            </div>
        </div>
</div>
</section>
</>
     );
}
 
export default CardPage4;