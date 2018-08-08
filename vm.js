window.onload = function() {
	var d = new Date()
	console.log (d)
	document.getElementById("hoje").innerHTML = d.toLocaleDateString();

	var primavera= new Date('2018-09-22');
	var verao= new Date('2018-12-22');
	var outono= new Date('2018-03-22');
	var inverno= new Date('2018-06-22');
	
	console.log("primavera")
	console.log(primavera)
	console.log(primavera < d < verao)

	console.log("verao")
	console.log(verao)
	console.log(verao < d < outono)

	console.log("outono")
	console.log(outono)
	console.log(outono < d < inverno)

	console.log("inverno")
	console.log(inverno)
	console.log(inverno < d < primavera)

};