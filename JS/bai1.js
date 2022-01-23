// Chương trình tính $ nhân viên với yêu cầu là nhập vào số ngày làm và tính lương nhân viên
//   Lấy Input là số ngày làm
// const dayWork = 100000;
// let numberOfDay; 
// let salary;
// numberOfDay = prompt("Nhap vao so ngay ban da lam: ", numberOfDay);

// //  Tính $ dựa trên số ngày đã làm
// salary = numberOfDay * dayWork;

// // xuất kết quả ra màn hình
// document.write("Lương của " + numberOfDay + " ngày là: " + salary);

function cal(numWorkEl, dayWork){
    return numWorkEl * dayWork
}
document.getElementById("calSalary").onclick = function() {
    const numWorkEl = +document.getElementById("numWork").value;
    const dayWork = 100000;
    const salary = cal(numWorkEl, dayWork);;
    const display__salary = document.getElementById("display__salary");

    display__salary.innerHTML = `Lương của nhân viên là ${salary} VND`;
    display__salary.style.display = "block";    

}