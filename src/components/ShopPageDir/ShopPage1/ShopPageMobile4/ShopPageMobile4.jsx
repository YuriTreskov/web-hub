import css from './ShopPageMobile4.module.css'
import  { motion} from "framer-motion";

import img1 from './img/img1.png'
import img2 from './img/img2.png'
import img3 from './img/img3.png'
import img4 from './img/img4.png'
import img5 from './img/img5.png'
import img6 from './img/img6.png'

const lst =[
  {
    'header': 'Глубокий Анализ',
    'description': 'Исследование целевой аудитории и рыночных тенденций.',
    'alt':`Команда веб-разработчиков работает над проектом интернет-магазина`
  },
  {
    'header': 'Стратегическое Планирование',
    'description': 'Разработка плана действий для достижения коммерческих целей.',
    'alt':`Мобильная версия интернет-магазина на смартфоне`
  },
  {
    'header': 'Продуманная Архитектура',
    'description': 'Создание структуры сайта для удобства навигации и покупки.',
    'alt':`SEO специалисты оптимизируют интернет-магазин для поисковых систем`
  },
  {
    'header': 'Кастомный Дизайн',
    'description': 'Уникальное визуальное оформление, соответствующее бренду.',
    'alt':`Корпоративный сайт компании с каталогом продукции`
  },
  {
    'header': 'Интеграция Платежей',
    'description': 'Настройка безопасных платежных систем и логистики.',
    'alt':`Процесс программирования кода для веб-разработки на экране монитора`
  },
  {
    'header': 'Техническая Реализация',
    'description': 'Кодирование и программирование функционала магазина.',
    'alt':``
  },
  {
    'header': 'SEO-Оптимизация',
    'description': 'Настройка сайта для лучшей индексации поисковыми системами.',
    'alt':`Веб-дизайнер выбирает шаблон для интернет-магазина`
  },
  {
    'header': 'Мобильная Адаптация',
    'description': 'Полная адаптивность для комфортной работы на мобильных устройствах.',
    'alt':`Интернет-магазин одежды с удобным пользовательским интерфейсом`
  },
  {
    'header': 'Контент-Менеджмент',
    'description': 'Система управления контентом для легкого обновления информации.',
    'alt':`Готовый веб-сайт аптеки с функцией онлайн-заказа`
  },
  {
    'header': 'Качественное Тестирование',
    'description': 'Тщательная проверка работы всех элементов перед запуском.',
    'alt':`Эксперт по маркетингу анализирует статистику интернет-магазина`
  },
  {
    'header': 'Постзапусковая Поддержка',
    'description': 'Обеспечение непрерывной технической и пользовательской поддержки.',
    'alt':`Создание интернет-магазина автозапчастей на экране ноутбука`
  }
]


const ShopPageMobile4 = () => {
    return ( 
<>
<section className={css.container}>
    <motion.h2  initial={{y:100}} whileInView={{y:0}} viewport={{amount:.7,once:true}}  className={css.header}>Что воходит в разработку <span className={css.span}>Интернет магазина</span></motion.h2>
    <div className={css.nestedContainer}>
        <motion.div initial={{x:100}} whileInView={{x:0}} className={css.card}>
        <div className={css.imgContainer}>
                <motion.img initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.img} src={img1} alt={lst[0].alt} />
        </div>
            <div className={css.contentContainer}>
                <motion.h3 initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.cardHeader}>{lst[0].header}</motion.h3>
                <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.fullText}>
                {lst[0].description}
                </motion.p>
            </div>
        </motion.div>
        <motion.div initial={{x:-100}} whileInView={{x:0}} className={css.card}>
            <div className={css.imgContainer}>
                <motion.img initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.img} src={img2} alt={lst[1].alt} />
            </div>
        
            <div className={css.contentContainer}>
                <motion.h3 initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.cardHeader}>{lst[1].header}</motion.h3>
                <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.fullText}>
                {lst[1].description}
                </motion.p>
            </div>
        </motion.div>
        <motion.div initial={{x:100}} whileInView={{x:0}} className={css.card}>
        <div className={css.imgContainer}>
                <motion.img initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.img} src={img3} alt={lst[2].alt} />
        </div>
            <div className={css.contentContainer}>
                <motion.h3 initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.cardHeader}>{lst[2].header}</motion.h3>
                <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.fullText}>
                {lst[2].description}
                </motion.p>
            </div>
        </motion.div>
    </div>
    <div className={css.nestedContainer}>
    <motion.div initial={{x:-100}} whileInView={{x:0}} className={css.card}>
    <div className={css.imgContainer}>
                <motion.img initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.img} src={img4} alt={lst[3].alt} />
    </div>
            <div className={css.contentContainer}>
                <motion.h3 initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.cardHeader}>{lst[3].header}</motion.h3>
                <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.fullText}>
                {lst[3].description}
                </motion.p>
            </div>
        </motion.div>
        <motion.div initial={{x:100}} whileInView={{x:0}} className={css.card}>
        <div className={css.imgContainer}>
                <motion.img initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.img} src={img5} alt={lst[4].alt} />
        </div>
            <div className={css.contentContainer}>
                <motion.h3 initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.cardHeader}>{lst[4].header}</motion.h3>
                <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.fullText}>
                {lst[4].description} 
                </motion.p>
            </div>
        </motion.div>
        <motion.div initial={{x:-100}} whileInView={{x:0}} className={css.card}>
        <div className={css.imgContainer}>
                <motion.img initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.img} src={img6} alt={lst[5].alt} />
        </div>
            <div className={css.contentContainer}>
                <motion.h3 initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.cardHeader}>{lst[5].header}</motion.h3>
                <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{amount:.7}} transition={{duration:1}} className={css.fullText}>
                {lst[5].description}
                </motion.p>
            </div>
        </motion.div>
</div>
</section>
</>
     );
}
 
export default ShopPageMobile4;