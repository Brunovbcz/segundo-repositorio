let stok = 100

let products = 100

function calculate(num1, num2){
   return num1 - num2
}

if (calculate(stok, products) < 0) {
    console.log("Não há stoque suficiente")
}
else{   
    console.log("Há estoque")
}