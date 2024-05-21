

let count = 0
let saved = 0

document.getElementById("num").innerText = count
document.getElementById("dec-btn").innerText = "No More people"
let savedViews = document.getElementById("save-view")

savedViews.innerText = "Last saved view : "

function increment()
{
    count = count + 1
    document.getElementById("num").innerText = count
    if (count > 0){
        document.getElementById("dec-btn").innerText = "decrement"
    }
}

function decrement()
{
    count = count - 1
    if (count <= 0){
        count = 0
        document.getElementById("dec-btn").innerText = "No More people"
    }     
    else{
        document.getElementById("dec-btn").innerText = "decrement"
    }
        
    
    document.getElementById("num").innerText = count
}

function save(){
    saved = count
    savedViews.innerText = savedViews.innerText + saved + ", "
}
