import { useLayoutEffect } from 'react';
import css from './SalePage.module.css'
import Sale1 from '../../components/SalePageDir/Sale1/Sale1';
import Sale2 from '../../components/SalePageDir/Sale2/Sale2';
import { Helmet } from 'react-helmet';

const SalePage = () => {
    useLayoutEffect(()=>{
    })
    return (
<>
<section className={css.container}>
    <Helmet>
    <title>Актуальные Акции на Web-Разработку — Сэкономьте на Вашем Проекте Сегодня!</title>
    <meta name="description" content="`Не упустите выгодные предложения! Ознакомьтесь с текущими акциями на 
    наши услуги web-разработки и начните свой проект с максимальной выгодой. Кликните для деталей.`" />
    </Helmet>
    <Sale1/>
    <Sale2/>
</section>
</>

    );
}
 
export {SalePage};