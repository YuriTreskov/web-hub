import css from './Page5.module.css'
import {motion} from 'framer-motion'

const lst = [{
    'number':'1',
    'header': 'Брифинг',
    'content':'Знакомимся, собираем информацию, выясняем цели и задачи проекта, предлагаем решения.'
},{
    'number':'2',
    'header': 'Изучение рынка',
    'content':'Анализируем потенциальную аудиторию и проверяем конкурентов, чтобы глубже погрузиться в контекст задачи и выработать стратегический подход.'
},{
    'number':'3',
    'header': 'Стратегическое планирование',
    'content':'Устанавливаем последовательность действий и ключевые этапы работы, собираем команду проекта, подготавливаем финансовый план.'
},
{
    'number':'4',
    'header': 'Составление технического задания',
    'content':'Производим детальную разработку технических спецификаций, описывая все критерии проекта и предполагаемые исходы.'
},
{
    'number':'5',
    'header': 'Визуализация проекта',
    'content':'Разрабатываем и утверждаем эскизы интерфейсов, выполняем визуальное оформление макетов.'
},
{
    'number':'6',
    'header': 'Разработка',
    'content':'Осуществляем разработку программного обеспечения, придерживаясь всех заданных параметров и стандартов.'
},
{
    'number':'7',
    'header': 'Сервисный старт',
    'content':'Выполняем все виды проверок и настройку, а затем осуществляем деплой проекта на основной сервер.'
},
{
    'number':'8',
    'header': 'Техническое сопровождение',
    'content':'Предоставляем услуги по обслуживанию, мониторингу и последующему усовершенствованию проекта.'
},]

const Page5 = () => {
    const width = window.screen.width
    if (width>768){
        return ( 
            <>
            <section className={css.container}>
                <h2 className={css.header}>Рабочий процесс </h2>
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
                <h2 className={css.header}>Рабочий процесс</h2>
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
 
export default Page5;