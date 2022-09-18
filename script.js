let calcScrollValue=()=>{
    let scrollprogress=document.querySelector(".scroll");
    let position=document.documentElement.scrollTop;
    let calcHeight=document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollvalue=Math.round((position * 100)/calcHeight);
    
    if(position > 100){
        scrollprogress.style.display='grid';
    }
    else{
        scrollprogress.style.display='none'
    }
    scrollprogress.addEventListener('click',()=>{
        document.documentElement.scrollTop=0;
    });
        scrollprogress.style.background =`conic-gradient(#03cc65 ${scrollvalue}% ,#d7d7d7 ${scrollvalue}%)`;
}

window.onscroll= calcScrollValue;
window.onload= calcScrollValue;