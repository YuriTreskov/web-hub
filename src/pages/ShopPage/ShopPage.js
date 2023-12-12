import { useLayoutEffect } from "react"
import ShopPage1 from "../../components/ShopPageDir/ShopPage1/ShopPage1/ShopPage1"
import ShopPage2 from "../../components/ShopPageDir/ShopPage1/ShopPage2/ShopPage2"
import ShopPage3 from "../../components/ShopPageDir/ShopPage1/ShopPage3/ShopPage3"
import ShopPage4 from "../../components/ShopPageDir/ShopPage1/ShopPage4/ShopPage4"
import ShopPage5 from "../../components/ShopPageDir/ShopPage1/ShopPage5/ShopPage5"
import ShopPage6 from "../../components/ShopPageDir/ShopPage1/ShopPage6/ShopPage6"
import ShopPageMobile1 from "../../components/ShopPageDir/ShopPage1/ShopPageMobile1/ShopPageMobile1"
import ShopPageMobile2 from "../../components/ShopPageDir/ShopPage1/ShopPageMobile2/ShopPageMobile2"
import ShopPageMobile3 from "../../components/ShopPageDir/ShopPage1/ShopPageMobile3/ShopPageMobile3"
import ShopPageMobile4 from "../../components/ShopPageDir/ShopPage1/ShopPageMobile4/ShopPageMobile4"
import ShopPageMobile5 from "../../components/ShopPageDir/ShopPage1/ShopPageMobile5/ShopPageMobile5"
import ShopPageMobile6 from "../../components/ShopPageDir/ShopPage1/ShopPageMobile6/ShopPageMobile6"
import { Helmet } from "react-helmet"




const ShopPage = () => {
    const width = window.screen.width
    const height = window.screen.height
    useLayoutEffect(()=>{
        document.title = "Интернет магазин под ключ";
        window.scrollTo(0, 0);
    })
    if(width>height){
        return ( 
            <>
            <Helmet>
            <title>Запустите свой интернет-магазин: Профессиональная разработка и дизайн - Кликните и начните сейчас!</title>
            <meta name="description" content="`Запустите свой успешный интернет-магазин сегодня! 
            Наши эксперты создадут для вас привлекательный и продуктивный сайт. Нажмите, чтобы начать!`" />
            </Helmet>
            <ShopPage1/>
            <ShopPage2/>
            <ShopPage3/>
            <ShopPage4/>
            <ShopPage5/>
            <ShopPage6/>

            </>
                 );
    }else{
        return ( 
            <>
            <Helmet>
            <title>Запустите свой интернет-магазин: Профессиональная разработка и дизайн - Кликните и начните сейчас!</title>
            <meta name="description" content="`Запустите свой успешный интернет-магазин сегодня! 
            Наши эксперты создадут для вас привлекательный и продуктивный сайт. Нажмите, чтобы начать!`" />
            </Helmet>
            <ShopPageMobile1/>
            <ShopPageMobile2/>
            <ShopPageMobile3/>
            <ShopPageMobile4/>
            <ShopPageMobile5/>
            <ShopPageMobile6/>
            </>
                 );
    }
}
 
export {ShopPage};