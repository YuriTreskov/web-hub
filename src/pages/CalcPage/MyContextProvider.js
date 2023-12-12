import gsap from 'gsap';
import React, { createContext, useRef, useState } from 'react';
import numberValidator from "../../utils/numberValidator";
import axios from 'axios';




// Цены на услуги
const projectTehnicZadan = 5000   // Составление ТЗ
const projectTehnicZadanShop = 10000   // Составление ТЗ для магазина и корпорации
const semanticYadro = 7500   // Составлкения семантического ядра (за единицу)
const disignPrice2 =  2500   // Шаблонный дизайн с доработками (за страницу)
const disignPriceApple = 7500   //Уникальный дизайн в стиле  Apple(за сайт)
const disignPriceUniq = 15000 // Художественный дизайн с прорисовками
const logoPrice = 2500 // Разработка логотипа 3 варианта
const firmStylePrice = 10000 // Разработка фирменного стиля
const staticDevPrice = 7500 // Статическая верстка 
const adaptiveDevPrice = 12500 // Адаптивная верстка 
const interactiveDevPrice = 3000 // Интерактивность,эффекты паралакса
const formPrice = 1500 // Форма обратного звонка
const botPrice = 2500 // Бот в телеграм
const calcPrice = 2500 // Онлайн калькулятор
const payPrice = 2500 // Прием денежный средств
const hostingPriceSum = 1500// Размещение сайта на хостинг
const serverPriceSum = 3000 // Размещение сайта на сервер
const apiPrice = 30000 // API
const adminPrice = 15000 // Админ панель
const basketPrice = 10000 // Корзина
const searchPrice = 7500 // Поиск по сайту
const loginhPrice = 15000 // Авторизация и регистрация
const filterPrice = 5000 // Фильтрация товаров
const historyPrice = 7500 // История покупок
const favouritesPrice = 5000 // Избранные товары
const salePrice = 7500 // Избранные товары
const warehousePrice = 10000 // Наличие на складе
const ratingPrice = 5000 // Наличие на складе
const statisticPrice = 15000 // Статистика корп
const sistemPrice = 17500 // Система уровней доступа
const sistemCorpPrice = 25000 // Система корпоративнго обучения
const chatCorpPrice = 25000 // Система корпоративнго обучения





// Создайте контекст
const MyContext = createContext();

// Создайте провайдер контекста, который будет предоставлять переменную
const  MyContextProvider = React.memo(({ children,isDev }) => {
  const [tz,setTz] = useState(0) // галочка техзадания
  const [priceMax, setPriceMax] = useState() //  состояние для цены(до)
  const priceMaxRef = useRef({ value: priceMax });  // реф для плавного изменения  цены(до)
  const [priceMin, setPriceMin] = useState(0)  // состояние для цены(от)
  const priceMinRef = useRef({ value: priceMin });  // реф для плавного изменения цены(от)
  const [workMin,setWorkMin] = useState(0)  // состояние для времени (от)
  const workMinRef = useRef({ value: workMin });  // реф для плавного изменения времени (от)
  const [workMax,setWorkMax] = useState(0)  // состояние для времени (до)
  const workMaxRef = useRef({ value: workMax });  // реф для плавного изменения времени (до)
  const [landing,setLending] = useState(false) // состояние для обрвботки выбора направления
  const [corp,setCorp] = useState(false) // состояние для обрвботки выбора направления
  const [shop,setShop] = useState(false) // состояние для обрвботки выбора направления
  const [page1,setPage1]= useState(true)// Состояние для отображения первого окна
  const [page11,setPage11]= useState(false)// Состояние для отображения второго окна
  const [page12,setPage12]= useState(false)// Состояние для отображения третьего окна
  const [page13,setPage13]= useState(false)// Состояние для отображения четвертого окна
  const [countPage, setCountPage] = useState(1)// колличество страниц сайта
  const [semantic,setSemantic] = useState(0)// Сумма семантического ядра за единицу
  const [semanticCount,setSemanticCount] = useState(1)// колличество прототипируемых страниц по SEO
  const [disign0, setDisign0] = useState(true)// Дизайн предоставляет заказчик 
  const [disign1, setDisign1] = useState(false)// Шаблонный дизайн
  const [disign2, setDisign2] = useState(0)// Шаблонный дизайн с доработкой
  const [disignApple, setDisignApple] = useState(0)// Уникальный дизайн в стиеле Apple
  const [disignUniq, setDisignUniq] = useState(0)// Художественный уникальный дизайн
  const [logoDisign, setlogoDisign] = useState(0)// Дизайн логотипа
  const [firmStyle,setFirmStyle ] = useState(0)// Дизайн логотипа
  const [staticDev,setStaticDev ] = useState(0)// Статическая верстка 
  const [adaptiveDev,setadAptiveDev ] = useState(0)// Aдаптивная верстка  
  const [adinteractiveDev,setadInteractiveDev ] = useState(0)// Интерактивность,эффекты паралакса  
  const [form,setForm ] = useState(0)// Форма обратного звонка 
  const [bot,setBot ] = useState(0)// Бот в телеграм
  const [calc,setCalc ] = useState(0)// Онлайн калькулятор
  const [pay,setPay ] = useState(0)// Прием денежный средств
  const [inputNumber,setInputNumber]= useState('1px solid #c5c5c5') // Состояние для бордера Номера
  const windRef = useRef()
  const [formValid, setFormValid] = useState('none') // Состоаяние для появления фона галочки
  const formValidRef = useRef()  //Реф для анимировния изрбражения галочки
  const formValidFonRef = useRef() // Реф для анимирования фона галочки
  const [number, setNumber] = useState('1px solid #cae2e3') // Состояние номера
  const [page2,setPage2]= useState(false)// Состояние для отображения первого окна shop
  const [page21,setPage21]= useState(false)// Состояние для отображения второго окна shop
  const [page22,setPage22]= useState(false)// Состояние для отображения третьего окна shop
  const [page23,setPage23]= useState(false)// Состояние для отображения четвертого окна shop
  const [page24,setPage24]= useState(false)// Состояние для отображения пятого окна shop
  const [hostingPrice,setHostingPtice] = useState(0) // Размещение сайта на хостинг
  const [serverPrice,setServerPrice] = useState(0) // Размещение сайта на сервер
  const [api,setApi] = useState(0) // API
  const [admin,setAdmin] = useState(0) // Админ панель
  const [basket,setBasket] = useState(0) // Корзина
  const [search,setSearch] = useState(0) // Поиск по сайту
  const [login,setLogin] = useState(0) // Авторизация,личный кабинет
  const [filter,setFilter] = useState(0) // Фильтрация товаров
  const [history,setHistory] = useState(0) // История покупок
  const [favourites,setFavourites] = useState(0) // Избранные товарф
  const [sale,setSale] = useState(0) // Система скидок
  const [warehouse,setWarehouse] = useState(0) // Наличие на складе
  const [raiting,setRaiting] = useState(0) // Рейтинг товаров
  const [statistic,setStatistic] = useState(0) // Рейтинг товаров
  const [sistem,setSsistem] = useState(0) // Рейтинг товаров
  const [sistemCorp,setSsistemCorp] = useState(0) // Рейтинг товаров
  const [chatCorp,setChat] = useState(0) // Рейтинг товаров
  const [page3,setPage3]= useState(false)// Состояние для отображения первого окна shop
  const [page31,setPage31]= useState(false)// Состояние для отображения второго окна shop
  const [page32,setPage32]= useState(false)// Состояние для отображения третьего окна shop
  const [page33,setPage33]= useState(false)// Состояние для отображения четвертого окна shop
  const [page34,setPage34]= useState(false)// Состояние для отображения пятого окна shop



  return (
    <MyContext.Provider value={{ 
      tz,setTz,priceMax, setPriceMax ,priceMaxRef,priceMin,
     setPriceMin,priceMinRef,workMin,setWorkMin,workMinRef,
     workMax,setWorkMax,workMaxRef,projectTehnicZadan,semanticYadro,disignPrice2,disignPriceApple,landing ,setLending,
     corp,setCorp,shop,setShop,page1,setPage1,countPage, setCountPage,semantic,setSemantic,
     semanticCount,setSemanticCount,page11,setPage11,disign0, setDisign0,disign1, setDisign1,
     disign2, setDisign2,disignApple, setDisignApple,disignPriceUniq,disignUniq, setDisignUniq,
     logoPrice,logoDisign, setlogoDisign,firmStylePrice,firmStyle,setFirmStyle,page12,setPage12,
     page13,setPage13,staticDevPrice,interactiveDevPrice,adaptiveDevPrice,formPrice,botPrice,staticDev,
     calcPrice,payPrice,adaptiveDev,setadAptiveDev,adinteractiveDev,setadInteractiveDev,form,setForm ,
     bot,setBot,calc,setCalc,pay,setPay,setStaticDev,inputNumber,setInputNumber,windRef,formValid, setFormValid,
     formValidRef,formValidFonRef,number, setNumber,page2,setPage2,projectTehnicZadanShop,hostingPrice,serverPrice,
     hostingPriceSum,serverPriceSum,setHostingPtice,setServerPrice,page21,setPage21,page22,setPage22,
     page23,setPage23,api,setApi,apiPrice,adminPrice,admin,setAdmin,basketPrice,basket,setBasket,searchPrice,
     search,setSearch,loginhPrice,login,setLogin,filterPrice,filter,setFilter,historyPrice,history,setHistory,
     favouritesPrice,favourites,setFavourites,salePrice,sale,setSale,warehousePrice,warehouse,setWarehouse,
     ratingPrice,raiting,setRaiting,page24,setPage24,page3,setPage3,page31,setPage31,page32,setPage32,
     page33,setPage33,page34,setPage34,statisticPrice,statistic,setStatistic,sistemPrice,
     sistem,setSsistem,sistemCorpPrice,sistemCorp,setSsistemCorp,chatCorpPrice,chatCorp,setChat}}>
      {children}
    </MyContext.Provider>
  );
},[])

export { MyContext, MyContextProvider };