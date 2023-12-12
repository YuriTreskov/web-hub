import { useLayoutEffect } from 'react';
import LandingPage1 from '../../components/LandingPageDir/LandingPage1/LandingPage1';
import LandingPage2 from '../../components/LandingPageDir/LandingPage2/LandingPage2';
import LandingPage3 from '../../components/LandingPageDir/LandingPage3/LandingPage3';
import css from './LandingPage.module.css'
import LandingPage4 from '../../components/LandingPageDir/LandingPage4/LandingPage4';
import LandingPage5 from '../../components/LandingPageDir/LandingPage5/LandingPage5';
import LandingPage6 from '../../components/LandingPageDir/LandingPage6/LandingPage6';
import Slider from '../../components/LandingPageDir/Slider/Slider';
import LandingPageMobile1 from '../../components/LandingPageDir/LandingPageMobile1/LandingPageMobile1';
import LandingPageMobile2 from '../../components/LandingPageDir/LandingPageMobile2/LandingPageMobile2';
import LandingPageMobile3 from '../../components/LandingPageDir/LandingPageMobile3/LandingPageMobile3';
import LandingPageMobile4 from '../../components/LandingPageDir/LandingPageMobile4/LandingPageMobile4';
import LandingPageMobile5 from '../../components/LandingPageDir/LandingPageMobile5/LandingPageMobile5';
import LandingPageMobile6 from '../../components/LandingPageDir/LandingPageMobile6/LandingPageMobile6';
import { Helmet } from 'react-helmet';

const LandingPage = () => {
    const width = window.screen.width
    const height = window.screen.height
    useLayoutEffect(()=>{
        window.scrollTo(0, 0);
    })
    if(width>height){
        return ( 
            
            <>
        <Helmet>
        <title>Лендинг Под Ключ: Привлеките Клиентов Сейчас — Узнайте Как! | Создание Лендинг Пейдж и Одностраничных Сайтов | Landing Page Под Ключ | WebHub</title>
        <meta name="description" content="`Получите эффективный лендинг, который конвертирует. 
        Профессиональный дизайн, SEO-оптимизация, и быстрый запуск. Кликните и начните 
        преобразование трафика в продажи!`" />
        </Helmet>
            <LandingPage1/>
            <LandingPage2/>
            <LandingPage3/>
            <LandingPage4/>
            <LandingPage5/>
            <LandingPage6/>
            </>
                 );
    }else{
        return ( 
            <>
        <Helmet>
        <title>Лендинг Под Ключ: Привлеките Клиентов Сейчас — Узнайте Как! | Создание Лендинг Пейдж и Одностраничных Сайтов | Landing Page Под Ключ | WebHub</title>
        <meta name="description" content="`Получите эффективный лендинг, который конвертирует. 
        Профессиональный дизайн, SEO-оптимизация, и быстрый запуск. Кликните и начните 
        преобразование трафика в продажи!`" />
        </Helmet>
        <LandingPageMobile1/>
        <LandingPageMobile2/>
        <LandingPageMobile3/>
        <LandingPageMobile4/>
        <LandingPageMobile5/>
        <LandingPageMobile6/>
            </>
                 );
    }

}
 
export {LandingPage};