// Đây là module có sẵn  dùng để tạo sever Nodejs
const http = require ('http')
console.log(http)

const PORT = 4000  // kết nối máy chủ với cổng 4000
const sever = http.createServer((req,res) =>{
    res.setHeader('Content-Type','application/json')
    res.end('{"message" : "Hello Superman"}')//kết thúc quá trình xử lý yêu cầu và gửi chuỗi 'Hello World' về phản hồi (response) của yêu cầu.
})
sever.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);  // in ra Sever đang chạy trên PORT đã chọn

})
