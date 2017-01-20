/**
 * Created by mshah on 1/12/17.
 */
function primeFactors(n){
	var factors = [],
		divisor = 2;

	while(n>2){
		if(n % divisor == 0){
			factors.push(divisor);
			n= n/ divisor;
		}
		else{
			divisor++;
		}
	}
	return factors;
}

console.log(primeFactors(68));