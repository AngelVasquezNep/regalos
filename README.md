# Opti

Opti es un optimizador de medidas de papel de regalo que fue creado como proyecto del curso [Fundamentos de JS](www.platzi.com/js).

## Descripción

Este es un optimizador sencillo y practico que nos permitirá introducir las medidas de nuestro papel para regalos y nos devolverá las medidas exactas para que construyamos la caja con el mayor volumen disponible, tal como se muestra en la imagen siguiente:

##Medidas

!Ejemplo(./3.jpg)

## Instalación

```
npm install opti
```

##Uso
La función opti nos retornara un objeto con la información que necesitamos para completar nuestra misión.

```
import opti from "opti"

let bicicleta = opti(10,5)
console.log(bicicleta)
console.log(bicicleta.instrucciones)
console.log(bicicleta.volumenMaximo)
console.log(bicicleta.x)
console.log(bicicleta.c)

```

 ## Créditos

 - [Angel Vásquez](https://twitter.com/angelmathy)

 ## Licencia
 - [MIT](https://opensource.org/licenses/MIT)
