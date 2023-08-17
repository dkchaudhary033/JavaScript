

let button = document.querySelector('button');
let box = document.getElementById('changeMe');

button.onclick = function changeColor(){
    if(box.style.background == 'green'){
        box.style.background = '#ff00ff',
        box.style.borderRadius = '20px';
        box.innerHTML = 'Hi Deepak';
        console.log('Clicked');
    }
    else 
    {
        box.style.background = 'green';
    }
    
}

let btn1 = document.getElementsByClassName('btn1')

btn1.onclick = function btnColor(){
    btn1.style.backgroundcolor = 'red'
}
