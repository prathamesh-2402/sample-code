document.getElementsByClassName("icon")[0].addEventListener('click',()=>{
    const nav=document.getElementsByClassName("show")[0];
    //  nav.style="display:none";

    if(nav.className=="unshow"){
        document.getElementsByClassName("unshow").classList.add('show');
        console.log(nav)
     }

     if(nav.className=="show"){
        document.getElementsByClassName("show").classList.add('unshow');
         console.log(nav);
     } 
     

    
    //  nav1.style="display:none";

    // if(nav.style=="display:none"){
    //     nav.style="display:flex"
    // }

    // if(nav1.style=="display:none"){
    //     nav.style="display:flex"
    // }
    // if(nav.style=="display:flex"){
    //     nav.style="display:none"
    // }

    // if(nav1.style=="display:flex"){
    //     nav.style="display:none"
    // }
    
    console.log(unshow)
 
})
