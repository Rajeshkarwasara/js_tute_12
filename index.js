const clickbtn = document.getElementById("clickk");

const name = document.getElementById("name");

let all = document.getElementById("all")

function alt() {
    const value = name.value;
    console.log(value)
    // alert(`hello ${value}`)


    // all.innerHTML = `<label for="disabledTextInput" class="form-label">email</label>
    // <input type="email" id="name" class="form-control" placeholder="Enter Your Name" value="email">`
}
clickbtn.addEventListener("click", alt)








// next
let btn2 = document.getElementById("btn2");
let pre = document.getElementById("pre")


// function alt2() {
//     pre.innerText = " hello rajesh"

// }
// btn2.addEventListener("click", alt2)


btn2.addEventListener("click", function () {
    pre.innerText = "hello rajesh "
})



// next
let colorchose = document.getElementById("colorname")
let btn4 = document.getElementById("btn3");
let mach = document.getElementById("colorepicar")

btn4.addEventListener("click", function () {
    colorepicar.style.backgroundColor=colorchose.value;
    alert(` ${colorchose.value}`)
})

colorchose.addEventListener("change", function () {
    colorepicar.style.backgroundColor=colorchose.value;
   
})







// next

let btn5=document.getElementById("btn5")
let list =document.getElementById("list")

btn5.addEventListener( "click",function(){
    if(list.style.display=="none"){
        list.style.display="block"
    }
    else{
        list.style.display="none"
    }
})

