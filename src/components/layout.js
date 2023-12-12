import css from './CorpPage1.module.css'


const CorpPage1 = () => {
    return ( 
<section className={css.container}>

</section>
     );
}
 
export default CorpPage1;



.container{
    height: auto;
    width: 100%;
    background: radial-gradient(at center, #020E15, #010101);
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 15vh 0;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;

    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Old versions of Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;
}