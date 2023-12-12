import css from './CorpPage5.module.css'
import {motion} from 'framer-motion'

const lst = [
    {
      'number': '1',
      'header': 'Инициация Проекта',
      'content': 'Обсуждаем цели вашего корпоративного сайта, определяем основные задачи и формируем предложение.'
    },
    {
      'number': '2',
      'header': 'Анализ Рынка',
      'content': 'Изучаем вашу отрасль, целевую аудиторию и конкурентов для создания стратегически выверенного сайта.'
    },
    {
      'number': '3',
      'header': 'Стратегия и План',
      'content': 'Разрабатываем стратегию развития сайта, планируем этапы работы и ресурсы.'
    },
    {
      'number': '4',
      'header': 'Техническое Задание',
      'content': 'Формируем документацию с функциональными требованиями и спецификациями для вашего сайта.'
    },
    {
      'number': '5',
      'header': 'Дизайн и Прототипирование',
      'content': 'Создаем прототипы и финальные дизайн-макеты, отражающие корпоративный стиль вашей компании.'
    },
    {
      'number': '6',
      'header': 'Разработка Сайта',
      'content': 'Программируем и настраиваем функционал сайта, обеспечиваем его взаимодействие с пользователями.'
    },
    {
      'number': '7',
      'header': 'Запуск и Тестирование',
      'content': 'Проводим тестирование, устраняем ошибки и размещаем сайт на хостинге.'
    },
    {
      'number': '8',
      'header': 'Поддержка и Развитие',
      'content': 'Предлагаем услуги по постоянному обновлению и оптимизации сайта, улучшая его производительность.'
    }
  ];

const CorpPage5 = () => {
    const width = window.screen.width
    if (width>768){
        return ( 
            <>
            <section className={css.container}>
                <h2 className={css.header}>8 ШАГОВ ПРИ РАЗРАБОТКЕ КОРПОРАТИВНОГО САЙТА</h2>
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
                <h2 className={css.header}>8 ШАГОВ ПРИ РАЗРАБОТКЕ ИДЕАЛЬНОГО ЛЕНДИНГА</h2>
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
 
export default CorpPage5;