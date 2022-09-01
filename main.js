const display=document.querySelector("#display");

const list =document.querySelectorAll(".btn-number");

const themToggler=document.querySelector(".them-toggler");

const calculator=document.querySelector(".calculator")


themToggler.addEventListener("click",them)

function them(){
    calculator.classList.toggle("dark");
    themToggler.classList.toggle("active")

}


const showDisplay=(e)=>{
    const X=e.target.innerText
    if(display.innerHTML==0){
        return display.innerHTML=X
    }
    return display.innerHTML+=X
}
list.forEach(item=>{
    item.addEventListener("click",showDisplay)
})


function calc(){
    let result=display.innerHTML;
    display.innerHTML=eval(result)
}

document.querySelector("#equal").addEventListener("click",calc)
document.getElementById("clear").addEventListener("click",clear);
document.getElementById("backdpase").addEventListener("click",clearOne)


function clear(){
    display.innerText=0
}

function clearOne(){
    let text=display.innerText;
    if(text.length===1){
        display.innerText=0
    } else{
        display.innerText=text.substring(0,text.length-1)
    }
}