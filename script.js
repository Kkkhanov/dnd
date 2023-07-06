let block = document.getElementById('block');
let area = document.getElementById('area');
let area2 = document.getElementById('area-2');
let fordrop = document.getElementsByClassName('fordrop');
let bloks = document.getElementsByClassName('block');
let apple = document.getElementsByClassName('apple');
let grusha = document.getElementsByClassName('grusha');


for (i of bloks){
    i.ondragstart = start;
}

for (i of fordrop){
    i.ondragenter = f1;
    i.ondragleave = f2;
    i.ondragover = f3;
    i.ondrop = f4;
}

let kvadrat

function start(){
    let id = this.id
    console.log(id)
    kvadrat = document.getElementById(id)
}


function f1(){
    console.log('enter')
}

function f2(){
    console.log('leave')
}
function f3(event){
    console.log('over')
    event.preventDefault()
}
function f4(){
    console.log('drop')
    this.appendChild(kvadrat)
    if(area2.contains(grusha[0] , grusha[1]) && area.contains(apple[0] , apple[1] , apple[2])){
            alert('Молодец!')
    }
}