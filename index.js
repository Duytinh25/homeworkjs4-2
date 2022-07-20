//bai 1
document.getElementById("nhapNgay").onclick = function() {
    var day = document.getElementById("day").value*1;
    var month = document.getElementById("month").value*1;
    var year = document.getElementById("year").value*1;

   

    switch (month) {
        case 1:
            if(day < 31){
                day = day +1;
            }
            else{
                day = 1
                month = 2
            }
            break;
        case 2:
            if(year % 4 == 0){
                if(day < 29){
                    day = day +1;
                }
                else{
                    day = 1
                    month = 3
                }
            }
            else {
                if(day < 28){
                    day = day +1;
                }
                else{
                    day = 1
                    month = 3
                }
            }
            break;
            case 3:
                if(day < 31){
                    day = day +1;
                }
                else{
                day = 1

                    month = 4;
                }
                break;
                case 4:
            if(day < 30){
                day = day +1;
            }
            else{
                day = 1

                month =5;
            }
            break;
            case 5:
            if(day < 31){
                day = day +1;
            }
            else{
                day = 1

                month  = 6;
            }
            break;
            case 6:
            if(day < 30){
                day = day +1;
            }
            else{
                day = 1

                month = 7;
            }
            break;
            case 7:
            if(day < 31){
                day = day +1;
            }
            else{
                day = 1

                month = 8
            }
            break;
            case 8:
            if(day < 31){
                day = day +1;
            }
            else{
                day = 1

                month = 9
            }
            break;
            case 9:
            if(day < 30){
                day = day +1;
            }
            else{
                day = 1

                month = 10;
            }
            break;
            case 10:
            if(day < 31){
                day += 1;
            }
            else{
                day = 1

                month = 11
            }
            break;
            case 11:
            if(day < 30){
                day = day +1;
            }
            else{
                day = 1

                month = 12;
            }
            break;
            case 12:
            if(day < 31){
                day = day +1;
            }
            else{
                day = 1
                month =1
                year += 1;
                
            }
            break;
        default:
            break;
    }




    

 document.getElementById("hienLen").innerHTML = "ngay hom sau la :  " + day +"-" +month + "-" +year;    

}
document.getElementById("nhapNgayThang").onclick = function() {
    var day = document.getElementById("day").value*1;
    var month = document.getElementById("month").value*1;
    var year = document.getElementById("year").value*1;

    if(day > 1){
        day -= 1;
    }
    else {
        switch (month) {
            case 1:
                day = 31;
                month = 12;
                year -= 1;
                break;
            case 2:
                day = 31;
                month = 1;
                break;
                case 3:
                    if(year %4 == 0){
                        day = 29;
                        month = 2;
                    }
                    else{
                        day =28;
                        month = 2;
                    }
                    case 4:
                day = 31;
                month = 3
                break;
                case 5:
                day = 30;
                month =4;
                break;
                case 6:
                day = 31;
                month = 5
                break;
                case 7:
                day =30;
                month = 6
                break;
                case 8:
               day =31 ;
               month = 7;
                break;
                case 9:
                day = 31;
                month =8;
                break;
                case 10:
                day = 30;
                month = 9;
                break;
                case 11:
                day = 31;
                month = 10
                break;
                day = 30;
                month = 10
                break;
            default:
                break;
        }
    }
 document.getElementById("hienLen").innerHTML = "ngay hom truoc la :  " + day +"-" +month + "-" +year;    

}
//bai2
document.getElementById("Nhap").onclick= function() {
    var month = document.getElementById("Thang").value*1;
    var year = document.getElementById("Nam").value*1;
    var day =0;

    switch (month) {
        case 1:
            day = 31
            break;
        case 2:
            if(year % 4 == 0){
                day = 29
            }
            else {
                day = 28;
            }
            break;
            case 3:
                day =31
                break;
                case 4:
            day = 30;
            break;
            case 5:
            day = 31;
            break;
            case 6:
            day = 30
            break;
            case 7:
            day = 31;
            break;
            case 8:
            day = 31;
            break;
            case 9:
            day =30;
            break;
            case 10:
            day =31;
            break;
            case 11:
            day = 30;
            break;
            case 12:
            day = 31;
            break;
        default:
            break;
    }
document.getElementById("ok").innerHTML = "co " + day + " ngay trong thang nay";
}
//bai 3
document.getElementById("input").onclick = function() {
    var so = document.getElementById("3so").value;

    var hangTram = Math.floor(so / 100);
    var hangChuc =Math.floor(so % 100 / 10); 
    var hangDv = so % 10;


    switch (hangDv) {
        case 1:
            hangDv = "mot"
            break;
        case 2:
            hangDv = "hai"
            break;
        case 3:
            hangDv = "ba"
            break;
        case 4:
            hangDv = "bon"
            break;
        case 5:
            hangDv = "nam"
            break;
        case 6:
            hangDv = "sau"
            break;
        case 7:
            hangDv = "bay"
            break;
        case 8:
            hangDv = "tam"
            break;
        case 9:
            hangDv = "chin"
            break;
        default:
            break;
    }
    switch (hangChuc) {
        case 0:
            hangChuc = "linh"
        case 1:
            hangChuc = " muoi"
            break;
        case 2:
            hangChuc = "hai muoi"
            break;
        case 3:
            hangChuc = "ba muoi"
            break;
        case 4:
            hangChuc = "bon muoi"
            break;
        case 5:
            hangChuc = "nam muoi"
            break;
        case 6:
            hangChuc = "sau muoi"
            break;
        case 7:
            hangChuc = "bay muoi"
            break;
        case 8:
            hangChuc = "tam muoi"
            break;
        case 9:
            hangChuc = "chin muoi"
            break;
    
        default:
            break;
    }
    switch (hangTram) {
        case 1:
            hangTram = "mot tram"
            break;
        case 2:
            hangTram = "hai tram"
            break;
        case 3:
            hangTram = "ba tram"
            break;
        case 4:
            hangTram = "bon tram"
            break;
        case 5:
            hangTram = "nam tram"
            break;
        case 6:
            hangTram = "sau tram"
            break;
        case 7:
            hangTram = "bay tram"
            break;
        case 8:
            hangTram = "tam tram"
            break;
        case 9:
            hangTram = "chin tram"
            break;
    
        default:
            break;
    }
document.getElementById("inRa").innerHTML = "cach doc la: "+ hangTram +" "+ hangChuc + " "+ hangDv;
}
//bai 4
document.getElementById("OK").onclick = function() {
    
    var hs1 = document.getElementById("hs1").value*1;
    var hs2 = document.getElementById("hs2").value*1;
    var hs3 = document.getElementById("hs3").value*1;

    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;
    var name3 = document.getElementById("name3").value;
    var toadoTruong = document.getElementById("toadoTruong").value*1;
console.log(toadoTruong);
    
    var kcHs1 = toadoTruong - hs1;
    var kcHs2 = toadoTruong - hs2;
    var kcHs3 = toadoTruong - hs3;
console.log(kcHs1)
    var hsxanhat ;

    if(kcHs1 < 0){
        kcHs1 = kcHs1 * (-1);
    }
    
    if(kcHs2 < 0 ){
        kcHs2 = kcHs2 * (-1);

    }
    
    if(kcHs3 < 0){
        kcHs3 = kcHs3 * (-1);

    }
    

    if(kcHs1 < kcHs2 && kcHs1 < kcHs3){
        hsxanhat = name1;
    }
    else if(kcHs2 < kcHs3){
        hsxanhat =name2;
    }
    else {
        hsxanhat = name3;
    }

    document.getElementById("board").innerHTML = "hoc sinh xa nha truong  la: "+ hsxanhat


}