// // Tinh tong 2 ky so
// // Input : Dau vao la mot so co 2 chu so; 

// let num = 0;
// num = prompt("So dau vao: ", num);
// num = Number.parseInt(num);
// // Tach so co 2 chu so da nhap

// let int_sohang_DV = num % 10;
// let int_sohang_Chuc = num / 10;
// int_sohang_Chuc = Math.floor(int_sohang_Chuc);
// let sum = int_sohang_Chuc + int_sohang_DV;

// // Xuat kq ra man hinh
// document.write("Tong: ",int_sohang_Chuc)
// document.write("Tong 2 ky so la: " + sum.toLocaleString());
// // alert("Tong 2 ky so la: ", sum);

document.getElementById("cal").onclick = function (evt) {
    evt.preventDefault();
    const getNum = +document.getElementById("getNum").value;
    const display__result = document.getElementById("display__result");

    let sohangDV = getNum % 10;
    let sohangChuc = Math.floor(getNum / 10);
    let tongkiso = sohangDV + sohangChuc;

    display__result.innerHTML = `Tổng kí số là ${tongkiso}`;
    display__result.style.display = "block";
}