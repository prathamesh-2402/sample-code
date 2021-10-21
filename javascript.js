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

function generate(){
    
    const hex = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
    let i = 0;
    function hexGenerate(a) {
        while(i<6) {
          a += hex[Math.round( Math.random() * 15 )];
          i++;
        }
        i = 0;
        return a;
    }

    // let newColor1 = hexGenerate('#');
    // let newColor2 = hexGenerate('#');
    let angle = Math.round( Math.random() * 360 );

    let gradient = `linear-gradient(${angle}deg, ${hexGenerate('#')}, ${hexGenerate('#')});`

    document.querySelector('body').style = `background: ${gradient}`;
    document.querySelector('.output').textContent = `background: ${gradient}`;
    
}