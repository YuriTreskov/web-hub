import { MyContext } from '../MyContextProvider';
import css from './CalcPage33Mobile.module.css'
import { useEffect, useRef } from 'react';
import { useContext } from 'react';
import {motion} from 'framer-motion'
import tzOn from '../img/tzOn1.png'
import tzOff from '../img/tzOff1.png'
import gsap from 'gsap';
import next1 from '../img/next1.png'
import back1 from '../img/back1.png'


const CalcPage33Mobile = () => {
    const windRef = useRef()
    const contRef = useRef()
    const {priceMax,priceMin,workMin,workMax,setPage22,page23,setPage23,
        api,setApi,apiPrice,adminPrice,admin,setAdmin,basketPrice,basket,setBasket,searchPrice,
        search,setSearch,loginhPrice,login,setLogin,filterPrice,filter,setFilter,historyPrice,history,setHistory,
        favouritesPrice,favourites,setFavourites,salePrice,sale,setSale,warehousePrice,warehouse,setWarehouse,
        ratingPrice,raiting,setRaiting,setPage24,page33,setPage32,setPage33,setPage34,statisticPrice,statistic,setStatistic,
        sistemPrice,sistem,setSsistem,sistemCorpPrice,sistemCorp,setSsistemCorp,chatCorpPrice,chatCorp,setChat} = useContext(MyContext); 

        useEffect(()=>{
            window.scrollTo(0, 0);
        },[page33])


        const getNext = () =>{
            setPage34(true)
            gsap.to(windRef.current,{opacity:0,duration:.1})
            setPage33(false)
        }
        const getBack = () =>{
            setPage33(false)
            setPage32(true)
            gsap.to(windRef.current,{opacity:0,duration:.1})
        }
        

    return (
<>
{page33&&
    <section className={css.container}>
        <motion.div ref={contRef} initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:.4}} className={css.wind1}>
        <div className={css.nestedContainer1}>
                <div className={css.tzContainer}>
                <div className={css.tz}>
                        {api?
                        <img className={css.tzImg} onClick={()=>{setApi(0)}}  src={tzOn} alt="" />    
                        :
                        <img className={css.tzImg} onClick={()=>{setApi(apiPrice)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>API (Сервер с базой данных)</span>
                        <div className={css.cardPrice}>20 000 - 50 000руб.</div>
                        
                    </div>
                    <div className={css.tz}>
                        {admin?
                         <img className={css.tzImg} onClick={()=>{setAdmin(0)}}   src={tzOn} alt="" />   
                        :
                        <img className={css.tzImg} onClick={()=>{setAdmin(adminPrice)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>Админ-Панель управленя сайтом.</span>
                        <div className={css.cardPrice}>15 000руб.</div>
                    </div>  
                    <div className={css.tz}>
                        {statistic?
                         <img className={css.tzImg} onClick={()=>{setStatistic(0)}}   src={tzOn} alt="" />   
                        :
                        <img className={css.tzImg} onClick={()=>{setStatistic(statisticPrice)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>Счетчик статистики</span>
                        <div className={css.cardPrice}>15 000руб.</div>
                    </div>  
                    <div className={css.tz}>
                        {search?
                         <img className={css.tzImg} onClick={()=>{setSearch(0)}}   src={tzOn} alt="" />   
                        :
                        <img className={css.tzImg} onClick={()=>{setSearch(searchPrice)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>Поиск по сайту</span>
                        <div className={css.cardPrice}>7 500руб.</div>
                    </div>  
                    <div className={css.tz}>
                        {login?
                         <img className={css.tzImg} onClick={()=>{setLogin(0)}}   src={tzOn} alt="" />   
                        :
                        <img className={css.tzImg} onClick={()=>{setLogin(loginhPrice)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>Регистрация, авторизация и личный кабинет.</span>
                        <div className={css.cardPrice}>15 000руб.</div>
                    </div>  
                    <div className={css.tz}>
                        {filter?
                         <img className={css.tzImg} onClick={()=>{setFilter(0)}}   src={tzOn} alt="" />   
                        :
                        <img className={css.tzImg} onClick={()=>{setFilter(filterPrice)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>Разделение по регионам</span>
                        <div className={css.cardPrice}>5 000руб.</div>
                    </div>  
                    <div className={css.tz}>
                        {sistem?
                         <img className={css.tzImg} onClick={()=>{setSsistem(0)}}   src={tzOn} alt="" />   
                        :
                        <img className={css.tzImg} onClick={()=>{setSsistem(sistemPrice)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>Система разного уровня доступа пользователей.</span>
                        <div className={css.cardPrice}>17 500руб.</div>
                    </div>  
                    <div className={css.tz}>
                        {sistemCorp?
                         <img className={css.tzImg} onClick={()=>{setSsistemCorp(0)}}   src={tzOn} alt="" />   
                        :
                        <img className={css.tzImg} onClick={()=>{setSsistemCorp(sistemCorpPrice)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>Система корпоративного обучения</span>
                        <div className={css.cardPrice}>15 000 - 55 000руб.</div>
                    </div>  
                    <div className={css.tz}>
                        {chatCorp?
                         <img className={css.tzImg} onClick={()=>{setChat(0)}}   src={tzOn} alt="" />   
                        :
                        <img className={css.tzImg} onClick={()=>{setChat(chatCorpPrice)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>Внутренний чат</span>
                        <div className={css.cardPrice}>20 000 - 100 000руб.</div>
                    </div>  
                    <div className={css.tz}>
                        {warehouse?
                         <img className={css.tzImg} onClick={()=>{setWarehouse(0)}}   src={tzOn} alt="" />   
                        :
                        <img className={css.tzImg} onClick={()=>{setWarehouse(warehousePrice)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>Проведение опросов</span>
                        <div className={css.cardPrice}>10 000руб.</div>
                    </div>  
                    <div className={css.tz}>
                        {raiting?
                         <img className={css.tzImg} onClick={()=>{setRaiting(0)}}   src={tzOn} alt="" />   
                        :
                        <img className={css.tzImg} onClick={()=>{setRaiting(ratingPrice)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>Рейтинг пользователей (звезды)</span>
                        <div className={css.cardPrice}>5 000руб.</div>
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
                        <motion.div initial={{width:'70%'}} whileInView={{width:'90%'}} transition={{duration:1}} className={css.progress}></motion.div>
                    </div>

                </div>

            </div>
            
        </motion.div>
</section>
}

</>
    );
}
 
export default CalcPage33Mobile;


