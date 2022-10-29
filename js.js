const clicker = document.getElementById("clicker")
const clicker2 = document.getElementById("clicker2")
const img = document.getElementById("carousel")
const catImgs = document.getElementById("cat-imgs")
let counter = 0
console.log(counter)
clicker.addEventListener("click", () =>{
    catImgs.location.reload();

       counter++
        if(clicker.src === '/image/image(1).png') {
            clicker.style.display = 'none'
            clicker2.style.display = 'flex'
                 } else {
           clicker2.style.display = 'none'
            clicker.style.display = 'flex'
         }
})
console.log(clicker.src)


