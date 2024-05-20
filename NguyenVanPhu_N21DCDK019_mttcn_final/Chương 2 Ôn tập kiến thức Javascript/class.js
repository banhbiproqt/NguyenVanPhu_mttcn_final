//class không phải là object
// class là template để tạo object

class Car{
    constructor(name, color){ // constructor tạo thuộc tính name vs color
        this.name = name // gán thuộc tính name là tham số name được truyền vào
        this.color = color// gán thuộc tính color là tham số color được truyền vào
    }
    getName = () =>{
        return this.name
    }

    getColor = () => {
        return this.color
    }
}

class SuperCar extends Car { // class SuperCar kế thừa đặc tính của class Car
    constructor(name, color, signature){// tạo thuộc tính của Super
    super(name,color) // hàm super kế thừa đặc tính name và color, hàm super phải đặt ngay dưới constructor
    this.signature=signature}
}

const bmw = new Car('BMW', 'Black')
const ferrari = new SuperCar('Ferrari','Red','VANPHUSignature')
console.log(bmw)
console.log(ferrari)