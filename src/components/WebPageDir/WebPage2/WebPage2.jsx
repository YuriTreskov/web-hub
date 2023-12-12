import css from './WebPage2.module.css'
import { Link } from 'react-router-dom';
import  { motion} from "framer-motion";

import bisnes from './img/bisnes.png'
import corp from './img/corp.png'
import landing from './img/landing.png'
import shop from './img/shop.png'


const lst = [{
    'title':'LandingPage',
    'description':`
        Лендинг — эффективный инструмент для немедленного старта ваших продаж в сети.
        Посетители находят всю важную информацию удобно представленной на одном экране.
        В нашей фирме вас ждут эксперты по созданию и продвижению Landing Page с высоким уровнем квалификации.`,
        'link':'/landing',
        'img': landing,
        'alt': `Современные технологии веб-разработки на экране разработчика`

},{
    'title':'Корпоративный сайт',
    'description':`
    Корпоративный веб-сайт — идеальный выбор для бизнесов,
    стремящихся предоставить обширную информацию о себе потенциальным покупателям.
     Мы создаем легкие в использовании веб-ресурсы, нацеленные на увеличение конверсии 
     ваших посетителей в клиентов.`,
        'link':'/corp',
        'img': corp,
        'alt': `Шаблон для верстки сайта с применением CSS grid и flexbox`

},{
    'title':'Интернет магазин',
    'description':`
    Экспертный подход к запуску онлайн-продаж ваших изделий через интернет.
    Наша фирма накопила значительный опыт в разработке успешных интернет-магазинов,
    принеся им доходы до нескольких миллионов рублей в месяц. Вложения в такие проекты
    обычно окупаются в период от трех до шести месяцев.`,
        'link':'/shop',
        'img': shop,
        'alt': `Веб-мастер тестирует пользовательский интерфейс сайта`

},{
    'title':'Индивидуальный проект',
    'description':`
    Мастерский подход к реализации персонализированных решений для вашего онлайн-присутствия.
    Наша организация обладает глубокими знаниями в создании уникальных проектов,
    которые становятся лидерами рынка и приносят существенный доход.
    Инвестиции в подобные индивидуальные проекты начинают приносить плоды уже через 3-6 месяцев работы.`,
        'link':'/card',
        'img': bisnes,
        'alt': `Графический веб-дизайн макета сайта в стиле минимализма`

},]


const WebPage2 = () => {
    
    return ( 
<section className={css.container}>
    
    <motion.h2 initial={{y:100}} whileInView={{y:0}} className={css.header}>Какие решения мы предлагаем?</motion.h2>
    <div className={css.cardContainer}>
        {lst.map((item)=>(
            <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}} className={css.card}>
            <div className={css.imgContainer}>
                <h3 className={css.cardHeader}>{item.title}</h3>
                <motion.img initial={{y:100}} whileInView={{y:0}} className={css.cardImg} src={item.img} alt={item.alt} />
                </div>
                <div className={css.contentContainer}>
                <p className={css.fullText}>{item.description}</p>
                    <motion.div initial={{y:100}} whileInView={{y:0}} className={css.buttonContainer}>
                        <Link  to={item.link} className={css.cardButtonUp}>Подробнее</Link>
                        <Link  to='/calc' className={css.cardButtonUp}>Калькулятор</Link>
                    </motion.div>
                </div>
            </motion.div> 
        ))}
    </div>
</section>
     );
}
 
export default WebPage2;