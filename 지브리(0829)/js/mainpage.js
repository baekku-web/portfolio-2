document.addEventListener("DOMContentLoaded" , () => {

    const slide = Array.from(document.getElementsByClassName('slide'));

    let i = 9;
    
    const fade = () => {
        if( i==0 ){
            slide.forEach( j => j.style.opacity = 1 );
            i = 9;
        }
        else {
            slide[i].style.opacity = 0 ;
            i--;
        }
    }

    setInterval( fade , 2500 );

});