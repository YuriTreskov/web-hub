
import { useEffect, useLayoutEffect } from "react";
import DisignPage1 from "../../components/DisignPageDir/DisignPage1/DisignPage1";





const DisignPage = () => {
    useLayoutEffect(()=>{
        document.title = "Дизайн";
    })
        
    return (
<>
<DisignPage1/>
</>
      );
}
 
export {DisignPage};