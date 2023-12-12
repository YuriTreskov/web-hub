import { useLayoutEffect } from "react";
import ContactsMobile from "./ContactsMobile/ContactsMobile";
import Contacts from "./Contacts/Contacts";
import { Helmet } from "react-helmet";


const ContactPage = () => {
    const width = window.screen.width
    const height = window.screen.height
    useLayoutEffect(()=>{
        window.scrollTo(0, 0);
    })
    if(width>height){
        return ( 
            <>
            <Helmet>
            <title>Свяжитесь с Нами — Ваш Первый Шаг к Успешному Web Проекту!</title>
            <meta name="description" content="`Интересуетесь созданием web-сайта? 
            Наши специалисты готовы ответить на ваши вопросы. Посетите нашу страницу 
            контактов и начните свой проект уже сегодня!`" />
            </Helmet>
        <Contacts/>
            </>
                 );
    }else{
        return ( 
            <>
            <Helmet>
            <title>Свяжитесь с Нами — Ваш Первый Шаг к Успешному Web Проекту!</title>
            <meta name="description" content="`Интересуетесь созданием web-сайта? 
            Наши специалисты готовы ответить на ваши вопросы. Посетите нашу страницу 
            контактов и начните свой проект уже сегодня!`" />
            </Helmet>
        <ContactsMobile/>
            </>
                 );
    }
}
 
export {ContactPage};