import { useLayoutEffect } from "react";
import MobilePage1 from "../../components/MobilePageDir/MobilePage1/MobilePage1";


const MobilePage = () => {
    useLayoutEffect(()=>{
        document.title = "Моюильные приложения";
    })
    return (
<>
<MobilePage1/>
</>
    );
}
 
export {MobilePage};