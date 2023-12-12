import css from './Footer.module.css'
import  { motion} from "framer-motion";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
<>
<section className={css.container} id='footer'>
    <motion.nav initial={{ gap:'10vw' }} viewport={{amount:.7}}  whileInView={{gap:'5vw' }} className={css.navbar}>
        <Link to='/confidencial' className={css.navbarLink} href="">Политика конфиденциальности</Link>
        {/* <a className={css.navbarLink} href="">FAQ (Часто Задаваемые Вопросы)</a> */}
        <Link to='/contacts' className={css.navbarLink} href="">Контакты</Link>
    </motion.nav>
</section>
</>
    );
}
 
export default Footer;