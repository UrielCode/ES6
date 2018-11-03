
# Hablemos de ES6
## ¿Qué aprenderás?
1. Las novedades de ES6.

## Introducción
ES6 es el nuevo estándar utilizado para escribir código en JavaScript de forma moderna, aún que aún no es compatible 100% con el browser, podemos hacer uso de el gracias a herramientas como Babel, que se encarga de transformar nuestro código de ES6 a ES5, el cuál, si es compatible con el browser. Al proceso de transformación de código, se le conoce como `transpilación`.

## Requerimientos
1. Crear una copia del proyecto (Fork).
2. Clonar el proyecto (El `fork` que crearon anteriormente).

## Objetivo
Conocer las nuevas características del estándar de JavaScript y resolver problemas comunes con el lenguaje.

## Actividades
### Ejercicio 1
Contruir un módulo en JavaScript para realizar las 4 operaciones aritmeticas (Suma, Resta, Multiplicación y División).

### Ejercicio 2
¿Cuál es el resultado del siguiente código?
```js
let a = 12;
function myFunction() {
  console.log(a);
  let b = 13;
  if(true) {
    let c = 14;
    console.log(b);
  }
  console.log(c);
}
myFunction();
```

## Entrega
- Una ves terminados los ejercicios, hay que subir cada uno de ellos.
```
git add .
git commit -m "done!"
git push -u origin master
```
- Genera un PR hacía el repositorio principal.
