let mainContainer=document.querySelector("#main-container");
let btns=document.querySelector("#buttons");
let calcSymbols=["AC", "+/-", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+","0", ".", "="];


let btnArray=[];
for (let i=0;i<19;i++){
    btnArray.push(document.createElement("button"));
    btns.appendChild(btnArray[i]);
    btnArray[i].style.width="24%";
    btnArray[i].style.height="19%";
    btnArray[i].style.borderRadius="5px";
    btnArray[i].style.borderWidth="0px";
    btnArray[i].style.padding="auto";
    btnArray[i].textContent=calcSymbols[i];
    if (i==16){
        btnArray[i].style.width="49%"; 
    }
    if((i+1)%4==0){
        btnArray[i].style.backgroundColor="#FF8F1F";
    }else if(i<3){
        btnArray[i].style.backgroundColor="rgb(30, 144, 255)";
    }else{
        btnArray[i].style.backgroundColor="rgb(33, 124, 126)";
    }
}
btnArray[18].style.backgroundColor="#FF8F1F";
