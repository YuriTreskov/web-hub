import { useLayoutEffect } from "react";
import css from './WebPage.module.css'
import WebPage1 from "../../components/WebPageDir/WebPage1/WebPage1";
import WebPage3 from "../../components/WebPageDir/WebPage3/WebPage3";
import WebPage31 from "../../components/WebPageDir/WebPage31/WebPage31";
import WebPage4 from "../../components/WebPageDir/WebPage4/WebPage4";
import WebPage5 from "../../components/WebPageDir/WebPage5/WebPage5";
import WebPageMobile1 from "../../components/WebPageDir/WebPageMobile1/WebPage1";
import WebPageMobile2 from "../../components/WebPageDir/WebPageMobile2/WebPage2";
import WebPageMobile31 from "../../components/WebPageDir/WebPageMobile31/WebPage31";
import WebPageMobile3 from "../../components/WebPageDir/WebPageMobile3/WebPage3";
import WebPageMobile4 from "../../components/WebPageDir/WebPageMobile4/WebPage4";
import WebPageMobile5 from "../../components/WebPageDir/WebPageMobile5/WebPage5";
import { Helmet } from 'react-helmet';

const WebPage = () => {
    const width = window.screen.width
    const height = window.screen.height

    useLayoutEffect(()=>{
        window.scrollTo(0, 0);
    })

    //  Десктоп версия
    if(height<width){
        return (
            <>
        <Helmet>
            <title>Профессиональное Создание и Продвижение Сайтов | Веб-дизайн и Разработка | WebHub</title>
            <meta name="description" content="`WebHub предлагает полный спектр услуг по созданию и продвижению веб-сайтов.
              От индивидуального веб-дизайна в Figma до адаптивной верстки и разработки на HTML, CSS и JavaScript.
               Эффективное SEO-продвижение для вашего бизнеса.`" />
         </Helmet>
            <div className={css.container}>
            <WebPage1/>
            <WebPage3/>
            <WebPage31/>
            <WebPage4/>
            <WebPage5/>
            </div>
            </>
                );
    }else{ // Мобильная версия
        return (
            <>
            <div className={css.container}>
            <WebPageMobile1/>
            <WebPageMobile2/>
            <WebPageMobile3/>
            <WebPageMobile31/>
            <WebPageMobile4/>
            <WebPageMobile5/>
            </div>
            </>
                );
    }

}
 
export {WebPage};