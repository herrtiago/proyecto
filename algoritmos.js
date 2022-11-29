console.log("PUNTO 1")
let A = 2, B = 5, C = 1
let a = (3*A)-(4*B)/(A**2)
let b = (((B + C)/2*A + 10)*3*B)-6
console.log(`a = ${a}   b = ${b}`)


console.log("PUNTO 2")
capital = parseFloat(prompt("Ingrese el capital invertido"))
const razon = 0.012
console.log(`La ganancia despues de un mes es de ${capital*razon}`)


console.log("PUNTO 3")
let area,altura,base = 0
altura = parseFloat(prompt("Digite la altura del triangulo: "))
base = parseFloat(prompt("Digite la base  del triangulo"))
area = altura*base/2
console.log(`Area triangulo: ${area}`)


console.log("PUNTO 4")
const salarioBase = 980000, valorComision = 170000, porcentajeVentas = 0.05
cantiAutos = parseInt(prompt("Ingrese cantidad de autos "))
totalVentas = parseFloat(prompt("Ingrese monto total por ventas"))
let salario = salarioBase + (valorComision*cantiAutos)+(porcentajeVentas*totalVentas)
console.log(`El salario total es de ${salario}`)


console.log("PUNTO 5")
nota1 = parseFloat(prompt("Ingrese nota 1"))
nota2 = parseFloat(prompt("Ingrese nota 2"))
nota3 = parseFloat(prompt("Ingrese nota 3"))
nota4 = parseFloat(prompt("Ingrese nota 4"))
let promedio = ((nota1+nota2)/2*0.4)+((nota3+nota4)/2*0.6)
console.log(`El promedio final es de ${promedio}`)


console.log("PUNTO 6")
let edad = parseInt(prompt("Ingrese la edad"))
let pulsaciones = (220-edad)/10 
console.log(`La cantidad de pulsaciones por cada 10 segundos debe ser ${pulsaciones}`)


console.log("PUNTO 7")
let salario_base = parseFloat(prompt("Ingrese salario bases")), porcentaje_comision = 0.1
let valor_venta = parseFloat(prompt("Ingrese monto por venta"))
let canti_ventas = 3
let comision_total = valor_venta*canti_ventas*porcentaje_comision
let salario_final = salario_base + comision_total
console.log(`El total recibido por comisiones es de ${comision_total}`)
console.log(`El salario total es de ${salario_final}`)


console.log("PUNTO 8")


