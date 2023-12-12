import { MyContext } from '../MyContextProvider';
import css from './CalcPage12Mobile.module.css'
import { useEffect, useRef } from 'react';
import { useContext } from 'react';
import {motion} from 'framer-motion'
import tzOn from '../img/tzOn1.png'
import tzOff from '../img/tzOff1.png'
import gsap from 'gsap';
import next1 from '../img/next1.png'
import back1 from '../img/back1.png'


const CalcPage12Mobile = () => {
    const windRef = useRef()
    const contRef = useRef()
    const { priceMax,priceMin,workMin,workMax,page12,setPage12,
        setPage13,staticDevPrice,interactiveDevPrice,adaptiveDevPrice,formPrice,botPrice,staticDev,
        calcPrice,payPrice,adaptiveDev,setadAptiveDev,adinteractiveDev,setadInteractiveDev,form,setForm ,
        bot,setBot,calc,setCalc,pay,setPay,setStaticDev,setPage11,setInputNumber} = useContext(MyContext); 

        useEffect(()=>{
            window.scrollTo(0, 0);
        },[page12])
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
            setPage13(true)
            gsap.to(windRef.current,{opacity:0,duration:.1})
            setPage12(false)
        }
        const getBack = () =>{
            setPage12(false)
            setPage11(true)
            gsap.to(windRef.current,{opacity:0,duration:.1})
        }

    return (
<>
{page12&&
    <section className={css.container}>
        <motion.div ref={contRef} initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:.4}} className={css.wind1}>
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
                        <span className={css.tzText}>Статическая верстка</span>
                        <div className={css.cardPrice}>7 500руб.</div>
                    </div>
                    <div className={css.tz}>
                        {adaptiveDev?
                         <img className={css.tzImg} onClick={()=>{setadAptiveDev(0)}}   src={tzOn} alt="" />   
                        :
                        <img className={css.tzImg} onClick={()=>{handleDev(2)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>Адаптивная верстка (под все устройства)</span>
                        <div className={css.cardPrice}>12 500руб.</div>
                    </div>  
                    <div className={css.tz}>
                        {adinteractiveDev?
                         <img className={css.tzImg} onClick={()=>{setadInteractiveDev(0)}}   src={tzOn} alt="" />   
                        :
                        <img className={css.tzImg} onClick={()=>{setadInteractiveDev(interactiveDevPrice)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>Интерактивность, эффекты параллакса</span>
                        <div className={css.cardPrice}>3 000руб.</div>
                    </div>  
                    <div className={css.tz}>
                        {form?
                         <img className={css.tzImg} onClick={()=>{setForm(0)}}   src={tzOn} alt="" />   
                        :
                        <img className={css.tzImg} onClick={()=>{setForm(formPrice)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>Форма заказа обратного звонка</span>
                        <div className={css.cardPrice}>1 500руб.</div>
                    </div>  
                    <div className={css.tz}>
                        {bot?
                         <img className={css.tzImg} onClick={()=>{setBot(0)}}   src={tzOn} alt="" />   
                        :
                        <img className={css.tzImg} onClick={()=>{setBot(botPrice)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>Бот в Telegram и привязка сайта к нему</span>
                        <div className={css.cardPrice}>2 500руб.</div>
                    </div>  
                    <div className={css.tz}>
                        {calc?
                         <img className={css.tzImg} onClick={()=>{setCalc(0)}}   src={tzOn} alt="" />   
                        :
                        <img className={css.tzImg} onClick={()=>{setCalc(calcPrice)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>Онлайн калькулятор</span>
                        <div className={css.cardPrice}>2 500руб.</div>
                    </div>  
                    <div className={css.tz}>
                        {pay?
                         <img className={css.tzImg} onClick={()=>{setPay(0)}}   src={tzOn} alt="" />   
                        :
                        <img className={css.tzImg} onClick={()=>{setPay(payPrice)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>Модуль приема денежных средств на сайте</span>
                        <div className={css.cardPrice}>2 500руб.</div>
                    </div>  
                
                </div>
                        
            </div>
            <div className={css.nestedContainer2}>
                
                <div className={css.priceContainer}>
                    <div className={css.timePrice}>
                        <h3 className={css.winsPriceHeader}>Время</h3>
                        <span className={css.priceCount}>от {workMin} час.</span>
                        <span className={css.priceCount}>до {workMax} час.</span>
                    </div>
                    <div className={css.hr}></div>
                    <div className={css.timePrice}>
                        <h3 className={css.winsPriceHeader}>Стоимость</h3>
                        <span className={css.priceCount}>от {priceMin} руб.</span>
                        <span className={css.priceCount}>до {priceMax} руб.</span>
                    </div>
                </div>
                <div className={css.buttonContainer}>
                        <div className={css.button} onClick={()=>{getBack()}}>
                            <img className={css.mobileNextImg} src={back1} alt="" />
                        </div>
                        <div className={css.button} onClick={()=>{getNext()}}>
                            <img className={css.mobileNextImg} src={next1} alt="" />
                        </div>
                    </div>
                <div className={css.consoleContainer}>
                    <div className={css.progressBarContainer}>
                        <motion.div initial={{width:'60%'}} whileInView={{width:'90%'}} transition={{duration:1}} className={css.progress}></motion.div>
                    </div>

                </div>

            </div>
            
        </motion.div>
</section>
}

</>
    );
}
 
export default CalcPage12Mobile;


