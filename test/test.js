const expect = require("chai").expect
let opti = require("..").default

describe("#Opti", function(){

  it("Para obtener el objeto",function(){
    let bicicleta = opti(10, 5)
    expect(bicicleta).to.equal(bicicleta)
  })

  it("Para poder ver las instrucciones",function(){
    let bicicleta = opti(10, 5)
    expect(bicicleta.instrucciones).to.equal("Las medidas para recortar sobre nuestro pliego de base 10 y altura 5 (revisar README) son: C: 3.94u, X: 1.06u")
  })

  it("Para conocer el volumen máximo de su regalo",function(){
    let bicicleta = opti(10, 5)
    expect(bicicleta.volumenMaximo).to.equal("El volumen máximo para este pliego de papel es de: 12.03u cubicas")
  })

  it("Para conocer el valor de x",function(){
    let bicicleta = opti(10, 5)
    expect(bicicleta.x).to.equal("1.06")
  })

  it("Para conocer el valor de c",function(){
    let bicicleta = opti(10, 5)
    expect(bicicleta.c).to.equal("3.94")
  })

})
