// const hello = () => {
//     return [1, 2].map((item) => item * 2);
// }

// const result = hello();

// console.log(result);



function getName1() {
    console.log(this)
}
const getName2 = () =>{
    console.log(this)
}

const user = {
    name: 'John',
    getName: getName1,
    getName2: getName2
}

const car = {
    name:'BMW',
    getName:getName1,
    getName2: getName2
}

user.getName()
car.getName()
user.getName2()
car.getName2()
//Đối với hàm getName1 là hàm thông thường, this sẽ trỏ đến đối tượng mà hàm được gọi trên đó. 
//Do đó, khi user.getName() và car.getName() được gọi, this trong getName1 sẽ trỏ đến user và car tương ứng

// Đối với hàm getName2, trong trường hợp này là hàm arrow function( hàm mũi tên) 
// this sẽ không được liên kết với bất kỳ đối tượng nào và thay vào đó nó sẽ trỏ đến global this trong javascript là rỗng


