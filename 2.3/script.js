const life = {
    name: "Fernando",
    age: 17,
    job: "student"
}

console.log(Object.keys(life))

console.log(Object.values(life))
console.log(life)

const myJob = {job: life.job}

console.log(myJob)

new_myJob = {...myJob, ledig: "Ja"}
console.log(new_myJob)