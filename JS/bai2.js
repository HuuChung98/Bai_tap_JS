// Tính giá trị trung bình của nhiều số thực cho trước

//  Input: Tổng số cần tính giá trị trung bình
// let n;
// n = prompt("Nhập vào số lượng số bạn muốn tính giá trị trung binh: ", n);
// n = parseInt(n);

// // Sử dụng vòng lặp để lấy từng số 
// let sum = 0;
// let so;
// let average;

// for(let i = 1; i <= n; i++)
//     {   
//         so = prompt("so: ", so);
//         so = parseFloat(so)
//         sum += so;
//     }
// average = sum / n;

// //  Xuất giá trị trung bình ra màn hình
// // document.write("giá trị trung bình của " + n + " số là: " + average);
// // document.write(typeof average);
// document.write("so tinh ra gia tri trung binh la: ", average);

document.getElementById("calculator").onclick = function(evt) {
    evt.preventDefault();
    const getNum = +document.getElementById("getNum").value;

    let num = 0;
    let sumAverage = 0;
    let average = 0;
    for(let i = 0; i < getNum; i++)
    {
        num = +prompt("số: ", num);
        sumAverage += num;
    }
    average = sumAverage / getNum;

    const display__result = document.getElementById("display__result");
    display__result.innerHTML = `KẾT QUẢ TB LÀ:  ${average}`;
    display__result.style.display = "block";
    
}