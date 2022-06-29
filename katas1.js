function oneThroughTwenty(n) {
  let meuRetorno = [];
    for (let i = 1; i <= n; i++) {
        meuRetorno.push(i)
    }
  return meuRetorno
}
console.log(oneThroughTwenty(20))


function evensToTwenty(n) {
  let meuRetorno = [];
    for (let i = 1; i <= n; i++) {
      if (i % 2 == 0) {
        meuRetorno.push(i)
  }
}
  return meuRetorno
}
console.log(evensToTwenty(20))


function oddsToTwenty(n) {
  let meuRetorno = [];
    for (let i = 1; i <= n; i++) {
      if (i % 2 != 0) {
        meuRetorno.push(i)
  }
}
return meuRetorno
}
console.log(oddsToTwenty(20))


function multiplesOfFive(n) {
  let meuRetorno = [];
    for (let i = 1; i <= n; i++) {
        if (i % 5 == 0) {
          meuRetorno.push(i)
        }
    }
return meuRetorno
}
console.log(multiplesOfFive(100))


function squareNumbers(n) {
  let meuRetorno = [];
    for (let i = 1; i <= n; i++) {
        if (i**(1/2) % 1 == 0) {
          meuRetorno.push(i)
        }
  }
return meuRetorno   
}
console.log(squareNumbers(100))


function countingBackwards(n) {
  let meuRetorno = [];
  for (let i = 20; i >= n; i--) {
      meuRetorno.push(i)
  }
return meuRetorno
}
console.log(countingBackwards(1))


function evenNumbersBackwards(n) {
  let meuRetorno = [];
    for (let i = 20; i >= n; i--) {
      if (i % 2 == 0) {
        meuRetorno.push(i)
      }
    }
return meuRetorno
}
console.log(evenNumbersBackwards(1))

function oddNumbersBackwards(n) {
  let meuRetorno = [];
  for (let i = 20; i >= n; i--) {
    if (i % 2 != 0) {
      meuRetorno.push(i)
    }
  }
return meuRetorno 
}
console.log(oddNumbersBackwards(1))

function multiplesOfFiveBackwards(n) {
  let meuRetorno = [];
    for (let i = 100; i >= n; i--) {
        if (i % 5 == 0) {
          meuRetorno.push(i)
      }
  }
return meuRetorno
}
console.log(multiplesOfFiveBackwards(1))

function squareNumbersBackwards(n) {
  let meuRetorno = [];
    for (let i = 100; i >= n; i--) {
        if (i**(1/2) % 1 == 0) {
          meuRetorno.push(i)
        }
}
return meuRetorno
}

console.log(squareNumbersBackwards(1))
