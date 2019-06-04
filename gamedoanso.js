function show() {
    let soCuaMay , soNguoiChoiDoan;
    let dem = 0;
    let ketQua;
    soCuaMay = Math.floor(Math.random() * 100) + 1;
    while (true) {
        soNguoiChoiDoan = parseInt(prompt("Mời bạn đoán số trong [1-100]"));
        dem++;
        alert("Bạn đã đoán lần thứ " + dem);
        if(soNguoiChoiDoan === soCuaMay){
            alert("Chúc mừng bạn đã đoán đúng !");
            break;
        }else{
            if(soNguoiChoiDoan < soCuaMay){
                alert("Số bạn đoán nhỏ hơn số của máy!");
            }
            else{
                alert("Số bạn đoán lớn hơn số của máy!");
            }
        }

        if(dem === 3){
            alert("Bạn đã hết lượt đoán");
            alert("Số của máy là : " + soCuaMay);
            ketQua = prompt("Bạn có muốn chơi lại không ? (yes/no): ");
            if(ketQua === 'no'){
                alert("Tạm biệt và hẹn gặp lại!");
                break;
            }
            dem = 0;
        }
    }
}



