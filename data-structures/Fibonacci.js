/**
 * Created by mshah on 1/8/17.
 */

// Approch 1
//function fib2(n, p0, p1)
//{
//	console.log(p1);
//	return n == 2 ? p1 : fib2(n - 1, p1, p0 + p1);
//}
//console.log(1);
//var ans = fib2(8, 1, 1);
//console.log(ans);

//Approch 2
function fib(num, p, n){
	if(num==10){
		return;
	}else{
		console.log(p+n);
		fib(num+1, n, p+n);
	}
}
console.log(1);
fib(1,0,1);
