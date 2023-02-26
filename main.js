const h1 = document.querySelector('h1');
const input1 = document.querySelector('#n1');
const input2 = document.querySelector('#n2');
const OP = document.querySelector('#OP');
const res = document.querySelector('#resultado')

function btnOP(){
    x = Number(input1.value);
    y = Number(input2.value);

    w = x + y;
    res.innerHTML = `${x} + ${y} = ${w}`;

}