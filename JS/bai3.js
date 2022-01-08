// Quy doi USD sang VND
const valueChange = 23500;
// Input: Nguoi dung nhap vao so tien USD 
let money_USD;
money_USD = prompt("Nhap vao so tien USD can doi: ", money_USD);

// Quy doi sang VND

let money_VND = money_USD * valueChange;

// Xuat ra ket qua
document.write("So tien " + money_USD + " USD doi sand VND la: " + money_VND + "VND");

