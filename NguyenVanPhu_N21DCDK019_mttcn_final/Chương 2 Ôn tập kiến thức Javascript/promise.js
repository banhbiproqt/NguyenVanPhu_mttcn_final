const promiseFunc = () =>
  new Promise((resolve, reject) => {
    console.log('Executing promise')
    resolve('Success')
  })

promiseFunc().then((result) => {
  console.log('Promise resolved:', result)
})

console.log('Promise created')
