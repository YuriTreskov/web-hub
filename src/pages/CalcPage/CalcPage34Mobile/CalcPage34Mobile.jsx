import { MyContext } from '../MyContextProvider';
import css from './CalcPage34Mobile.module.css'
import { useEffect, useRef, useState } from 'react';
import { useContext } from 'react';
import {motion} from 'framer-motion'
import gsap from 'gsap';
import next1 from '../img/next1.png'
import back1 from '../img/back1.png'
import InputMask from 'react-input-mask';
import axios from 'axios';
import numberValidator from "../../../utils/numberValidator";


const token = '6979178148:AAHqJu4xrlhBTKhnOuysouWtDJsO164UaN0'
const chatId = '-4014090823'
const URI_API = `https://api.telegram.org/bot${ token }/sendMessage`


const CalcPage34Mobile = () => {
    const [modal1,setModal1] = useState(true)
    const [modal2,setModal2] = useState(false)
    const modal1Ref = useRef()
    const modal2Ref = useRef()
    const contRef = useRef()
    const { tz,priceMax, setPriceMax,priceMin,
        setPriceMin,workMin,setWorkMin,setDisignUniq,
        workMax,setWorkMax,setLending,setHostingPtice,setServerPrice,
        setCorp,setShop,setPage1,countPage, setCountPage,semantic,setSemantic,
        semanticCount,setSemanticCount,setPage11,disign0, setDisign0,disign1, setDisign1,
        disign2, setDisign2,disignApple, setDisignApple,disignUniq, 
        logoDisign, setlogoDisign,firmStyle,setFirmStyle,
        setPage13,staticDev,hostingPrice,serverPrice,setPage23,
        adaptiveDev,setadAptiveDev,adinteractiveDev,setadInteractiveDev,form,setForm ,
        bot,setBot,calc,setCalc,pay,setPay,setStaticDev,inputNumber,setInputNumber,windRef, setFormValid,
        formValidRef,formValidFonRef,number, setNumber,page24,setPage24,api,admin,basket,
        search,login,filter,history,favourites,sale,warehouse,raiting,setApi,setAdmin,setBasket,setSearch,
        setLogin,setFilter,setHistory,setFavourites,setSale,setWarehouse,setRaiting,setTz,page34,setPage34,setPage33,
        statistic,sistem,sistemCorp,chatCorp,} = useContext(MyContext); 

        useEffect(()=>{
            setNumber('');
            setInputNumber('1px solid #cae2e3')
        },[page34])

        let message = `<b>Заявка с сайта!</b>\n`
    message += `<b>Номер: ${number}</b>\n`
    message += `<b>Корпоративный сайт</b>\n`
    if(tz){message += `✔  Разработка технического задания ${tz}руб.\n`}
    message += `✔  Колличество страниц на сайте ${countPage}шт.\n`
    if(countPage>1){message += `✔  Регистрация и настройка сервера, размещение сайта. ${serverPrice} руб.\n`}else{
        message += `✔  Регистрация на хостинге,настройка и размещение сайта ${hostingPrice} руб.\n`
    }
    if(semantic){message += `✔  Составление семантического ядра ${semantic*semanticCount}руб.\n`}
    if(semantic){message += `✔  Колличество прототипируемых страниц ${countPage}руб.\n`}
    if(disign0){message += `✔  Дизайн предоставляет заказчик \n`}
    if(disign1){message += `✔  Шаблонный дизайн \n`}
    if(disign2){message += `✔  Шаблонный дизайн с доработкой ${countPage>1?disign2*countPage*.7:disign2}руб.\n`}
    if(disignApple){message += `✔  Уникальный современный дизайн в стиле Apple ${disignApple}руб.\n`}
    if(disignUniq){message += `✔  Художественный дизайн с прорисовками ${disignUniq}руб.\n`}
    if(logoDisign){message += `✔  Профессиональная разработка логотипа(3 варианта) ${logoDisign}руб.\n`}
    if(firmStyle){message += `✔  Разработка фирменного стиля ${firmStyle}руб.\n`}
    if(staticDev){message += `✔  Статическая верстка ${countPage>1?staticDev*countPage*.7:staticDev}руб.\n`}
    if(adaptiveDev){message += `✔  Адаптивная верстка ${countPage>1?adaptiveDev*countPage*.7:adaptiveDev}руб.\n`}
    if(adinteractiveDev){message += `✔  Интерактивность, эффекты паралакса. ${countPage>1?adinteractiveDev*countPage:adinteractiveDev}руб.\n`}
    if(form){message += `✔  Форма заказа обратного звонка ${form}руб.\n`}
    if(bot){message += `✔  Бот в Telegram и привязка сайта к нему ${bot}руб.\n`}
    if(calc){message += `✔  Онлайн калькулятор ${calc}руб.\n`}
    if(pay){message += `✔  Модуль приема денежных средств на сайте ${pay}руб.\n`}
    if(api){message += `✔  API (Сервер с базой данных) ${api}руб.\n`}
    if(admin){message += `✔  Админ-Панель управленя сайтом. ${admin}руб.\n`}
    if(basket){message += `✔  Корзина ${basket}руб.\n`}
    if(search){message += `✔   Поиск по сайту ${search}руб.\n`}
    if(login){message += `✔  Регистрация, авторизация и личный кабинет. ${login}руб.\n`}
    if(filter){message += `✔  Разделение по регионам ${filter}руб.\n`}
    if(history){message += `✔  История покупок ${history}руб.\n`}
    if(favourites){message += `✔  Избранные товары ${favourites}руб.\n`}
    if(sale){message += `✔  Гибкая система скидок ${sale}руб.\n`}
    if(warehouse){message += `✔  Проведение опросов ${warehouse}руб.\n`}
    if(raiting){message += `✔  Рейтинг пользователей ${raiting}руб.\n`}
    if(statistic){message += `✔  Счетчик статистики ${statistic}руб.\n`}
    if(sistem){message += `✔  Система разного уровня доступа пользователей. ${sistem}руб.\n`}
    if(sistemCorp){message += `✔  Система корпоративного обучения ${sistemCorp}руб.\n`}
    if(chatCorp){message += `✔  Внутренний чат ${chatCorp}руб.\n`}
    message += `Итог:  от ${priceMin} руб. до ${priceMax} руб.`

    const handleEstimateClick = (event) => {
        if(numberValidator(number)){//Если форма валидна
        axios.post(URI_API, {
            chat_id:chatId,
            parse_mode:'html',
            text: message
        })
        setFormValid('flex')
        setInputNumber('1px solid #cae2e3')
        gsap.from(formValidRef.current,{opacity:0,duration:4})
        gsap.to(formValidRef.current,{opacity:0,duration:3,delay:1})
        gsap.to(formValidFonRef.current,{opacity:0,duration:3,delay:1})
        gsap.to(formValidFonRef.current,{opacity:1,delay:15})
        gsap.to(formValidRef.current,{opacity:1,delay:15})

        setPage34(false)
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

    }else{
        setInputNumber('1px solid red')
    }
    }
    useEffect(()=>{
        setNumber('');
        setInputNumber('1px solid #cae2e3')
    },[page34])

    const getBack = () =>{
        setPage34(false)
        setPage33(true)
        gsap.to(windRef.current,{opacity:0,duration:.1})
    }

    return (
<>
{page34&&
    <section className={css.container}>
        <motion.div ref={contRef} initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:.4}} className={css.wind1}>
        <div className={css.nestedContainer1}>
                <h2 className={css.windHeader}>Смета</h2>
                {countPage>1?<div className={css.tz}>
                            <span className={css.tzText}>✔  Регистрация и настройка сервера, размещение сайта.</span>  
                            <div className={css.cardPrice}>{serverPrice}руб.</div>     
                        </div>:<div className={css.tz}>
                            <span className={css.tzText}>✔  Регистрация на хостинге,настройка и размещение сайта </span> 
                            <div className={css.cardPrice}>{hostingPrice} руб.</div>      
                        </div>}
                        {tz?<div className={css.tz}>
                            <span className={css.tzText}>✔  Разработка технического задания</span> 
                            <div className={css.cardPrice}>{tz}руб.</div>      
                        </div>:<></>}
                        <div className={css.tz}>
                            <span className={css.tzText}>✔  Колличество страниц на сайте</span> 
                            <div className={css.cardPrice}>{countPage}шт.</div>      
                        </div>
                        {semantic?<div className={css.tz}>
                            <span className={css.tzText}>✔  Составление семантического ядра</span>   
                            <div className={css.cardPrice}>{semantic*semanticCount}руб.</div>    
                        </div>:<></>}
                        {semantic?<div className={css.tz}>
                            <span className={css.tzText}>✔  Колличество прототипируемых страниц</span>      
                            <div className={css.cardPrice}>{countPage}шт.</div> 
                        </div>:<></>}
                        {disign0?<div className={css.tz}>
                            <span className={css.tzText}>✔  Дизайн предоставляет заказчик</span>      
                        </div>:<></>}
                        {disign1?<div className={css.tz}>
                            <span className={css.tzText}>✔  Шаблонный дизайн</span>     
                        </div>:<></>}
                        {disign2?<div className={css.tz}>
                            <span className={css.tzText}>✔  Шаблонный дизайн с доработкой</span>    
                            <div className={css.cardPrice}>{countPage>1?disign2*countPage*.7:disign2}руб.</div>   
                        </div>:<></>}
                        {disignApple?<div className={css.tz}>
                            <span className={css.tzText}>✔  Уникальный современный дизайн в стиле Apple</span>      
                            <div className={css.cardPrice}>{disignApple}руб.</div> 
                        </div>:<></>}
                        {disignUniq?<div className={css.tz}>
                            <span className={css.tzText}>✔  Художественный дизайн с прорисовками</span>      
                            <div className={css.cardPrice}>{disignUniq}руб.</div> 
                        </div>:<></>}
                        {logoDisign?<div className={css.tz}>
                            <span className={css.tzText}>✔  Профессиональная разработка логотипа(3 варианта)</span>  
                            <div className={css.cardPrice}>{logoDisign}руб.</div>     
                        </div>:<></>}
                        {firmStyle?<div className={css.tz}>
                            <span className={css.tzText}>✔  Разработка фирменного стиля</span>      
                            <div className={css.cardPrice}>{firmStyle}руб.</div> 
                        </div>:<></>}
                        {staticDev?<div className={css.tz}>
                            <span className={css.tzText}>✔  Статическая верстка</span>
                            <div className={css.cardPrice}>{countPage>1?staticDev*countPage*.7:staticDev}руб.</div>       
                        </div>:<></>}
                        {adaptiveDev?<div className={css.tz}>
                            <span className={css.tzText}>✔  Адаптивная верстка</span>   
                            <div className={css.cardPrice}>{countPage>1?adaptiveDev*countPage*.7:adaptiveDev}руб.</div>    
                        </div>:<></>}
                        {adinteractiveDev?<div className={css.tz}>
                            <span className={css.tzText}>✔  Интерактивность, эффекты паралакса.</span>    
                            <div className={css.cardPrice}>{countPage>1?adinteractiveDev*countPage:adinteractiveDev}руб.</div>   
                        </div>:<></>}
                        {form?<div className={css.tz}>
                            <span className={css.tzText}>✔  Форма заказа обратного звонка</span>      
                            <div className={css.cardPrice}>{form}руб.</div> 
                        </div>:<></>}
                        {bot?<div className={css.tz}>
                            <span className={css.tzText}>✔  Бот в Telegram и привязка сайта к нему</span>   
                            <div className={css.cardPrice}>{bot}руб.</div>    
                        </div>:<></>}
                        {calc?<div className={css.tz}>
                            <span className={css.tzText}>✔  Онлайн калькулятор</span>      
                            <div className={css.cardPrice}>{calc}руб.</div> 
                        </div>:<></>}
                        {pay?<div className={css.tz}>
                            <span className={css.tzText}>✔  Модуль приема денежных средств на сайте</span> 
                            <div className={css.cardPrice}>{pay}руб.</div>      
                        </div>:<></>}
                        {api?<div className={css.tz}>
                                <span className={css.tzText}>✔  API (Сервер с базой данных)</span>     
                                <div className={css.cardPrice}>{api}руб.</div>  
                            </div>:<></>}
                            {admin?<div className={css.tz}>
                                <span className={css.tzText}>✔  Админ-Панель управленя сайтом.</span>   
                                <div className={css.cardPrice}>{admin}руб.</div>    
                            </div>:<></>}
                            {statistic?<div className={css.tz}>
                                <span className={css.tzText}>✔  Счетчик статистики</span>  
                                <div className={css.cardPrice}>{statistic}руб.</div>     
                            </div>:<></>}
                            {search?<div className={css.tz}>
                                <span className={css.tzText}>✔  Поиск по сайту</span>      
                                <div className={css.cardPrice}>{search}руб.</div> 
                            </div>:<></>}
                            {login?<div className={css.tz}>
                                <span className={css.tzText}>✔  Регистрация, авторизация и личный кабинет.</span>   
                                <div className={css.cardPrice}>{login}руб.</div>    
                            </div>:<></>}
                            {filter?<div className={css.tz}>
                                <span className={css.tzText}>✔  Разделение по регионам</span>      
                                <div className={css.cardPrice}>{filter}руб.</div> 
                            </div>:<></>}
                            {sistem?<div className={css.tz}>
                                <span className={css.tzText}>✔  Система разного уровня доступа пользователей.</span>      
                                <div className={css.cardPrice}>{sistem}руб.</div> 
                            </div>:<></>}
                            {sistemCorp?<div className={css.tz}>
                                <span className={css.tzText}>✔  Система корпоративного обучения</span>     
                                <div className={css.cardPrice}>{sistemCorp}руб.</div>  
                            </div>:<></>}
                            {chatCorp?<div className={css.tz}>
                                <span className={css.tzText}>✔  Внутренний чат</span> 
                                <div className={css.cardPrice}>{chatCorp}руб.</div>      
                            </div>:<></>}
                            {warehouse?<div className={css.tz}>
                                <span className={css.tzText}>✔  Проведение опросов</span>  
                                <div className={css.cardPrice}>{warehouse}руб.</div>     
                            </div>:<></>}
                            {raiting?<div className={css.tz}>
                                <span className={css.tzText}>✔  Рейтинг пользователей</span>  
                                <div className={css.cardPrice}>{raiting}руб.</div>     
                            </div>:<></>}
                <span className={`${css.tzText} ${css.warn}`}>Имейте ввиду,что данная цена не является окончательной и может отличаться в каждом индивилуальном случае.</span>
                <div className={css.buttonContainer1}>
                <InputMask
                                       style={{border:inputNumber}}
                                           value={number}
                                           mask="+7(999)999-99-99"
                                           placeholder='Ваш телефон'
                                           className={css.InputPhone}
                                           onChange={(e)=>{setNumber(e.target.value)}}
                                       />
                    <div className={css.button1} onClick={handleEstimateClick}>Заказать сайт</div></div>
                        
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
                    </div>
                <div className={css.consoleContainer}>
                    <div className={css.progressBarContainer}>
                        <motion.div initial={{width:'90%'}} whileInView={{width:'100%'}} transition={{duration:1}} className={css.progress}></motion.div>
                    </div>

                </div>

            </div>
            
        </motion.div>
</section>
}

</>
    );
}
 
export default CalcPage34Mobile;


