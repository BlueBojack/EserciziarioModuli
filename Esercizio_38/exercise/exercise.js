const isLogged = true;

const logCheck = (isLogged) => {
  return new Promise((resolve, reject) => {
    if (isLogged) {
      const randomNum = Math.random()
      resolve(randomNum)
    } else {
      reject(new Error("You are not logged in!"))
    }
  })
}

const getUserInfo = (inputNumber) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (inputNumber > 0.5) {
        resolve({ name: "John", age: 24 })
      } else {
        reject(new Error('Num is smaller than 0.5'))
      }
    })
  })
}

logCheck(isLogged)
  .then((randomNum) => getUserInfo(randomNum))
  .then((user) => console.log(user))
  .catch((err) => console.error(err))