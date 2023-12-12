import { MyContext } from '../MyContextProvider';
import css from './CalcPage3.module.css'
import { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import {motion} from 'framer-motion'

import tzOn from '../img/tzOn.png'
import tzOff from '../img/tzOff.png'
import gsap from 'gsap';
import backCount from '../img/backCount.png'
import back from '../img/back.png'
import next from '../img/next.png'
import nextCount from '../img/nextCount.png'
import tzOnZ from '../img/tzOn2.png'

const CalcPage3 = () => {

    const contRef = useRef()
    const { tz,setTz,priceMax, setPriceMax ,priceMin,
        setPriceMin,workMin,setWorkMin,
        workMax,setWorkMax,semanticYadro ,setLending,
        setCorp,setShop,setPage1,countPage, setCountPage,semantic,setSemantic,
        semanticCount,setSemanticCount,setPage11, setDisign0,setDisign1,
         setDisign2,setDisignApple, setDisignUniq,setlogoDisign,setFirmStyle,setPage13,
        setadAptiveDev,setadInteractiveDev,setForm ,setBot,setCalc,setPay,setStaticDev,
        setNumber,page2,projectTehnicZadanShop,hostingPriceSum,serverPriceSum,
        setHostingPtice,setServerPrice,setApi,setAdmin,setBasket,
        setSearch,setLogin,setFilter,setHistory,setFavourites,setSale,setWarehouse,
        setRaiting,setPage24,page3,setPage3,setPage31} = useContext(MyContext); 

        page3&&setHostingPtice(hostingPriceSum *page3)
        page3&&setServerPrice(serverPriceSum * page3)



    const gsapNext = ()=>{
        setPage31(true)
        setPage3(false)
        gsap.to(contRef.current,{opacity:0,duration:.1})
        
    }
    const gsapBack = ()=>{
        setPage1(true)
        setPage3(false)
        setCorp(false)
        gsap.to(contRef.current,{opacity:0,duration:.1})

        setTz(0)
        setWorkMin(0)
        setWorkMax(0)
        setLending(0)
        setCorp(0)
        setShop(0)
        setPage1(true)
        setPage11(0)
        setPage13(0)
        setCountPage(1)
        setSemantic(0)
        setSemanticCount(1)
        setDisign0(0)
        setDisign1(0)
        setDisign2(0)
        setDisignApple(0)
        setDisignUniq(0)
        setlogoDisign(0)
        setFirmStyle(0)
        setStaticDev(0)
        setadAptiveDev(0)
        setadInteractiveDev(0)
        setForm(0)
        setBot(0)
        setCalc(0)
        setPay(0)
        setNumber('')
        setHostingPtice(0)
        setServerPrice(0)
        setApi(0)
        setAdmin(0)
        setBasket(0)
        setSearch(0)
        setLogin(0)
        setFilter(0)
        setHistory(0)
        setFavourites(0)
        setSale(0)
        setWarehouse(0)
        setRaiting(0)
        setPage24(false)
        setHostingPtice(0)
        setServerPrice(0)
        setPriceMax(0)
        setPriceMin(0)
        setNumber('')
    }

    return (
<>
{page3&&
    <section className={css.container}>
    <img src={back} className={css.back} onClick={()=>{gsapBack()}} alt="" />
    <img src={next} className={css.next} onClick={()=>{gsapNext()}}  alt="" />
        <motion.div ref={contRef} initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:.4}} className={css.wind1}>
            <div className={css.nestedContainer1}>
                <h2 className={css.windHeader}>ТЗ и сбор данных</h2>
                <h3 className={css.windHeader1}>Постановка задачи</h3>
                <div className={css.tzContainer}>
                    <div className={css.tz}>
                        {tz?
                        <img className={css.tzImg} onClick={()=>{setTz(0)}}  src={tzOff} alt="" />    
                        :
                        <img className={css.tzImg} onClick={()=>{setTz(projectTehnicZadanShop)}}  src={tzOn} alt="" />
                        }
                        <span className={css.tzText}>Работа ведется по заданию или пожеланиям заказчика</span>
                        
                    </div>
                    <div className={css.tz}>
                        {tz?
                         <img className={css.tzImg} onClick={()=>{setTz(0)}}   src={tzOn} alt="" />   
                        :
                        <img className={css.tzImg} onClick={()=>{setTz(projectTehnicZadanShop)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>Требуется разработка технического задания<li>10 000руб.</li></span>
                    </div>  
                    <div className={`${css.tz} ${css.count}`}>
                        <img src={backCount} className={css.backCount} onClick={()=>{setCountPage(countPage>1?countPage-1:countPage)}} alt="" />
                        <div className={css.countPageContainer}><span className={css.countPageNumber}>{countPage}</span> </div>
                        <img src={nextCount} className={css.nextCount} onClick={()=>{setCountPage(countPage+1)}} alt="" />
                        <span className={`${css.tzText} ${css.tzTextCount}`}>Колличество основных страниц на сайте</span>
                    </div> 
                    <div className={css.tz}>
                        {countPage>1?
                        <>
                        <div className={css.tzhost}>
                         <img className={`${css.tzImg} ${css.hosting}`} src={tzOnZ}/>
                         <span className={css.tzText}> Регистрация и настройка сервера, размещение сайта.<li>3 000руб.</li></span>  
                         </div>
                         </>
                        :
                        <div className={css.tzhost}>
                         <img className={`${css.tzImg} ${css.hosting}`} src={tzOnZ}/>
                         <span className={css.tzText}>Регистрация хостинга и размещение сайта<li>1 500руб.</li></span>  
                         </div>
                        }
                        
                    </div> 
                </div>
                <div className={css.hrLeft} />
                <div className={css.marketingContainer}>
                    <h3 className={css.windHeader1}>SEO - Оптимизация</h3>
                    <div className={css.tz}>
                        {semantic?
                         <img className={css.tzImg} onClick={()=>{setSemantic(0)}}   src={tzOn} alt="" />   
                        :
                        <img className={css.tzImg} onClick={()=>{setSemantic(semanticYadro)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>Составление семантического ядра <li>7 500руб.</li></span>
                    </div>  
                    <div className={`${css.tz} ${css.count}`}>
                        <img src={backCount} className={css.backCount} onClick={()=>{setSemanticCount(semanticCount>1?semanticCount-1:semanticCount)}} alt="" />
                        <div className={css.countPageContainer}><span className={css.countPageNumber}>{semanticCount}</span></div>
                        <img src={nextCount} className={css.nextCount} onClick={()=>{setSemanticCount(semanticCount+1)}} alt="" />
                        <span className={`${css.tzText} ${css.tzTextCount}`}>Колличество посадочных страниц</span>
                </div> 

                    <div className={css.progressBarContainer}>
                    <motion.div initial={{width:'10%'}} whileInView={{width:'30%'}} transition={{duration:1}} className={css.progress}></motion.div>
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
 
export default CalcPage3;


