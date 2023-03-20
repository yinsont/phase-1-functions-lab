// Code your solution in this file!
let original = 42

const distanceFromHqInBlocks = (num) => {
    
    if (num > original){
        return num - original
    } else {
        return original - num
    }
}


const distanceFromHqInFeet = (num) => {
    return distanceFromHqInBlocks(num) * 264
}

const distanceTravelledInFeet = (num1,num2) => {
    if (num1 > num2){
        return (num1 - num2) * 264
    } else {
        return (num2 - num1) * 264
    }
}

const calculatesFarePrice = (start,destination) => {
    let distanceFt = distanceTravelledInFeet(start,destination)
    if (distanceFt > 2500){
        return 'cannot travel that far'
    } else if (distanceFt > 2000 && distanceFt < 2500){
        return 25
    } else if (distanceFt > 400 && distanceFt < 2000){
        return (distanceFt - 400) * 0.02
    } else if (distanceFt < 400){
        return 0
    }
}