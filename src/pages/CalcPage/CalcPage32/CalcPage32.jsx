import { MyContext } from '../MyContextProvider';
import css from './CalcPage32.module.css'
import { useContext, useRef } from 'react';
import {motion} from 'framer-motion'
import tzOn from '../img/tzOn.png'
import tzOff from '../img/tzOff.png'
import back from '../img/back.png'
import next from '../img/next.png'
import gsap from 'gsap';





const CalcPage32 = () => {
    const windRef = useRef()
    const {tz, priceMax,priceMin,workMin,workMax,page12,setPage12,
        setPage13,staticDevPrice,interactiveDevPrice,adaptiveDevPrice,formPrice,botPrice,staticDev,
        calcPrice,payPrice,adaptiveDev,setadAptiveDev,adinteractiveDev,setadInteractiveDev,form,setForm ,
        bot,setBot,calc,setCalc,pay,setPay,setStaticDev,setPage11,page22,setPage22,setPage21,setPage23,page32,
        setPage32,setPage33,setPage31} = useContext(MyContext); 

        const handleDev = (num)=>{
            if(num===1){
                setStaticDev(staticDevPrice)
                setadAptiveDev(0)
            }else if(num===2){
                setStaticDev(0)
                setadAptiveDev(adaptiveDevPrice)
            }
        }


        const getNext = () =>{
            setPage33(true)
            gsap.to(windRef.current,{opacity:0,duration:.1})
            setPage32(false)
        }
        const getBack = () =>{
            setPage32(false)
            setPage31(true)
            gsap.to(windRef.current,{opacity:0,duration:.1})
        }

    return (
<>
{page32&&
    <section className={css.container}>
    <img src={back} className={css.back} onClick={()=>{getBack()}} alt="" />
    <img src={next} className={css.next} onClick={()=>{getNext()}}  alt="" />
        <motion.div ref={windRef} initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:.3}} className={css.wind1}>
            <div className={css.nestedContainer1}>
                <h2 className={css.windHeader}>Верстка</h2>
                <h3 className={css.windHeader1}>Услуги по разработке</h3>
                <div className={css.tzContainer}>
                    <div className={css.tz}>
                        {staticDev?
                        <img className={css.tzImg} onClick={()=>{setStaticDev(0)}}  src={tzOn} alt="" />    
                        :
                        <img className={css.tzImg} onClick={()=>{handleDev(1)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>Статическая верстка<li>7 500руб.</li></span>
                        
                    </div>
                    <div className={css.tz}>
                        {adaptiveDev?
                         <img className={css.tzImg} onClick={()=>{setadAptiveDev(0)}}   src={tzOn} alt="" />   
                        :
                        <img className={css.tzImg} onClick={()=>{handleDev(2)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>Адаптивная верстка (под все устройства)<li>12 500руб.</li></span>
                    </div>  
                    <div className={css.tz}>
                        {adinteractiveDev?
                         <img className={css.tzImg} onClick={()=>{setadInteractiveDev(0)}}   src={tzOn} alt="" />   
                        :
                        <img className={css.tzImg} onClick={()=>{setadInteractiveDev(interactiveDevPrice)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>Интерактивность, эффекты параллакса<li>3 000руб.</li></span>
                    </div>  
                    <div className={css.tz}>
                        {form?
                         <img className={css.tzImg} onClick={()=>{setForm(0)}}   src={tzOn} alt="" />   
                        :
                        <img className={css.tzImg} onClick={()=>{setForm(formPrice)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>Форма заказа обратного звонка<li>1 500руб.</li></span>
                    </div>  
                    <div className={css.tz}>
                        {bot?
                         <img className={css.tzImg} onClick={()=>{setBot(0)}}   src={tzOn} alt="" />   
                        :
                        <img className={css.tzImg} onClick={()=>{setBot(botPrice)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>Бот в Telegram и привязка сайта к нему<li>2 500руб.</li></span>
                    </div>  
                    <div className={css.tz}>
                        {calc?
                         <img className={css.tzImg} onClick={()=>{setCalc(0)}}   src={tzOn} alt="" />   
                        :
                        <img className={css.tzImg} onClick={()=>{setCalc(calcPrice)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>Онлайн калькулятор<li>2 500руб.</li></span>
                    </div>  
                    <div className={css.tz}>
                        {pay?
                         <img className={css.tzImg} onClick={()=>{setPay(0)}}   src={tzOn} alt="" />   
                        :
                        <img className={css.tzImg} onClick={()=>{setPay(payPrice)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>Модуль приема денежных средств на сайте<li>2 500руб.</li></span>
                    </div>  
                    <div className={css.progressBarContainer}>
                    <motion.div initial={{width:'60%'}} whileInView={{width:'75%'}} transition={{duration:1}} className={css.progress}></motion.div>
                    </div>
                </div>
                
            </div>
            <div className={css.nestedContainer2}>
            <h3 className={css.winsPriceHeader}>Время</h3>
                <span className={css.priceCount}>от {workMin} час.</span>
                <span className={css.priceCount}>до {workMax} час.</span>
                <div className={css.hr} />
                <h3 className={css.winsPriceHeader}>Стоимость</h3>
                <span className={css.priceCount}>от {priceMin} руб.</span>
                <span className={css.priceCount}>до {priceMax} руб.</span>
            </div>
            
        </motion.div>
</section>
}

</>
    );
}
 
export default CalcPage32;


