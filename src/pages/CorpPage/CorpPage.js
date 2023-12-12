import { useLayoutEffect } from "react";
import CorpPage1 from "../../components/CorpPageDir/CorpPage1/CorpPage1";
import CorpPageMobile1 from '../../components/CorpPageDir/CorpPageMobile1/CorpPageMobile1'
import CorpPage2 from "../../components/CorpPageDir/CorpPage2/CorpPage2";
import CorpPage3 from "../../components/CorpPageDir/CorpPage3/CorpPage3";
import CorpPage4 from "../../components/CorpPageDir/CorpPage4/CorpPage4";
import CorpPage5 from "../../components/CorpPageDir/CorpPage5/CorpPage5";
import CorpPage6 from "../../components/CorpPageDir/CorpPage6/CorpPage6";
import CorpPageMobile2 from "../../components/CorpPageDir/CorpPageMobile2/CorpPageMobile2";
import CorpPageMobile3 from "../../components/CorpPageDir/CorpPageMobile3/CorpPageMobile3";
import CorpPageMobile4 from "../../components/CorpPageDir/CorpPageMobile4/CorpPageMobile4";
import CorpPageMobile5 from "../../components/CorpPageDir/CorpPageMobile5/CorpPageMobile5";
import CorpPageMobile6 from "../../components/CorpPageDir/CorpPageMobile6/CorpPageMobile6";
import { Helmet } from "react-helmet";



const CorpPage = () => {
    const width = window.screen.width
    const height = window.screen.height
    useLayoutEffect(()=>{
        window.scrollTo(0, 0);
    })
    if(width>height){
        return ( 
            <>
        <Helmet>
        <title>Создайте Ваш Идеальный Корпоративный Сайт с Нашей Помощью - Начните Прямо Сейчас!</title>
        <meta name="description" content="`Откройте потенциал вашего бизнеса с качественным корпоративным сайтом. 
        Профессиональный веб-дизайн, интегрированное SEO, адаптивная верстка — начните преобразование с нами!`" />
        </Helmet>
        <CorpPage1/>
        <CorpPage2/>
        <CorpPage3/>
        <CorpPage4/>
        <CorpPage5/>
        <CorpPage6/>
            </>
                 );
    }else{
        return ( 
            <>
        <Helmet>
        <title>Создайте Ваш Идеальный Корпоративный Сайт с Нашей Помощью - Начните Прямо Сейчас!</title>
        <meta name="description" content="`Откройте потенциал вашего бизнеса с качественным корпоративным сайтом. 
        Профессиональный веб-дизайн, интегрированное SEO, адаптивная верстка — начните преобразование с нами!`" />
        </Helmet>
        <CorpPageMobile1/>
        <CorpPageMobile2/>
        <CorpPageMobile3/>
        <CorpPageMobile4/>
        <CorpPageMobile5/>
        <CorpPageMobile6/>
            </>
                 );
    }
}
 
export {CorpPage};