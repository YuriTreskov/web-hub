import { useLayoutEffect } from 'react';
import css from './PricePage.module.css'

import {motion} from 'framer-motion'
import PricePageMobile from './PriceMobilePage';
import { MyContext } from '../../components/LayoutDir/MyContextProvider/MyContextProvider';
import { useContext } from 'react';
import { Helmet } from 'react-helmet';


const ok = '✔'
const lst = [{
    'title': 'Индивидуальный дизайн',
    'q':ok,
    'w':ok,
    'e':ok,
    'r':ok,
},
{
    'title': 'Адаптация под мобильные',
    'q':ok,
    'w':ok,
    'e':ok,
    'r':ok,
},{
    'title': 'Установка сайта на хостинг',
    'q':ok,
    'w':ok,
    'e':ok,
    'r':ok,
},
{
    'title': 'SEO-оптимизация',
    'q':ok,
    'w':ok,
    'e':ok,
    'r':ok,
},{
    'title': 'Установка аналитики',
    'q':ok,
    'w':ok,
    'e':ok,
    'r':ok,
},{
    'title': 'Добавление в Яндекс',
    'q':ok,
    'w':ok,
    'e':ok,
    'r':ok,
},{
    'title': 'Добавление в Google',
        'q':ok,
        'w':ok,
        'e':ok,
        'r':ok,
},{
    'title': 'Техническое сопровождение',
        'q':'4 мес.',
        'w':'4 мес.',
        'e':'4 мес.',
        'r':'4 мес.',
},]


const PricePage = () => {
    const { modal, setModal } = useContext(MyContext);
    const width = window.screen.width
    const height = window.screen.height
    useLayoutEffect(()=>{
        window.scrollTo(0, 0);
    })
    if(width>height){
        return ( 
            <>
            <Helmet>
            <title>Посмотрите Наши Прозрачные Цены на Web-Разработку — Без Скрытых Платежей!</title>
            <meta name="description" content="`Изучите конкурентоспособные тарифы на наши услуги web-разработки. 
            Получите лучшее соотношение цены и качества для вашего проекта. Ознакомьтесь с прайсом прямо сейчас!`" />
            </Helmet>
            <section className={css.container}>
                <motion.h2  initial={{y:100}} whileInView={{y:0}} className={css.header}>Тарифы на наши услуги</motion.h2> 
                <table className={css.table}>
                <tr className={css.strong} style={{borderBottom:'1px solid #06466d'}} >
                    <td className={css.column1}>ЧТО ВХОДИТ В УСЛУГУ</td>
                    <td className={css.column2}>Landing Page</td>
                    <td className={css.column3}>Корпоративный сайт</td>
                    <td className={css.column4}>Интернет магазин</td>
                    <td className={css.column5}>Индивидуальный проект</td>
                </tr>
                {   lst.map((item, index) => (
                    index % 2 ? (
                    <tr className={css.strong} style={{background:'#0b181f'}} >
                        <td className={css.column} >{item.title}</td>
                        <td className={css.column}>{item.q}</td>
                        <td className={css.column}>{item.w}</td>
                        <td className={css.column}>{item.e}</td>
                        <td className={css.column}>{item.r}</td>
                    </tr>
                    ) : 
                    <tr className={css.strong} >
                        <td className={css.column}>{item.title}</td>
                        <td className={css.column}>{item.q}</td>
                        <td className={css.column}>{item.w}</td>
                        <td className={css.column}>{item.e}</td>
                        <td className={css.column}>{item.r}</td>
                    </tr>
                    ))}
                    <tr className={css.strongButton} style={{borderBottom:'1px solid #06466d'}} >
                    <td className={css.columnButton} style={{color:'rgb(68, 159, 187)',fontWeight:'bold',fontSize:'1.7vw'}}>Стоимость</td>
                    <td className={css.columnButton}>
                        <h3 className={css.columnPrice}>от 15 000 руб.</h3>
                        <a className={css.columnButtonOn} onClick={()=>{setModal(true)}}>Заказать</a>
                    </td>
                    <td className={css.columnButton}>
                        <h3 className={css.columnPrice}>от 35 000 руб.</h3>
                        <a className={css.columnButtonOn} onClick={()=>{setModal(true)}}>Заказать</a>
                    </td>
                    <td className={css.columnButton}>
                        <h3 className={css.columnPrice}>от 35 000 руб.</h3>
                        <a className={css.columnButtonOn} onClick={()=>{setModal(true)}}>Заказать</a>
                    </td>
                    <td className={css.columnButton}>
                        <h3 className={css.columnPrice}>Договорная</h3>
                        <a className={css.columnButtonOn} onClick={()=>{setModal(true)}}>Заказать</a>
                    </td>
                </tr>
                </table>    
            </section>
            </>
                 );
    }else{
        return ( 
            <>
            <Helmet>
            <title>Посмотрите Наши Прозрачные Цены на Web-Разработку — Без Скрытых Платежей!</title>
            <meta name="description" content="`Изучите конкурентоспособные тарифы на наши услуги web-разработки. 
            Получите лучшее соотношение цены и качества для вашего проекта. Ознакомьтесь с прайсом прямо сейчас!`" />
            </Helmet>
            <PricePageMobile/>
            </>
                 );
    }
   
}
 
export  {PricePage};