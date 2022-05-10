function isPrimeNumber(number) {
  for (let i = 2; i*i <= number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number === 1 ? false : true;
}

function message(elem, isPrime) {
  if (isPrime) {
    return elem.toString() + ' is prime number';
  } else {
    return elem.toString() + ' is not prime number';
  }
}

function validation(elem) {
  if (Number.isInteger(elem)) {
    return true;
  } else {
    return false;
  }
}

function definePrime(elem) {
  if (Array.isArray(elem)) {
    for (let i = 0; i < elem.length; i++) {
      if (validation(elem[i])) {
        console.log(message(elem[i], isPrimeNumber(elem[i])));
      } else {
        console.log('Element must be integer')
      }
    }
  } else {
    if (validation(elem)) {
      console.log(message(elem, isPrimeNumber(elem)));
    } else {
      console.log('Element must be integer')
    }
  }
}