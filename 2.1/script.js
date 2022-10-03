const cars = ["Tesla", "BMW", "Automarke", "Bugatti"]
console.log(cars)
const new_cars = [...cars, "Fiat"]
console.log(new_cars)

const numbers = [2, 4, 6, 8, 23, 3]
const numbersPower2 = numbers.map((number) => Math.pow(number, 2))
console.log(numbersPower2)

const oddNumbers = numbers.filter(number => number % 2)
console.log(oddNumbers)