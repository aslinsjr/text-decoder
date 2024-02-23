const input = document.querySelector("#input");
const codeBtn = document.querySelector("#code");
const decodeBtn = document.querySelector("#decode");
const printValue = document.querySelector("#code-text");
const emptyContainer = document.querySelector(".empty-container");
const screenContainer = document.querySelector(".screen-container");
const copyBtn = document.querySelector("#copy");


const copyContent = async () => {
    try {
    await navigator.clipboard.writeText(printValue.innerText);
    copyBtn.innerHTML = "Copiado ✅"
    setTimeout(() => {
        copyBtn.innerHTML = "Copiar"
    }, 1000);
    } catch (err) {
    console.error('Failed to copy: ', err);
    }
}

function showText(inputValue) {
    if(inputValue) {
        printValue.innerText = inputValue
        emptyContainer.classList.add("hide")
        screenContainer.classList.add("show")
    }
}

function codeText() {
    input.addEventListener("keyup", (e) => {
        let inputValue = e.target.value
        
        if(inputValue.includes("e")){
           inputValue =  inputValue.replace(/e/g, "enter")
        }

        if(inputValue.includes("i")){
            inputValue =  inputValue.replace(/i/g, "imes")
        }

        if(inputValue.includes("a")){
            inputValue =  inputValue.replace(/a/g, "ai")
        }

        if(inputValue.includes("o")){
            inputValue =  inputValue.replace(/o/g, "ober")
        }

        if(inputValue.includes("u")){
            inputValue =  inputValue.replace(/u/g, "ufat")
        }

        codeBtn.addEventListener("click", () => {

            showText(inputValue)
            input.value = ""
        })

        copyBtn.addEventListener("click", () => {

            copyContent()
        })
    })
}


function decodeText() {
    decodeBtn.addEventListener("click", () => {
        let inputValue = input.value

        if(inputValue.includes("enter")){
            inputValue =  inputValue.replace(/enter/g, "e")
        }
 
        if(inputValue.includes("imes")){
            inputValue =  inputValue.replace(/imes/g, "i")
        }
 
        if(inputValue.includes("ai")){
            inputValue =  inputValue.replace(/ai/g, "a")
        }
 
        if(inputValue.includes("ober")){
            inputValue =  inputValue.replace(/ober/g, "o")
        }
 
        if(inputValue.includes("ufat")){
            inputValue =  inputValue.replace(/ufat/g, "u")
        }

        showText(inputValue)
        input.value = ""

        copyBtn.addEventListener("click", () => {
           
            copyContent()
        })
    })
}


codeText()

decodeText()

