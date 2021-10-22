document.getElementsByClassName("icon")[0].addEventListener('click',()=>{
   document.querySelector(".nav-link").classList.toggle("show");
  
});


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