import css from './WebPage3.module.css'
import {motion} from 'framer-motion'

const lst = [
    {
    'number': '1',
    'header': 'Анализ рынка и сбор данных',
    'content': `Нашим первым шагом является глубокий анализ рыночных соперников,
     выявление ключевых характеристик и преимуществ ведущих игроков, а также планирование 
     архитектуры вашего сайта, опираясь на эту информацию в сочетании
      с нашим опытом в создании выдающихся веб-сайтов.`
    },
    {
    'number': '2',
    'header': 'Проектирование прототипа',
    'content': `Прежде чем приступить к дизайну, мы выявляем оптимальные
     способы представления информации для максимально эффективного взаимодействия с вашей
      аудиторией. Создание прототипа включает в себя стратегическое моделирование
       пользовательского пути на сайте.`
    },
    {
    'number': '3',
    'header': 'Концепция дизайна сайта',
    'content': `Эстетика вашего сайта играет ключевую роль в привлечении
     и удержании внимания посетителей. Наши дизайнеры применяют передовые
      техники для создания дизайна, который будет не только привлекателен,
       но и станет символом вашего бренда.`
    },
    {
    'number': '4',
    'header': 'Разработка и кодирование',
    'content': `Наша команда разработчиков реализует проекты любой сложности на высоком уровне,
     обеспечивая строгий контроль качества на каждом этапе. Результатом станет быстро работающий,
      адаптивный веб-сайт, уже оптимизированный для последующего SEO-продвижения.`
    },
    ]

const WebPage31 = () => {


    return ( 
<>
<section className={css.container}>
    <motion.h2 initial={{y:100}} whileInView={{y:0}} className={css.header}>Как мы будем создавать Ваш сайт?</motion.h2>
    <div className={css.cardContainer}>
    {lst.map((item, index) => (
            
            index % 2 ? (
                <motion.div initial={{ x: -300 }} viewport={{amount:.7}}  whileInView={{ x: 0 }} className={css.card} style={{marginRight:'24vw'}}>
                <span className={css.cardNumber}>{item.number}</span>
                <div className={css.cardContent}>
                    <h3 className={css.cardHeader}>{item.header}</h3>
                    <p className={css.cardFullText}>{item.content}</p>
                </div>
            </motion.div>
            ) : 
            <motion.div initial={{ x: 300 }} viewport={{amount:0.7}}  whileInView={{ x: 0 }} className={css.card} style={{marginLeft:'24vw'}}>
                <span className={css.cardNumber}>{item.number}</span>
                <div className={css.cardContent}>
                    <h3 className={css.cardHeader}>{item.header}</h3>
                    <p className={css.cardFullText}>{item.content}</p>
                </div>
            </motion.div>
            ))}
    </div>
</section>
</>
    );
}
 
export default WebPage31;