// while (true) {
//     var n = prompt("1. rut tien 2. nap tien 3. chuyen khoan 4. kiem tra tai khoan 5. thoat");
//     switch (n) {
//       case "1":
//         alert("ban da Rut tien");
//         break;
//       case "2":
//         alert("ban da nap tien");
//         break;
//       case "3":
//         alert("ban da chuyen khoan");
//         break;
//       case "4":
//         alert("kiem tra so du ");
//       case "5":
//         alert("Thoát");
//         break;
//       default:
//         alert("nhap lai");
//     }
//   }

///  do if Bank
// var account = {
//     userName : "hello",
//     passWord : "tu1den9",
//     price : 2000000,
//     name : "Tong Nhat Linh"
// }
// var userName = prompt("1. Nhập tên tài khoản");
// var passWord = prompt("2. Nhập mật khẩu");

  
// if (userName == account.userName && passWord == account.passWord) {

//     do {
//     var n = prompt("1. rut tien 2. nap tien 3. chuyen khoan 4. kiem tra tai khoan 5. thoat");
//     switch (n) {
//       case "1":
//           var tien = prompt(" vui long nhap so tien muon rut !!");
//            if (tien < account.price) {
//                account.price -= tien;
//                alert("ban da rut tien thanh cong");
//            }else {
//             alert(" so du tai khoan ko du ?")
//            }
//         break;
//       case "2":
//         var tien = prompt(" vui long nhap so tien ban muon nap !!");
//         if (tien < account.price) {
//             account.price +=  parseInt(tien);
//             alert("ban da nap tien thanh cong");
//         }else {
//          alert(" so du tai khoan ko du ?")
//         }
//         break;
//       case "3":
//         var tien = prompt(" vui long nhap so tien ban muon chuyen khoan !!");
//         if (tien < account.price) {
//             account.price -= parseInt(tien);
//             alert("ban da chuyen khoan thanh cong " + tien);
//         }
//         break;
//       case "4":
//       alert(" so du hien tai cua ban:" + account.price);
        
//       case "5":
//         alert("Thoát");
//         break;
//       default:
//         alert("nhap lai");
//     }
// } while (n!= 5);
// } else {
//     alert("Sai tên tài khoản hoặc mật khẩu");
// }

// callback

// function luongNhanVien (a) {
//     var x = prompt("nhap so ngay lam viec cua nhan vien");
//     var y = prompt("nhap so gio lam viec cua nhan vien");
//      a(x,y ,3);
// }
// function luongXep (a) {
//     var x = prompt("nhap so ngay lam viec cua sep");
//     var y = prompt("nhap so gio lam viec cua sep ");
//      a(x,y ,5);
// }

// function tinhLuong (x ,y,z) {
//       var luong = (500*parseInt(x) + parseInt(y)*250)*z;
//       alert(luong);
// }

// luongNhanVien(tinhLuong);
// luongXep(tinhLuong);
  
//  var a = function () {
//     alert("hello world");
//  }
//  a();
// Ưu tiên, Function
//  const b = () => { alert("hello world");}
// b();

var a = "Hello,World,hung,nam";  // lenght = 13
//       012345678910 index
// console.log(a.trim().length);
// for (var i = 0; i < a.length; i++) {
//     console.log(a.charAt(i));
// }
//  console.log(a.indexOf("o",5));

// console.log(a.slice(6));

// console.log(a.replace(/o/g,"i"));
 // console.log(a.toLocaleLowerCase());
//  console.log(a.toLocaleUpperCase());
// console.log(a.split(","));
var array = ["name","hung","nam"];
var student = ["thao","hien ho","nam em"];
//              0      1     2  
// console.log(array.toString());

// console.log(array.join("-"));
// console.log(array.pop());
// array.shift();
// array.push("linh");
// array.unshift("linh");
// array.splice(1,2,"linh","son");
// var noi = array.concat(student);
console.log(array.slice(1));

// for (var i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }
