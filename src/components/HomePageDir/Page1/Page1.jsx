import { useEffect, useRef, useState } from 'react';
import css from './Page1.module.css'
import gsap from "gsap";
import  { motion} from "framer-motion";

import img0 from './img/sl0.webp'
import img1 from './img/sl1.png'
import img2 from './img/sl2.png'
import img3 from './img/sl3.png'
import img4 from './img/sl4.png'
import img5 from './img/sl5.png'
import img6 from './img/sl6.png'

const Page1 = () => {
    const width = window.screen.width/1536
    const height = window.screen.height/864
    const [coords, setCoords] = useState({x: 0, y: 0});
    const sl1 = useRef()
    const sl2 = useRef()
    const sl3 = useRef()
    const sl4 = useRef()
    const sl5 = useRef()
    const sl6 = useRef()
    const headerRef = useRef()

    
    const handleWindowMouseMove = event => {
        if(window.scrollY<=70){
            setCoords({
                x: event.clientX,
                y: event.clientY,
              });
              // Первый куб
            if(event.clientX>(130*width) & event.clientX<(370*width)){
                if(event.clientY>(380*height) & event.clientY<(615*height)){
                    gsap.to(sl1.current,{opacity:1})
                }else{gsap.to(sl1.current,{opacity:0})}
            }else{gsap.to(sl1.current,{opacity:0})}
            // Второй куб
            if(event.clientX>(350 *width)& event.clientX<(490)*width){
                if(event.clientY>(295*height) & event.clientY<(435*height)){
                    gsap.to(sl2.current,{opacity:1})
                }else{gsap.to(sl2.current,{opacity:0})}
            }else{gsap.to(sl2.current,{opacity:0})}
            // Третий куб
            if(event.clientX>(445 *width)& event.clientX<(545)*width){
                if(event.clientY>(500*height) & event.clientY<(590*height)){
                    gsap.to(sl3.current,{opacity:1})
                }else{gsap.to(sl3.current,{opacity:0})}
            }else{gsap.to(sl3.current,{opacity:0})}
            // Четвертый куб
            if(event.clientX>(890 *width)& event.clientX<(990)*width){
                if(event.clientY>(505*height) & event.clientY<(585*height)){
                    gsap.to(sl4.current,{opacity:1})
                }else{gsap.to(sl4.current,{opacity:0})}
            }else{gsap.to(sl4.current,{opacity:0})}
            // Пятый куб
            if(event.clientX>(978 *width)& event.clientX<(1055*width)){
                if(event.clientY>(340*height) & event.clientY<(400*height)){
                    gsap.to(sl6.current,{opacity:1})
                }else{gsap.to(sl6.current,{opacity:0})}
            }else{gsap.to(sl6.current,{opacity:0})}
            // Шестой куб
            if(event.clientX>(1072*width) & event.clientX<(1328*width)){
                if(event.clientY>(360*height) & event.clientY<(605*height)){
                    gsap.to(sl5.current,{opacity:1})
                }else{gsap.to(sl5.current,{opacity:0})}
            }else{gsap.to(sl5.current,{opacity:0})}


        }

      };

    useEffect(() => {

        window.addEventListener('mousemove', handleWindowMouseMove);
        
        return () => {
            
            
            window.removeEventListener(
              'mousemove',
              handleWindowMouseMove,
              
            );
          };
        }, []);

        // window.addEventListener('scroll',()=>{
        //     let value = window.scrollY
        //     gsap.to(headerRef.current,{y:value*0.5,duration:1})
        // })

    return (
<>
<section  className={css.container} style={{overflow:'hidden'}}>
    <img   className={css.paralax} style={{zIndex:'1',opacity:'1'}} src={img0} alt="" />
    <motion.img  initial={{ opacity:0 }} viewport={{once:true}}  whileInView={{ opacity:1 }} transition={{delay:4}} className={css.paralax} ref={sl1}   src={img1} alt="" />
    <motion.img initial={{ opacity:0 }} viewport={{once:true}}  whileInView={{ opacity:1 }} transition={{delay:3}}  className={css.paralax} ref={sl2}   src={img2} alt="" />
    <motion.img  initial={{ opacity:0 }} viewport={{once:true}}  whileInView={{ opacity:1 }} transition={{delay:2}} className={css.paralax} ref={sl3}   src={img3} alt="" />
    <motion.img  initial={{ opacity:0 }} viewport={{once:true}}  whileInView={{ opacity:1 }} transition={{delay:2}} className={css.paralax} ref={sl4}  src={img4} alt="" />
    <motion.img  initial={{ opacity:0 }} viewport={{once:true}}  whileInView={{ opacity:1 }} transition={{delay:4}} className={css.paralax} ref={sl5}  src={img5} alt="" />
    <motion.img  initial={{ opacity:0 }} viewport={{once:true}}  whileInView={{ opacity:1 }} transition={{delay:3}} className={css.paralax} ref={sl6}  src={img6} alt="" />
        <motion.h1 initial={{ opacity:0 }}  whileInView={{ opacity:1 }} transition={{duration:2}} className={css.header} ref={headerRef} >Проектирование цифрового совершенства</motion.h1>
        <a initial={{ y:-100 }} viewport={{amount:.7}}  whileInView={{ y:0 }} className={css.button}>Рассчитать стоимость</a>
</section>
</>
    );
}
 
export default Page1;