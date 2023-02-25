const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p');
const pclass = document.getElementsByClassName('.pclass');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(h1)
console.log(input.value)
console.log({
    h1,
    p,
    pclass,
    pid,
    input
});

h1.innerHTML = 'wwwww <br> Devil Bluess';
h1.innerText = 'wwwww <br> Devil Bluess';
//console.log(h1.getAttribute('class'))
//h1.setAttribute('class', 'newValue')
h1.classList.add('newValue');
h1.classList.remove('showmaker');
//h1.classList.toggle('showmaker')
input.value = '1234';
const img = document.createElement('img');
img.setAttribute('src', 'http://www.deculture.es/wp-content/uploads/2014/11/i-am-a-hero.jpg');
pid.innerText = ""
pid.appendChild(img);