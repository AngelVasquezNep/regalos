# Opti

Opti es un optimizador de medidas de papel de regalo que fue creado como proyecto del curso [Fundamentos de JS](www.platzi.com/js).

## Descripción

Este es un optimizador sencillo y practico que nos permitirá introducir las medidas de nuestro papel para regalos y nos devolverá las dimensione exactas para que construyamos la caja con el mayor volumen disponible, tal como se muestra en la imagen siguiente:

## Medidas

Las partes coloreadas en azul son las que se descartaran de tu papel de regalo.

![Ejemplo](https://github.com/AngelVasquezNep/regalos/blob/master/3.jpg?raw=true)

## Instalación

```
npm install angelvasquez_opti
```

## Uso
La función opti nos retornará un objeto con la información que necesitamos para completar nuestra regalo perfecto. Sólo tenemos que introducir las medidas de la base y altura de nuestro papel de regalos, tal como se muestra a continuación:

```
import opti from "angelvasquez_opti"

let bicicleta = opti(base, altura)
let bicicleta = opti(10,5)
console.log(bicicleta) // Objeto
console.log(bicicleta.instrucciones) // Instrucciones
console.log(bicicleta.volumenMaximo) // "El volumen máximo para este pliego de papel es de: 12.03u cubicas"
console.log(bicicleta.x) // 1.06
console.log(bicicleta.c) // 3.94

```

## Créditos

 - [Angel Vásquez](https://twitter.com/AngelVasquezNep)

## Licencia

 - [MIT](https://opensource.org/licenses/MIT)
