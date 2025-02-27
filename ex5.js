let fuelPrice = 5.50,
distance = 800
consumption = 10

function calculateFuel(price, dist, cons){
   return (dist / consumption) * price
}

console.log(calculateFuel(fuelPrice, distance, consumption))