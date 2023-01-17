function sliden(){
    document.getElementById('backstage').id = 'slidebackstage';
}

function on(){
    if(document.getElementById('off')){
        document.getElementById('off').id = 'light_on';
        document.getElementById('fairy').style.display = 'block';
        document.getElementById('foc').style.display = 'block';
    }

    else{
        document.getElementById('light_on').id = 'off';
        document.getElementById('fairy').style.display = 'none';
        document.getElementById('foc').style.display = 'none';
    }
}