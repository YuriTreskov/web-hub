import { MyContext } from '../MyContextProvider';
import css from './CalcPage31Mobile.module.css'
import { useEffect, useRef } from 'react';
import { useContext } from 'react';
import {motion} from 'framer-motion'
import tzOn from '../img/tzOn1.png'
import tzOff from '../img/tzOff1.png'
import gsap from 'gsap';
import next1 from '../img/next1.png'
import back1 from '../img/back1.png'


const CalcPage31Mobile = () => {
    const windRef = useRef()
    const contRef = useRef()
    const { priceMax,priceMin,workMin,workMax,page11,setPage11,disign0, setDisign0,disign1, setDisign1,
        disign2, setDisign2,disignPrice2,disignPriceApple,disignApple, setDisignApple,disignUniq, setDisignUniq,
        disignPriceUniq,logoPrice,logoDisign, setlogoDisign,firmStylePrice,firmStyle,setFirmStyle,setPage12,setLending,
        page21,setPage21,setPage2,page22,setPage22,page31,setPage31,setPage3,setPage32} = useContext(MyContext); 

        useEffect(()=>{
            window.scrollTo(0, 0);
        },[page31])

        const handleDisign = (num)=>{
            if(num===1){
                setDisign0(true)
                setDisign1(false)
                setDisign2(0)
                setDisignApple(0)
                setDisignUniq(0)
            }else if(num===2){
                setDisign0(false)
                setDisign1(true)
                setDisign2(0)
                setDisignApple(0)
                setDisignUniq(0)
            }else if(num===3){
                setDisign0(false)
                setDisign1(false)
                setDisign2(disignPrice2)
                setDisignUniq(0)
                setDisignApple(0)
            }else if(num===4){
                setDisign0(false)
                setDisign1(false)
                setDisign2(0)
                setDisignApple(disignPriceApple)
                setDisignUniq(0)
            }else if(num===5){
                setDisign0(false)
                setDisign1(false)
                setDisign2(0)
                setDisignApple(0)
                setDisignUniq(disignPriceUniq)
            }
        }

        const getNext = () =>{
            setPage32(true)
            gsap.to(windRef.current,{opacity:0,duration:.1})
            setPage31(false)
        }
        const getBack = () =>{
            setPage31(false)
            setPage3(true)
            gsap.to(windRef.current,{opacity:0,duration:.1})
        }

    return (
<>
{page31&&
    <section className={css.container}>
        <motion.div ref={contRef} initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:.4}} className={css.wind1}>
        <div className={css.nestedContainer1}>
                <h2 className={css.windHeader}>Дизайн</h2>
                <h3 className={css.windHeader1}>Варианты дизайна</h3>
                <div className={css.tzContainer}>
                <div className={css.tz}>
                        {disign0?
                        <img className={css.tzImg} onClick={()=>{setDisign0(!disign0)}}  src={tzOn} alt="" />    
                        :
                        <img className={css.tzImg} onClick={()=>{handleDisign(1)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>Дизайн предоставляет заказчик</span>
                        
                    </div>
                    <div className={css.tz}>
                        {disign1?
                         <img className={css.tzImg} onClick={()=>{setDisign1(false)}}   src={tzOn} alt="" />   
                        :
                        <img className={css.tzImg} onClick={()=>{handleDisign(2)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>Шаблонный дизайн сайта</span>
                    </div>  
                    <div className={css.tz}>
                        {disign2?
                         <img className={css.tzImg} onClick={()=>{setDisign2(0)}}   src={tzOn} alt="" />   
                        :
                        <img className={css.tzImg} onClick={()=>{handleDisign(3)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>Шаблонный дизайн с доработкой</span>
                        <div className={css.cardPrice}>2 500руб.</div>
                    </div>  
                    <div className={css.tz}>
                        {disignApple?
                         <img className={css.tzImg} onClick={()=>{setDisignApple(0)}}   src={tzOn} alt="" />   
                        :
                        <img className={css.tzImg} onClick={()=>{handleDisign(4)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>Уникальный современный дизайн в стиле Apple</span>
                        <div className={css.cardPrice}>7 500руб.</div>
                    </div>  
                    <div className={css.tz}>
                        {disignUniq?
                         <img className={css.tzImg} onClick={()=>{setDisignUniq(0)}}   src={tzOn} alt="" />   
                        :
                        <img className={css.tzImg} onClick={()=>{handleDisign(5)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>Художественный дизайн с прорисовками</span>
                        <div className={css.cardPrice}>15 000руб.</div>
                    </div>  
                    <div className={css.tz}>
                        {logoDisign?
                         <img className={css.tzImg} onClick={()=>{setlogoDisign(0)}}   src={tzOn} alt="" />   
                        :
                        <img className={css.tzImg} onClick={()=>{setlogoDisign(logoPrice)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>Профессиональная разработка логотипа (3 варианта)</span>
                        <div className={css.cardPrice}>2 500руб.</div>
                    </div>  
                    <div className={css.tz}>
                        {firmStyle?
                         <img className={css.tzImg} onClick={()=>{setFirmStyle(0)}}   src={tzOn} alt="" />   
                        :
                        <img className={css.tzImg} onClick={()=>{setFirmStyle(firmStylePrice)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>Разработка фирменного стиля</span>
                        <div className={css.cardPrice}>10 000руб.</div>
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
                        <motion.div initial={{width:'30%'}} whileInView={{width:'50%'}} transition={{duration:1}} className={css.progress}></motion.div>
                    </div>

                </div>

            </div>
            
        </motion.div>
</section>
}

</>
    );
}
 
export default CalcPage31Mobile;


