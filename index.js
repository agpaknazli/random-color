let renks= document.querySelectorAll(".color")
// let random='#' + Math.floor(Math.random()*16777215).toString(16);
let button= document.getElementById('btn-new')


button.onclick=(e)=>{

    renks.forEach(renk=>{
        renk.style.backgroundColor=randomColor({ luminosity: 'light'});
        // renks.style.backgroundColor=random
        // random='#' + Math.floor(Math.random()*16777215).toString(16)
    }



    )

    }
