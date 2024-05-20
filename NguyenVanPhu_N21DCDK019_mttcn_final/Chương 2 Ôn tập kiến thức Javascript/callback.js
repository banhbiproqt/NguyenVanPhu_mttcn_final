const getData = new Promise(( resolve,reject) => {
    setTimeout(() => {
      
      resolve('1 ')
    },1000)
  })
  
  getData.then((res) => {
    console.log(res)
  })