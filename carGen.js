const cars = ( brand) => {
    return {
        brand: {
        'Acura': {model:['MDX', 'NSX', 'TSX'],
                  color:['Apex Blue Pearl', 'Lunar Silver Metallic', 'Majestic Black Pearl', 'Performance Red Pearl', 'Platinum White Pearl']},
      'Bentley':{
        model: ['Continental GT', 'Flying Spur', 'Bentayga'],  
        color: ['Oxford Blue', 'Extreme Silver', 'Black Crystal', 'St. James Red', 'Ghost White'],}, 
    }
}
        
        
    }


    var acura = cars().brand['Acura']
    var bentley = cars().brand['Bentley']
    var acuraModels = cars().brand['Acura'].model
    var bentleyModels = cars().brand['Bentley'].model
    let brandCount= Object.keys(cars().brand).length
const randomizer = () => {
  let b = Math.floor(Math.random() * brandCount)
  let aM = Math.floor(Math.random() * acuraModels.length)
  let rCA = Math.floor(Math.random() * cars().brand['Acura'].color.length)
  let rCB = Math.floor(Math.random() * cars().brand['Bentley'].color.length)

console.log(b)
console.log(aM)
console.log(rCA)
console.log(rCB)

  if (Object.keys(cars().brand)[b] === 'Acura') {
        return cars().brand['Acura'], cars().brand['Acura'].model[aM], cars().brand['Acura'].color[rCA],
        console.log(Object.keys(cars().brand)[b] + ' ' + cars().brand['Acura'].model[aM] + ' ' +  cars().brand['Acura'].color[rCA])
      }  if (Object.keys(cars().brand)[b] === 'Bentley') {
    return cars().brand['Bentley'], cars().brand['Bentley'].model[aM], cars().brand['Bentley'].color[rCB],
    console.log(Object.keys(cars().brand)[b] + ' ' + cars().brand['Bentley'].model[aM]+ ' ' + cars().brand['Bentley'].color[rCB])
  }



   

}



  console.log(randomizer())   




