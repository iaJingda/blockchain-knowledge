
let load = function() {

 let btn = document.querySelector('.load')

 if(btn) {

 	btn.click()

 } else {

 	clearInterval(timer)

let Btns = document.querySelectorAll('.attention-item-btn')



for(let j = 0; j < Btns.length; j++) {

let classList = Btns[j].classList

if (classList[1] == 'active') {

continue

}

Btns[j].click()

}

 }

}


var timer = setInterval(load, 2000)