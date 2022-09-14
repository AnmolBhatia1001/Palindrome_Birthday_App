// reverse str
function reverseStr(str){
    var listOfChrac = str.split("");
    var reverseChrac = listOfChrac.reverse();
    var reversedStr = reverseChrac.join("")
    return  reversedStr;
}

// is palindrome
function isPalindrome(str){
    if(str === reverseStr(str)){
        return true;
    }else{
        return false;
    }
}

// date to  str
function convertDateToStr(date){
    var strDate = {
        day: "",
        month: "",
        year: "",
    }

    if(date.day < 10){
        strDate.day = "0"+ date.day;
    }else{
        strDate.day =  (date.day).toString();
    }

    if(date.month < 10){
        strDate.month = "0"+ date.month;
    }else{
        strDate.month =  (date.month).toString();
    };

    strDate.year = (date.year).toString();



    return strDate;

}

// date in all formate
function dateInAllFormats(date){
    var ddmmyyyy = date.day + date.month + date.year ;
    var mmddyyyy = date.month + date.day + date.year ;
    var yyyymmdd = date.year + date.day + date.month ;
    var ddmmyy = date.day + date.month + date.year.slice(-2) ;
    var mmddyy = date.month + date.day + date.year.slice(-2) ;
    var yymmdd = date.year.slice(-2) + date.day + date.month ;

    return [ddmmyyyy, mmddyyyy, yyyymmdd, ddmmyy, mmddyy, yymmdd];
    
}

// palindrom for all date formate
function palindromeAllFormats(date){
    var listOfFormats = dateInAllFormats(convertDateToStr(date));
    var output = false;
    // listOfFormats[0];
    console.log(listOfFormats);

    for(let i = 0 ; i<listOfFormats.length; i++){
        if(isPalindrome(listOfFormats[i])){
            output = true;
            break;
        }
    }
    return `Palindrome : ${output}`;
}

var date = {
    day: 2,
    month: 2,
    year: 2020,
}


// var dateAsStr = convertDateToStr(date);
// console.log(dateInAllFormats(dateAsStr));

// console.log(palindromeAllFormats(date));

const dateInput = document.querySelector("#dateInput");
const checkBtn = document.querySelector("#checkBtn");
const opDiv = document.querySelector("#opDiv");

function clickHandler(){
    var inputDateList = dateInput.value.split("-");
    var date = {
        day: Number(inputDateList[2]),
        month: Number(inputDateList[1]),
        year: Number(inputDateList[0]),
    } 
    console.log(date);
    opDiv.innerText = palindromeAllFormats(date);


}


checkBtn.addEventListener("click" , clickHandler)



 
