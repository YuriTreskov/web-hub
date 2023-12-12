import {  MyContextProvider } from './MyContextProvider';
import { CalcPage } from './CalcPage';


const CalcPageHub = () => {

    return ( 
<>
<MyContextProvider>
<CalcPage/>
</MyContextProvider>
</>
     );
}
 
export {CalcPageHub};
