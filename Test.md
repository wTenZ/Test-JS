# Test de JavaScript

¡Es hora de poner a prueba cuánto sabes sobre JavaScript!

Esta lectura es una prueba de JavaScript. A diferencia de un examen, nadie te obligará a nada. **Puedes hacer trampa y saltar a la siguiente clase**, ese es el camino fácil. Pero tengo mucha fe en ti, confío en que seguirás mis consejos y no avanzarás a la siguiente clase hasta superar esta prueba.

## Instrucciones para tomar esta prueba

- Evalúa muy críticamente tu conocimiento.
- Si logras resolver la prueba, no importa cuánto te cueste, puedo asegurarte que tienes todo para continuar a las siguientes clases y tomar el resto del curso.
- Si no lo logras, no te preocupes, absolutamente nadie puede juzgarte, solo tú. Vuelve al [Curso Básico de JavaScript](https://platzi.com/cursos/basico-javascript/), anota los temas clave donde puedes mejorar, ubica las clases donde puedes aprenderlos y estudia vigorosamente.
- Es completamente válido hacer búsquedas en Google, cursos y tutoriales de Platzi, incluso usar tu cuaderno de notas sin importar si es físico o virtual.

Recuerda que **el éxito no se mide por cuánto tiempo te toma aprender**, esa métrica es relativamente inútil. Mejor concéntrate en completar los cursos de tu ruta de aprendizaje profesional y desarrollar los proyectos que realmente demuestran que dominas cada tecnología.

¡Mucha suerte!


## Variables y operaciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una variable y para qué sirve?
es un espacio en memoria donde guardamos información


- ¿Cuál es la diferencia entre declarar e inicializar una variable?
declarar es cuando apenas creamos la variable sin asignarle un valor, inicializar una variable es cuando la variable adquiere un valor

- ¿Cuál es la diferencia entre sumar números y concatenar strings?
la diferencia es que cuando se suman numeros ambas variables de tipo number se suman como tal, cuando se concatenan es usa la misma "+" pero se juntan las variables de tipo string

- ¿Cuál operador me permite sumar o concatenar?
El operador es +


### 2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
todo se almacena en un object
- Nombre: string
- Apellido: string
- Nombre de usuario en Platzi: string
- Edad: number
- Correo electrónico: string
- Mayor de edad: boolean
- Dinero ahorrado: number
- Deudas: number

### 3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

const usuario = {
    nombre: "Ehud",
    apellido: "Aguirre Bernachea",
    username: "aceu",
    edad: 19,
    email: "ehud@gmail.com",
    isMayorDeEdad: true,
    dineroAhorrado: 1940292140214214214,
    deudas: 10
}

### 4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:

- Nombre completo (nombre y apellido)

```
nombreCompleto = usuario.nombre + " " +usuario.apellido;
dineroReal = usuario.dineroAhorrado - usuario.deudas;
```

- Dinero real (dinero ahorrado menos deudas)


## Funciones

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es una función?
encapsular bloques de codigo para ser reutilizables en un futuro
```
function nombreCo(nom, ape) {
    return nom + ' ' + ape
}
undefined
nombreCo("afasdfa", "ddddddddd")
'afasdfa ddddddddd'
nombreCo(usuario.nombre, usuario.apellido)
'Ehud Aguirre Bernachea'
```  

- ¿Cuándo me sirve usar una función en mi código?
cuando se quiere reutilizar una variable o bloque de codigo que podemos reutilizar más de una vez en un futuro

- ¿Cuál es la diferencia entre parámetros y argumentos de una función?

las funciones reciben parametros cuando se crean, y les enviamos argumentos cuando se están ejecutando


### 2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

```
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
```

RE:

```
function saludo(name, lastName, IGN){
    const nombreco = name + " " + lastname;
    
    console.log("Mi nombre es " + nombreco + ", pero prefiero que me digas " + IGN + ".");
}
```


## Condicionales

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un condicional?
una manera de evaluar una validacion antes de ejecutar un bloque de codigo u otro


- ¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
for, while, if, switch

if: solo evaluar si algo es verdadero o falso
while: ejecuta una funcion indefinidamente
for: ejecuta una funcion hasta que haya un caso contrario
switch: de acuerdo al caso ejecutará uno u otro bloque de codigo


- ¿Puedo combinar funciones y condicionales?
si


### 2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:

```
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}
```

```
RE:

if (tipoDeSuscripción == "Free"){
    console.log('solo puedes tomar los cursos gratis');
}else if(tipoDeSuscripción == "Basic"){
    console.log('puedes tomar casi todos por un mes');
}else if(tipoDeSuscripción == "Expert"){
    console.log('puedes tomar todos los cursos por un año')   ;
}else if(tipoDeSuscripción == "Expert Duo"){
    console.log('tu y alguien más pueden tomar todos los cursos por un año');
}
```

### 3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).

> 💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays y un solo condicional. 😏

```
let tipoSub = {
    Free: 1, 
    Basic: 2,
    Expert: 3,
    Duo:4 
}

function verSub(sus) {
    if(tipoSub[sus]){
        console.log(tipoSub[sus]);
        return;
    }
    console.warn('este tipo de sub no existe');
}

verSub("Duo")
```


## Ciclos

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un ciclo?
validar una condicional ejecutando un bloque de codigo

- ¿Qué tipos de ciclos existen en JavaScript?
while, do while, for

- ¿Qué es un ciclo infinito y por qué es un problema?
un ciclo que nunca tendrá una validación contraria por lo tanto se ejecutará infinitamente, por la memoria

- ¿Puedo mezclar ciclos y condicionales?


### 2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

```
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```

```
RE:

let i = 0;
while (i < 5) {
    console.log("El valor de i es: " + i);
     i++;
}

let i = 10;
for (i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}
```

### 3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.

> 💡 Pista: puedes usar la función prompt de JavaScript.
```
while (i != 4){
    alert('ingrese 2+2')
    i = prompt()
}
alert('correcto')
```

## Listas

### 1️⃣ Responde las siguientes preguntas en la sección de comentarios:

- ¿Qué es un array?
un conjunto de datos almacenados en una variable

- ¿Qué es un objeto?
lista de elementos pero con nombre clave (key value)




- ¿Cuándo es mejor usar objetos o arrays?
arrays cuando lo que haremos es lo mismo vale para todo lo demas, mientras que con objetos cuando necesitamos los nombres de cada elemento para nuestro algoritmo



- ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
si, los arrays pueden guardar objetos y visceversa

### 2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

### 3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

```
arr = [1,2,4,5,6,67,7,8,32]

printFirstElement
ƒ printFirstElement(arr){
    for(let i=0; i < arr.length ;i++){
        console.log(arr[i]);
    }
}
printFirstElement(arr)
```

### 4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

```
const obj = {
    nombre: 'asfas'
    edad: '123'
    comidas: [14,17,18,22,25,28,30]
}

function printFirstElementObj(obj){
    ar = Object.values(obj);
    for(let i=0; i < ar.length ;i++)
    console.log(ar[i]);
}

printFirstElementObj(obj)
```

## ¿Cómo te fue? 🏆

**¡Felicidades por completar la prueba de JavaScript!** Confío en que hayas completado cada paso y hayas pausado para repasar los temas de los ejercicios que se te complicaron.

Ahora sí, continúa a la siguiente clase, pero recuerda que **ya no puedes abandonar el curso**, debes completarlo hasta el final. No importa cuánto tiempo te tome. **Yo sé que tú puedes. Y tú deberías de saberlo también.**

¡Te espero en la siguiente clase para comenzar!