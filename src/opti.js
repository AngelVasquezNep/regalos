export default function volMax(b,h){
  const x1 = ((2*b + 2*h - Math.sqrt( (4*(b + h)*(b + h)) - 12*b*h ))/12).toFixed(2)
  const c = ((b-2*x1)/2).toFixed(2)
  const v = (((b*h*x1)/2) - (b + h)*(Math.pow(x1,2)) + 2*Math.pow(x1,3)).toFixed(2)
  let medidas = {}
  return medidas = {
    volumenMaximo: `El volumen máximo para este pliego de papel es de: ${v}u cubicas`,
    instrucciones: `Las medidas para recortar sobre nuestro pliego de base ${b} y altura ${h} (revisar README) son: C: ${c}u, X: ${x1}u`,
    x: x1,
    c: c
  }
}
