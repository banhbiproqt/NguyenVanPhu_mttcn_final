//type
//string
let car = "Toyota"
let bike : string
bike= "Winner"
//number
let num : number =10
//boolean
let isLoading:boolean=false

//undefine
//let body = undefined

//null
let footer: null

// any            kiểu any có thể gán các kiểu dữ liệu khác nhau
let person:any
person=10
person='something'



/**object */

 let house:{
    address:string
    color?:string
} ={
 address:''}
 house.address='Da nang'

 
 /** array */
let product: any[] = []
product.push(1)

//string
let names = ['Dirak','Darcy']
let addresses: string[]=[]
addresses.push('Da Nang')

//number[]
let numbers: number[]=[]
numbers=[1,2,3]

//object array
let people: {
    name: string
    age: number
}[] = [];
people.push({
    name:'Slimz',
    age:29,
})


/**Function
 */
const sum=(num1:number,num2:number)=>{ return(num1+num2)}

console.log(sum(3,5))

const sub: (num1:number,num2:number) => number=((num1:number,num2:number) => {return num1-num2})

const handle = (): void => {  // có thể bỏ void
    console.log(123);
}
handle()// gọi ra 123

/**Union */   //kết hợp các kiểu dữ liệu khác nhau
let price: string | number
price=10;
price='abc'

let body:{name:string|number} | {firstname: string} = {name : 'Phu

/** Enum */ 
enum Sizes{
    S='S',
    M='M',
    L='L',
    XL='XL'
}
let size = Sizes.S

/** Interface */ 
// interface State{
//     name:string,
//     isLoad:boolean
// }
// let state: State= {
//     name:' Dirak',
//     isLoad: false
// }


/**Type */
type Name={
    name:string
}
type Age={
    age:number

}
type Person = Name|Age

const handleCLick = <Type>(value:Type )=> value
handleCLick<number>(3)


/**Class */
class Person1 {
    private name:string  //  khai báo private chỉ được dùng trong class
    age:number
    readonly money:number = 40

    constructor(name:string,age:number){
        this.name=name
        this.age=age
    }
    handle(){
        let value=this.money
    }
}
const alex= new Person1('Alex',27)
alex.money

