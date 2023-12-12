import css from './CorpPage2.module.css'
import  { motion} from "framer-motion";
import reactive from './img/react.png'
import cardimg1 from './img/cardImg1.png'
import cardimg2 from './img/cardImg2.png'
import cardimg3 from './img/cardImg3.png'


const lst = [{
    'title': `Инновационный Корпоративный Веб-дизайн`,
    'description': `Мы разрабатываем корпоративные сайты с индивидуальным дизайном, интегрируя передовые веб-технологии и интерактивные элементы, которые выделят ваш бренд и сделают его запоминающимся.`,
    'img': cardimg1,
    'alt': `Индивидуальный корпоративный веб-дизайн с интерактивными элементами`
},{
    'title': `Комплексное SEO Продвижение`,
    'description': `Предлагаем комплексные решения для продвижения вашего корпоративного сайта, используя SEO, цифровые маркетинговые стратегии и таргетированную рекламу для повышения видимости и привлечения клиентов.`,
    'img': cardimg2,
    'alt': `Комплексное SEO продвижение корпоративного сайта`
},{
    'title': `Поддержка и Техническое Обслуживание`,
    'description': `Обеспечиваем непрерывную поддержку и обновление вашего корпоративного сайта, включая управление контентом, мониторинг безопасности и хостинга, а также оперативную поддержку для стабильной работы сайта.`,
    'img': cardimg3,
    'alt': `Обслуживание и техническая поддержка корпоративного сайта`
},]


const CorpPage2 = () => {
    return (  
<section className={css.container}>
    <img className={css.fon} src={reactive} alt={lst[2].alt} />
    <div className={css.nestedContainer}>
        <motion.h2 initial={{opacity:0}} whileInView={{opacity:.8}} transition={{duration:1}} viewport={{amount:.7}} className={css.header}>Ваш Бизнес в Онлайн-Пространстве</motion.h2>
        <motion.p initial={{opacity:0}} whileInView={{opacity:.8}} transition={{duration:1}} viewport={{amount:.7}} className={css.fullText}>
        Мы создадим корпоративный сайт, который подчеркнет уникальность вашего бизнеса, 
        используя передовые веб-технологии и эстетический дизайн. Гарантируем четкое и 
        привлекательное представление ваших услуг и продуктов для целевой аудитории.
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
                {lst[0].description}
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
 
export default CorpPage2;