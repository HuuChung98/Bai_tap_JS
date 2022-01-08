// Tinh dien tich, chu vi hinh chu nhat
// Input: Đầu vào là chiều dài và chiều rộng của hình chữ nhật.

let width = 0;
let height = 0;
width = Number(prompt("Nhập vào chiều rộng của hình chữ nhât: ", width));
height = Number(prompt("Nhập vào chiều dài của hình chữ nhật:", height));

// Tính S của hình chữ nhật

let S = width * height;
// Tính P của hình chữ nhật
let P = (width + height) * 2;

// Xuất kết quả ra màn hình
document.write("Diện tích hình chữ nhật là: " + S + "\n");
document.write("Chu vi hình chứ nhật là: " + P);