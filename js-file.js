let mainContainer=document.querySelector("#main-container");
let btns=document.querySelector("#button-container");
let calcSymbols=["AC", "+/-", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+","0", ".", "="];


let btnArray=[];
for (let i=0;i<19;i++){
    btnArray.push(document.createElement("button"));
    btns.appendChild(btnArray[i]);
    btnArray[i].textContent=calcSymbols[i];
    
    if (i==16){
        btnArray[i].style.width="49.5%"; 
    }
}

operatorIndex=[3,7,11,15,18];
clearIndex=[0,1,2];
digitIndex=[4,5,6,8,9,10,12,13,14,16,17];

for(let index of operatorIndex){
    btnArray[index].style.backgroundColor="#FF8F1F";
}
for(let index of digitIndex){
    btnArray[index].style.backgroundColor="rgb(33, 124, 126)";
}
for(let index of clearIndex){
    btnArray[index].style.backgroundColor="rgb(30, 144, 255)";;
}