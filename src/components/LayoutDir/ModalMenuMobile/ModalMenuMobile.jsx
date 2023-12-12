import css from './ModalMenuMobile.module.css'
import './ModalMenuMobile.css'
import { MyContext } from '../MyContextProvider/MyContextProvider';
import { useContext } from 'react';
import  { motion} from "framer-motion";
import { NavLink } from 'react-router-dom';




const ModalMenuMobile = () => {
    const { modalMenu, setModalMenu  } = useContext(MyContext); 

    const footer =()=>{
        const footer = document.getElementById('footer')
        footer.style.display = 'flex'
        setModalMenu(false)
    }

    if(modalMenu){
        return (
            <>
            <motion.section animate={{y:0}} initial={{y:-1000}} transition={{duration:.3}} className={css.container} style={{display:modalMenu}}>
            <nav className={css.navbarContainer}>
                        <NavLink onClick={footer} to='/website'   className={({ isActive, isPending }) => isActive ? "activeMobileLink" : "navbarMobileLink"}>Главная</NavLink>
                       {/* <NavLink onClick={footer} to='/login'   className={({ isActive, isPending }) => isActive ? "activeMobileLink" : "navbarMobileLink"}>Войти</NavLink> */}
                       <NavLink onClick={footer} to='/price' className={({ isActive, isPending }) => isActive ? "activeMobileLink" : "navbarMobileLink"}>Цены</NavLink>
                       <NavLink onClick={footer} to='/sale' className={({ isActive, isPending }) => isActive ? "activeMobileLink" : "navbarMobileLink"}>Акции</NavLink>
                       <NavLink onClick={footer} to='/contacts' className={({ isActive, isPending }) => isActive ? "activeMobileLink" : "navbarMobileLink"}>Контакты</NavLink>
                       {/* <NavLink onClick={footer} to='/question' className={({ isActive, isPending }) => isActive ? "activeMobileLink" : "navbarMobileLink"}>Вопросы</NavLink> */}
                       <NavLink  onClick={footer} to='/calc' className={({ isActive, isPending }) => isActive ? "activeMobileLink" : "navbarMobileLink"}>Калькулятор</NavLink>
            </nav> 
            </motion.section>
            </>
                );   
    }

}
 
export default ModalMenuMobile;