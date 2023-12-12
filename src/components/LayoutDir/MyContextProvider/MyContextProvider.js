import React, { createContext, useState } from 'react';

// Создайте контекст
const MyContext = createContext();

// Создайте провайдер контекста, который будет предоставлять переменную
  const  MyContextProvider = React.memo(({ children,isDev }) => {

    const [ modal, setModal ] = useState(false)
    const [ modalMenu, setModalMenu ] = useState(false)
    const [ footer, setFooter ] = useState('flex')

  return (
    <MyContext.Provider value={{ modal, setModal ,modalMenu, setModalMenu ,footer, setFooter }}>
      {children}
    </MyContext.Provider>
  );
},[])

export { MyContext, MyContextProvider };