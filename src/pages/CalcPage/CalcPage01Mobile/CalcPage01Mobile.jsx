import { MyContext} from '../MyContextProvider';
import css from './CalcPage01Mobile.module.css'
import { useRef} from 'react';
import { useContext } from 'react';
import {motion} from 'framer-motion'
import gsap from 'gsap';



const CalcPage01Mobile = () => {
    const {landing ,setLending,corp,setCorp,shop,setShop,workMax,workMin,priceMin,priceMax ,page1,setPage1,
        page2,setPage2,progressRef,setPage3} = useContext(MyContext); 
    const windRef = useRef()

    const handleSet = (number)=>{
        if (number === 1){
            setLending(true)
            
            setShop(false)
            setCorp(false)
            setPage1(false)
            gsap.to(windRef.current,{opacity:0,duration:.1})
        }else if(number === 2){
            setLending(false)
            setPage1(false)
            setShop(true)
            setPage2(true)
            setCorp(false)
            gsap.to(windRef.current,{opacity:0,duration:.1})
        }else{
            setLending(false)
            setPage1(false)
            setShop(false)
            setCorp(true)
            setPage3(true)
            gsap.to(windRef.current,{opacity:0,duration:.1})
        }
    }
    if (page1){
        return (
            <>
            <section className={css.container}>
                    <motion.div  ref={windRef} className={css.wind1}>
                        <div className={css.nestedContainer1}>
                            <div className={landing?css.cardActive:css.card} onClick={()=>{handleSet(1)}}>Landing page</div>
                            <div className={css.hrLeft}></div>
                            <div className={shop?css.cardActive:css.card} onClick={()=>{handleSet(2)}}>Интернет магазин</div>
                            <div className={css.hrLeft}></div>
                            <div className={corp?css.cardActive:css.card} onClick={()=>{handleSet(3)}}>Корпоративный сайт</div>
                            <div className={css.hrLeft}></div>
                        </div>
                        <div className={css.nestedContainer2}>
                <div className={css.priceContainer}>
                    <div className={css.timePrice}>
                        <h3 className={css.winsPriceHeader}>Время</h3>
                        <span className={css.priceCount}>от {workMin} час.</span>
                        <span className={css.priceCount}>до {workMax} час.</span>
                    </div>
                    <div className={css.timePrice}>
                        <h3 className={css.winsPriceHeader}>Стоимость</h3>
                        <span className={css.priceCount}>от {priceMin} руб.</span>
                        <span className={css.priceCount}>до {priceMax} руб.</span>
                    </div>
                </div>
                <div className={css.consoleContainer}>
                    <div className={css.progressBarContainer}>
                        <motion.div initial={{width:'0%'}} whileInView={{width:'10%'}} transition={{duration:1}} className={css.progress}></motion.div>
                    </div>
                </div>

            </div>
            
                    </motion.div>
            </section>
            </>
                );
    }

}
 
export default CalcPage01Mobile;


