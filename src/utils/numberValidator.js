// Проверяет все ли цифры номера заполнены и возвращает True или False

export default function numberValidator(number,isDev){
        console.warn("☢️ numberValidator")

    let cleanedPhoneNumber = number.replace(/_/g, '');
    if(cleanedPhoneNumber.length===16){return true}else{return false}
}