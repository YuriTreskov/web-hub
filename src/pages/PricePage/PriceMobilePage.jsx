import css from './PriceMobilePage.module.css'
import {Link} from 'react-scroll'
import {motion} from 'framer-motion'
import { MyContext } from '../../components/LayoutDir/MyContextProvider/MyContextProvider';
import { useContext } from 'react';


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
const PriceMobilePage = () => {
    const { modal, setModal } = useContext(MyContext);
    return ( 
<>
<section className={css.container}>
    <motion.h2  initial={{y:100}} whileInView={{y:0}} className={css.header}>Тарифы на наши услуги</motion.h2> 
    <table className={css.table}>
    <tr className={css.strong1}>
        <td className={css.column}>Услуга</td>
        <td className={css.columnPrice}><span className={css.span}>Цена</span></td>
    </tr>
    <tr className={css.strong}>
        <td className={css.column}>Landing Page</td>
        <td className={css.columnPrice}>от 15 000 руб.</td>
    </tr>
    <tr className={css.strong} style={{background:'#071920'}}>
        <td className={css.column}>Корпоративный сайт</td>
        <td className={css.columnPrice}>от 35 000 руб.</td>
    </tr>
    <tr className={css.strong}>
        <td className={css.column}>Интернет магазин</td>
        <td className={css.columnPrice}>от 35 000 руб.</td>
    </tr>
    <tr className={css.strong} style={{background:'#071920'}}>
        <td className={css.column} >Индивидуальный проект</td>
        <td className={css.columnPrice}>Договорная</td>
    </tr>
    </table>

</section>
</>
     );
}
 
export default PriceMobilePage;