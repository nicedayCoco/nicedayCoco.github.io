// let myheadiing = document.querySelector('h1');
// myheadiing.textContent = 'hello world';
// // alert("xxxxx");
// let d = letMeTry(5,6);
// // alert(d);
// document.querySelector('html').onclick = function() {
//     alert('点击了');
// }

// function letMeTry(a,b) {
//     let c = a * b;
//     return c;
// }

//  https://nicedaycoco.github.io
// let img = document.querySelector('img');
// img.onclick = function() {
//     let imgSrc = img.getAttribute('src');
//     if(imgSrc === 'images/1.jpg') {
//         img.setAttribute('src','images/2.jpg');
//     } else {
//         img.setAttribute('src','images/1.jpg');
//     }
// }
// localStorage.clear();

let button = document.querySelector('button');

let h1 = document.querySelector('h1');
if(!localStorage.getItem('name')){
    setUserName();
} else {
    let name = localStorage.getItem('name');
    h1.textContent = "ha ha " + name;
}

button.onclick = function() {
    setUserName();
}



function setUserName() {
    let name = prompt('请输入名字');
    localStorage.setItem('name',name);
    h1.textContent = 'hello ' + name;
}
