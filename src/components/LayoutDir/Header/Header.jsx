import { useEffect, useState } from 'react';
import css from './Header.module.css'
import './Header.css'
import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import  { motion} from "framer-motion";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { MyContext } from '../../LayoutDir/MyContextProvider/MyContextProvider';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';

import calc from './img/calc.png'
import home from './img/home.png'
import login from './img/login.png'
import logo from './img/logo.png'
import menu from './img/menu.png'
import price from './img/price.png'
import sale from './img/sale.png'
import why from './img/why.png'
import contacts from './img/contacts.png'
// Регистрируем плагин ScrollTrigger
gsap.registerPlugin(ScrollTrigger);


const footer =()=>{
    const footer = document.getElementById('footer')
    footer.style.display = 'flex'
}

const Header = () => {
    const { modalMenu, setModalMenu } = useContext(MyContext); 
    const [navbarDisplay,setMavbarDisplay] = useState(false)
    const width = window.screen.width

    // Создание прокрутки меню при скролле
    useEffect(() => {
        // Создаем анимацию с GSAP и ScrollTrigger
        gsap.to('#logoContur', {
            scrollTrigger: {
                trigger: "#Pagу2",
                start: "top center", // Анимация начинается, когда верх изображения достигает середины экрана
                end: "bottom center", // Анимация заканчивается, когда низ изображения достигает середины экрана
                scrub: 1 // Связывает прогресс анимации с положением скролла
            },
            rotation: 1500, // Вращение на 360 градусов
            ease: "flex" // Без ускорения или замедления
        });

        // Возвращаем функцию для очистки, чтобы удалить ScrollTrigger при размонтировании компонента
    }, []);

    if (width>768){
        return (
            <>
            <div className={css.container}>
                
                <motion.div initial={{ scale:0 }}  animate={{ scale:1 }} transition={{delay:2.5}} className={css.logoContainer} onClick={()=>{setMavbarDisplay(!navbarDisplay)}}>
                    
            
                    <img className={css.logoContur} id='logoContur' src={menu} alt="" />
                    <motion.img initial={{ opacity:0 }}  whileInView={{ opacity:.8 }} transition={{delay:1.5,duration:2}} className={css.logo}  src={logo} alt="" />
                </motion.div>
                {navbarDisplay&&
                    <motion.nav  animate={{x:0,opacity:1}} initial={{x:-500,opacity:0}}   style={{display:navbarDisplay}} className={css.navbarContainer}>
                       <NavLink onClick={footer} to='/'   className={({ isActive, isPending }) => isActive ? "activeLink" : "navbarLink"}><img className={css.calc} src={home} alt="" />Главная</NavLink>
                       {/* <NavLink to='/login'   className={({ isActive, isPending }) => isActive ? "activeLink" : "navbarLink"}><img className={css.calc} src="/Header/login.png" alt="" />Войти</NavLink> */}
                       <NavLink onClick={footer} to='/price' className={({ isActive, isPending }) => isActive ? "activeLink" : "navbarLink"}><img className={css.calc} src={price} alt=""  />Цены</NavLink>
                       <NavLink onClick={footer} to='/sale' className={({ isActive, isPending }) => isActive ? "activeLink" : "navbarLink"}><img className={css.calc} src={sale} alt="" />Акции</NavLink>
                       <NavLink onClick={footer} to='/contacts' className={({ isActive, isPending }) => isActive ? "activeLink" : "navbarLink"}><img className={css.calc} src={contacts} alt="" />Контакты</NavLink>
                       {/* <NavLink to='/question' className={({ isActive, isPending }) => isActive ? "activeLink" : "navbarLink"}><img className={css.calc} src="/Header/why.png" alt="" />Вопросы</NavLink> */}
                       <NavLink  to='/calc' className={({ isActive, isPending }) => isActive ? "activeLink" : "navbarLink"}><img className={css.calc} src={calc} alt="" />Калькулятор</NavLink>
                   </motion.nav> 
                }
            </div>
            </>
                );
    }else{
        return (
            <>
            <div className={css.container}>      
                <motion.div initial={{ scale:0 }}  animate={{ scale:1 }} transition={{delay:1.5}}  className={css.logoContainer} onClick={()=>{setModalMenu(!modalMenu)}}>
                    <img className={css.logoContur} id='logoContur' src={menu} alt="" />
                    <motion.img initial={{ opacity:0 }}  whileInView={{ opacity:.8 }} transition={{delay:1.5,duration:2}} className={css.logo}  src={logo} alt="" />
                </motion.div>
            </div>
            </>
                );  
    }


}
 
export default Header;
  