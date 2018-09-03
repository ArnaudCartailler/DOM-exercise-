// Exo 1

// function change_color(){
//
// document.getElementById("color").style.backgroundColor = "red";
//
// }
//
// function change_color2(){
//
// document.getElementById("color").style.backgroundColor = "blue";
//
// }

// Exo 2

// function showAttributs () {
//    var getAt = document.getElementById("google");
//    var googleAt = google.getAttribute("google");
//    var hrefang = google.getAttribute("hrefang");
//    var target = google.getAttribute("target");
//    var href = google.getAttribute("href");
//    document.getElementById("replace").innerHTML = googleAt + " " + hrefang + " " + target + " " + href;
// }

//Exo 3

// document.getElementById("color").onmouseover = function() {myF()};
// document.getElementById("color").onmouseout = function() {myF2()};
//
// function myF(){
//
// document.getElementById("color").style.backgroundColor ="white";
// document.getElementById("color").innerHTML = "bienvenue";
// }
//
// function myF2(){
//   document.getElementById("color").style.backgroundColor ="lightgrey";
//   document.getElementById("color").innerHTML = "survolez-moi";
// }

//Exo 4

// document.body.onload = function() {startTime(), ajoute()}
//
//
//   function startTime() {
//     var today = new Date();
//     var h = today.getHours();
//     var m = today.getMinutes();
//     var s = today.getSeconds();
//     m = checkTime(m);
//     s = checkTime(s);
//     document.getElementById("time").innerHTML =
//     h + ":" + m + ":" + s;
//     var t = setTimeout(startTime, 500);
// }
// function checkTime(i) {
//     if (i < 10) {
//       i = "0" + i
//     };
//     return i;
//   }
//
// //timer
//
//   var id = "";
//   var time = 0;
//   function ajoute() {
//   document.getElementById("time2").innerHTML = time;
//   time ++;
//   id =setTimeout(ajoute,1000);
//   }

//Exo 5

// document.getElementById("button").style.backgroundColor = "white";
// var butt1 = document.getElementById("button").style.backgroundColor = "white";
//
// function myClick(){
//
//     if (butt1 === "white"){
//
//       butt1 = document.getElementById("button").style.backgroundColor = "blue";
//
//     }else if (butt1 === "blue") {
//       butt1 = document.getElementById("button").style.backgroundColor = "black";
//     }
//       else if (butt1 ==="black"){
//         butt1 = document.getElementById("button").style.backgroundColor = "grey";
//       }
//       document.getElementById("button").style.color = "white";
//     }

//Exo 6
//
// var table = document.getElementById("tableau");
//
// function addtr(){
//   var row = table.insertRow(0);
//   var cell1 = row.insertCell(0);
//   var cell2 = row.insertCell(1);
//   cell1.innerHTML = "hello";
//   cell2.innerHTML = "hello";
// }

//Exo 7 ??

var link = document.getElementById("create");

link.createElement()
