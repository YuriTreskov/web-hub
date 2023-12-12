import { MyContext } from '../MyContextProvider';
import css from './CalcPage23.module.css'
import { useContext, useRef } from 'react';
import {motion} from 'framer-motion'
import tzOn from '../img/tzOn.png'
import tzOff from '../img/tzOff.png'
import back from '../img/back.png'
import next from '../img/next.png'
import gsap from 'gsap';





const CalcPage23 = () => {
    const windRef = useRef()
    const {priceMax,priceMin,workMin,workMax,setPage22,page23,setPage23,
        api,setApi,apiPrice,adminPrice,admin,setAdmin,basketPrice,basket,setBasket,searchPrice,
        search,setSearch,loginhPrice,login,setLogin,filterPrice,filter,setFilter,historyPrice,history,setHistory,
        favouritesPrice,favourites,setFavourites,salePrice,sale,setSale,warehousePrice,warehouse,setWarehouse,
        ratingPrice,raiting,setRaiting,setPage24,} = useContext(MyContext); 


        const getNext = () =>{
            setPage24(true)
            gsap.to(windRef.current,{opacity:0,duration:.1})
            setPage23(false)
        }
        const getBack = () =>{
            setPage23(false)
            setPage22(true)
            gsap.to(windRef.current,{opacity:0,duration:.1})
        }

    return (
<>
{page23&&
    <section className={css.container}>
    <img src={back} className={css.back} onClick={()=>{getBack()}} alt="" />
    <img src={next} className={css.next} onClick={()=>{getNext()}}  alt="" />
        <motion.div ref={windRef} initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:.3}} className={css.wind1}>
            <div className={css.nestedContainer1}>
                <div className={css.tzContainer}>
                    <div className={css.tz}>
                        {api?
                        <img className={css.tzImg} onClick={()=>{setApi(0)}}  src={tzOn} alt="" />    
                        :
                        <img className={css.tzImg} onClick={()=>{setApi(apiPrice)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>API (Сервер с базой данных)<li>20 000 - 50 000руб.</li></span>
                        
                    </div>
                    <div className={css.tz}>
                        {admin?
                         <img className={css.tzImg} onClick={()=>{setAdmin(0)}}   src={tzOn} alt="" />   
                        :
                        <img className={css.tzImg} onClick={()=>{setAdmin(adminPrice)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>Админ-Панель управленя сайтом.<li>15 000руб.</li></span>
                    </div>  
                    <div className={css.tz}>
                        {basket?
                         <img className={css.tzImg} onClick={()=>{setBasket(0)}}   src={tzOn} alt="" />   
                        :
                        <img className={css.tzImg} onClick={()=>{setBasket(basketPrice)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>Корзина<li>10 000руб.</li></span>
                    </div>  
                    <div className={css.tz}>
                        {search?
                         <img className={css.tzImg} onClick={()=>{setSearch(0)}}   src={tzOn} alt="" />   
                        :
                        <img className={css.tzImg} onClick={()=>{setSearch(searchPrice)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>Поиск по магазину<li>7 500руб.</li></span>
                    </div>  
                    <div className={css.tz}>
                        {login?
                         <img className={css.tzImg} onClick={()=>{setLogin(0)}}   src={tzOn} alt="" />   
                        :
                        <img className={css.tzImg} onClick={()=>{setLogin(loginhPrice)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>Регистрация, авторизация и личный кабинет.<li>15 000руб.</li></span>
                    </div>  
                    <div className={css.tz}>
                        {filter?
                         <img className={css.tzImg} onClick={()=>{setFilter(0)}}   src={tzOn} alt="" />   
                        :
                        <img className={css.tzImg} onClick={()=>{setFilter(filterPrice)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>Фильтрация товаров<li>5 000руб.</li></span>
                    </div>  
                    <div className={css.tz}>
                        {history?
                         <img className={css.tzImg} onClick={()=>{setHistory(0)}}   src={tzOn} alt="" />   
                        :
                        <img className={css.tzImg} onClick={()=>{setHistory(historyPrice)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>История покупок<li>7 500руб.</li></span>
                    </div>  
                    <div className={css.tz}>
                        {favourites?
                         <img className={css.tzImg} onClick={()=>{setFavourites(0)}}   src={tzOn} alt="" />   
                        :
                        <img className={css.tzImg} onClick={()=>{setFavourites(favouritesPrice)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>Избранные товары<li>5 000руб.</li></span>
                    </div>  
                    <div className={css.tz}>
                        {sale?
                         <img className={css.tzImg} onClick={()=>{setSale(0)}}   src={tzOn} alt="" />   
                        :
                        <img className={css.tzImg} onClick={()=>{setSale(salePrice)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>Гибкая система скидок<li>7500руб.</li></span>
                    </div>  
                    <div className={css.tz}>
                        {warehouse?
                         <img className={css.tzImg} onClick={()=>{setWarehouse(0)}}   src={tzOn} alt="" />   
                        :
                        <img className={css.tzImg} onClick={()=>{setWarehouse(warehousePrice)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>Информация о наличии на складе<li>10 000руб.</li></span>
                    </div>  
                    <div className={css.tz}>
                        {raiting?
                         <img className={css.tzImg} onClick={()=>{setRaiting(0)}}   src={tzOn} alt="" />   
                        :
                        <img className={css.tzImg} onClick={()=>{setRaiting(ratingPrice)}}  src={tzOff} alt="" />
                        }
                        <span className={css.tzText}>Рейтинг товара (звезды)<li>5 000руб.</li></span>
                    </div>  

                    <div className={css.progressBarContainer}>
                    <motion.div initial={{width:'75%'}} whileInView={{width:'90%'}} transition={{duration:1}} className={css.progress}></motion.div>
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
 
export default CalcPage23;


