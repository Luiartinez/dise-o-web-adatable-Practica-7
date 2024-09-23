var factura = {
    numero:650,
    cliente: "transportes hernandez",
    vencimientos: {
        1: new Date(2023,10,20),
        2: new Date(2023,9,30),
        3: new Date(2023,12,1)
    }

}

var numerofactura = factura.numero;
var primervencimiento = factura.vencimientos[3].importe;
console.log("El segundo vencimiento de la factura "+numerofactura `sera el`+primervencimiento.getDate());