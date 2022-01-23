// // Tinh dien tich, chu vi hinh chu nhat
// // Input: Đầu vào là chiều dài và chiều rộng của hình chữ nhật.

// let width = 0;
// let height = 0;
// width = Number(prompt("Nhập vào chiều rộng của hình chữ nhât: ", width));
// height = Number(prompt("Nhập vào chiều dài của hình chữ nhật:", height));

// // Tính S của hình chữ nhật
// let S = width * height;
// // Tính P của hình chữ nhật
// let P = (width + height) * 2;

// // Xuất kết quả ra màn hình
// document.write("Diện tích hình chữ nhật là: " + S + "\n");
// document.write("Chu vi hình chứ nhật là: " + P);
let S = 0;
let P = 0;
function calculator(widthEl, heightEl) {
    S = widthEl * heightEl;
    P = (widthEl + heightEl) * 2;
}
document.getElementById("getData").onsubmit = function (evt) {
    evt.preventDefault();
    const widthEl = +evt.target.elements.width.value;
    const heightEl = +evt.target.elements.height.value;
    const display__result = document.getElementById("display__result");


    if(widthEl > 0 && heightEl > 0 && heightEl >= widthEl)
    {
        let message = calculator(widthEl, heightEl);
        console.log("nhap saiiiiiii");
        display__result.innerHTML = `Hình chữ nhật có Diện tích ${S} và chu vi ${P}`
    }
    else
    {
        display__result.innerHTML = `Nhập sai`;
    }
    display__result.style.display = "block";
}