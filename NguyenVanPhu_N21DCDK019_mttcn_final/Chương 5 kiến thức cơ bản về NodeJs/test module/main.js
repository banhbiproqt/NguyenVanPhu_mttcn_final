//console.log('main.js da chay')
const utils = require('./utils'); //hàm require tải modul utils.js 
// hoặc là const{sum, devide} =  require('./utils')  thì gọi hàm chỉ cần sum(1,2) không cần utils.sum(1,2)
const value = utils.sum(1, 2); // gọi hàm sum từ module ultis.js
console.log(value); // xuất giá trị value

const value1= utils.devide(10,3)// gọi hàm devide từ module ultis.js
console.log(value1)//xuất giá trị 


    