import css from './ShopPage5.module.css'
import {motion} from 'framer-motion'

const lst = [
  {
    'number': '1',
    'header': 'Определение Целей',
    'content': 'Установление ключевых бизнес-целей для будущего корпоративного сайта.'
  },
  {
    'number': '2',
    'header': 'Маркетинговый Анализ',
    'content': 'Полный анализ рынка, конкурентов и целевой аудитории для формирования эффективной стратегии.'
  },
  {
    'number': '3',
    'header': 'Планирование Разработки',
    'content': 'Создание подробного плана разработки с учетом всех требований и ресурсов.'
  },
  {
    'number': '4',
    'header': 'Разработка Концепции',
    'content': 'Проектирование структуры сайта, функционала и пользовательского пути.'
  },
  {
    'number': '5',
    'header': 'Дизайн',
    'content': 'Разработка уникального дизайна, соответствующего корпоративной идентичности.'
  },
  {
    'number': '6',
    'header': 'Верстка и Программирование',
    'content': 'Техническая реализация сайта, верстка и программирование.'
  },
  {
    'number': '7',
    'header': 'Тестирование',
    'content': 'Проверка сайта на ошибки и несоответствия перед запуском.'
  },
  {
    'number': '8',
    'header': 'Запуск и Мониторинг',
    'content': 'Официальный запуск сайта и его постоянный мониторинг для оптимизации работы.'
  }
];

const ShopPage5 = () => {
    const width = window.screen.width
    if (width>768){
        return ( 
            <>
            <section className={css.container}>
                <h2 className={css.header}>8 ШАГОВ ПРИ РАЗРАБОТКЕ ИНТЕРНЕТ МАГАЗИНА</h2>
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
    }else{
        return ( 
            <>
            <section className={css.container}>
                <h2 className={css.header}>8 ШАГОВ ПРИ РАЗРАБОТКЕ ИНТЕРНЕТ МАГАЗИНА</h2>
                <div className={css.cardContainer}>
                    {lst.map((item, index) => (
                    <motion.div initial={{ scale:0 }} viewport={{amount:0.7}}  whileInView={{ scale:1 }} className={css.card} >
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

}
 
export default ShopPage5;