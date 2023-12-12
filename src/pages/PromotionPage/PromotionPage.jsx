import { useLayoutEffect } from "react";
import PromotionPage1 from "../../components/PromotionPageDir/PromotionPage1/PromotionPage1";


const PromotionPage = () => {
    useLayoutEffect(()=>{
        document.title = "Продвижение";
    })
    return (
<>
<PromotionPage1/>
</>
    );
}
 
export {PromotionPage} ;