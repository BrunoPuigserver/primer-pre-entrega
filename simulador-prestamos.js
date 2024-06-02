function calculadorIntereses(prestamo, cuotas){

        if(cuotas == 3){
        let interes = prestamo * 0.20;
        return interes
    }
    else if( cuotas == 6){
        let interes = prestamo * 0.40;
        return interes
    }
    else if( cuotas == 9){
        let interes = prestamo * 0.60;
        return interes
    }
    else if( cuotas == 12){
        let interes = prestamo * 0.85;
        return interes
    }

}


function infoPrestamo( prestamo , cuotas , total){

    console.log("Solicitaste a PrestaYa: ", prestamo);
    console.log("Cantidad de cuotas a pagar: ", cuotas);
    console.log("Total a pagar con intereses: ", total);
    console.log("En cada cuota usted debera abonar: ", total/cuotas);

}
console.log("Bienvenido/a a PrestaYa");
let prestamo = prompt("Ingrese el monto deseado para su prestamo")

prestamo = parseInt(prestamo);

let cuotas = prompt("Ingrese en cuantas cuotas desea pagar su prestamo: 3, 6, 9 o 12")

let total = prestamo + calculadorIntereses(prestamo , cuotas)

infoPrestamo(prestamo,cuotas,total);

