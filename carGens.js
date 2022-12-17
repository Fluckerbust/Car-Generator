const cars = ( brand) => {
    return {
        brand: {
        'Toyota': {model:['Supra GR', 'Corolla GR', 'Camry'],
                  color:['Smoke Gray', 'Stratosphere Blue', 'Midnight Black Metallic', 'Supersonic Red']},
      'Koenigsegg':{
        model: ['Jesko', 'Gemera', 'CC850'],  
        color: ['Carbon Fiber/Kevlar', 'Burnt Orange Metallic', 'Black Crystal', 'Oxford White'],}, 
    }
}
        
        
    }


    var toyota = cars().brand['Toyota']
    var koenigsegg = cars().brand['Koenigsegg']
    var toyotaModels = cars().brand['Toyota'].model
    var koenigseggModels = cars().brand['Koenigsegg'].model
    let brandCount= Object.keys(cars().brand).length
const randomizer = () => {
  let b = Math.floor(Math.random() * brandCount)
  let aM = Math.floor(Math.random() * toyotaModels.length)
  let bM = Math.floor(Math.random() * koenigseggModels.length)
  let rCA = Math.floor(Math.random() * cars().brand['Toyota'].color.length)
  let rCB = Math.floor(Math.random() * cars().brand['Koenigsegg'].color.length)

console.log(b)
console.log(aM)
console.log(rCA)
console.log(rCB)

  if (Object.keys(cars().brand)[b] === 'Toyota') {
        return cars().brand['Toyota'], cars().brand['Toyota'].model[aM], cars().brand['Toyota'].color[rCA],
        console.log(Object.keys(cars().brand)[b] + ' ' + cars().brand['Toyota'].model[aM] + ' ' +  cars().brand['Toyota'].color[rCA])
      }  if (Object.keys(cars().brand)[b] === 'Koenigsegg') {
    return cars().brand['Koenigsegg'], cars().brand['Koenigsegg'].model[bM], cars().brand['Koenigsegg'].color[rCB],
    console.log(Object.keys(cars().brand)[b] + ' ' + cars().brand['Koenigsegg'].model[bM]+ ' ' + cars().brand['Koenigsegg'].color[rCB])
  }
}



  console.log(randomizer())   



