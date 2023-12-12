import css from './LandingPage2.module.css'
import  { motion} from "framer-motion";
import reactive from './img/react.png'
import cardimg1 from './img/cardImg1.png'
import cardimg2 from './img/cardImg2.png'
import cardimg3 from './img/cardImg3.png'


const lst = [{
    'title': `Творческий Заряд Дизайна`,
    'description': `Создаем неповторимый дизайн, воплощаем захватывающие интернет-эффекты,
    вкладываем уникальный элемент, который заставит ваш сайт надолго остаться в памяти пользователей.`,
    'img': cardimg1,
    'alt': `Уникальный дизайн лендинга с креативными веб-эффектами`
},{
    'title': `Интегрированное Продвижение`,
    'description': `Предоставляем всеобъемлющую услугу продвижения сайта, применяя методы SEO, 
    маркетинговые стратегии, контекстную рекламу, таргетинг и другие инструменты.`,
    'img': cardimg2,
    'alt': `Эффективное SEO и маркетинговое продвижение лендинга`
},{
    'title': `Безупречная Поддержка и Обслуживание`,
    'description': `Занимаемся постоянной поддержкой и усовершенствованием веб-сайтов: обновляем информацию, 
    обогащаем контент, контролируем хостинг и защиту, управляем откликами и многое другое.`,
    'img': cardimg3,
    'alt': `Полный спектр услуг по поддержке и обновлению лендинга`
},]


const LandingPage2 = () => {
    return (  
<section className={css.container}>
    <img className={css.fon} src={reactive} alt={lst[0].alt} />
    <div className={css.nestedContainer}>
        <motion.h2 initial={{opacity:0}} whileInView={{opacity:.8}} transition={{duration:1}} viewport={{amount:.7}} className={css.header}>Landing Page: ваш ключ к максимальной конверсии</motion.h2>
        <motion.p initial={{opacity:0}} whileInView={{opacity:.8}} transition={{duration:1}} viewport={{amount:.7}} className={css.fullText}>
        Лендинг пейдж — это инструмент маркетинговой стратегии,
         цель которого — сбор контактных данных и увеличение продаж.
          Это не просто одностраничный сайт; это мощная платформа, нацеленная
           на представление и продвижение вашего продукта или услуги с акцентом 
           на их ключевые преимущества. Лендинг позволяет устанавливать доверительные
            отношения между брендом и целевой аудиторией.
        </motion.p>
    </div>
    <motion.div initial={{x:100}} whileInView={{x:0}} viewport={{amount:.7}} className={css.nestedContainer}>
        <div className={css.card}>
            <div className={css.imgContainers}>
                <img className={css.img} src={cardimg1} alt={lst[0].alt} />
            </div>        
            <div className={css.contentContainer}>
            <div className={css.cardHeader}>{lst[0].title}</div>
            <div className={css.cardFullText}>
            {lst[0].description}
            </div>
            </div>
        </div>
        <div className={css.card}>
        <div className={css.imgContainers}>
                <img className={css.img} src={cardimg2}  alt={lst[1].alt} />
            </div>        
            <div className={css.contentContainer}>
                <div className={css.cardHeader}>{lst[1].title}</div>
                <div className={css.cardFullText}>
                {lst[1].description}
                </div>
            </div>
        </div>
        <div className={css.card}>
        <div className={css.imgContainers}>
                <img className={css.img} src={cardimg3}  alt={lst[2].alt} />
            </div>        
            <div className={css.contentContainer}>
                <div className={css.cardHeader}>{lst[2].title}</div>
                <div className={css.cardFullText}>
                {lst[2].description}
                </div>
            </div>
        </div>
    </motion.div>
</section>
    );
}
 
export default LandingPage2;