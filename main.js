let
    inpFillA = document.querySelector(".InpFillA");
    inpFillB = document.querySelector(".InpFillB");
    btnText = document.querySelector(".BtnText");

    inpSumA = document.querySelector(".InpSumA");
    inpSumB = document.querySelector(".InpSumB");
    btnSum = document.querySelector(".BtnSum");

    inpJav = document.querySelector(".InpJav");
    btnJav = document.querySelector(".BtnJav");

    inpMail = document.querySelector(".InpMail");
    inpPass = document.querySelector(".InpPass");
    inpName = document.querySelector(".InpName");
    btnConf = document.querySelector(".BtnConf");

function checkText() {
    if(inpFillA.value != "" && inpFillB.value != ""){
        alert("Both inputs A & B are filled");
    }else{
        alert("One or both inputs A & B are empty");
    }
};
btnText.addEventListener("click", checkText);

function checkSum(){
    Number(inpSumA.value) + Number(inpSumB.value) > 10
      ? alert("Sum of inputs A & B is more than 10")
      : alert("Sum of inputs A & B is !not! more than 10");
};
btnSum.addEventListener("click", checkSum);

function checkJavaScript(){
    inpJav.value.includes("Javascript")
      ? alert("Input contain word 'Javascript'")
      : alert("Input do not contain word 'Javascript'")
};
btnJav.addEventListener("click", checkJavaScript);

function checkAcc(){
    if(inpMail.value.indexOf("@") == -1 || inpName.value.length < 6 || inpPass.value.length < 3){
        alert("There is a mistake in your inputs");
    }else{
        alert("Everything is correct");
    }
};
btnConf.addEventListener("click", checkAcc)