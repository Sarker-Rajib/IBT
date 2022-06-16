var counterOne = document.querySelector(".one")
var countertwo = document.querySelector(".two")
var counterthree = document.querySelector(".three")
var counterFour = document.querySelector(".four")

var countOne = 0
var countTwo = 0
var countThree = 0
var countFour = 0

function counterUp(){
    counterOne.innerHTML = countOne
    countOne++
    if(countOne > counterOne.dataset.textone){

        clearInterval(stop)
    }
}
var stop = setInterval(function(){
    counterUp()
},16)

function counterUpTwo(){
    countertwo.innerHTML = countTwo
    countTwo++
    if(countTwo > countertwo.dataset.texttwo){
        clearInterval(thamo)
    }

}
var thamo = setInterval(function(){
    counterUpTwo()
},16)

function counterUpThree(){
    counterthree.innerHTML = countThree
    countThree++
    if(countThree > counterthree.dataset.textthree){
        clearInterval(tham)
    }
}
var tham = setInterval(function(){
    counterUpThree()
},120)


function counterUpFour(){
    counterFour.innerHTML = countFour
    countFour++
    if(countFour > counterFour.dataset.textfour){
        clearInterval(thams)
    }
}

var thams = setInterval(function(){
    counterUpFour()
},100)