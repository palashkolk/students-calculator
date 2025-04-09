let mainContainer=document.querySelector("#main-container");
let blueBtns=document.querySelector("#blue-buttons");
let greenBtns=document.querySelector("#green-buttons");
let orangeBtns=document.querySelector("#orange-buttons");
let operatorSymbols=["AC", "+/-", "%", "/", "*", "-", "+", "=", "."];


let blueBtnArray=[];
for (let i=0;i<3;i++){
    blueBtnArray.push(document.createElement("button"));
    blueBtns.appendChild(blueBtnArray[i]);
    blueBtnArray[i].style.width="33%";
    blueBtnArray[i].style.height="95%";
    blueBtnArray[i].style.backgroundColor="rgb(30, 144, 255)";
    blueBtnArray[i].style.borderRadius="5px";
    blueBtnArray[i].style.padding="auto";
    blueBtnArray[i].textContent=operatorSymbols[i];
}

let orangeBtnArray=[];
for (let i=0;i<5;i++){
    orangeBtnArray.push(document.createElement("button"));
    orangeBtns.appendChild(orangeBtnArray[i]);
    orangeBtnArray[i].style.width="95%";
    orangeBtnArray[i].style.height="20%";
    orangeBtnArray[i].style.backgroundColor="rgb(30, 144, 255)";
    orangeBtnArray[i].style.borderRadius="5px";
    orangeBtnArray[i].style.padding="auto";
    orangeBtnArray[i].textContent=operatorSymbols[i];
}



// for (let i=0; i<19; i++){
//     btnArray.push(document.createElement("button"));
//     btnArray[i].style.width="25%";
//     btnArray[i].style.Height="16%";
// }
// btnArray[16].style.flexGrow="2";

// btnArray[0].textContent="AC";


// for (let btns of btnArray){
//     mainContainer.appendChild(btns);
// }