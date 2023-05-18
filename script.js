let plus = document.querySelectorAll("img");
let my = document.querySelectorAll("[class^='my']");

let detail = document.createElement("div");
detail.classList.add("detail");
detail.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas reprehenderit dolor porro sunt aspernatur minus voluptatem nemo tempora facilis minima.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas reprehenderit dolor porro sunt aspernatur minus voluptatem nemo tempora facilis minima.
<ul>
<li>Lorem ipsum dolor sit amet.</li>
<li>Lorem ipsum dolor sit amet.</li></ul>`




my.forEach((event) => {
    
    event.addEventListener("click", (e) => {
        if(event.id=="my"){
            event.id="dl";
            showDetail(event);
          event.classList.add("hrAni")}
        else{
            event.id="my";
            event.classList.remove("hrAni")
            detail.style.display = "none";
        }
    })
   

})
plus.forEach((event) => {
    event.addEventListener("click", (e) => {
        if (event.id == "my") {
            event.id = "dl";
            showDetail(event)
        event.parentElement.parentElement.classList.add("hrAni");
            
        }
        else {
            event.id = "my";
            detail.style.display = "none";
            event.parentElement.parentElement.classList.remove("hrAni");
            event.src = "plus.png";

        }
    })
})

/////
function showDetail(event) {
    event.insertAdjacentElement("afterend", detail)
    detail.style.display = "block";
    event.src = "cross.png";
    
}
