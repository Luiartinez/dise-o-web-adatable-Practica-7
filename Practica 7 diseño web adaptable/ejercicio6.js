var factura = {
    numero: 201,
    cliente: "libreria milagrosa",
    divisa:"dolares ",
    total: 600,
    iva: 78
}


var numerofactura = factura.numero;
var monedafactura = factura.divisa;
var totalfactura = factura.total;
console.log(`la factura ` + numerofactura+ `es de ` +totalfactura+``+monedafactura);
