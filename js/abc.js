var a = 1,
	b = 1,
	c = 1,
	max = 1000;
var i = 0;

(function() {
	// for (; a < max; a++) {
	// 	b = a;
	// 	for (; b < max; b++) {
	// 		i++;
	// 		c = 1000 - a - b;
	// 		if (a * a + b * b == c * c) {
	// 			console.log(a * b * c);
	// 		}
	// 	}
	// }

	// for (; c < 1000; c++) {
	// 	a=1;
	// 	for (; a < c;a++) {
	// 		i++;
	// 		b = 1000 - a - c;
	// 		if(a*a+b*b==c*c){
	// 			console.log('total:'+a*b*c);
	// 			return;
	// 		}
	// 	}
	// }


	// c<500 a,b<c<500 a+b>500

})();

console.log('i = ' + i);

var a = -100;
console.log(+Math.abs(a));