import css from './ShopPageMobile2.module.css'
import  { motion} from "framer-motion";
import reactive from './img/react.png'
import cardimg1 from './img/cardImg1.png'
import cardimg2 from './img/cardImg2.png'
import cardimg3 from './img/cardImg3.png'


const lst = [{
    'header': 'Интернет-магазин',
    'description': `Разработаем интернет-магазин с удобной навигацией и 
    современным дизайном, который выгодно подчеркнет ассортимент ваших товаров 
    и упростит процесс покупки для клиентов.`,
    'alt':'Современный дизайн интернет-магазина с интуитивной навигацией'
}, {
    'header': 'Заточенный Под Пользователя Интерфейс',
    'description': `Создание интернет-магазина начнется с глубокого понимания 
    вашей целевой аудитории, чтобы обеспечить легкость поиска и покупки товаров, 
    а также комфортное взаимодействие с платформой.`,
    'alt':'Пользовательский интерфейс интернет-магазина, оптимизированный для целевой аудитории'
  },
  {
    'header': 'Оптимизация для Продаж',
    'description': `Применяя лучшие практики UX и UI, мы разработаем 
    интернет-магазин, который не только хорошо выглядит, но и превращает посетителей в покупателей, 
    увеличивая вашу конверсию и доходы.`,
    'alt':'UX/UI дизайн интернет-магазина с фокусом на конверсию'
  },
  {
    'header': 'Систематическая Аналитика и Поддержка',
    'description': `Мы предоставляем постоянный анализ показателей ваших продаж, 
    что позволяет оперативно вносить изменения и улучшать работу интернет-магазина, 
    поддерживая его актуальность и эффективность.`,
    'alt':'Современный интернет-магазин с удобной навигацией и стильным дизайном'
  }
]


const ShopPageMobile2 = () => {
    return (  
<section className={css.container}>
    <img className={css.fon} src={reactive} alt="" />
    <div className={css.nestedContainer}>
        <motion.h2 initial={{opacity:0}} whileInView={{opacity:.8}} transition={{duration:1}} viewport={{amount:.7}} className={css.header}>{lst[0].header}</motion.h2>
        <motion.p initial={{opacity:0}} whileInView={{opacity:.8}} transition={{duration:1}} viewport={{amount:.7}} className={css.fullText}>{lst[0].description}</motion.p>
    </div>
    <motion.div initial={{x:0}} whileInView={{x:0}} viewport={{amount:.7}} className={css.nestedContainer}>
        <motion.div initial={{x:-100}} whileInView={{x:0}} className={css.card}>
            <div className={css.imgContainers}>
                <img className={css.img} src={cardimg1} alt={lst[1].alt} />
            </div>        
            <div className={css.contentContainer}>
            <motion.div initial={{opacity:0}} whileInView={{opacity:.9}} transition={{duration:1}} className={css.cardHeader}>{lst[1].header}</motion.div>
            <motion.div initial={{opacity:0}} whileInView={{opacity:.8}} transition={{duration:1}} className={css.cardFullText}>{lst[1].description}</motion.div>
            </div>
        </motion.div>
        <motion.div initial={{x:100}} whileInView={{x:0}} className={css.card}>
        <div className={css.imgContainers}>
                <img className={css.img} src={cardimg2}  alt={lst[2].alt} />
            </div>        
            <div className={css.contentContainer}>
                <motion.div initial={{opacity:0}} whileInView={{opacity:.9}} transition={{duration:1}} className={css.cardHeader}>{lst[2].header}</motion.div>
                <motion.div initial={{opacity:0}} whileInView={{opacity:.8}} transition={{duration:1}} className={css.cardFullText}>{lst[2].description}</motion.div>
            </div>
        </motion.div>
        <motion.div initial={{x:-100}} whileInView={{x:0}} className={css.card}>
        <div className={css.imgContainers}>
                <img className={css.img} src={cardimg3}  alt={lst[3].alt} />
            </div>        
            <div className={css.contentContainer}>
                <motion.div initial={{opacity:0}} whileInView={{opacity:.9}} transition={{duration:1}} className={css.cardHeader}>{lst[3].header}</motion.div>
                <motion.div initial={{opacity:0}} whileInView={{opacity:.8}} transition={{duration:1}} className={css.cardFullText}>{lst[3].description}</motion.div>
            </div>
        </motion.div>
    </motion.div>
</section>
    );
}
 
export default ShopPageMobile2;