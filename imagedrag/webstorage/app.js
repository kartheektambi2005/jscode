let input = document.getElementById("text");
let btn = document.getElementById("btn");
let list = document.getElementById("name");

let storedText = JSON.parse(localStorage.getItem("textData")) || [];

function data() {
    let data = storedText.map(i=>{
        return `<li>${i}</li>`
    })
    list.innerHTML = data.join("");
}
btn.addEventListener("click",()=>{
    let storage = input.value.trim()

    if(storage){
        storedText.push(storage)
        localStorage.setItem('textData',JSON.stringify(storedText))

        input.value=''
    data()
    }    
})
data()


