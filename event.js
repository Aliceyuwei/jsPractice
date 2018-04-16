var body = document.body;
body.addEventListener('keydown',goRocket,false)
function goRocket(e){
    console.log(e.keyCode);
    switch(e.keyCode){
        case 37:
            document.querySelector('.rocket-1').style.bottom = '2000px'
            break;
        case 38:
            document.querySelector('.rocket-2').style.bottom = '2000px'
            break;
        case 39: 
            document.querySelector('.rocket-3').style.bottom = '2000px'
            break;
    }
}


