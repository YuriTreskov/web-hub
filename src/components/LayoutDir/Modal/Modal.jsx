
//       Модально окно с двумя полями: имя и номер, отправкой формы в телеграм

import './Modal.css'
import { useRef, useState} from "react";
import InputMask from 'react-input-mask';
import  {AnimatePresence, motion} from "framer-motion";
import React, { useContext } from 'react';
import { MyContext } from '../MyContextProvider/MyContextProvider';
import axios from 'axios';
import gsap from 'gsap';
import numberValidator from "../../../utils/numberValidator";


// Данные для отправки в телеграмм
const token = '6979178148:AAHqJu4xrlhBTKhnOuysouWtDJsO164UaN0'
const chatId = '-4014090823'
const URI_API = `https://api.telegram.org/bot${ token }/sendMessage` 







const Modal = (isDev) => {


    const { modal, setModal } = useContext(MyContext);// Глобальная переменная для отображения модально окна

    const [name , setName] = useState('') // Состояние имени
    const [number, setNumber] = useState('') // Состояние номера
    const [inputName,setInputName ] = useState(' 1px solid #c5c5c5') //Состояние для бордрера имени
    const [inputNumber,setInputNumber]= useState('1px solid #c5c5c5') // Состояние для бордера Номера
    const [formValid, setFormValid] = useState('none') // Состоаяние для появления фона галочки
    const [formInvalid, setFormInvalid] = useState('none') // Состоаяние для появления тревожной надписи

    const formInvalidRef = useRef() //Реф для анимирования тревожной надписи
    const formValidRef = useRef()  //Реф для анимировния изрбражения галочки
    const formValidFonRef = useRef() // Реф для анимирования фона галочки
    
    // Создание сообщения для отправки в телеграм
    let message = `<b>Заявка с сайта!</b>\n`
    message += `<b>Отправитель: ${name}</b>\n`
    message += `<b>Номер: ${number}</b>\n`


    const handleEstimateClick = (event) => {
        event.preventDefault(); // Сброс дефолтного поведения кнопки

        // Проверка валидности формы
        if(numberValidator(number,isDev ) && name.length>0){//Если форма валидна
            axios.post(URI_API, {
                chat_id:chatId,
                parse_mode:'html',
                text: message
            })
            // Сброс полей
            setName('')
            setNumber('')
            // Скрытие модального окна
            setModal(false)
            // Появление галочки
            setFormValid('flex')
            // Убираю тревожные бордеры
            setInputNumber('1px solid #c5c5c5')
            setInputName('1px solid #c5c5c5')
            //Убираю тревожное оповещение надпись
            setFormInvalid('none')
            //Анимирование галочки
            gsap.from(formValidRef.current,{opacity:0,duration:4})
            gsap.to(formValidRef.current,{opacity:0,duration:3,delay:1})
            gsap.to(formValidFonRef.current,{opacity:0,duration:3,delay:1})
            gsap.to(formValidFonRef.current,{opacity:1,delay:15})
            gsap.to(formValidRef.current,{opacity:1,delay:15})
        }
        if(!numberValidator(number,isDev )&& name.length===0){ // Если неправильно введено все
            //Установка тревожных бордеров
            setInputNumber('1px solid red')
            setInputName('1px solid red')
            //Появление тревожной надписи
            setFormInvalid('block')
            //Анимирование появления тревожной надписи
            gsap.from(formInvalidRef.current,{opacity:0,duration:2})
        }
        if(numberValidator(number,isDev )&& name.length===0){//Если неправильно введено Имя
            //Установка обычного бордера на номер
            setInputNumber('1px solid #c5c5c5')
            //Установка тревожного борлера на Имя 
            setInputName('1px solid red')
            //Появление тревожной надписи
            setFormInvalid('block')
            //Анимирование появления тревожной надписи
            gsap.from(formInvalidRef.current,{opacity:0,duration:2})
        }
        if(!numberValidator(number,isDev )&& name.length>0){
            //Установка тревожного бордера на номер
            setInputNumber('1px solid red')
            //Устанвока обысного бордера на имя
            setInputName('1px solid #c5c5c5')
            //Появление тревожной надписи
            setFormInvalid('block')
            //Анимирование появления тревожной надписи
            gsap.from(formInvalidRef.current,{opacity:0,duration:2})
        }
    }
    return (<>
                {/* Галочка после отправки формы */}
                <div ref={formValidFonRef} style={{display:formValid}} onClick={()=>{setFormValid('none')}} className='Page1OnValid'>
                    <motion.img ref={formValidRef} className='Page1OnValidImg' src='./Modal/img/good.png'/>
                </div>
                {/* Модальное окно */}
                    <AnimatePresence>
                {modal&&
                           <div 
                           onClick={()=>{setModal(false)}} style={ModalContainer} > 
                               <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} transition={{duration:0.5}}
                               onClick={e => e.stopPropagation()} className={'ModalWind'}>
                                   <div className={'ModalHeader'}>Будем рады вас услышать</div>
                                   <div className={'ModalHeader1'}>Мы перезвоним вам в течение 5 минут</div>
               
                                   <form className={'ModalForm'} >
               
                                       <input value={name} style={{border:inputName}} placeholder='Ваш Имя' onChange={(e)=>{setName(e.target.value)}} className={'ModalInputName'} />
                                       <InputMask
                                       style={{border:inputNumber}}
                                           value={number}
                                           mask="+7(999)999-99-99"
                                           placeholder='Ваш телефон'
                                           className='ModalInputPhone'
                                           onChange={(e)=>{setNumber(e.target.value)}}
                                       />
                                       <button onClick={handleEstimateClick} className={'ModalFormButton'}>Отправить</button>
                                       <div style={{display:formInvalid}} ref={formInvalidRef} className='ModalFormError'>Заполните форму</div>
                                   </form>
               
                               </motion.div>
                           </div>     
                }

            </AnimatePresence>
    </>);
}
 
export default Modal;


const ModalContainer = {
    display:'flex',
    height: '100vh',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.8)',
    zIndex: 222,
    position: 'fixed',
    justifyContent: 'center',
    alignItems: 'center',
    
}