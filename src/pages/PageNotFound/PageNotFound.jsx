import { useLayoutEffect } from 'react';
import css from './PageNotFound.module.css'
import { Helmet } from 'react-helmet';



const PageNotFound = () => {
    useLayoutEffect(()=>{
    })
    return (
<>
<section className={css.container}>
    <Helmet>
    <title>Страница не найдена: 404 — Но Ваш Web Проект Всё Ещё Впереди!</title>
    <meta name="description" content="`Ой, путь к странице потерялся, но не ваше видение проекта! 
    Воспользуйтесь нашей навигацией, чтобы вернуться на тропу к успешной web-разработке. 
    Найдите свой путь обратно сейчас!`" />
    </Helmet>
    <h1 className={css.header}>Страница не существует</h1>
</section>
</>
      );
}
 
export {PageNotFound};