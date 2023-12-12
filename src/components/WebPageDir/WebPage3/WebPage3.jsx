import css from './WebPage3.module.css'
import reactImg from './img/react.png'
import gsap from "gsap"

import { useTransform, motion,useViewportScroll } from 'framer-motion'
import { useEffect } from 'react'


import speed from './img/speed.png'
import interfac from './img/interface.png'
import spa from './img/spa.png'
import seo from './img/seo.png'
import seo1 from './img/seo1.png'
import kasp from './img/kasp.png'
import scale from './img/scale.png'
import opt from './img/opt.png'
import eco from './img/eco.png'
import mobile from './img/mobile.png'
import skill from './img/skill.png'
import js from './img/js.png'

const lst = [{
    'title':'Быстрая загрузка и отзывчивость',
    'description':'React оптимизирует процесс обновления и рендеринга страниц, что делает взаимодействие пользователя с сайтом более плавным и быстрым.',
    'img':speed,
    'alt':`Этапы проектирования и разработки веб-приложений`
},{
    'title':'Веб-разработка на JavaScript',
    'description':'React, написанный на JavaScript, упрощает процесс веб-разработки, предоставляя разработчикам мощные инструменты для создания динамичных веб-приложений.',
    'img':js,
    'alt':`Мобильная веб-разработка с использованием современных технологий`
},
{
    'title':'Интерактивный пользовательский интерфейс',
    'description':'Благодаря мощной системе компонентов React, разработчики могут создавать сложные и интерактивные пользовательские интерфейсы, улучшая общий пользовательский опыт.',
    'img':interfac,
    'alt':`Команда веб-разработчиков обсуждает проект сайта`
},
{
    'title':'Одностраничные приложения (SPA)',
    'description':'React позволяет создавать SPA. Это означает, что страница не перезагружается полностью при навигации, вместо этого динамически перерисовываются только необходимые компоненты.',
    'img':spa,
    'alt':`Процесс блочной верстки сайта в веб-разработке`
},
{
    'title':'SEO-оптимизация',
    'description':'React может быть использован в сочетании с такими решениями как Next.js для улучшения SEO, благодаря серверному рендерингу и предварительной подготовке страниц для индексации поисковыми системами.',
    'img':seo1,
    'alt':`UX элементы веб-дизайна для оптимального пользовательского опыта`
},
{
    'title':'Продвижение и маркетинг сайта',
    'description':'Сайты на React могут быть эффективно интегрированы с инструментами веб-аналитики и маркетинга, что обеспечивает лучшее понимание пользовательского поведения и повышение конверсии.',
    'img':seo,
    'alt':`SEO продвижение веб-сайтов в поисковых системах`
},
{
    'title':'Повышенная безопасность',
    'description':'React помогает предотвратить некоторые уязвимости, связанные с внедрением кода (например, XSS), за счет автоматической очистки вывода в интерфейсе.',
    'img':kasp,
    'alt':`JavaScript код для интерактивной верстки сайт`
},
{
    'title':'Консистентность и масштабируемость',
    'description':'Система компонентов React способствует созданию масштабируемых и легко поддерживаемых приложений, что обеспечивает консистентность по всему сайту.',
    'img':scale,
    'alt':`HTML и CSS код веб-разработки на экране компьютера`
},
{
    'title':'Оптимизация производительности',
    'description':'Возможности React, такие как виртуальный DOM и ленивая загрузка (lazy loading), позволяют оптимизировать производительность, даже если сайт содержит большое количество данных.',
    'img':opt,
    'alt':`Пример адаптивной верстки сайта на разных устройствах`
},
{
    'title':'Активное сообщество и экосистема',
    'description':'React поддерживается огромным сообществом разработчиков, что обеспечивает постоянное обновление, большое количество готовых к использованию компонентов и библиотек.',
    'img':eco,
    'alt':`Интерфейс пользователя Figma для веб-дизайна`
},
{
    'title':'Адаптивный дизайн и верстка',
    'description':'Использование React позволяет легко реализовать адаптивный дизайн, что обеспечивает корректное отображение сайта на любых устройствах и разрешениях экрана.',
    'img':mobile,
    'alt':`Пример дизайна сайта в Figma`
},
{
    'title':'Богатый пользовательский опыт',
    'description':'Сайты на React часто предлагают более богатый и динамичный пользовательский опыт благодаря способности компонентов реагировать на действия пользователя в реальном времени.',
    'img':skill,
    'alt':`HTML и CSS код для веб-разработки`
},]

const WebPage3 = () => {

    const { scrollY } = useViewportScroll();

    useEffect(() => {
        gsap.to('.fixed-img', {position: 'fixed', top: '10%', left: '50%', transform: 'translate(-50%, -50%)' ,duration:0});
        function handleScroll() {
            const currentY = scrollY.get();
            if (currentY > 1800 && currentY < 2900) {
                // Зафиксируем изображение по центру экрана
                document.body.style.overflow = 'hidden';
                gsap.to('.fixed-img',{opacity:.7})

            } else {
                // Уберем фиксацию изображения
                document.body.style.overflow = '';
                gsap.to('.fixed-img',{opacity:0})
            }
        }

        const unsubscribeY = scrollY.onChange(handleScroll);

        return () => {
            unsubscribeY();
            document.body.style.overflow = '';
        };
    }, [scrollY]);


    return ( 
<>
<section className={css.container}>
            


        <div className={css.textContainer}>
            <motion.h2 className={css.header}>Преимущества <span>React.js</span></motion.h2>
            <div  className={css.cardContainer}>
                {lst.map((item)=>(
                    <motion.div  initial={{ opacity:0 }} viewport={{amount:.7}}  whileInView={{ opacity:1 }} transition={{duration:1}} className={css.card}>
                        <div className={css.cardImgConrtainer}>
                            <img className={css.cardImg} src={item.img} alt={item.alt} />
                        </div>
                        <div className={css.cardContent}>
                            <h3 className={css.cardHeader}>{item.title}</h3>
                            <p className={css.cardFullText}>{item.description}</p>
                        </div>
                    </motion.div>
                ))}
                {/* <motion.h2 className={css.header}>{height}</motion.h2> */}
            </div>
        </div>
        <motion.img className={`${css.img} fixed-img`} src={reactImg} alt={lst[0].alt} />
</section>
</>
     );
}
 
export default WebPage3;