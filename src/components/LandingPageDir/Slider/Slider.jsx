import { useEffect, useRef, useState } from 'react'
import css from './Slider.module.css'
import { color } from 'framer-motion'
import  { motion} from "framer-motion";
import gsap from 'gsap'
import { MyContext } from '../../LayoutDir/MyContextProvider/MyContextProvider';
import { useContext } from 'react';

const lst =[{
    'img':'LandingPage/1.webp'
},
{
    'img':'LandingPage/2.webp'
},
{
    'img':'LandingPage/3.webp'
},
{
    'img':'LandingPage/4.webp'
},
{
    'img':'LandingPage/5.webp'
},
{
    'img':'LandingPage/6.webp'
},
{
    'img':'LandingPage/7.webp'
},
{
    'img':'LandingPage/8.webp'
},
{
    'img':'LandingPage/9.webp'
},]
const Slider = () => {
    const { modal, setModal } = useContext(MyContext); 

    useEffect(() => {
        lst.forEach(item => {
          const img = new Image();
          img.src = item.img;
        });
      }, []);
      const [count, setCount] = useState(1)
      const imgRef = useRef()
      const buttonRef = useRef()


    const next =  (props)=>{
        if(count>7){
            setCount(0)
        }else{
            setCount(count+1)
        }
        gsap.fromTo(imgRef.current,{opacity:0},{opacity:.8,duration:1})
    }

    const back =  ()=>{
        if(count <1){
            setCount(8)
        }else{
            setCount(count-1)
        }
        gsap.fromTo(imgRef.current,{opacity:0},{opacity:.8,duration:1})
    }


    return (
<section className={css.container}>
<img src="LandingPage/back.png" onClick={()=>{back()}} className={css.back} alt="" />
    <img src="LandingPage/next.png" onClick={()=>{next()}} className={css.next} alt="" />
    <motion.img initial={{y:-100}} whileInView={{y:0}} ref={imgRef}   className={css.img} src={lst[count].img} alt="" />
    <div onClick={()=>{setModal(true)}} ref={buttonRef} className={css.buttonContainer}>
        Хочу так же
    </div>

</section>
    );
}
 
export default Slider ;