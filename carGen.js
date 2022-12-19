const cars = ( brand) => {
    return {
        brand: {
        'Acura': {model:['MDX', 'NSX', 'TSX'],
                  color:['Apex Blue Pearl', 'Lunar Silver Metallic', 'Majestic Black Pearl', 'Performance Red Pearl', 'Platinum White Pearl'],
                  hexColor:['#00039C', '#aaa9ad', '#000000', '#D53942', '#ffffff'],
                  },
      'Bentley':{
                  model: ['Continental GT', 'Flying Spur', 'Bentayga'],  
                  color: ['Azure', 'Extreme Silver', 'Black Crystal', 'St. James Red', 'Ghost White'],
                  hexColor: ['#00039C', '#A8A9AD', '#000000', '#D53942', '#ffffff'],
                  }, 
        'Toyota': {
                  model:['Supra GR', 'Corolla GR', 'Camry'],
                  color:['Smoke Gray', 'Stratosphere Blue', 'Midnight Black Metallic', 'Supersonic Red', "Toyota White"],
                  hexColor:['#535753', '#00039C', '#000000', '#ff0000', '#ffffff'],
                  },
                  
                  
      'Koenigsegg':{
                  model: ['Jesko', 'Gemera', 'CC850'],  
                  color: ['Carbon Fiber', 'Midnight Purple', 'Burnt Orange Metallic', 'Black Crystal', 'Oxford White'],
                  hexColor:['#2e2e2e', '#442777', '#EF6234', '#000000', '#f1f3f1'],
                  },
    }
}
        
        
    }


    var acura = cars().brand['Acura']
    var bentley = cars().brand['Bentley']
    var toyota = cars().brand['Toyota']
    var koenigsegg = cars().brand['Koenigsegg']

    var acuraModels = cars().brand['Acura'].model
    var bentleyModels = cars().brand['Bentley'].model
    var toyotaModels = cars().brand['Toyota'].model
    var koenigseggModels = cars().brand['Koenigsegg'].model

    let brandCount= Object.keys(cars().brand).length
    
   
    


const randomizer = () => {
  let b = Math.floor(Math.random() * brandCount)

  let aM = Math.floor(Math.random() * acuraModels.length)
  let bM = Math.floor(Math.random() * bentleyModels.length)
  let kM = Math.floor(Math.random() * koenigseggModels.length)
  let tM = Math.floor(Math.random() * toyotaModels.length)

  let rCA = Math.floor(Math.random() * cars().brand['Acura'].color.length)
  let rCB = Math.floor(Math.random() * cars().brand['Bentley'].color.length) 
  let rCT = Math.floor(Math.random() * cars().brand['Toyota'].color.length)
  let rCK = Math.floor(Math.random() * cars().brand['Koenigsegg'].color.length)

//console.log(b)
//console.log(aM)
//console.log(rCA)
//console.log(rCB)

    if (Object.keys(cars().brand)[b] === 'Acura') {
        return cars().brand['Acura'], 
          cars().brand['Acura'].model[aM], 
          cars().brand['Acura'].color[rCA], 
          document.getElementById("brandCell").innerHTML = "Acura",
          document.getElementById("modelCell").innerHTML = cars().brand['Acura'].model[aM],
          document.getElementById("colorCell").innerHTML = cars().brand['Acura'].color[rCA],
          document.getElementById("title").style.backgroundColor = cars().brand['Acura'].hexColor[rCA],
          document.getElementById("container").style.color = cars().brand['Acura'].hexColor[rCA],
        console.log('Brand: ' + Object.keys(cars().brand)[b] + ' Model: ' + cars().brand['Acura'].model[aM] + ' color: ' +  cars().brand['Acura'].color[rCA])
      }  
    if (Object.keys(cars().brand)[b] === 'Bentley') {
        return cars().brand['Bentley'], 
          cars().brand['Bentley'].model[bM], 
          cars().brand['Bentley'].color[rCB], 
          document.getElementById("brandCell").innerHTML = "Bentley",
          document.getElementById("modelCell").innerHTML =  cars().brand['Bentley'].model[bM],
          document.getElementById("colorCell").innerHTML =  cars().brand['Bentley'].color[rCB],
          document.getElementById("title").style.backgroundColor = cars().brand['Bentley'].hexColor[rCB], 
          document.getElementById("container").style.color = cars().brand['Bentley'].hexColor[rCB],
        console.log('Brand: ' + Object.keys(cars().brand)[b] + ' Model: ' + cars().brand['Bentley'].model[bM]+ ' color: ' + cars().brand['Bentley'].color[rCB])
  } if (Object.keys(cars().brand)[b] === 'Toyota') {
        return cars().brand['Toyota'], 
          cars().brand['Toyota'].model[aM], 
          cars().brand['Toyota'].color[rCA],
          document.getElementById("brandCell").innerHTML = "Toyota",
          document.getElementById("modelCell").innerHTML =  cars().brand['Toyota'].model[tM],
          document.getElementById("colorCell").innerHTML =  cars().brand['Toyota'].color[rCT],
          document.getElementById("title").style.backgroundColor = cars().brand['Toyota'].hexColor[rCT], 
          document.getElementById("container").style.color = cars().brand['Toyota'].hexColor[rCT],
        console.log(Object.keys(cars().brand)[b] + ' ' + cars().brand['Toyota'].model[tM] + ' ' +  cars().brand['Toyota'].color[rCT])
  } if (Object.keys(cars().brand)[b] === 'Koenigsegg') {
        return cars().brand['Koenigsegg'], 
          cars().brand['Koenigsegg'].model[bM], 
          cars().brand['Koenigsegg'].color[rCB],
          document.getElementById("brandCell").innerHTML = "Koenigsegg",
          document.getElementById("modelCell").innerHTML =  cars().brand['Koenigsegg'].model[kM],
          document.getElementById("colorCell").innerHTML =  cars().brand['Koenigsegg'].color[rCK],
          document.getElementById("title").style.backgroundColor = cars().brand['Koenigsegg'].hexColor[rCK], 
          document.getElementById("container").style.color = cars().brand['Koenigsegg'].hexColor[rCK], 
        console.log(Object.keys(cars().brand)[b] + ' ' + cars().brand['Koenigsegg'].model[kM]+ ' ' + cars().brand['Koenigsegg'].color[rCK])
  }
}


console.log('Random Car Generator')
  console.log(randomizer())   






