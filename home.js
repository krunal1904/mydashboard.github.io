let toggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation');
let main = document.querySelector('.main');
let list = document.querySelectorAll('.navigation li');
var usercount = document.getElementById('usercount')

function activeLink(){
    list.forEach((item)=>
    item.classList.remove('hovered'));
    this.classList.add('hovered');
}
list.forEach((item)=>
item.addEventListener('mouseover',activeLink))

toggle.onclick = function() {
    navigation.classList.toggle('active')
    main.classList.toggle('active')
}

function get(){
    var data = JSON.parse(localStorage.getItem('users'));
    console.log(data)
    console.log(data.length)
   usercount.innerHTML = data.length;
}