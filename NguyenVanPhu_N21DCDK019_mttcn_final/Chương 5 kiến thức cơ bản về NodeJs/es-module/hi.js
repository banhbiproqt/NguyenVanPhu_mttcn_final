import logName, { sum, devide } from './helper.js'; // Import hàm logName dưới dạng default export và hàm sum, devide dưới dạng named export từ file './helper.js'

logName('NodeJsLaGi') // Gọi hàm logName với tham số là 'NodeJsLaGi', log ra giá trị 'NodeJsLaGi' ra console
console.log(sum(1,2)) // Gọi hàm sum với tham số là 1 và 2, log ra kết quả tổng của hai số đó ra console
console.log(devide(10,3)) // Gọi hàm devide với tham số là 10 và 3, log ra kết quả của phép chia hai số đó ra console
