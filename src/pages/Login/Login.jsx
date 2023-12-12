
import { useLayoutEffect } from 'react';
import css from './Login.module.css'

const Login = () => {
    useLayoutEffect(()=>{
        document.title = "Вход";
    })
    return ( 
<>
<section className={css.container}>
    <h1 className={css.header}>Вход</h1>
</section>
</>
     );
}
 
export {Login};