const mainContainer=document.querySelector("#main-container");
const btnContainer=document.querySelector("#button-container");
const calcSymbols=["AC", "+/-", "%", "/", "7", "8", "9", "*", "4", "5", "6", "-", "1", "2", "3", "+","0", ".", "="];
const operatorIndex=[3,7,11,15,18];
const clearIndex=[0,1,2];
const digitIndex=[4,5,6,8,9,10,12,13,14,16,17];
const ORANGE="#FF8F1F";
const GREEN="rgb(33, 124, 126)";
const BLUE="rgb(30, 144, 255)";
let makeBtns={"operatorButtons":[operatorIndex, ORANGE], "clearButtons":[clearIndex, BLUE], "digitButtons":[digitIndex, GREEN]};


function Btns(index, symbols, color, btnArray){
    this.index=index;
    this.symbols=symbols;
    this.color=color;
    this.btnArray=btnArray;
    this.setProperty=function(){
        for (let ind of this.index){
            btnArray[ind].textContent=this.symbols[ind];
            btnArray[ind].style.backgroundColor=this.color;
        }

    };

}

let btnArray=[];
for (let i=0;i<19;i++){
    btnArray.push(document.createElement("button"));
    btnContainer.appendChild(btnArray[i]);
    // btnArray[i].textContent=calcSymbols[i];
    if (i==16){
        btnArray[i].style.width="49.25%"; 
    }
}


for (let items in makeBtns){
    const someBtns = new Btns(makeBtns[items][0], calcSymbols, makeBtns[items][1], btnArray);
    someBtns.setProperty();
    
}
