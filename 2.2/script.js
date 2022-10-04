const arr = ["Franz", "Jenny", "Karen", "Joseph", "Florenze", "JohanGottfriedLacleur", "Manfred"]
//console.log(arr)
const arr2 = arr.sort()
//console.log(arr2)
const arr3 = arr.map((a_string) => a_string.toUpperCase())
//console.log(arr3)
function to_cäsar(input) {
    const characters = input.split("");
    const newChar = characters.map((characters) => {
        return String.fromCharCode(characters.charCodeAt(0) + 13 % 26);
    });
    return newChar.join("")
} 
console.log(to_cäsar(arr[0]))

function thingdong(array) {
    
}