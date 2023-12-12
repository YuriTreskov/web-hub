import css from './CalcPage.module.css'
import { MyContext} from './MyContextProvider';
import { useContext, useEffect, useLayoutEffect } from 'react';
import CalcPage01 from './CalcPage01/CalcPage01';
import CalcPage1 from './CalcPage1/CalcPage1';
import CalcPage11 from './CalcPage11/CalcPage11';
import gsap from 'gsap';
import CalcPage12 from './CalcPage12/CalcPage12';
import CalcPage13 from './CalcPage13/CalcPage13';
import {motion} from 'framer-motion'
import CalcPage2 from './CalcPage2/CalcPage2';
import CalcPage21 from './CalcPage21/CalcPage21';
import CalcPage22 from './CalcPage22/CalcPage22';
import CalcPage23 from './CalcPage23/CalcPage23';
import CalcPage24 from './CalcPage24/CalcPage24';
import CalcPage3 from './CalcPage3/CalcPage3';
import CalcPage31 from './CalcPage31/CalcPage31';
import CalcPage32 from './CalcPage32/CalcPage32';
import CalcPage33 from './CalcPage33/CalcPage33';
import CalcPage34 from './CalcPage34/CalcPage34';
import CalcPage01Mobile from './CalcPage01Mobile/CalcPage01Mobile';
import CalcPage1Mobile from './CalcPage1Mobile/CalcPage1Mobile';
import { MyContextProvider } from '../../components/LayoutDir/MyContextProvider/MyContextProvider';
import CalcPage11Mobile from './CalcPage11Mobile/CalcPage11Mobile';
import CalcPage12Mobile from './CalcPage12Mobile/CalcPage12Mobile';
import CalcPage13Mobile from './CalcPage13Mobile/CalcPage13Mobile';
import CalcPage2Mobile from './CalcPage2Mobile/CalcPage2Mobile';
import CalcPage21Mobile from './CalcPage21Mobile/CalcPage21Mobile';
import CalcPage22Mobile from './CalcPage22Mobile/CalcPage22Mobile';
import CalcPage23Mobile from './CalcPage23Mobile/CalcPage23Mobile';
import CalcPage24Mobile from './CalcPage24Mobile/CalcPage24Mobile';
import CalcPage3Mobile from './CalcPage3Mobile/CalcPage3Mobile';
import CalcPage31Mobile from './CalcPage31Mobile/CalcPage31Mobile';
import CalcPage32Mobile from './CalcPage32Mobile/CalcPage32Mobile';
import CalcPage33Mobile from './CalcPage33Mobile/CalcPage33Mobile';
import CalcPage34Mobile from './CalcPage34Mobile/CalcPage34Mobile';
import { Helmet } from 'react-helmet';




const CalcPage = () => {
    const width = window.screen.width
    const height = window.screen.height
    useLayoutEffect(()=>{
        const footer = document.getElementById('footer')
        footer.style.display = 'none'
    })

    const { tz,setPriceMax ,priceMaxRef,
        setPriceMin,priceMinRef,setWorkMin,workMinRef,
        setWorkMax,workMaxRef,landing ,countPage,semantic,
        semanticCount,disign2,disignApple,disignUniq,logoDisign,firmStyle,staticDev,
        adaptiveDev,adinteractiveDev,form,bot,calc,pay,inputNumber,setInputNumber,windRef,formValid, setFormValid,
        formValidRef,formValidFonRef,number, setNumber,hostingPrice,serverPrice,api,admin,basket,search,login,
        filter,history,favourites,sale,warehouse,raiting,} = useContext(MyContext); 

    useEffect(() => {



        gsap.to(priceMaxRef.current, {
            value: (tz+calc+pay+form+bot+disignApple+disignUniq+logoDisign+firmStyle+
                (countPage>1?adinteractiveDev*countPage+(serverPrice):adinteractiveDev+
                (hostingPrice))+(countPage>1?adaptiveDev*countPage*.7:adaptiveDev)+
                (countPage>1?staticDev*countPage*.7:staticDev)+(countPage>1?disign2*countPage*.7:disign2)+
                (semantic*semanticCount)+api+admin+basket+search+login+filter+history+favourites+sale+warehouse+raiting)*1.1, // новое значение для анимации
            duration: .3, // продолжительность анимации в секундах
            onUpdate: () => {
                setPriceMax(Math.round(priceMaxRef.current.value));
            },
            immediateRender: false // предотвращает немедленное применение анимации до старта
        });
        gsap.to(priceMinRef.current, {
            value: (tz+calc+pay+form+bot+disignApple+disignUniq+logoDisign+
                firmStyle+(countPage>1?adinteractiveDev*countPage+(serverPrice):adinteractiveDev+
                (hostingPrice))+(countPage>1?adaptiveDev*countPage*.7:adaptiveDev)+
                (countPage>1?staticDev*countPage*.7:staticDev)+(countPage>1?disign2*countPage*.7:disign2)+
                (semantic*semanticCount)+api+admin+basket+search+login+filter+history+favourites+sale+warehouse+raiting)*0.9, // новое значение для анимации
            duration: .3, // продолжительность анимации в секундах
            onUpdate: () => {
                setPriceMin(Math.round(priceMinRef.current.value));
            },
            immediateRender: false // предотвращает немедленное применение анимации до старта
        });
        gsap.to(workMaxRef.current, {
            value: (tz+calc+pay+form+bot+disignApple+disignUniq+logoDisign+firmStyle+
                (countPage>1?adinteractiveDev*countPage+(serverPrice):adinteractiveDev+(hostingPrice))+
                (countPage>1?adaptiveDev*countPage*.7:adaptiveDev)+(countPage>1?staticDev*countPage*.7:staticDev)+
                (countPage>1?disign2*countPage*.7:disign2)+(semantic*semanticCount)+api+admin+basket+search+login+filter+history+favourites+
                sale+warehouse+raiting)*0.0012, // новое значение для анимации
            duration: .3, // продолжительность анимации в секундах
            onUpdate: () => {
                setWorkMax(parseFloat(workMaxRef.current.value.toFixed(1)));
            },
            immediateRender: false // предотвращает немедленное применение анимации до старта
        });
        gsap.to(workMinRef.current, {
            value: (tz+calc+pay+form+bot+disignApple+disignUniq+logoDisign+firmStyle+
                (countPage>1?adinteractiveDev*countPage+(serverPrice):adinteractiveDev+
                (hostingPrice))+(countPage>1?adaptiveDev*countPage*.7:adaptiveDev)+
                (countPage>1?staticDev*countPage*.7:staticDev)+(countPage>1?disign2*countPage*.7:disign2)+
                (semantic*semanticCount)+api+admin+basket+search+login+filter+history+favourites+sale+warehouse+raiting)*0.0010, // новое значение для анимации
            duration: .3, // продолжительность анимации в секундах
            onUpdate: () => {
                setWorkMin(parseFloat(workMinRef.current.value.toFixed(1)));
            },
            immediateRender: false // предотвращает немедленное применение анимации до старта
        });
    }, [tz,semantic,semanticCount,disign2,countPage,disignApple,disignUniq,logoDisign,firmStyle,
        staticDev,adaptiveDev,adinteractiveDev,form,bot,calc,pay,hostingPrice,serverPrice,
        api,admin,basket,search,login,filter,history,favourites,sale,warehouse,raiting,]); // Зависимость для перезапуска анимации, когда значение tz изменяется

        if(width>height){
    return ( 
<>
    <section className={css.container}>
{/* Галочка после отправки формы */}
<motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:.3}} ref={formValidFonRef} style={{display:formValid}} onClick={()=>{setFormValid('none')}} className='Page1OnValid'>
    <motion.img ref={formValidRef} initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:1}} className='Page1OnValidImg' src='./Modal/img/good.png'/>
</motion.div>
<Helmet>
<title>Калькулятор Стоимости Web-Разработки: Узнайте Цену Проекта Мгновенно!</title>
<meta name="description" content="`Планируете web-проект? Наш калькулятор поможет рассчитать стоимость разработки за несколько кликов. Получите прозрачную оценку сейчас — просто нажмите здесь!`" />
</Helmet>
        <CalcPage01/>
        {landing && <CalcPage1 />}
        <CalcPage11/>
        <CalcPage12/>
        <CalcPage13/>
        <CalcPage2/>
        <CalcPage21/>
        <CalcPage22/>
        <CalcPage23/>
        <CalcPage24/>
        <CalcPage3/>
        <CalcPage31/>
        <CalcPage32/>
        <CalcPage33/>
        <CalcPage34/>
    </section>
</>
     );}else{
        return(
<section className={css.container}>
<Helmet>
<title>Калькулятор Стоимости Web-Разработки: Узнайте Цену Проекта Мгновенно!</title>
<meta name="description" content="`Планируете web-проект? Наш калькулятор поможет рассчитать стоимость разработки за несколько кликов. Получите прозрачную оценку сейчас — просто нажмите здесь!`" />
</Helmet>
    <CalcPage01Mobile/>
    <CalcPage1Mobile/>
    <CalcPage11Mobile/>
    <CalcPage12Mobile/>
    <CalcPage13Mobile/>
    <CalcPage2Mobile/>
    <CalcPage21Mobile/>
    <CalcPage22Mobile/>
    <CalcPage23Mobile/>
    <CalcPage24Mobile/>
    <CalcPage3Mobile/>
    <CalcPage31Mobile/>
    <CalcPage32Mobile/>
    <CalcPage33Mobile/>
    <CalcPage34Mobile/>
</section>
        )
        
     }
}
 
export {CalcPage};



