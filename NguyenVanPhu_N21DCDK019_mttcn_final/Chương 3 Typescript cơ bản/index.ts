//generic là một tính năng cho phép bạn viết các hàm, lớp và kiểu dữ liệu 
// mà có thể làm việc với nhiều loại dữ liệu khác nhau mà không cần phải chỉ định trước kiểu dữ liệu cụ thể
//Thông qua generics,  có thể tái sử dụng code và tạo ra các thành phần linh hoạt hơn
//generic
type User = {
    name:string
    age:number
}

const identity = <Type>(value: Type) =>value// hàm identity trả về kiểu dữ liệu của Type

const result= identity<number>(2023) //


const result1 = identity<User>({
    name:'John',
    age:20
  //  address: ' Da Nang'
})

// generic với arrow function
//const identity= <Type>(value:Type) =>Type

//generic với function thường
// function identity<Type>(value:Type){
//   return value;
// }


//const myIdentity: <Input>(value: Input) => Input =  identity

interface Identity<Input> {(value:Input):Input}
const myIdentity: Identity<number>=identity

myIdentity(100)

interface LengthObj{
  length : number
}

const logIdentity = <Type extends LengthObj>(value: Type) =>{
  console.log(value.length)
}

logIdentity({
  length:123
})

const getValue=<Obj,Key extends keyof Obj>(obj:Obj,key:Key)=>{  //extends keyof làm cho Key trở thành index của Obj
  return obj[key]
}

getValue({
  name:'John',
  age:20

},
'name')


//default generic
interface Box<Type=string>{
  value:Type
}

const box:Box={
  value : 'John'
}

const box2: Box<number> = {
  value:123
}