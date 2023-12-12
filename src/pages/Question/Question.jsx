import { useLayoutEffect } from "react";
import QuestionPage1 from "../../components/QuestionPageDir/QuestionPage1/QuestionPage1";


const Question = () => {
    useLayoutEffect(()=>{
        document.title = "Вопросы";
    })
    return (
<>
<QuestionPage1/>
</>
    );
}
 
export{Question};