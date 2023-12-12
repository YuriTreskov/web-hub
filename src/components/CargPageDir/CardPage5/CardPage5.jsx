import css from './CardPage5.module.css'
import {motion} from 'framer-motion'

const lst = [
  {
    "number": "1",
    "header": "Исследование идеи",
    "content": "Анализ идеи проекта, определение потребностей и целей, исследование рынка и потенциальной аудитории."
  },
  {
    "number": "2",
    "header": "Формулирование концепции",
    "content": "Определение основных концептуальных черт проекта, создание его уникального предложения и ценностей."
  },
  {
    "number": "3",
    "header": "Планирование ресурсов",
    "content": "Составление подробного плана необходимых ресурсов, включая время, бюджет и материалы."
  },
  {
    "number": "4",
    "header": "Дизайн и проектирование",
    "content": "Разработка детального дизайна проекта, его визуального и функционального оформления."
  },
  {
    "number": "5",
    "header": "Разработка прототипа",
    "content": "Создание рабочего прототипа проекта для демонстрации его возможностей и функционала."
  },
  {
    "number": "6",
    "header": "Тестирование",
    "content": "Проведение тестов для выявления ошибок и проверка соответствия первоначальным требованиям."
  },
  {
    "number": "7",
    "header": "Реализация и внедрение",
    "content": "Финальное создание проекта и его внедрение в соответствии с планом разработки."
  },
  {
    "number": "8",
    "header": "Оценка и обратная связь",
    "content": "Анализ результатов, сбор и учет обратной связи для дальнейшего улучшения проекта."
  }
];

const CardPage5 = () => {
    const width = window.screen.width
    if (width>768){
        return ( 
            <>
            <section className={css.container}>
                <h2 className={css.header}>8 ШАГОВ ПРИ РАЗРАБОТКЕ ИНДИВИДУАЛЬНОГО ПРОЕКТА</h2>
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
 
export default CardPage5;