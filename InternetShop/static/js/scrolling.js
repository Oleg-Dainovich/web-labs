const gb = document.querySelector('#bg');
const leftCat = document.querySelector('#leftCat');
const rightCat = document.querySelector('#rightCat');
const centerCat = document.querySelector('#centerCat');
const text = document.querySelector('#text');

leftCat.style.left = "-500px";
rightCat.style.right = "-500px";
text.style.top = "300px";
centerCat.style.top = "900px"

window.addEventListener('scroll',()=>{
    let value = scrollY;
    leftCat.style.left = `${(-500 - value/2) < 0 ? (-500 - value/2): 0}px`;
    rightCat.style.right = `${(500 + value/2) > 0 ? (-500 - value/2): 0}px`;
    text.style.top = `${300 + value*1.1}px`;
    centerCat.style.top = `${(900 - value) > 0 ? (900 - value) : 0}px`;
})
