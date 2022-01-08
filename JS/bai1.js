// Chương trình tính $ nhân viên với yêu cầu là nhập vào số ngày làm và tính lương nhân viên
//   Lấy Input là số ngày làm
const dayWork = 100000;
let numberOfDay; 
let salary;
numberOfDay = prompt("Nhap vao so ngay ban da lam: ", numberOfDay);

//  Tính $ dựa trên số ngày đã làm
salary = numberOfDay * dayWork;

// xuất kết quả ra màn hình
document.write("Lương của " + numberOfDay + " ngày là: " + salary);