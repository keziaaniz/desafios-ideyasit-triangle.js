function triangle(var1, var2, var3){
    var lado1 = var1;
    var lado2 = var2;
    var lado3 = var3;

    if(lado1 < (lado2+lado3) && lado2 < (lado1+lado3) && lado3 < (lado2+lado1)){
        
        if(lado1 == lado2 && lado2 == lado3) {
            return "equilatero";
        }else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
            return "isósceles";
        }else {return "escaleno";
            }
    }

}