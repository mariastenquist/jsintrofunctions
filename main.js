// var calculateArea = function(width, height){
// 	return width * height
// }

var tripleFive = function(){
	for(var i = 0; i <3; i++){
	console.log('Five')
	}
}
tripleFive()
	// console.log(tripleFive())

var lastLetter = function (octopus) {
     var letterlast = octopus.length
     return octopus[letterlast-1]
}
console.log(lastLetter("hello"))
console.log(lastLetter("island"))

// words = ['hello', 'island', 'porcupine', 'cheese', 'sheep']

// for(var i = 0; i < words.length; i++) {
// 	console.log(lastLetter(words[i]))
// }

var square = function(number){
	if  ( !isNaN( number ) ) {
		return (number*number)
	}
	else
		return "not valid number input"
}
console.log(square(3))
console.log(square(9))

var negate = function(number){
	if  ( !isNaN( number ) )
		return (number*[-1])
}
console.log(negate(5))
console.log(negate(-8))

//toArray

var theArray = []
var toArray = function(one, two, three){
	theArray.push(one, two, three)

}
toArray("one", "two", "three")
console.log(theArray)

console.log("theArray " + theArray)


function startsWithA (onestring){
	if (onestring.charAt(0).toLowerCase() === 'a' ) {
		return (true)
	}
	else 
		return (false)
}
console.log(startsWithA("aardvark"))
console.log(startsWithA("bear"))

function tiny(integer){
	if ( <0 integer <1 ){
		return true }
	}
	
	else if (oneargument.value >== '1'){
		return false
	}
}
console.log(tiny(14))

//getseconds

function getSeconds(singlestring){
	var seconds =  %
}
