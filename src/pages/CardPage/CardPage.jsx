import { useLayoutEffect } from "react";
import CardPage1 from "../../components/CargPageDir/CardPage1/CardPage1";
import CardPage2 from "../../components/CargPageDir/CardPage2/CardPage2";
import CardPage3 from "../../components/CargPageDir/CardPage3/CardPage3";
import CardPage4 from "../../components/CargPageDir/CardPage4/CardPage4";
import CardPage5 from "../../components/CargPageDir/CardPage5/CardPage5";
import CardPage6 from "../../components/CargPageDir/CardPage6/CardPage6";
import CardPageMobile1 from "../../components/CargPageDir/CardPageMobile1/CardPageMobile1";
import CardPageMobile2 from "../../components/CargPageDir/CardPageMobile2/CardPageMobile2";
import CardPageMobile3 from "../../components/CargPageDir/CardPageMobile3/CardPageMobile3";
import CardPageMobile4 from "../../components/CargPageDir/CardPageMobile4/CardPageMobile4";
import CardPageMobile5 from "../../components/CargPageDir/CardPageMobile5/CardPageMobile5";
import CardPageMobile6 from "../../components/CargPageDir/CardPageMobile6/CardPageMobile6";
import { Helmet } from "react-helmet";


const CardPage = () => {
    const width = window.screen.width
    const height = window.screen.height
    useLayoutEffect(()=>{
        window.scrollTo(0, 0);
    })
    if(width>height){
        return ( 
<>
<Helmet>
<title>Реализуйте Ваш Уникальный Web Проект — Переходите к Разработке Сейчас!</title>
<meta name="description" content="`Превратите свои идеи в реальность с индивидуальным web проектом. 
Наша команда создаст сайт, который выделит вас на фоне конкурентов. Нажмите и начните с первого шага!`" />
</Helmet>
<CardPage1/>
<CardPage2/>
<CardPage3/>
<CardPage4/>
<CardPage5/>
<CardPage6/>
</>
                 );
    }else{
        return ( 
<>
<Helmet>
<title>Реализуйте Ваш Уникальный Web Проект — Переходите к Разработке Сейчас!</title>
<meta name="description" content="`Превратите свои идеи в реальность с индивидуальным web проектом. 
Наша команда создаст сайт, который выделит вас на фоне конкурентов. Нажмите и начните с первого шага!`" />
</Helmet>
<CardPageMobile1/>
<CardPageMobile2/>
<CardPageMobile3/>
<CardPageMobile4/>
<CardPageMobile5/>
<CardPageMobile6/>
</>
                 );
    }
}
 
export {CardPage};