import { MyContext } from '../MyContextProvider';
import css from './CalcPage13.module.css'
import { useContext } from 'react';
import {motion} from 'framer-motion'
import InputMask from 'react-input-mask';
import gsap from 'gsap';
import back from '../img/back.png'
import axios from 'axios';
import numberValidator from "../../../utils/numberValidator";

const token = '6979178148:AAHqJu4xrlhBTKhnOuysouWtDJsO164UaN0'
const chatId = '-4014090823'
const URI_API = `https://api.telegram.org/bot${ token }/sendMessage` 



const CalcPage13 = () => {
    const {tz,priceMax, setPriceMax,priceMin,
        setPriceMin,workMin,setWorkMin,setDisignUniq,
        workMax,setWorkMax,setLending,setHostingPtice,setServerPrice,
        setCorp,setShop,setPage1,countPage, setCountPage,semantic,setSemantic,
        semanticCount,setSemanticCount,setPage11,disign0, setDisign0,disign1, setDisign1,
        disign2, setDisign2,disignApple, setDisignApple,disignUniq, setDisignsUniq,
        logoDisign, setlogoDisign,firmStyle,setFirmStyle,setPage12,
        page13,setPage13,staticDev,hostingPrice,serverPrice,
        adaptiveDev,setadAptiveDev,adinteractiveDev,setadInteractiveDev,form,setForm ,
        bot,setBot,calc,setCalc,pay,setPay,setStaticDev,inputNumber,setInputNumber,windRef,formValid, setFormValid,
        formValidRef,formValidFonRef,number, setNumber} = useContext(MyContext); 

    let message = `<b>Заявка с сайта!</b>\n`
    message += `<b>Номер: ${number}</b>\n`
    message += `<b>Лендинг</b>\n`
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

        setPriceMax(0)
        setPriceMin(0)
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

    }else{
        setInputNumber('1px solid red')
    }
    }


   

    // const [inputNumber,setInputNumber]= useState('1px solid #c5c5c5') // Состояние для бордера Номера
    // const windRef = useRef()
    // const [formValid, setFormValid] = useState('none') // Состоаяние для появления фона галочки

    // const formValidRef = useRef()  //Реф для анимировния изрбражения галочки
    // const formValidFonRef = useRef() // Реф для анимирования фона галочки



        const getBack = () =>{
            setPage13(false)
            setPage12(true)
            gsap.to(windRef.current,{opacity:0,duration:.1})
        }



    return (
<>
{page13&&
    <section className={css.container}>
    <img src={back} className={css.back} onClick={()=>{getBack()}} alt="" />
{/* Галочка после отправки формы */}
<div ref={formValidFonRef} style={{display:formValid}} onClick={()=>{setFormValid('none')}} className='Page1OnValid'>
    <motion.img ref={formValidRef} className='Page1OnValidImg' src='./Modal/img/good.png'/>
</div>
        <motion.div ref={windRef} initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:.3}} className={css.wind1}>
            <div className={css.nestedContainer1}>

                {countPage>1?<div className={css.tz}>
                    <span className={css.tzText}>✔  Регистрация и настройка сервера, размещение сайта.<li>{serverPrice}руб.</li></span>      
                </div>:<div className={css.tz}>
                    <span className={css.tzText}>✔  Регистрация на хостинге,настройка и размещение сайта <li>{hostingPrice} руб.</li></span>      
                </div>}
                {tz?<div className={css.tz}>
                    <span className={css.tzText}>✔  Разработка технического задания<li>{tz}руб.</li></span>      
                </div>:<></>}
                <div className={css.tz}>
                    <span className={css.tzText}>✔  Колличество страниц на сайте<li>{countPage}шт.</li></span>      
                </div>
                {semantic?<div className={css.tz}>
                    <span className={css.tzText}>✔  Составление семантического ядра<li>{semantic*semanticCount}руб.</li></span>      
                </div>:<></>}
                {semantic?<div className={css.tz}>
                    <span className={css.tzText}>✔  Колличество прототипируемых страниц<li>{countPage}шт.</li></span>      
                </div>:<></>}
                {disign0?<div className={css.tz}>
                    <span className={css.tzText}>✔  Дизайн предоставляет заказчик</span>      
                </div>:<></>}
                {disign1?<div className={css.tz}>
                    <span className={css.tzText}>✔  Шаблонный дизайн</span>      
                </div>:<></>}
                {disign2?<div className={css.tz}>
                    <span className={css.tzText}>✔  Шаблонный дизайн с доработкой<li>{countPage>1?disign2*countPage*.7:disign2}руб.</li></span>      
                </div>:<></>}
                {disignApple?<div className={css.tz}>
                    <span className={css.tzText}>✔  Уникальный современный дизайн в стиле Apple<li>{disignApple}руб.</li></span>      
                </div>:<></>}
                {disignUniq?<div className={css.tz}>
                    <span className={css.tzText}>✔  Художественный дизайн с прорисовками<li>{disignUniq}руб.</li></span>      
                </div>:<></>}
                {logoDisign?<div className={css.tz}>
                    <span className={css.tzText}>✔  Профессиональная разработка логотипа(3 варианта)<li>{logoDisign}руб.</li></span>      
                </div>:<></>}
                {firmStyle?<div className={css.tz}>
                    <span className={css.tzText}>✔  Разработка фирменного стиля<li>{firmStyle}руб.</li></span>      
                </div>:<></>}
                {staticDev?<div className={css.tz}>
                    <span className={css.tzText}>✔  Статическая верстка<li>{countPage>1?staticDev*countPage*.7:staticDev}руб.</li></span>      
                </div>:<></>}
                {adaptiveDev?<div className={css.tz}>
                    <span className={css.tzText}>✔  Адаптивная верстка<li>{countPage>1?adaptiveDev*countPage*.7:adaptiveDev}руб.</li></span>      
                </div>:<></>}
                {adinteractiveDev?<div className={css.tz}>
                    <span className={css.tzText}>✔  Интерактивность, эффекты паралакса.<li>{countPage>1?adinteractiveDev*countPage:adinteractiveDev}руб.</li></span>      
                </div>:<></>}
                {form?<div className={css.tz}>
                    <span className={css.tzText}>✔  Форма заказа обратного звонка<li>{form}руб.</li></span>      
                </div>:<></>}
                {bot?<div className={css.tz}>
                    <span className={css.tzText}>✔  Бот в Telegram и привязка сайта к нему<li>{bot}руб.</li></span>      
                </div>:<></>}
                {calc?<div className={css.tz}>
                    <span className={css.tzText}>✔  Онлайн калькулятор<li>{calc}руб.</li></span>      
                </div>:<></>}
                {pay?<div className={css.tz}>
                    <span className={css.tzText}>✔  Модуль приема денежных средств на сайте<li>{pay}руб.</li></span>      
                </div>:<></>}
                <span className={`${css.tzText} ${css.warn}`}>Имейте ввиду,что данная цена не является окончательной и может отличаться в каждом индивилуальном случае.</span>
                <div className={css.buttonContainer}>
                <InputMask
                                       style={{border:inputNumber}}
                                           value={number}
                                           mask="+7(999)999-99-99"
                                           placeholder='Ваш телефон'
                                           className={css.InputPhone}
                                           onChange={(e)=>{setNumber(e.target.value)}}
                                       />
                    <div className={css.button} onClick={handleEstimateClick}>Заказать сайт</div></div>
                
                
                
            </div>
            <div className={css.nestedContainer2}>
            <h2 className={css.windHeader}>Итог</h2>
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
 
export default CalcPage13;


