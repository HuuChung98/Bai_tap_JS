// // Quy doi USD sang VND
// const valueChange = 23500;
// // Input: Nguoi dung nhap vao so tien USD 
// let money_USD;
// money_USD = prompt("Nhap vao so tien USD can doi: ", money_USD);

// // Quy doi sang VND

// let money_VND = money_USD * valueChange;

// // Xuat ra ket qua trên màn hình
// document.write("So tien " + money_USD + " USD doi sand VND la: " + money_VND + "VND");

function exchangeMoney(moneyEl, valueEl, VND)
{   
    if(valueEl === "USD")
    {
        return `${moneyEl * VND} ${vndEl}`;
    }
    if(valueEl === "VND")
    {
        return `${moneyEl / VND} ${usdEl}`;
    }
}
const VND = 23500;
const usdEl = document.getElementById("USD").value;
const vndEl = document.getElementById("VND").value;
document.getElementById("exchange").onclick = function(evt)
{
    const moneyEl = +document.getElementById("money").value;
    const valueEl = document.getElementById("value").value;
    const display__result = document.getElementById("display__result");

       
    // let resultEx = 0;
    let resultEx = exchangeMoney(moneyEl, valueEl, VND).toLocaleString('en-US');
    
    console.log(resultEx);
    display__result.innerHTML = `${resultEx}`;
    display__result.style.display = "block";

}