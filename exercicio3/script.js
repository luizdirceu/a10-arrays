const arrayNumber = [5, 2, 8]
const arrayString = ["atletico", "palmeiras", "flamengo"]
const arrayVarios = [1, 9, 3,"brasil", "argentina", false]

const arrayNumbercopia = arrayNumber.slice()
const arrayStringcopia = arrayString.slice()
const arrayVarioscopia = arrayVarios.slice()

arrayNumbercopia.push(7)
console.log (arrayNumbercopia, arrayNumber)
// console.log (arrayNumber)

arrayStringcopia.splice(2)
console.log(arrayStringcopia)
console.log (arrayString)

arrayVarioscopia.splice(1, 1)
console.log (arrayVarioscopia)
console.log (arrayVarios)